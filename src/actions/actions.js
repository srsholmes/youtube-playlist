let Reflux = require('reflux');

import { searchYoutube } from '../modules';


let Actions = Reflux.createActions({
  'searchYoutubeApi': { asyncResult: true },
  openSearchBar: {}
});

Actions.searchYoutubeApi.listenAndPromise(searchYoutube);

export default Actions;