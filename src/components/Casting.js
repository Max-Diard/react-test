import React from 'react';
import './Movie.css'

class Casting extends React.Component{
    render(){
        const {casting} = this.props;
        return(
            <ul>
                {casting.map((c,i) =>
                    <li key={i}> {c}  </li>    
                )}
            </ul>
        )
    }
}

export default Casting;