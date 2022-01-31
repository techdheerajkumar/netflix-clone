const API_Key = "261e2dc7cdfec6c3294f3d710f103ae5";

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_Key}&with_network=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorroMovies: `discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanticMovies: `discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_Key}&with_genres=99`
}

export default requests;