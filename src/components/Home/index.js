import { useState,useEffect } from 'react';
import './index.scss'
import LogoTitler from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['B', 'o', 'g', 'd', 'a', 'n'];
    const jobbArray = ['D', 'e', 'v', 'O', 'p', 's', ' ', 'd' , 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> Hi, <br/> I'm
                <img src={LogoTitler} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobbArray} idx={20} />
                </h1>
                <h2> Backend Developer / Javascript / bash / scripts / python </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home