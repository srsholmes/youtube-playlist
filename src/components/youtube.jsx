let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Styles
import Styles from '../styles';

let Youtube = React.createClass({

 	getStyles() {

 	},

  render() {
    var styles = this.getStyles();
    return (
      <div style={styles}>
        <h3>Youtube Video here...</h3>
      </div>
    )
  }
});

export default Youtube;
