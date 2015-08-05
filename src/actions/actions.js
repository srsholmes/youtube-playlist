let Reflux = require('reflux');

import { searchYoutube } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  'toggleSearch': {},
  'chooseVideo': {},
  'addToPlaylist':{},
  'initYoutubeApi':{},
  'getPlaylist': {}
});


Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;
