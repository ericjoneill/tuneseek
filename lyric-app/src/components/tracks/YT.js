import React from 'react';

class YouTube extends React.Component {
    watchMovie(){
        const trailer = "https://www.youtube.com/results?search_query=" + this.props.movie.title + "+trailer"
        window.location.href = trailer
    }
}

export default YouTube