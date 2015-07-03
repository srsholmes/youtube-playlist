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

  getInitialState: function() {
    return {
      liked: false,
      SearchBarOpen: true
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
    console.log('nav toggle clicked');
    console.log(Styles);
    this.setState({
      SearchBarOpen: !this.state.SearchBarOpen
    });
  },

  render(){
    var text = this.state.SearchBarOpen ? 'open' : 'not open';

    return (
      <div>
        <AppBar title='Youtube Playlist Maker' onLeftIconButtonTouchTap={this.openSearchBar} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Search open={this.state.SearchBarOpen} refs='SearchBar'/>
        <p onClick={this.handleClick}>
          Search is {text}. Click to toggle.
        </p>
      </div>
    )
  }
});

export function start() {
  React.render(
    <App />, document.body
  );
}