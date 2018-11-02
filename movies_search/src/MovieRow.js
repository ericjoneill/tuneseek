import React from 'react'

class MovieRow extends React.Component{
    render() {
        return <table key = {this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt = "poster" width="120" src={this.props.movie.poster_src}/>
              </td>
              <td class="infoBG">
             <span class="flexTitles">
                <div class="infoTitle">
                  <div><span class="bubbleTitle">Title:</span> {this.props.movie.title}<br/></div>
              <div>  <span class="bubbleScore">Score:</span> {this.props.movie.vote_average}/10</div>
                </div>
                </span>
                <p>{this.props.movie.overview}</p>
            </td>
            </tr>
        </tbody>
    </table>
    }
}

export default MovieRow