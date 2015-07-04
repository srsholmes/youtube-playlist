let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
//Stores
let Store = require('../stores/store');

// Initialise the video here using a conditional render.
// Use state to set the videoObject
// and init a video using Actions/controlled by state
// to allow the video to change.


let Playlist = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      results: {
        data: {
          items: []
        }
      }
    }
  },

  render() {
    return (
    	<div className='player'>
      	<h4>This is the player component, player comes below</h4>
      </div>
    )
  }
});

export default Playlist;
