let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { Controls } from './';


let NavBar = React.createClass({

	menuClick(e) {
		e.preventDefault();
    Actions.toggleSearch(this.props.searchBarOpen ? true : false);
  },

	render() {
		return (
			<div className="navBar navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<a onClick={this.menuClick} className="brand-logo menu-icon">
							<svg viewBox="0 0 24 24">
								<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
							</svg>
						</a>
						<Controls {...this.props} />
		      </div>
        </nav>
			</div>
		)
	}
});

export default NavBar;
