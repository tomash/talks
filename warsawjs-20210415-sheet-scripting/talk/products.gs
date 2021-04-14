function logShirts() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    Logger.log('Product name: ' + data[i][0]);
    Logger.log('Product number: ' + data[i][1]);
  }
}

function postShirts() {
  var base_url = "http://c13a533b2144.ngrok.io/post";

  // Make a POST request with a JSON payload.
  var sheet = SpreadsheetApp.getActiveSheet();
  var sheetdata = sheet.getDataRange().getValues();
  sheetdata.shift(); // discard header row
  sheetdata = sheetdata.map(function(el) { return {"name": el[0], "sku": el[1]}  })

  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(sheetdata)
  };

  var response = UrlFetchApp.fetch(base_url, options);
  Logger.log('Response: ' + response);
  return true;
}
