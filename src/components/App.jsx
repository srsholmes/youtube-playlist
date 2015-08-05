let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { initYoutubeApi } from '../modules';

//Start the youtube Api.
initYoutubeApi();

//Custom components
import { NavBar, Search, Youtube, Playlist } from './';

//Stores
let Store = require('../stores/store');

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  render(){
    return (
      <div>
        <NavBar searchBarOpen={this.state.searchBarOpen}/>
        <Search open={this.state.searchBarOpen} results={this.state.results} refs='SearchBar' />
        <Youtube videoData={this.state.videoData}/>
        <Playlist playlist={this.state.playlist}/>
      </div>
    )
  }
});

export default App;

