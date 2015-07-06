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
import { NavBar, Search, Youtube } from './';

//Only connect to the sotre once and pass down the data in props.
////Need to pass down video data to props of Youtube, from  state. 

//Stores
let Store = require('../stores/store');

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      searchBarOpen: true,
      results: {
        data: {
          items: []
        }
      },
      videoData: {
        id: null
      }
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

  render(){
    return (
      <div>
        <NavBar searchBarOpen={this.state.searchBarOpen}/>
        <Search open={this.state.searchBarOpen} refs='SearchBar' results={this.state.results}/>
        <Youtube videoData={this.state.videoData}/>
      </div>
    )
  }
});

export default App;
