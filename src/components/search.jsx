let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import { SearchResults } from './'

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

 	getStyles() {
 		console.log('get styles')
		var transformVal = this.props.open ? 0 : 100;
		return Object.assign({}, Styles.search, {
      transform: `translate3d(${transformVal}%, 0px, 0px)`
    });
 	},

  render() {
    var styles = this.getStyles();
    return (
      <div style={styles}>
        <h3>Search youtube...</h3>
        <TextField hintText="Geoff Rowley" onChange={this._handleInputChange} ref="searchBar" />
        <SearchResults/>
      </div>
    )
  }
});

export default Search;
