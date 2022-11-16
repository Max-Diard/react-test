import React from 'react';
import Poster from './Poster';
import Casting from './Casting'
import './Movie.css';


class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "isFullSynopsis": false
        };
    }

    showMoreClick = () => {
        this.setState({
            "isFullSynopsis": !this.state.isFullSynopsis
            
        });
    }


    render(){
        const {title, year, director, posterUrl, casting, synopsis} = this.props;
        const {isFullSynopsis} = this.state;
        return(
            <div className="movie-item">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-year">{year}</p>
                <p className="movie-director">{director}</p>
                <p>{isFullSynopsis ? synopsis : synopsis.slice(0,20) + "..." }</p>
                <button onClick={this.showMoreClick} > {isFullSynopsis ? "Show Less" : "Show More"} </button>
                <Casting
                    casting = {casting}
                />
                <Poster 
                    urls = {posterUrl}
                    info = {title}
                />
            </div>
        );
    }
}

export default Movie;