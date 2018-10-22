import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { track } = props;
  var yt_search = "https://www.youtube.com/results?search_query=" + track.track_name;
  var link = "<a href='https://www.youtube.com/results?search_query=Button</a>";
  var trackVar = track.track_name
  function myFunction() {
    var str = "Free Web Building Tutorials!";
    var result = str.link("https://www.youtube.com/results?search_query="+track.track_name);
    document.getElementById("demo").innerHTML = result;
}

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Title
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Record
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
{/* This won't work. Trying to link externally while also using $ which I can't in href */}
{/* <input type="button" onclick="location.href='https://www.youtube.com/results?search_query=';" value="Go to Google" /> */}

          <Link
            to={`https://www.youtube.com/results?search_query=${track.track_name}`}
            target='_blank'
            className="btn btn-danger btn-block"
          >
            <i className="fab fa-youtube" /> Find on YouTube
          </Link>
          {/* <button onclick={link("https://www.youtube.com/results?search_query="+track.track_name)}>Click</button> */}

          
          
        </div>
      </div>
    </div>
  );
};


export default Track;