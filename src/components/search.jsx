let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { throttle } from '../modules';
//Styles
import Styles from '../styles';

//Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;
import { SearchResults } from './'

let Search = React.createClass({
  _handleInputChange() {
    let query = this.refs.searchBar.getValue();
    console.log(this.refs.searchBar.getValue());
    throttle(Actions.searchYoutubeApi(query), 600);
  },

 	getStyles() {
		var transformVal = this.props.open ? 0 : 100;
		return Object.assign({}, Styles.search, {
      transform: `translate3d(${transformVal}%, 0px, 0px)`
    });
 	},

 	getStylesOverlay() {
		var opacityVal = this.props.open ? 0.7 : 0;
		return Object.assign({}, Styles.searchOverlay, {
    	opacity: `${opacityVal}`
    });
 	},

  render() {
    var styles = this.getStyles();
    var stylesOverlay = this.getStylesOverlay();
    return (
    	<div>
	      <div style={styles} className={this.props.open ? 'search' : 'search open'}>
	        <h3>Search...</h3>
	        <TextField hintText="Geoff Rowley" onChange={this._handleInputChange} ref="searchBar" />
	        <SearchResults/>
	      </div>
	      <div>
	      	<div style={stylesOverlay} className={this.props.open ? 'searchOverlay' : 'searchOverlay open'}/>
	      </div>
	    </div>
    )
  }
});

export default Search;
