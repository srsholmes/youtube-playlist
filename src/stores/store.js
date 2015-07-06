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

  // onSearchYoutubeApiCompleted(data) {
  // 	console.log('onsearchYoutubeApiCompleted STORE');
  // 	this.trigger({
  // 		results: data
  // 	});
  // },

  // onChooseVideo(id) {
  // 	console.log('onChooseVideo STORE');
  // 	this.trigger({
  // 		videoProps: {
  // 			id: id
  // 		}
  // 	});
  // },

  onToggleSearch(state){
    console.log('onToggleSearch');
    if (state == true) {
      this.trigger({
        searchBarOpen: false
      });
    } else {
      this.trigger({
        searchBarOpen: true
      });
    }
  }
});

module.exports = Store;
