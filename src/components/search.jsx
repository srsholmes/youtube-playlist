let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import { SearchResults } from './'

function handleInputChange(event) {
  let query = event.target.value;
  Actions.searchYoutubeApi(query);
};

let Search = React.createClass({

  componentWillMount() {
    this.onChange = throttle(handleInputChange, 300);
  },


  overlayClick() {
  	Actions.toggleSearch(true);
  },

  componentWillReceiveProps(nextProps) {
  	console.log(nextProps);
  	var $html = document.documentElement;
   	nextProps.open ? $html.classList.add('no-scroll') : $html.classList.remove('no-scroll');
  },

  render() {
    return (
    	<div className={this.props.open ? "search-wrapper open" : "search-wrapper"}>
	      <div className="search">
	        <div className="input-field col s6">
            <input id="search_youtube" placeholder="Search youtube" type="text" onFocus={this.onFocus} className="validate" onChange={this.onChange} refs="searchBar" />
          </div>
	        <SearchResults results={this.props.results}/>
	      </div>
	      <div>
	      	<div className="search-overlay" onClick={this.overlayClick}/>
	      </div>
	    </div>
    )
  }
});

export default Search;
