let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let NavBar = React.createClass({

	menuClick() {
    Actions.toggleSearch(this.props.searchBarOpen ? true : false);
  },

	render() {
		return (
			<div className='navBar'>
				<div onClick={this.menuClick} className='menuIcon'>
					<svg viewBox="0 0 24 24">
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
					</svg>
				</div>
			</div>
		)
	}
});

export default NavBar;
