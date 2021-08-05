import React, {useState} from 'react';
import FilmCard from "../FilmCard/FilmCard";
import './AllFilmsPage.scss';

const AllFilmsPage = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if(search){
            fetch(`https://api.themoviedb.org/3/search/movie?&api_key=a65bc201bfb8345509c1c3471ab7cc85&query=${search}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setMovies(data.results);
                })
            setSearch('');
        }
    }

    return(
        <div className="all-films">
            <h2 className="title">Search film</h2>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input type="text"
                           className="input"
                           placeholder="Search for movie"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>

            <div className="all-films-wrapper">
                {
                    movies.map((film, index) => {
                        return <FilmCard key={index} film={film} />
                    })
                }
            </div>
        </div>
    );    
}

export default AllFilmsPage;