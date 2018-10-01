import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    // console.log("This is my initializer")

/*     const movies = [
      {id: 0, title: "Avengers: "}
    ]

    this.state = {rows: <p>This is my row</p>} */
    this.performSearch()
  }

  performSearch(){
    console.log("perform search using moviesDB")
  }
  
  render() {
    return (
      <div className="App">
      <table class = "title-bar">
        <tbody>
          <tr>
            <td>
              <img width='50' src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/the-movie-db-api.png?itok=BoZycnJe"/>
              </td>
              <td width='8'/>
              <td>
                <h1>MoviesDB Search</h1>
                </td>
            </tr> 
          </tbody>
      </table>

      <input class = 'search-bar' placeholder="Enter title here..."/>
      {this.state.rows}
      
      </div>
    );
  }
}

export default App;
