let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { initYoutubeVideo } from '../modules';

let SearchResults = React.createClass({

  chooseVideo(i) {
    let videoID = this.props.results.data.items[i].id.videoId;
    Actions.chooseVideo(videoID, false);
  },

  addToPlaylist(i) {
  	let videoData = this.props.results.data.items[i];
    Actions.addToPlaylist(videoData);
  },

  render() {
    let results = this.props.results.data.items;
    let resultsList = results.map(function (data, i){
      return (
        <li className="collection-item avatar results-item">
          <img onClick={this.chooseVideo.bind(null, i)} src={data.snippet.thumbnails.default.url} className="circle"/>
          <i onClick={this.addToPlaylist.bind(null, i)} className="small material-icons add playlist_add">playlist_add</i>
          <span onClick={this.chooseVideo.bind(null, i)} className="title">{data.snippet.title}</span>
          <p>{data.snippet.description}</p>
        </li>
      )
    }, this);

    return (
      <ul className="collection results">
        {resultsList}
      </ul>
    )
  }
});

export default SearchResults;
