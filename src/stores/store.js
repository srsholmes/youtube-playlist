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
  	console.log('onsearchYoutubeApiCompleted');
  	this.trigger({
  		results: data
  	});
  },

  onChooseVideo(id) {
  	this.trigger({
  		videoProps: {
  			id: id
  		}
  	});
  },

  onCloseOverlay(){
  	this.trigger({
      searchBarOpen: false
    });
  }

});

module.exports = Store;
