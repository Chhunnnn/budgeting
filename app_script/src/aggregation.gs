function aggregateByDate(budget_spreadsheet) {
  let transaction_tabsheet = getTabSheet(budget_spreadsheet, TRANSACTION_SHEET_NAME)
  let data = transaction_tabsheet.getDataRange().getValues()

  let headerRowNumber = 0;

  let aggregateData = {}
  data.forEach((record, index) => {
    if (index === headerRowNumber) return

    let createdAtDatetime = record[TRANSACTION_SHEET_VALUE_INDEX_MAPPING['created_at']]
    let createdAtDate = convertISODatetimeToLocalDateWithTime(createdAtDatetime)

    if(!RECALCULATE) {
      let isToday = isDateIsToday(createdAtDate)
      if (isToday !== true) return
    }

    let category = record[TRANSACTION_SHEET_VALUE_INDEX_MAPPING['category']]
    let amount = record[TRANSACTION_SHEET_VALUE_INDEX_MAPPING['amount']]

    if (createdAtDate in aggregateData) {
      let existingAggregateData = aggregateData[createdAtDate] 
      if (category in existingAggregateData) {
        aggregateData[createdAtDate][category] += amount
      } else {
        aggregateData[createdAtDate][category] = amount
      }
    } else {
      aggregateData[createdAtDate] = {
        [category]: amount
      }
    }
  })

  return aggregateData
}
