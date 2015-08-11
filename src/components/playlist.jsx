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
    Actions.removeFromPlaylist(i);
  },

  render() {
  	let playlist = this.props.playlist.map(function (data, i){
      return (
        <li className="collection-item avatar results-item closed">
          <img src={data.thumbnails} className='circle'/>
          <span onClick={this.chooseVideo.bind(null, i)} className="title">{data.title}</span>
          <a onClick={this.removeFromPlaylist.bind(null, i)} className="remove-from-playlist"></a>
        </li>
      )
    }, this);

    return (
    	<div>
	    	<p>Playlist:</p>
	    	<ul className="collection results playlist">
	      	{ playlist }
	      </ul>
      </div>
    )
  }
});

export default Playlist;
