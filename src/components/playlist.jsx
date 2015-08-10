let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
//Stores
let Store = require('../stores/store');


let Playlist = React.createClass({

	chooseVideo(i) {
	  var videoID = this.props.playlist[i].videoID;
	  Actions.chooseVideo(videoID, false);
	},

	removeFromPlaylist(i) {
    var videoID = this.props.playlist[i].videoID;
    Actions.removeFromPlaylist(videoID);
  },

  render() {
  	let playlist = this.props.playlist.map(function (data, i){
      return (
        <li className='collection-item avatar results-item'>
          <img src={data.thumbnails} className='circle'/>
          <span onClick={this.chooseVideo.bind(null, i)} className="title">{data.title}</span>
          <a onClick={this.removeFromPlaylist.bind(null, i)} className="remove-from-playlist"></a>
        </li>
      )
    }, this);

    return (
    	<div>
	    	<h4>Playlist:</h4>
	    	<ul className='collection results'>
	      	{ playlist }
	      </ul>
      </div>
    )
  }
});

export default Playlist;
