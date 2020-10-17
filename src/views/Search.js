import React from 'react';
import { Card, Button } from '../components/Styled';

export default function Search() {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';

    const [query, setQuery] = React.useState('');

    const searchUrl = `${baseUrl}search/multi?api_key=${apiKey}&query=${query}&include_adult=true`;

    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        fetch(searchUrl, { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => setResults(data.results));
    }, [searchUrl])

    const inputHandler = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div className="px-20">
            <h3 className="text-center">Search</h3>
            <div className="search-container">
                <form action="">
                    <input type="text" name="search" id="search" placeholder="Enter a Movie / TV name" className="search-input" value={query} onChange={inputHandler} />
                </form>
                <div className="wrapper">
                    {
                        results === undefined ? '' :
                            results.map(result => (
                                <Card className="card" key={result.id} style={{ overflow: 'hidden' }}>
                                    <h6 className="card-title">{result.title || result.name}</h6>
                                    <img src={imgUrl + result.poster_path} alt="placeholder" className="card-img" />
                                    <h6 className="card-rating">{result.vote_average}</h6>
                                    <Button className="card-btn card-btn-details">View Details</Button>
                                    <Button className="card-btn card-btn-list">Add to List</Button>
                                </Card>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
