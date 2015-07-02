let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle, searchYoutube } from '../modules';

//Material UI Components 
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;

let Search = React.createClass({
  _handleInputChange() {
    let query = this.refs.searchBar.getValue();
    console.log(this.refs.searchBar.getValue());
    Actions.searchYoutubeApi(query);
  },

  render() {
    return (
      <div>
        <h3>Please search for a video:</h3>
        <TextField hintText="Geoff Rowley" onChange={throttle(this._handleInputChange, 600)} ref="searchBar" />
      </div>
    )
  }
});

export default { Search };  