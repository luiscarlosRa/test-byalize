import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './catlist.scss';
import cat from '../images/cat.png';

const CatsList = () => {
    const [cats, setCats] = useState([]);
    useEffect(async () => {
        axios.defaults.headers.common['x-api-key'] = '6d661c7b-90e7-478c-ba3c-4fae4eedf28c';
        try {
            const getKitties = await axios.get('https://api.thecatapi.com/v1/breeds');     
            if(getKitties.data.length > 1) {
                setCats(getKitties.data);
            }
        }
        catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <section id="cat-list">
            <div className="wrapper-title">
                <img src={cat} alt="logo cat"/>
                <h1>Cat breeds</h1>
            </div>
            {cats.length > 0 ? cats.map((cat, i) => {
                return (<div key={i} className="wrapper-card-cats">
                    <div className="wrapper-img">
                        {cat.image ? <img src={cat.image.url} alt={cat.name} /> : null}
                    </div>
                    <div className="wrapper-info">
                        <h3>{cat.name}</h3>
                        <p><span>Origin: </span>{cat.origin}</p>
                        <p><span>Temperament: </span>{cat.temperament}</p>
                        <p><span>Life Span: </span>{cat.life_span}</p>
                        <p>{cat.description}</p>
                        <p><span className="char">Affection level: </span><span className={`bar _${cat.affection_level}`}></span></p>
                        <p><span className="char">Adaptability: </span><span className={`bar _${cat.adaptability}`}></span></p>
                        <p><span className="char">Child friendly: </span><span className={`bar _${cat.child_friendly}`}></span></p>
                    </div>
                </div>)
            }): <div className="wrapper-error"><p>Cat list breed is not available. Try again later</p><img src="https://media.giphy.com/media/H2GT0TQBAlbuo/giphy.gif" alt="Error Cat"/></div>}
        </section>
    );
}

export default CatsList;