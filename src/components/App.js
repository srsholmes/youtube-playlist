let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;
//Stores
let Store = require('../stores/store');

let App = React.createClass({ 

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {};
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  leftIconTouch() {
    console.log('nav toggle clicked')
  },

  render(){
    return (
      <h1>Hello App</h1>
    )
  }
});

export function start() {
  React.render(
    <App />, document.body
  );
}