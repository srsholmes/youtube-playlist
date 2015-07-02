let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Material UI Components 
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;

//Custom components
import { Search } from './search';

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

  openLeftNav() {
    console.log('nav toggle clicked');
    this.refs.leftNav.toggle();
  },

  render(){
    // let menuItems = [{ route: 'get-started', text: 'Get Started' }];
    return (
      <div>
        <AppBar title='Youtube Playlist Maker' onLeftIconButtonTouchTap={this.openLeftNav} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <LeftNav ref="leftNav" docked={false} header={<Search/>} openRight={true} menuItems={this.state.menuItems}/>
      </div>
    )
  }
});

export function start() {
  React.render(
    <App />, document.body
  );
}