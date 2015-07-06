let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
//Set up multiple stores as triggers on this store affect
//everything listening to them.
  listenables: [Actions],

  init() {
    console.log('store init');
  },

  onSearchYoutubeApiCompleted(data) {
  	console.log('onsearchYoutubeApiCompleted STORE');
  	this.trigger({
  		results: data
  	});
  },

  onChooseVideo(id) {
  	console.log('onChooseVideo STORE');
  	this.trigger({
  		videoProps: {
  			id: id
  		}
  	});
  },

  onToggleSearch() {
  	console.log('On Toggle search');
		this.trigger({
     	searchBarOpen: !this.state.searchBarOpen
    });
  }

});

module.exports = Store;
