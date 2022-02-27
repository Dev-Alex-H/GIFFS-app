import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import GetGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
    const [loading, setLoading] = useState(false);
    const { keyword } = params
    const [gifs, setGifs] = useState([]);
    useEffect(function () {
        setLoading(true);
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword]);

    if (loading) {
        return <i>Cargando Gifs...</i>
    }

    return (
        <div>
            {
                gifs.map(({ id, title, url }) =>
                    <Gif
                        key={id}
                        title={title}
                        url={url}
                        id={id}
                    />
                )
            }
        </div>
    );
}