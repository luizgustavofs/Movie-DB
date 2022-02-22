import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWZkNTFjZDNhNWIyNmJjYTkyOWI5ZDkxMjYzOWI1ZCIsInN1YiI6IjYxOTcxMTAxYWY1OGNiMDA0NDQzOTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BYw_ooJsOy60WH4mKiHzSmZnRwoORbGAftMcNX1jTFk'}
})



export default api;