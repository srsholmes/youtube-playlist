let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components 
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;


//Custom components
import { Search } from './search';

//Styles
import Styles from '../styles';

//Stores
let Store = require('../stores/store');

let App = React.createClass({ 

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      searchBarOpen: false
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  openSearchBar() {
    this.setState({
      searchBarOpen: !this.state.searchBarOpen
    });
  },

  render(){
    return (
      <div>
        <AppBar title='Youtube Playlist Maker' onLeftIconButtonTouchTap={this.openSearchBar} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Search open={this.state.searchBarOpen} refs='SearchBar'/>
      </div>
    )
  }
});

export function start() {
  React.render(
    <App />, document.body
  );
}