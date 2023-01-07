import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Pages.css'
import {useNavigate} from 'react-router-dom'
function Movie({ setIsFiltered}) {
const [loading, setLoading] = useState(false)



    const navigate = useNavigate()
function direct() {
    navigate('/movies')
setIsFiltered(false)
}
const {id} = useParams()
const [movie, setMovie] = useState([])

async function fetchMovie() {
    setLoading(false)
    const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=91625aff`)
    setMovie(data)
    setLoading(true)

}
useEffect(() => {
    fetchMovie()

}, [])





const response = Object.values(movie)


    return (






        <div>
            <Nav></Nav>


        
        <>

                
                
                <div className="row">
                <div className="container">
                    <div className="back__wrapper"onClick={direct}>

                    <ArrowBackIcon></ArrowBackIcon> <span className='back'>Back</span>
                    </div>

{loading === true  ?

            <div className="select__container">
                <img className='image__select' src={response[13]} alt="" />
                <div className="info__wrapper" >
                <h1 className='title'>{response[0]}</h1>
                <h4 className='sub'>{response[1]} <span className='sub'>; Runtime: {response[4]}</span></h4> 
                <h3 > <span className='plot'>Genre: </span> {response[5]}</h3>
                <h3 > <span className='plot'>IMDB Rating: </span> {response[16]}/10</h3>
                <h3> <span className='plot'>Cast:</span> {response[8]}</h3>
                <br />
                <br />
                <h2 className='plot plot1'>Plot:</h2>
                <h4 className='plot__text'>{response[9]}</h4>

                </div>

            </div> :
            <div className="select__container">

              <div className="book__img--skeleton">
            </div>
                <div className="info__wrapper">

                    <div className="book__title--skeleton skeleton">
                        
                    </div>
                    <div className="book__rating--skeleton skeleton"></div>
                    <div className="book__price--skeleton skeleton"></div>
                </div>
            </div>
}
                </div>

            </div>
                </>

        </div>
    );
}

export default Movie;