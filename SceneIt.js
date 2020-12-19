var search = document.getElementById('searchBar');
//<------------------------------------------------------------------------------------------------------------>
search.addEventListener('submit', function(e){
e.preventDefault();
let searchText = document.getElementById('search').value;
getMovie(searchText);

});

//<------------------------------------------------------------------------------------------------------------>
function getMovie(searchText){
fetch('http://www.omdbapi.com/?apikey=1a84594&s='+searchText)
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.Search);
    let movieInfo = data.Search
    
  movieInfo.forEach(function(value){
      
document.getElementById('movies').innerHTML = `<p class="card">${movieInfo}</p>`
 
})


});

}
//<--------------------------------------------------------------------------------------------------------------->