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

  render() {
    let results = this.state.results.data.items;
    let resultsList = results.map(function (data, i){
      console.log(data, i);
      return (
        <ListItem leftAvatar={<Avatar src={data.snippet.thumbnails.default.url} />}>
          <h4>{data.snippet.title}</h4>
          <p>{data.snippet.description}</p>
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

export default { SearchResults };  
