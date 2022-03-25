function fetchTogglSummary(since, until) {
  var toggl_api_token = "0f78f43389c0f8735d90c0fe88121b90";
  var user_agent = "t.stachewicz@gmail.com";
  var workspace_id = 2766173; // Testing
  var base_url = "https://toggl.com/reports/api/v2/summary";
  
  var grouping = "projects"; //default: projects
  var subgrouping = "users"; //default: time_entries
  var rounding = "on"; //default: off
  
  //var url_with_params = `${base_url}?user_agent=${user_agent}&workspace_id=${workspace_id}`;
  var url_with_params = base_url + '?user_agent=' + user_agent +
    '&workspace_id=' + workspace_id + '&since=' + since + '&until=' + until +
    '&subgrouping=' + subgrouping  + '&rounding=' + rounding;
  
  var options = {
    'method' : 'get',
    'contentType': 'application/json',
    'headers': {
      'Authorization': 'Basic MGY3OGY0MzM4OWMwZjg3MzVkOTBjMGZlODgxMjFiOTA6YXBpX3Rva2Vu'
    }
  };
  
  var response = UrlFetchApp.fetch(url_with_params, options);
  var responsejson = response.getContentText();
  var report_data = JSON.parse(responsejson);
  
  //we'll be returning a Nx3 array of threes [client-project, user, hours]
  var arr_of_arrs = [];
    
  report_data["data"].forEach(function(entry) {
    var label = entry["title"]["client"] + " - " + entry["title"]["project"];
    entry["items"].forEach(function(item) {
      var user = item["title"]["user"];
      //time is in miliseconds
      var hours = parseInt(item["time"]) / (1000 * 3600);
      arr_of_arrs.push([label, user, hours]);
    });
  });
  
  arr_of_arrs.sort(function(el) { el[0]; });

  return arr_of_arrs;
}
