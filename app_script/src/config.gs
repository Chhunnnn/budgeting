// For recalculating the whole transaction
const RECALCULATE = PropertiesService.getScriptProperties().getProperty('RECALCULATE')

// Notion
const NOTION_BASE_URL = PropertiesService.getScriptProperties().getProperty('NOTION_BASE_URL')
const NOTION_DATBASE_ID = PropertiesService.getScriptProperties().getProperty('NOTION_DATBASE_ID')
const NOTION_API_KEY = PropertiesService.getScriptProperties().getProperty('NOTION_API_KEY')

// Workshop Spreadsheet
const WORKING_SHEET_NAME = 'BUDGET SHEET'

// Budget Spreadsheet
const TRANSACTION_SHEET_NAME = 'TRANSACTION'

// TRANSACTION SHEET COLUMN INDEX MAPPING
const TRANSACTION_SHEET_COLUMN_INDEX_MAPPING = {
  'expense': 1,
  'category': 2,
  'amount': 3,
  'created_at': 4,
}

// TRANSACTION SHEET COLUMN INDEX MAPPING
const TRANSACTION_SHEET_VALUE_INDEX_MAPPING = {
  'expense': 0,
  'category': 1,
  'amount': 2,
  'created_at': 3,
}

// BUDGET SHEET COLUMN INDEX MAPPING
const BUDGET_SHEET_COLUMN_INDEX_MAPPING = {
  'Food': 4,
  'Transportation': 6,
  'Personal Care': 8,
  'Recreation': 10,
  'Other': 12
}

// WORKING SHEET COLUMN INDEX MAPPING
const WORKING_SHEET_COLUMN_INDEX_MAPPING = {
  'year': 0,
  'spreadsheet_id': 1,
}