let Reflux = require('reflux');

import { searchYoutube, initYoutubeVideo } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  'closeOverlay': {}
});


Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;
