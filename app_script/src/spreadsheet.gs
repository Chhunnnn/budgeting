function getSpreadsheet(spreadsheet_id)  {
  return SpreadsheetApp.openById(spreadsheet_id)
}

function getTabSheet(spreadsheet, tabsheet_name) {
  return spreadsheet.getSheetByName(tabsheet_name);
}

function getBudgetSpreadsheet() {
  let workshopSpreadsheet = SpreadsheetApp.getActive()
  let workshopTabsheet = getTabSheet(workshopSpreadsheet, WORKING_SHEET_NAME)
  let spreadsheets = workshopTabsheet.getDataRange().getValues()

  let latestSpreadsheetInfo = spreadsheets[spreadsheets.length - 1]
  let latestSpreadsheetId = latestSpreadsheetInfo[WORKING_SHEET_COLUMN_INDEX_MAPPING['spreadsheet_id']]
  return getSpreadsheet(latestSpreadsheetId)
}