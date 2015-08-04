let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { initYoutubeVideo } from '../modules';

let SearchResults = React.createClass({

  chooseVideo(i) {
    let videoData = this.props.results.data.items[i];
    let videoID = videoData.id.videoId;
    Actions.chooseVideo(videoID, false);
  },

  render() {
    let results = this.props.results.data.items;
    let resultsList = results.map(function (data, i){
      return (
        <li className='collection-item avatar results-item' onClick={this.chooseVideo.bind(null, i)}>
          <img src={data.snippet.thumbnails.default.url} className='circle'/>
          <span className="title">{data.snippet.title}</span>
            <p>{data.snippet.description}</p>
        </li>
      )
    }, this);

    return (
      <ul className='collection results'>
        {resultsList}
      </ul>
    )
  }
});

export default SearchResults;
