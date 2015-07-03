let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Styles
import Styles from '../styles';

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

  getStyles() {
 		return {
 			List: Styles.list,
 			ListItem: Styles.listItem,
 		}
 	},

 	chooseVideo(i) {
 		console.log('Video Chosen');
 		console.log(this.state.results.data.items[i]);
 		let videoData = this.state.results.data.items[i];
 		let videoID = videoData.id.videoId;
 		console.log(videoID);
 	},

  render() {
  	var styles = this.getStyles();
    let results = this.state.results.data.items;
    let resultsList = results.map(function (data, i){
      console.log(data, i);
      return (
        <ListItem style={styles.ListItem}
        	className="resultsItem"
        	onClick={this.chooseVideo.bind(data, i)}
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
      <List style={styles.List}>
        {resultsList}
      </List>
    )
  }
});

export default SearchResults;
