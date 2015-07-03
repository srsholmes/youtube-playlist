let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Styles
import Styles from '../styles';
//Stores
let Store = require('../stores/store');

let Youtube = React.createClass({

	mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {}
  },

 	getStyles() {

 	},

  render() {
    var styles = this.getStyles();
    return (
      <div id='player' style={styles}>
        <h3>Youtube Video here...</h3>
      </div>
    )
  }
});

export default Youtube;
