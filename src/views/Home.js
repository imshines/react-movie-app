import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Row, Button } from '../components/Styled';

export default function Home() {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const trendingMovies = `${baseUrl}trending/movie/week?api_key=${apiKey}`;
    const trendingTv = `${baseUrl}trending/tv/week?api_key=${apiKey}`;

    const [movies, setMovies] = React.useState([]);
    const [tvs, setTv] = React.useState([]);

    React.useEffect(() => {
        fetch(trendingMovies, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }, [trendingMovies])
    React.useEffect(() => {
        fetch(trendingTv, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setTv(data.results));
    }, [trendingTv])

    const addToList = () => {
        console.log('Henlo')
    }

    return (
        <div className="px-20">
            <h3>Trending Movies</h3>
            <Row>
                {
                    movies.map(movie => (
                        <Card className="card" key={movie.id}>
                            <h6 className="card-title">{movie.title}</h6>
                            <img src={imgUrl + movie.poster_path} alt="placeholder" className="card-img" />
                            <h6 className="card-rating">{movie.vote_average}</h6>
                            <NavLink to={`/details/${movie.id}`} >
                                <Button className="card-btn card-btn-details">
                                    View Details
                            </Button>
                            </NavLink>
                            <Button className="card-btn card-btn-list" onClick={addToList}>Add to List</Button>
                        </Card>
                    ))
                }
            </Row>
            <h3>Trending TV Shows</h3>
            <Row>
                {tvs.map(tv => (
                    <Card className="card" key={tv.id}>
                        <h6 className="card-title">{tv.name}</h6>
                        <img src={imgUrl + tv.poster_path} alt="placeholder" className="card-img" />
                        <h6 className="card-rating">{tv.vote_average}</h6>
                        <NavLink to={`/details/${tv.id}`} >
                            <Button className="card-btn card-btn-details">
                                View Details
                            </Button>
                        </NavLink>
                        <Button className="card-btn card-btn-list">Add to List</Button>
                    </Card>))
                }
            </Row>
        </div>
    )
}
