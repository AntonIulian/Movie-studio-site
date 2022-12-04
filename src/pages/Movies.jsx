import Nav from '../components/Nav';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search'
import Popcorn from '../assets/watch.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleIcon from '@mui/icons-material/Title';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Movies({setIsFiltered, isFiltered, isDefault, movies, fetchMovies, loading }) {
    const [books, setBooks] = useState([])
    const [clicked, setClicked] = useState("")
   



   const navigate = useNavigate()
   function clickedMovies(event){
    event.preventDefault()

    fetchMovies(clicked)
   }


    function filterMovies(filter) {
console.log(filter);
        if (filter === 'VALUE1') {
           setBooks( movies.slice().sort((a,b) => a.Year - b.Year))
        }
        if (filter === 'VALUE2') {
            setBooks( movies.slice().sort((a,b) => b.Year - a.Year))
         }
         if (filter === 'VALUE3') {
            setBooks( movies.slice().sort((a,b) => a.Title.localeCompare(b.Title)))
         }
         setIsFiltered(true)
    }


function redirect(search) {
    navigate(`/movies/${search}`)
}


    return (
        <div>
           <Nav></Nav>
            <div>
             <div className="row">
    <header>
        <div className="header__wrapper">
            
            <h1 className="movies__title">Browse your favourite movies </h1>
            <div className="input__wrapper">
                <form action="" onSubmit={clickedMovies}  >

                    <input  type="text" formNoValidate  placeholder ="Search by title or keyword" onChange={(e) => setClicked(e.target.value)} onKeyDown={(event) =>  {
                        if (event.keyCode === 13) {
                            clickedMovies(event.target.value)

                        }}} className="header__input" 

                    />

                </form>
                <SearchIcon onClick={clickedMovies} fontSize="large" className='movies__search'></SearchIcon>
            </div>
        </div>
    </header>
    <div className="overlay">
    </div>
</div>
        </div>
           <div className="movies">

    <div className="row">
        <div className="section__nav--wrapper">
            <h2 className="section__nav--title">Search results:</h2>
            <select
            id="filter"
            className='movies__select'
            onChange={(e) => filterMovies(e.target.value)}
            >

            <option value="DEFAULT"  selected disabled>Sort</option>
            <option value="VALUE1">Sort by year, Oldest to Newest</option>
            <option value="VALUE2">Sort by year, Newest to Oldest</option>
            <option value="VALUE3">Sort Alphabetically A-Z</option>
            </select>

    </div>
        
<div className="container movie__wrapper">

    <div className="movie__container--list">
{
loading === true ?
<>
{isDefault === true ?
    <>

            { isFiltered === true ?
                books.map((movie) => (
                
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
                )).slice(0,6) : 
                movies.map((search) => (
                    
                    <div className="movie__container" onClick={() => redirect(`${search.imdbID}`)}>
                
                <figure className="movie__poster--wrapper">
                <img className='movie__img' src={search.Poster} alt="" />
                </figure>
                <div className="movie__content--wrapper">
                <div className="movie__subtitle--wrapper">
                    <TitleIcon></TitleIcon>
                <p className="movie__subtitle">: {search.Title}</p>
                
                </div>
                <div className="movie__subtitle--wrapper">
                    
                <CalendarMonthIcon></CalendarMonthIcon>
                
                <p className="movie__subtitle">: {search.Year}</p>
                </div>
                </div>
                </div>
                )).slice(0,6)


            }
            </> : 
            <div className="popcorn__container">

            <img className='popcorn__img' src={Popcorn} alt="" />
            <br />
            <h3 className='popcorn__title'>You haven't searched any movies yet...</h3>
            </div>

}
</> : 
new Array(6).fill(0).map(element => (

    <>
<div className="skeleton__wrapper">

    <div className="book__img--skeleton">
            </div>
                <div className="info__wrapper">

                    <div className="book__title--skeleton skeleton">
                        
                    </div>
                    <div className="book__rating--skeleton skeleton"></div>
                    <div className="book__price--skeleton skeleton"></div>
                    </div>
</div>
                    </>
    ))
            }

    </div>
</div>
</div>
                </div>
        </div>
    );
}

export default Movies;