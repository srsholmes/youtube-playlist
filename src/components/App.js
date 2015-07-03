let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components 
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;


//Custom components
import { Search } from './search';

//Styles
import Styles from '../styles';

//Stores
let Store = require('../stores/store');

let App = React.createClass({ 

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      menuItems:[]
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  openSearchBar() {
    console.log('nav toggle clicked');
    console.log(Styles);
    // Styles.search.transform = 'translate3d(0%, 0px, 0px)'
  },

  render(){
    // let menuItems = [{ route: 'get-started', text: 'Get Started' }];
    return (
      <div>
        <AppBar title='Youtube Playlist Maker' onLeftIconButtonTouchTap={this.openSearchBar} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Search styles={Styles.search}/>
      </div>
    )
  }
});

export function start() {
  React.render(
    <App />, document.body
  );
}