import Nav from "../components/Nav";
import MoviePicture from '../assets/movie.svg'
import './Pages.css'
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'
import Link from 'react-dom'
import {useNavigate} from 'react-router-dom'
function Home({homeSearch, setIsFiltered}) {
    const [query, setQuery] = useState("")
    function submitted(event) {
        if (query === '' || query.length < 3) {
            return
            
        }
        homeSearch(query)
        navigate('/movies')
setIsFiltered(true)

    }
    const navigate = useNavigate()
 const  redirect = (event) => {
event.preventDefault()
navigate('/movies')
setIsFiltered(true)

    }
    return (
        <div id="body">
          <Nav></Nav>
            <div className="row">
                <div className="container">
                    <div className="header__wrapper">
                        <h1 className="header__title">Romania's most awarded movie information service</h1>
                        <h2 className="header__subtitle">Find movies with <span className="yellow"> Cinema Studio</span> </h2>
                        <div className="search__wrapper">
                            <form className="header__form" onSubmit={redirect} action="">
                                <input  className="header__input" type="text" onChange={(e) => setQuery(e.target.value)}  onKeyDown={(event) =>  {
                        if (event.keyCode === 13) {
                            setQuery(event.target.value)

                        }

                        }} placeholder="Search by title or keyword"/>
                            <button className="header__btn" onClick={submitted}  type="submit">
                                <SearchIcon fontSize="large" className="header__search"></SearchIcon>
                            </button>
                            </form>


                        </div>
                            <figure>
                                <img className="header__img" src={MoviePicture} alt="" />
                            </figure>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;