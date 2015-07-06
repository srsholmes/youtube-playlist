let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { initYoutubeVideo } from '../modules';

//Stores
let Store = require('../stores/store');

let SearchResults = React.createClass({

  chooseVideo(i) {
    let videoData = this.props.results.data.items[i];
    let videoID = videoData.id.videoId;
    console.log('chooseVideo')
    Actions.chooseVideo(videoID);
    Actions.toggleSearch(true);
  },

  render() {
    console.log(this.props.results);
    let results = this.props.results.data.items;
    let resultsList = results.map(function (data, i){
      return (
        <li className="resultsItem" onClick={this.chooseVideo.bind(null, i)}>
          <div className='avatar'>
            <img src={data.snippet.thumbnails.default.url}/>
          </div>
          <div className='info'>
            <h5>{data.snippet.title}</h5>
            <p>{data.snippet.description}</p>
          </div>
        </li>
      )
    }, this);

    return (
      <ul className='results'>
        {resultsList}
      </ul>
    )
  }
});

export default SearchResults;
