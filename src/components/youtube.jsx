let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Custom components
import { Player, Playlist } from './';

//Stores
let Store = require('../stores/store');

let Youtube = React.createClass({

  render() {
    return (
    	<div>
	      <div className='playerWrapper'>
	        <Player {...this.props} />
	      </div>
	      <div className='playistWrapper'>
	      	<Playlist/>
	      </div>
	    </div>
    )
  }
});

export default Youtube;
