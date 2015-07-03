let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import { SearchResults } from './searchresults'

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

  render() {
    return (
      <div style={this.props.styles} >
        <h3>Search youtube here lad</h3>
        <TextField hintText="Geoff Rowley" onChange={this._handleInputChange} ref="searchBar" />
        <SearchResults/>
      </div>
    )
  }
});

export default { Search };  