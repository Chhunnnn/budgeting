function main() {
  let budgetSpreadsheet = getBudgetSpreadsheet()

  let response = fetchData();
  let transaction = response['transaction']
  let notionIds = response['notion_ids']

  saveToTransaction(budgetSpreadsheet, transaction)
  archiveData(notionIds)

  let aggregateData = aggregateByDate(budgetSpreadsheet);
  saveToBudget(budgetSpreadsheet, aggregateData)
}