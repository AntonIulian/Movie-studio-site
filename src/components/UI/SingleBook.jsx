import React from 'react';

function SingleBook({response}) {
    return (
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

    </div> 
    );
}

export default SingleBook;