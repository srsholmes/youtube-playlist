let Reflux = require('reflux');

import { searchYoutube } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  'toggleSearch': {},
  'closeSearch': {},
  'openSearch': {},
  'chooseVideo': {},
  'initYoutubeApi':{},
  'getPlaylist': {}
});


Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;
