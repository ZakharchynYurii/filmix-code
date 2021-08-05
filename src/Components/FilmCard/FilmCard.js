import React from 'react';
import {Link} from "react-router-dom";
import './FilmCard.scss';

const FilmCard = (props) => {
    const {film} = props;
    const {backdrop_path, original_title, vote_average, id} = film;
    const imgSrc = `https://image.tmdb.org/t/p/w400/${backdrop_path}`

    return(
        <div className="card">
            <img src={imgSrc} alt="avatar"/>
            <div className="card-wrap">
                <span className="card-title">{original_title}</span>
                <span className="card-vote">{vote_average}</span>
            </div>
            <Link to={`/info-about-film/${id}`}>
                <button className="btn btn-outline-primary">Watch film</button>
            </Link>
        </div>
    );
}

export default FilmCard;