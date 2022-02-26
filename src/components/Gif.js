import React from 'react';

export default function Gif({ title, id, url }) {
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt={title} />
            <small>{id}</small>
        </div>
    )
}