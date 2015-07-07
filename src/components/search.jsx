let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import { SearchResults } from './'

function handleInputChange(event) {
  console.log('Handle input chnage');
  let query = event.target.value;
  console.log(query);
  Actions.searchYoutubeApi(query);
};

let Search = React.createClass({

  componentWillMount() {
    this.onChange = throttle(handleInputChange, 300);
  },
  
  overlayClick() {
  	console.log('overlay click');
  	Actions.toggleSearch(true);
  },

  onFocus() {
    console.log('on focus');
    //Want to toggle the 'active' class for the label.
  },  

  render() {
    return (
    	<div className={this.props.open ? 'search-wrapper open' : 'search-wrapper'}>
	      <div className='search'>
	        <div class="input-field col s6">
            <input id="search_youtube" placeholder="Search youtube" type="text" onFocus={this.onFocus} className="validate" onChange={this.onChange} refs="searchBar" />
          </div>
	        <SearchResults results={this.props.results}/>
	      </div>
	      <div>
	      	<div className='search-overlay' onClick={this.overlayClick}/>
	      </div>
	    </div>
    )
  }
});

export default Search;
