import React, {useState, useEffect} from 'react';
import FilmCard from "../FilmCard/FilmCard";
import './TopFilmPage.scss'

const TopFilmsPage = () => {
    const [topFilms, setTopFilms] = useState([])

    const getTopFilms = async () => {
        const responseData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a65bc201bfb8345509c1c3471ab7cc85&language=en-US&page=3`);
        const topFilms = await responseData.json();
        setTopFilms(topFilms.results);
    };

    useEffect(() => {
        getTopFilms();
    }, [])

    return(
        <div className="top-film">
            <div className="top-film-container">
                <div className="top-film-wrapper">
                    {
                        topFilms.map((film, index) => {
                            return <FilmCard key={index} film={film}/>
                        })
                    }
                </div>
            </div>
        </div>
    );    
}

export default TopFilmsPage;