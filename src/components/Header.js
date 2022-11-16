import React from 'react';
import './Movie.css';

class Header extends React.Component{
    render(){
        return(
            <>
                <h1 className="title-page">Des films super</h1>
                <small className="baseline-page">Une liste de films à voir</small>
            </>
        );
    }
}

export default Header;