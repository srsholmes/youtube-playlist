let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
//Stores
let Store = require('../stores/store');


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
    	<div>
      	<h4>Playlist here</h4>
      </div>
    )
  }
});

export default Playlist;
