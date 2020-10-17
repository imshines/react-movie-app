import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from '../components/Styled';

export default function MoviesTv() {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const moviesUrl = `${baseUrl}movie/top_rated?api_key=${apiKey}`;

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        fetch(moviesUrl, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }, [moviesUrl])

    return (
        <div className="px-20">
            <h3 className="text-center">Movies</h3>
            <div className="wrapper">
                {
                    movies.map(movie => (
                        <Card className="card" key={movie.id} style={{ overflow: 'hidden' }}>
                            <h6 className="card-title">{movie.title}</h6>
                            <img src={imgUrl + movie.poster_path} alt="placeholder" className="card-img" />
                            <h6 className="card-rating">{movie.vote_average}</h6>
                            <NavLink to={`/details/${movie.id}`} >
                                <Button className="card-btn card-btn-details">
                                    View Details
                            </Button>
                            </NavLink>
                            <Button className="card-btn card-btn-list">Add to List</Button>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
