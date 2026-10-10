import { google, type sheets_v4 } from "googleapis";

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
const HEADER_BACKGROUND = { red: 0.94, green: 0.82, blue: 0.53 };
const HEADER_FOREGROUND = { red: 0.173, green: 0.141, blue: 0.106 };
const NEW_STATUS_BACKGROUND = { red: 1, green: 0.91, blue: 0.66 };

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
    return { sheets, spreadsheetId, sheetId: existingSheet.sheetId, wasCreated: false };
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

  return { sheets, spreadsheetId, sheetId, wasCreated: true };
}

async function ensureQuoteSheetHeaders() {
  const { sheets, spreadsheetId, sheetId, wasCreated } = await getOrCreateQuoteSheet();
  const existingHeaders = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: quoteRange("A1:I1"),
  });
  const hasHeaders = Boolean(existingHeaders.data.values?.[0]?.some(Boolean));

  if (!hasHeaders) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: quoteRange("A1:I1"),
      valueInputOption: "RAW",
      requestBody: { values: [QUOTE_HEADERS] },
    });
  }

  const requests: sheets_v4.Schema$Request[] = [
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
            backgroundColor: HEADER_BACKGROUND,
            horizontalAlignment: "CENTER",
            textFormat: {
              bold: true,
              foregroundColor: HEADER_FOREGROUND,
            },
          },
        },
        fields: "userEnteredFormat(backgroundColor,horizontalAlignment,textFormat)",
      },
    },
  ];

  if (wasCreated || !hasHeaders) {
    requests.push(
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
                backgroundColor: NEW_STATUS_BACKGROUND,
                textFormat: { bold: true, foregroundColor: HEADER_FOREGROUND },
              },
            },
          },
        },
      }
    );
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests },
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
