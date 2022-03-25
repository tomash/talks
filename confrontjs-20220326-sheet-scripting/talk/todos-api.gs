function fetchTodos() {
  var base_url = "https://6075a7770baf7c0017fa6b0e.mockapi.io/api/v1/todos";

  var response = UrlFetchApp.fetch(base_url);
  var responsejson = response.getContentText();
  var returned_todos = JSON.parse(responsejson);

  // we need to return an array of arrays, e.g. [[1, "2021-04-15", "Hello World"],...]
  return returned_todos.map(function(el) { return [el["id"], el["createdAt"], el["name"]]; })

}
