let Reflux = require('reflux');

import { searchYoutube } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  'toggleSearch': {},
  'chooseVideo': {},
  'addToPlaylist':{},
  'removeFromPlaylist':{},
  'initYoutubeApi':{},
  'getPlaylist': {},
  'playPause':{},
  'skipVideo':{}
});


Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;
