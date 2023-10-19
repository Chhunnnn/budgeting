function saveToTransaction(budget_spreadsheet, transaction) {
  let transaction_tabsheet = getTabSheet(budget_spreadsheet, TRANSACTION_SHEET_NAME)

  transaction.forEach((record) => {    
    let row = [];
    Object.keys(record).forEach(key => {
      let index = TRANSACTION_SHEET_COLUMN_INDEX_MAPPING[key];
      row[index] = record[key];
    })
    transaction_tabsheet.appendRow(Object.values(row));
  })
}