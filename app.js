
const apiKey = " http://www.omdbapi.com/?i=tt3896198&apikey=bb5be380"; 
const inputElement = document.querySelector("#movie-title");
const resultsElement = document.querySelector("#results");


function searchMovie() {
    const title = inputElement.value;
    const url = `${apiKey}&t=${title}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => { 
      if (data.Response === "False") {
        resultsElement.innerHTML = `<p>סרט לא נמצא</p>`;
      } else {
        
        const html = `
          <img src="${data.Poster}" alt="${data.Title}" />
          <h2>${data.Title}</h2>
          <p>Genre: ${data.Genre}</p>
          <p>Year: ${data.Year}</p>
          <p>Plot: ${data.Plot}</p>
          <p>Director: ${data.Director}</p>
          <p>Actors: ${data.Actors}</p>
        `;
        resultsElement.innerHTML = html;
      }
    });
}


inputElement.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const title = event.target.value;
    resultsElement.innerHTML = ""; 
    searchMovie(title);
  }
});
