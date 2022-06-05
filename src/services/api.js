import axios from "axios"; // npm install axios

// https://api.themoviedb.org/3/movie/550?api_key=47b3ca00a5798ec5cbc9f8707a4ed20a

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;