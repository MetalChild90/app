import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return ( 
    <div>
        <h2>Stopka</h2>
        <Route path='/' exact render={props => {
            // console.log(props)
            return(
                <p>strona <span>glowna</span></p>
            )
        }}/>

        <Route path='/:page' exact render={props => {
            // console.log(props)
            return(
                <>
                <p>strona <span>{props.match.params.page}</span></p>
                <p>strona <span>{props.match.url}</span></p>
                <p>strona <span>{props.match.path}</span></p>
                </>
            )
        }}/>
        <Route path='/:page/:idProduct' exact render={props => {
            // console.log(props)
            return(
                <>
                <p>strona <span>{props.match.params.page}</span></p>
                <p>strona <span>{props.match.url}</span></p>
                <p>strona <span>{props.match.path}</span></p>
                </>
            )
        }}/>
        </div> );
}

export default Footer;