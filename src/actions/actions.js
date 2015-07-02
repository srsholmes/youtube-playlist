let Reflux = require('reflux');

let Actions = Reflux.createActions({
  'searchArtistApi': { asyncResult: true }
});

export default Actions;