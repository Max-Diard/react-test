import React from 'react';

class Poster extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "imgIndex": 0
        }
    }

    componentDidMount(){
        this.changeImage = step => {
            const {urls, info} = this.props;
            const {imgIndex} = this.state;
            this.setState({
                "imgIndex": (imgIndex + step + urls.length) % urls.length
            })
        }
    }

    render() {
        const {urls, info} = this.props;
        const {imgIndex} = this.state;
        return(
            <div className="img-grid">
                {
                    imgIndex > 0 &&
                        <button onClick={ () => this.changeImage(-1) }>&lt;</button>
                }
                <img  className="movie-img" src={urls[imgIndex]} alt={"Affiche de " + info}/>
                {
                    imgIndex < urls.length - 1 &&
                        <button onClick={ () => this.changeImage(1) }>&gt;</button>

                }
            </div>
        )
    }
}

export default Poster;