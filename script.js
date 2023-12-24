const url = 'https://imdb-search2.p.rapidapi.com/%7BmovieName%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7773722499msh404627f43301981p10a33djsn3b076d3a7747',
		'X-RapidAPI-Host': 'imdb-search2.p.rapidapi.com'
	}
};



const movietitle = document.querySelectorAll('.movie-title');
const movieContainer = document.getElementById('movie-container');
const btn = document.querySelector('.btn')
let str = " ";



const getMovies = async() =>{
  try {
    const response = await fetch(url, options);
    const result = await response.json();
     const {description} = result
    //  console.log(description);

     for(data of description ){
      console.log(data);
      str += ` 
      <div class="card" style="width: 18rem;">
      <img src='${data["#IMG_POSTER"]}' class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data["#TITLE"]}</h5>
        <p class="card-text">Actors : ${data["#ACTORS"]}</p>
        <a href='${data["#IMDB_URL"]}' target="_blank"  class="btn btn-primary">Play</a>
      </div>
      `

     }
     movieContainer.innerHTML = str;
     
    } catch (error) {
        console.error(error);
    }
}
getMovies()


