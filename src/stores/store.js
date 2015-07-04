let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({

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

  onOverlayClick(){
  	console.log('on overlay click');
  	this.trigger({
      searchBarOpen: false
    });
  }

});

module.exports = Store;
