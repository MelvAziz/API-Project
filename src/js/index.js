const DOMSelectors = {
  grid: document.querySelector(".comic-grid"),
};
const key = `bf4202f8db0e27501960cf60881777d4`;


const init = async function () {
  try {
    const character = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${key}`;

    const response = await fetch(character);
    const data = await response.json();
    data.results.forEach((character) => {
      let genreArr = [];
      const addGenre = function () {
        genres.forEach((element) => {
          if (movie.genre_ids.includes(element.id)) {
            genreArr.push(element.name);
            return genreArr;
          }
        });
      };
      addGenre();
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${movie.original_title}</h3>
        <div class="score-box">
          <p class="user-score">Community Score</p>
          <p class="user-score">${movie.vote_average}</p>
        </div>

        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">${movie.release_date}</p>
        </div>

        <div class="movie-genres">
          <div>${genreArr}</div>
        </div>
      </div>
    </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
init();
