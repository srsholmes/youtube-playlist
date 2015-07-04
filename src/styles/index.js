let Styles = {
	search: {
		'background' : 'white',
		'borderLeft':'1px solid lightgrey',
	  position: 'fixed',
	  height:'100%',
	  right: '0',
	  width: '40%',
	  padding: '10px',
	  top: '0',
	  transition: 'all 0.3s ease-in',
	  zIndex: 75
	},

	searchOverlay: {
		background: 'black',
		position: 'fixed',
		height: '100%',
		width: '100%',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: 25,
		transition: 'opacity .3s ease-in-out'
	},

	list: {
		overflow: 'scroll',
		height: '100%',
		overflow: 'scroll'
	},

	listItem: {
		maxHeight:'100px',
		'borderBottom':'1px solid lightgrey',
		padding: '10px 0'
	}
}

export default Styles;
