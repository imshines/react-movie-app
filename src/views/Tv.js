import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from '../components/Styled';

export default function Tv() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const tvUrl = `${baseUrl}tv/top_rated?api_key=${apiKey}`;

    const [tv, setTv] = React.useState([]);

    React.useEffect(() => {
        fetch(tvUrl, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setTv(data.results));
    }, [tvUrl])

    return (
        <div className="px-20">
            <h3 className="text-center">TV Shows</h3>
            <div className="wrapper">
                {
                    tv.map(item => (
                        <Card className="card" key={item.id} style={{ overflow: 'hidden' }}>
                            <h6 className="card-title">{item.name}</h6>
                            <img src={imgUrl + item.poster_path} alt="placeholder" className="card-img" />
                            <h6 className="card-rating">{item.vote_average}</h6>
                            <NavLink to={`/details/${item.id}`} >
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
