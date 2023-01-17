import React from 'react';
import TitleIcon from '@mui/icons-material/Title';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function MovieContainer({movie, redirect}) {
    return (
        <div className="movie__container" onClick={() => redirect(`${movie.imdbID}`)}>
                
        <figure className="movie__poster--wrapper">
        <img className='movie__img' src={movie.Poster} alt="" />
    </figure>
    <div className="movie__content--wrapper">
        <div className="movie__subtitle--wrapper">
            <TitleIcon></TitleIcon>
            <p className="movie__subtitle">{movie.Title}</p>
            
        </div>
        <div className="movie__subtitle--wrapper">
            <CalendarMonthIcon></CalendarMonthIcon>
        <p className="movie__subtitle">{movie.Year}</p>
        </div>
        </div>
        </div>
    );
}

export default MovieContainer;