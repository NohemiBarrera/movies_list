import React, {Component} from 'react';
import MoviesAPI from './common/API';
import {Link} from 'react-router-dom';

class MovieDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
						id: this.props.match.params.id,
						title: "",
						poster_path: "",
						release_date: "",
						runtime: "",
						genres: [],
						overview: "",
						vote_average: ""
        }
    }

    componentDidMount(){
				const movieID = this.state.id;
				MoviesAPI.getMovieDetail(movieID).then(res =>
					this.setState({
						title: res.data.title,
						poster_path: res.data.poster_path,
						release_date: res.data.release_date,
						runtime: res.data.runtime,
						genres: res.data.genres,
						overview: res.data.overview,
						vote_average: res.data.vote_average
					})
				)
				
    }

    render(){
			const {
				title,
				poster_path,
				release_date,
				runtime,
				genres,
				overview,
				vote_average
			} = this.state;

        return(
					<div className="container-fluid">
						<Link to="/">
							<h4 className="text-center">Volver a películas</h4>
						</Link>
						
						<div className="d-flex justify-content-center align-items-center flex-wrap flex-row">
							<div className="card col-12 col-md-6" style={{width: '18rem', marginBottom: '10px'}}>
									<div style={{textAlign:'center', display:'block'}}>
										<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top img-fluid" alt={poster_path}/>
									</div>
									<div className="card-body">
										<h3 className="card-title">{title}</h3>
										<p><b>Duración:</b></p>
										<p>{runtime} min</p>
										<p><b>Fecha de estreno:</b></p>
										<p>{release_date}</p>
										<p><b>Calificación</b>:</p>
										<p>{vote_average}</p>
										<p><b>Géneros:</b></p>
										<p><b>Descripción:</b></p>
										<p>{overview}</p>									
									</div>
							</div>
						</div>
					</div>
        )
    }
}

export default MovieDetail;