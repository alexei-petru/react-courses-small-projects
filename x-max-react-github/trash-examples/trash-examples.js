// const movieApiMovies = () => {
//   let loader = `<div class="boxLoading"></div>`;
//   document.getElementById("movieResult").innerHTML = loader;

//   fetch(movieApi_url + "movies/")
//     .then((response) => response.json())
//     .then(function (data) {
//       let result = `<h2> Movies I've watched! </h2>`;
//       data.forEach((movie) => {
//         const { id, name, year, note_imdb, genre, duration } = movie;
//         result += `<div>
//                         <h5> Movie ID: ${id} </h5>
//                         <ul>
//                             <li>Movie name: ${name}</li>
//                             <li>Movie year: ${year}</li>
//                             <li>Movie note on IMDB: ${note_imdb}</li>
//                             <li>Movie Genre: ${genre}</li>
//                             <li>Movie duration: ${duration}</li>
//                         </ul>
//                     </div>`;
//         document.getElementById("movieResult").innerHTML = result;
//       });
//     });
// };
