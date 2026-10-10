import { google } from "googleapis";

const QUOTE_SHEET_NAME = "طلبات عرض السعر";
const QUOTE_HEADERS = [
  "تاريخ الطلب",
  "الاسم",
  "رقم الجوال",
  "نوع المشروع",
  "الكمية التقريبية",
  "الحي",
  "تفاصيل إضافية",
  "صفحة المصدر",
  "الحالة",
];

const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

type ServiceAccountCredentials = {
  client_email?: unknown;
  private_key?: unknown;
};

export type QuoteRequest = {
  submittedAt: string;
  name: string;
  phone: string;
  projectType: string;
  quantity: string;
  district: string;
  details?: string;
  sourcePage: string;
};

export class GoogleSheetsConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GoogleSheetsConfigurationError";
  }
}

function quoteRange(range: string) {
  return `'${QUOTE_SHEET_NAME.replace(/'/g, "''")}'!${range}`;
}

function getGoogleSheetsService() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const rawCredentials = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON;

  if (!spreadsheetId || !rawCredentials) {
    throw new GoogleSheetsConfigurationError("Google Sheets API credentials are not configured.");
  }

  let credentials: ServiceAccountCredentials;

  try {
    credentials = JSON.parse(rawCredentials) as ServiceAccountCredentials;
  } catch {
    throw new GoogleSheetsConfigurationError("Google Sheets service account JSON is invalid.");
  }

  if (typeof credentials.client_email !== "string" || typeof credentials.private_key !== "string") {
    throw new GoogleSheetsConfigurationError("Google Sheets service account credentials are incomplete.");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: [GOOGLE_SHEETS_SCOPE],
  });

  return {
    spreadsheetId,
    sheets: google.sheets({ version: "v4", auth }),
  };
}

async function getOrCreateQuoteSheet() {
  const { sheets, spreadsheetId } = getGoogleSheetsService();
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties(sheetId,title)",
  });

  const existingSheet = spreadsheet.data.sheets?.find(
    (sheet) => sheet.properties?.title === QUOTE_SHEET_NAME
  )?.properties;

  if (typeof existingSheet?.sheetId === "number") {
    return { sheets, spreadsheetId, sheetId: existingSheet.sheetId };
  }

  const createdSheet = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: QUOTE_SHEET_NAME,
              rightToLeft: true,
              gridProperties: { frozenRowCount: 1 },
            },
          },
        },
      ],
    },
  });

  const sheetId = createdSheet.data.replies?.[0]?.addSheet?.properties?.sheetId;

  if (typeof sheetId !== "number") {
    throw new Error("Google Sheets did not return the new quote sheet ID.");
  }

  return { sheets, spreadsheetId, sheetId };
}

async function ensureQuoteSheetHeaders() {
  const { sheets, spreadsheetId, sheetId } = await getOrCreateQuoteSheet();
  const existingHeaders = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: quoteRange("A1:I1"),
  });

  if (existingHeaders.data.values?.[0]?.some(Boolean)) {
    return { sheets, spreadsheetId };
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: quoteRange("A1:I1"),
    valueInputOption: "RAW",
    requestBody: { values: [QUOTE_HEADERS] },
  });

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          updateSheetProperties: {
            properties: {
              sheetId,
              rightToLeft: true,
              gridProperties: { frozenRowCount: 1 },
            },
            fields: "rightToLeft,gridProperties.frozenRowCount",
          },
        },
        {
          repeatCell: {
            range: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: 1,
              startColumnIndex: 0,
              endColumnIndex: QUOTE_HEADERS.length,
            },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.29, green: 0.208, blue: 0.165 },
                horizontalAlignment: "CENTER",
                textFormat: {
                  bold: true,
                  foregroundColor: { red: 1, green: 1, blue: 1 },
                },
              },
            },
            fields: "userEnteredFormat(backgroundColor,horizontalAlignment,textFormat)",
          },
        },
        {
          autoResizeDimensions: {
            dimensions: {
              sheetId,
              dimension: "COLUMNS",
              startIndex: 0,
              endIndex: QUOTE_HEADERS.length,
            },
          },
        },
        {
          addConditionalFormatRule: {
            index: 0,
            rule: {
              ranges: [
                {
                  sheetId,
                  startRowIndex: 1,
                  startColumnIndex: QUOTE_HEADERS.length - 1,
                  endColumnIndex: QUOTE_HEADERS.length,
                },
              ],
              booleanRule: {
                condition: {
                  type: "TEXT_EQ",
                  values: [{ userEnteredValue: "جديد" }],
                },
                format: {
                  backgroundColor: { red: 0.957, green: 0.835, blue: 0.553 },
                  textFormat: { bold: true, foregroundColor: { red: 0.29, green: 0.208, blue: 0.165 } },
                },
              },
            },
          },
        },
      ],
    },
  });

  return { sheets, spreadsheetId };
}

export async function appendQuoteRequest(quote: QuoteRequest) {
  const { sheets, spreadsheetId } = await ensureQuoteSheetHeaders();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: quoteRange("A:I"),
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[
        quote.submittedAt,
        quote.name,
        quote.phone,
        quote.projectType,
        quote.quantity,
        quote.district,
        quote.details || "",
        quote.sourcePage,
        "جديد",
      ]],
    },
  });
}
