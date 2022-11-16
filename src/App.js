import React from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import data from './data/movieData.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "index": 0
    }
  }

  filterMovie = () =>{
    console.log("toudoum");
    // console.log(data.filter(x => x.includes("j")).map)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <input id="search-movie" onInput={this.filterMovie}></input>
        <main>
          {data.map ((m,i) => <Movie {...m} key={i}/>)}
        </main>
      </div>
    );
  }
}

export default App;
