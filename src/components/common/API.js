import axios from 'axios';
let APIKey = "634b49e294bd1ff87914e7b9d014daed";
let config = {'Authorization': "634b49e294bd1ff87914e7b9d014daed"};

const MoviesAPI = {
    getMovies: function(){
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=es-ES&page=1`, {headers: config}).then(res => {
            return res
        }).catch(err => console.log(err))
    },
    getMovieDetail: function(){
        
    }
}

export default MoviesAPI;