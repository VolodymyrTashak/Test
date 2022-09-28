import axios from 'axios';

export async function newsApiService(name) {
  const URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';

  const response = await axios.get(`${URL}?api_key=${KEY}`);
  return response;
}

// Запит на отримання популярних фільмів
// function fetchMoviesTrend() {
//   const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
//   fetch(url).then(r => {
//     console.log(r);
//   });
// }
// fetchMoviesTrend();

// function fetchMoviesTrend() {
//   const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';
//   const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
//   fetch(URL).then(r => {
//     console.log(r);
//   });
// }

// fetchMoviesTrend();

// export class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }
//   async fetchMoviesTrend() {
//     const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';
//     const URL = 'https://api.themoviedb.org/3/trending/movie/day';
//     try {
//       const response = await axios.get(`${URL}?api_key=${KEY}`);
//       this.incrementPage();
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   incrementPage() {
//     this.page += 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
