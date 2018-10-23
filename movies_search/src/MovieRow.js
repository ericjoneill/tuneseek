import React from 'react'

class MovieRow extends React.Component{
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    watchMovie(){
        const trailer = "https://www.youtube.com/results?search_query=" + this.props.movie.title + "+trailer"
        window.location.href = trailer
    }

    render() {
        return <table key = {this.props.movie.id} class="box">
        <tbody>
          <tr>
            <td>
              <img alt = "poster" width="120" src={this.props.movie.poster_src}/>
              </td>
              <td class = "infoBlock">
             
                <div class="infoTitle">
                <h3 class="info">{this.props.movie.title}</h3>
                <span class="bubbleScore"><span class="info">{this.props.movie.vote_average}/10</span></span> 
                </div>
                
                <p class="info">{this.props.movie.overview}</p>
                <span class="buttonGroup">
                <input type="button" class="btn btn-outline-success btnSpace" onClick={this.viewMovie.bind(this)} value="View Info"/>
                <input type="button" class="btn btn-outline-light btnSpace" onClick={this.watchMovie.bind(this)} value="Find Trailer"/>

                </span>
            </td>
            </tr>
        </tbody>
    </table>
    }
}

export default MovieRow