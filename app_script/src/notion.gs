const fetchDataPayload = {
    "filter": {
      "or": []
    },
    "sorts": [
        {
            "property": "Created At",
            "direction": "ascending"
        }
    ]
}

const archiveDataPayload = {
  "archived": true
}

const propertyAndKeyMapping = {
  'Category': 'category',
  'Expense': 'expense',
  'Amount': 'amount',
  'Created At': 'created_at',
}

function getHeader(apiKey) {
  return {
    "Authorization": `Bearer ${apiKey}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
  }
};

function fetchData() {
  let header = getHeader(NOTION_API_KEY)
  let options = {
    'method' : 'POST',
    'headers' : header,
    'payload': JSON.stringify(fetchDataPayload)
  };

  let url = `${NOTION_BASE_URL}/databases/${NOTION_DATBASE_ID}/query`;
  let response = UrlFetchApp.fetch(url, options);
  response = JSON.parse(response);

  let data = response.results;

  let newData = [];
  let notionRecordIds = []
  data.forEach((record) => {
    let property = record.properties;
    let id = record.id

    let row = {};
    Object.keys(property).forEach(key => {
      let item = property[key];
      let type = item.type;

      let value = '';
      if (type === 'select') {
        value = item.select.name;
      } else if (type === 'number') {
        value = item.number;
      } else if (type === 'created_time') {
        let createdTime = item.created_time;
        value = convertISODatetimeToLocalDatetime(createdTime);
      } else if (type === 'title') {
        value = item.title[0].text.content;
      }

      let commonKey = propertyAndKeyMapping[key];
      row[commonKey] = value;
    });

    newData.push(row)
    notionRecordIds.push(id)
  });

  return {
    'transaction': newData,
    'notion_ids': notionRecordIds
  };
}

function archiveData(pageIds) {
  let header = getHeader(NOTION_API_KEY)
  let options = {
    'method' : 'PATCH',
    'headers' : header,
    'payload': JSON.stringify(archiveDataPayload)
  };

  pageIds.forEach((pageId) => {
    let url = `${NOTION_BASE_URL}/pages/${pageId}`;
    let response = UrlFetchApp.fetch(url, options);
    response = JSON.parse(response);
  })
}