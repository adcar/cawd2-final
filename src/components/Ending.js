import React from 'react'
import injectSheet from 'react-jss'
const styles = theme => ({
	root: {
		height: '50%',
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	},
	greyHeading: {
		position: 'relative',
		color: '#838a96',
		fontWeight: 400,
		fontFamily: 'Arvo',
		fontSize: 40,
		width: 500,
		'&:before': {
			position: 'absolute',
			left: -28,
			content: "' |'",
			paddingRight: 20,
			color: '#fb6976'
		},
		'&:after': {
			content: "'| '",
			paddingLeft: 20,
			color: '#fb6976'
		}
	}
})
const Ending = ({ classes, children }) => (
	<div className={classes.root}>
		<h2 className={classes.greyHeading}>
			5Lion is a diversified holding compay based in McLean, VA
		</h2>
	</div>
)

export default injectSheet(styles)(Ending)
