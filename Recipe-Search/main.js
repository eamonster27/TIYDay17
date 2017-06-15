



function searchRecipe(searchQuery){
  var url = `http://www.weeatt.com/api/v1/recipes?qs=${searchQuery}&auth_token=aDZTf4BdHGA1apkeU0UY`
  fetch(url, {
    headers: {
      'ACCEPT': "application/json",
      'CONTENT-TYPE': "application/json",
      'x-api-key': "72f54c000aa4"
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);

    for(let i = 0; i < json.results.length; ++i){
      const id = json.results[i].id;
      const permalink = json.results[i].permalink;
      const name = json.results[i].name;
      const ingredients = json.results[i].ingredients;
      const instructions = json.results[i].instructions;
      const description = json.results[i].description;
      const images = json.results[i].images;
      const videos = json.results[i].videos;



      const html = `
      <div class="single-recipe">
        <div class="image-container">
          <img src="${images.thumbnail_path}" alt="${name}">
        </div>
        <div class="recipe-title">
          <h3>${name}</h3>
        </div>
      </div>
      `
      document.querySelector(".recipes").insertAdjacentHTML('afterbegin', html);
    }
  })
}


document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  let searchContent = document.querySelector('#search-bar').value;
  searchRecipe(searchContent);
  console.log(searchContent);
  console.log('form submit');
})
