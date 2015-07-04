let Reflux = require('reflux');

import { searchYoutube, initYoutubeVideo } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  'overlayClick': {}
});


Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;
