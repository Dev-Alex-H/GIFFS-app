import React, { useState } from "react";
import { Link, useLocation } from 'wouter';
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = ['Matrix', 'Chile', 'Venezuela', 'Colombia', 'Ecuador'];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs()

    const handleSubmit = (evt) => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <h3 className="App-Title">Los gifs más populares</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
            </form>
            <h3 className="App-Title">Última busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <ul>
                {POPULAR_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    )
}