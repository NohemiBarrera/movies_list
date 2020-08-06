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
						<div className="card col-6 col-md-4 d-flex justify-content-end" style={{width: '18rem', height: '500px', marginBottom: '10px',backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundImage:`url("https://image.tmdb.org/t/p/w500/${item.poster_path}")`}} key={item.id}>
							<Link to={`/detail/${item.id}`}>
								<div className="card-body" style={{backgroundColor: '#000', opacity: 0.8, color: '#fff'}}>
									<h5 className="card-title">{item.title}</h5>
									<div className="d-flex justify-content-between flex-row">
									<p className="card-text">{item.release_date}</p>
									<p><span role="img">&#11088;</span> {item.vote_average}</p>
									</div>
																		
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