import axios from 'axios';

const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';
// Запит на отримання популярних фільмів
function fetchMoviesTrend() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  fetch(url).then(r => {
    console.log(r);
  });
}
fetchMoviesTrend();

// import { NewApiService } from './js/newsApiService';

// const newsApiService = new NewApiService();
// const cardList = document.querySelector('.card__list');

// async function searchCard(e) {
//   e.preventDefault();
//   newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();

//   const res = await newsApiService.fetchMoviesTrend();
//   //   const response = await NewApiService(searchName);
//   //   console.log(response);
// }
