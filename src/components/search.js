let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import SearchResults  from './searchResults'

//Styles
import Styles from '../styles';

//Material UI Components 
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;

let Search = React.createClass({
  _handleInputChange() {
    let query = this.refs.searchBar.getValue();
    console.log(this.refs.searchBar.getValue());
    throttle(Actions.searchYoutubeApi(query), 600);
  },

  getStyles: function() {
    var styles = {
      'background' : 'green',
      position: 'fixed',
      right: '0',
      width: '33%',
      padding: '10px',
      top: '0',
      transition: 'all 0.3s ease-in'
    }

    if (this.props.open) {
      styles['transform'] =  'translate3d(100%, 0px, 0px)';
    } else {
      styles['transform'] =  'translate3d(0%, 0px, 0px)';
    }
    
    return styles
  },

  render() {
    var styles = this.getStyles();
    return (
      <div style={styles} open={this.props.open}>
        <h3>Search youtube here lad</h3>
        <TextField hintText="Geoff Rowley" onChange={this._handleInputChange} ref="searchBar" />
        <SearchResults/>
      </div>
    )
  }
});

export default { Search };  