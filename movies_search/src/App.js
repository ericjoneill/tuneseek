import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    // console.log("This is my initializer")
    this.state = {}

  //   const movies = [
  //     {id: 0, title: "Avengers: Infinity War", overview: "Stuff happens"},
  //     {id: 1, title: "Avengers: Infinity War 2", overview: "Stuff happens again"}
  //   ]

  //   var movieRows = []
  //   movies.forEach((movie) => {
  //   console.log(movie.title)
  //   const movieRow = <MovieRow movie={movie} />
  //           movieRows.push(movieRow)
  // })

  // this.state = {rows: movieRows}

  this.performSearch()
}

  performSearch(searchTerm){
    console.log("perform search using movieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  
  render() {
    return (
      <div>

      <table class = "title-bar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width='50' src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/the-movie-db-api.png?itok=BoZycnJe"/>
              </td>
              <td width='8'/>
              <td>
                <h3>MoviesDB Search</h3>
                </td>
            </tr> 
          </tbody>
      </table>

      <input class = 'search-bar' onChange={this.searchChangeHandler.bind(this)}
      placeholder="Enter title here..."/>

      {this.state.rows}
      
      </div>
    );
  }
}

export default App;
