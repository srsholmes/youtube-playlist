let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;


//Modules
import { initYoutubeApi } from '../modules';

//Start the youtube Api.
initYoutubeApi();

//Custom components
import { Search, Youtube } from './';

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

//Could abstract the Appbar and menu into a header component
//Chnage state on the header compoentn, meaning youtube would
//not be re rendered.
  menuClick() {
    // this.setState({
    //   searchBarOpen: !this.state.searchBarOpen
    // });
    Actions.toggleSearch();
  },

  render(){
    return (
      <div>
        <AppBar style={{'backgroundColor': '#e52d27', 'zIndex': 50, 'position': 'relative' }} title='Youtube Playlists' onLeftIconButtonTouchTap={this.menuClick} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Search open={this.state.searchBarOpen} refs='SearchBar'/>
        <Youtube/>
      </div>
    )
  }
});

export default App;
