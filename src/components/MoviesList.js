import React, {Component} from 'react';
import MoviesAPI from './common/API';
import { Link } from "react-router-dom";

class MoviesList extends Component {
    constructor(props){
        super(props);

        this.state = {
					 movies: [],

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
				const {movies} = this.state;
				const movieCard = movies.map(item => (
						<div className="card col-6 col-md-4" style={{width: '18rem', marginBottom: '10px'}} key={item.id}>
							<Link to={`/detail/${item.id}`}>
								<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.poster_path}/>
								<div className="card-body">
									<h5 className="card-title">{item.title}</h5>
									<p className="card-text">{item.release_date} {item.vote_average}</p>									
								</div>
							</Link>
							
						</div>
				)) 
        return(
            <div className="container-fluid">
							<h1 className="text-center">Películas</h1>
							<div className="d-flex justify-content-center align-items-center flex-wrap flex-row">
								{movieCard}
							</div>
						</div>
        )
    }
}

export default MoviesList;