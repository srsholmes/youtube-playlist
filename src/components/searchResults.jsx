let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Modules
import { initYoutubeVideo } from '../modules';

//Stores
let Store = require('../stores/store');

//Material UI Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List;
let ListItem = mui.ListItem;
let Avatar = mui.Avatar;


let SearchResults = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      results: {
        data: {
          items: []
        }
      }
    }
  },

 	chooseVideo(i) {
 		let videoData = this.state.results.data.items[i];
 		let videoID = videoData.id.videoId;
 		console.log('chooseVideo')
 		Actions.chooseVideo(videoID);
 		Actions.closeOverlay();
 	},

  render() {
    let results = this.state.results.data.items;
    let resultsList = results.map(function (data, i){
      return (
        <ListItem
        	className="resultsItem"
        	onClick={this.chooseVideo.bind(null, i)}
        	secondaryText={
            <p>
              {data.snippet.description}
            </p>
          }
          secondaryTextLines={2}
          leftAvatar={<Avatar src={data.snippet.thumbnails.default.url} />}>
          {data.snippet.title}
        </ListItem>
      )
    }, this);

    return (
      <List className='results'>
        {resultsList}
      </List>
    )
  }
});

export default SearchResults;
