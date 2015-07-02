import status from './status';
import json from './json';

export default function searchYoutube(query) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&type=video&q=${query}&key=AIzaSyA4F93yHRFHhLAAB0V1Gq5FwMLR7gyp1vA`)
  .then(status)
  .then(json)
  .then((data) => ({ data }));
}
