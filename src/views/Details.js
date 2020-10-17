import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from '../components/Styled';
export default function Details(props) {

    const { id } = useParams();

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const detailUrl = `${baseUrl}movie/${id}?api_key=${apiKey}`;

    const [detail, setDetail] = React.useState([{}]);

    React.useEffect(() => {
        fetch(detailUrl, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [detailUrl])

    return (
        <div className="px-20">
            <NavLink to="/">
                <Button>Go Home</Button>
            </NavLink>
            <div className='px-20' style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <img src={imgUrl + detail.poster_path} alt="movie poster" />
                <div>
                    <h3>{detail.title}</h3>
                    <p style={{ lineHeight: 1, fontSize: '1.3rem' }}>{detail.overview}</p>
                    <h3>Rating <span className="text-light">{detail.vote_average}</span> </h3>
                </div>
            </div>
        </div>
    )
}
