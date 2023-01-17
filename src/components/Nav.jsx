import React from 'react';
import CinemaImage from '../assets/Cinema.png'
import {Link} from 'react-router-dom'
import './Components.css'
function Nav({setIsDefault}) {
    function popcorn() {
setIsDefault(false)
    }
    return (
        <div id='body' className="row">
            <div className="container">


        <nav>
            <figure>
                <img className='nav__img' src={CinemaImage} alt="" />
            </figure>

<ul className='nav__list'>
    <li className='nav__list--links'>
        <Link className='nav__list--link  nav__link--hover white'onClick={(e) => popcorn()}   to='/'>Home</Link>
    </li>
    <li className='nav__list--links'>
        <Link className='nav__list--link  nav__link--hover white'  to='/movies'>Find Movies</Link>
    </li>
    <li className='nav__list--links'>
        <Link  to='/'>
            <button className='nav__btn'>Contact</button>
        </Link>
    </li>

</ul>
        </nav>
            </div>
        </div>
    );
}

export default Nav;