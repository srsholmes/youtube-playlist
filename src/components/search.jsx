let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

//Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;
import { SearchResults } from './'

let Search = React.createClass({
  _handleInputChange() {
  	console.log('Handle input chnage');
    let query = this.refs.searchBar.getValue();
    throttle(Actions.searchYoutubeApi(query), 30000);
    throttle(console.log(query), 3000);
  },

  // getInitialState() {
  //   return {
  //     searchBarOpen: true
  //   };
  // },

  overlayClick() {
  	console.log('overlay click');
  	Actions.toggleSearch(true);
  },

  render() {
  	 //    window.addEventListener("resize", function(){console.log('resize no throttle')});
    // window.addEventListener("resize", throttle( function(){console.log('rsize throttle')}, 2000 ));

    return (
    	<div className={this.props.open ? 'searchWrapper open' : 'searchWrapper'}>
	      <div className='search' >
	        <h3>Search...</h3>
	        <TextField hintText="Geoff Rowley" onChange={this._handleInputChange} ref="searchBar" />
	        <SearchResults/>
	      </div>
	      <div>
	      	<div className='searchOverlay' onClick={this.overlayClick}/>
	      </div>
	    </div>
    )
  }
});

export default Search;
