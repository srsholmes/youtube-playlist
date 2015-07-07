let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';

import { SearchResults } from './'

function handleInputChange(event) {
  console.log('Handle input chnage');
  let query = event.target.value;
  Actions.searchYoutubeApi(query);
};

let Search = React.createClass({

  componentWillMount() {
    this.onChange = throttle(handleInputChange, 1000);
  },
  
  overlayClick() {
  	console.log('overlay click');
  	Actions.toggleSearch(true);
  },

  render() {
    return (
    	<div className={this.props.open ? 'searchWrapper open' : 'searchWrapper'}>
	      <div className='search' >
	        <div class="input-field col s6">
            <input placeholder="Search youtube" onChange={this.onChange} type="text" class="validate" refs="searchBar"/>
            <label for="first_name">Search youtube</label>
          </div>
	        <SearchResults results={this.props.results}/>
	      </div>
	      <div>
	      	<div className='searchOverlay' onClick={this.overlayClick}/>
	      </div>
	    </div>
    )
  }
});

export default Search;
