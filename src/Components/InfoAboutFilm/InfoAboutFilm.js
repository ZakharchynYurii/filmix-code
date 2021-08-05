import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import './InfoAboutFilm.scss';

const InfoAboutFilm = () => {
    const [film, setFilm] = useState([]);
    const {id} = useParams();

    const getFilm = async () => {
        const responseData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a65bc201bfb8345509c1c3471ab7cc85`)
        const responseFilm = await responseData.json();
        setFilm(responseFilm);
    }

    useEffect(() => {
        getFilm();
    }, [])

    const {backdrop_path, original_title, overview, release_date, vote_average} = film;
    const imgSrc = `https://image.tmdb.org/t/p/w400/${backdrop_path}`

    return(
        <div className="about-film">
            <div className="about-film-container">
                <div className="about-film-wrapper card">
                    <div className="about-film-avatar">
                        <img src={imgSrc} alt="avatar"/>
                    </div>
                    <div className="about-film-info">
                        <div className="info">
                            <span className="title">{original_title}</span>
                            <span className="vote">Vote: {vote_average}</span>
                        </div>

                        <div className="desc">Description:</div>
                        <div className="about-film-overview">{overview}</div>
                        <div className="about-film-release">{release_date}</div>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default InfoAboutFilm;