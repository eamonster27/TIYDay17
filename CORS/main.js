const url = "https://api.linkedin.com/v1/people/~?format=json";

fetch(url,{
  headers:{
    'contentType': 'application/json',
    'x-api-key': '43523452345'
  }
})
.then( function(r){
  return r.json();
})
.then(function(json){
  console.log(json);
})
