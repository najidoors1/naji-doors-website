const QUOTE_SHEET_NAME = 'طلبات عرض السعر';

function doPost(e) {
  try {
    const properties = PropertiesService.getScriptProperties();
    const spreadsheetId = properties.getProperty('SPREADSHEET_ID');
    const webhookToken = properties.getProperty('WEBHOOK_TOKEN');

    if (!spreadsheetId || !webhookToken) {
      return jsonResponse_({ success: false, error: 'Missing script configuration.' });
    }

    const data = JSON.parse(e.postData.contents || '{}');

    if (!data.token || data.token !== webhookToken) {
      return jsonResponse_({ success: false, error: 'Unauthorized request.' });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(QUOTE_SHEET_NAME) || spreadsheet.insertSheet(QUOTE_SHEET_NAME);
    ensureHeaders_(sheet);
    sheet.setRightToLeft(true);

    const requestRow = [
      data.submittedAt ? new Date(data.submittedAt) : new Date(),
      cleanValue_(data.name),
      cleanValue_(data.phone),
      cleanValue_(data.projectType),
      cleanValue_(data.quantity),
      cleanValue_(data.district),
      cleanValue_(data.details),
      cleanValue_(data.sourcePage),
      cleanValue_(data.status) || 'جديد',
    ];

    sheet.appendRow(requestRow);
    const statusCell = sheet.getRange(sheet.getLastRow(), requestRow.length);
    statusCell.setBackground('#F4D58D').setFontColor('#4A352A').setFontWeight('bold');

    return jsonResponse_({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ success: false, error: 'Unable to save quote request.' });
  }
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) return;

  const headers = [[
    'تاريخ الطلب',
    'الاسم',
    'رقم الجوال',
    'نوع المشروع',
    'الكمية التقريبية',
    'الحي',
    'تفاصيل إضافية',
    'صفحة المصدر',
    'الحالة',
  ]];

  sheet.getRange(1, 1, 1, headers[0].length).setValues(headers);
  sheet.getRange(1, 1, 1, headers[0].length).setFontWeight('bold').setBackground('#4A352A').setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);
  sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm');
  sheet.autoResizeColumns(1, headers[0].length);
}

function cleanValue_(value) {
  return value === undefined || value === null ? '' : String(value).trim();
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
