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

    if ( this.props.playlist.length == 0 ) {
      return (
        <div></div>
      )
    } else {
      let playlist = this.props.playlist.map(function (data, i){
        return (
          <li className="collection-item avatar results-item closed">
            <img src={data.thumbnails} className='circle'/>
            <span onClick={this.chooseVideo.bind(null, i)} className="title">{data.title}</span>
            <i onClick={this.removeFromPlaylist.bind(null, i)} className="small material-icons delete remove-from-playlist">delete</i>
          </li>
        )
      }, this);

      return (
        <div>
          <h5>Playlist:</h5>
          <ul className="collection results playlist">
            { playlist }
          </ul>
        </div>
      )
    }
  }
});

export default Playlist;
