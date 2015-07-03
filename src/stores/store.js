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
  	console.log(data.data);
  	console.log(data.data.items);
  	this.trigger({ 
  		results: data 
  	});
  }

});

module.exports = Store;