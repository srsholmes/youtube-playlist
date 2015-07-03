let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;


//Custom components
import { Search, Youtube } from './';

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
      searchBarOpen: true
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
        <AppBar style={{'backgroundColor':'#e52d27'}} title='Youtube Playlists' onLeftIconButtonTouchTap={this.openSearchBar} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Search open={this.state.searchBarOpen} refs='SearchBar'/>
        <Youtube/>
      </div>
    )
  }
});

export default App;
