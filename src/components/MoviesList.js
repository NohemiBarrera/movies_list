import React, {Component} from 'react';
import MoviesAPI from './common/API';

class MoviesList extends Component {
    constructor(props){
        super(props);

        this.state = {
					 movies: [],
					 posters: [],

        }
		}
		
		componentDidMount(){
			MoviesAPI.getMovies().then(res => 
				this.setState({
					movies: res.data.results
				})
			)
		}

    render(){
				const {movies, posters} = this.state;
				console.log(posters);
				const movieCard = movies.map(item => (
						<div className="card col-6 col-md-4" style={{width: '18rem', marginBottom: '10px'}}>
							<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.poster_path}/>
							<div className="card-body">
								<h5 className="card-title">{item.title}</h5>
								<p className="card-text">{item.release_date} {item.vote_average}</p>									
							</div>
						</div>
				)) 
        return(
            <div className="container-fluid">
							<h1 className="text-center">Now playing</h1>
							<div className="d-flex justify-content-center align-items-center flex-wrap flex-row">
								{movieCard}
							</div>
						</div>
        )
    }
}

export default MoviesList;