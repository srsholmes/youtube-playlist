let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let ArtistStore = Reflux.createStore({

  listenables: [Actions],

  init() {
    console.log('store init');
  },

  onSearchYoutubeApiCompleted(data) {
  	console.log('onsearchYoutubeApiCompleted');
  	console.log(data)
  }

});

module.exports = ArtistStore;