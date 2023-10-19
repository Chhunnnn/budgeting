function saveToBudget(budgetSpreadsheet, aggregateData) {
  let rowOffset = 3

  for (const [key, record] of Object.entries(aggregateData)) {
    let localDate = key
    let date = getDateInLocalDate(localDate)
    let month = getMonthInLocalDate(localDate)
    let budgetTabsheet = getTabSheet(budgetSpreadsheet, month)

    for (const [valueKey, value] of Object.entries(record)) {
      if (value === 0) return

      let row = rowOffset + date
      let column = BUDGET_SHEET_COLUMN_INDEX_MAPPING[valueKey]
      budgetTabsheet.getRange(row, column).setValue(value)
    }
  }
}
