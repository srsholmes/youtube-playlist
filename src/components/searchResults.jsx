let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let List = mui.List;
let ListItem = mui.ListItem;
let Avatar = mui.Avatar;

//Stores
let Store = require('../stores/store');

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
 			maxHeight:'100px'
 		}
 	},

  render() {
  	var styles = this.getStyles();
    let results = this.state.results.data.items;
    let resultsList = results.map(function (data, i){
      console.log(data, i);
      return (
        <ListItem style={styles}
        	className="resultsItem"
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
      <List>
        {resultsList}
      </List>
    )
  }
});

export default SearchResults;
