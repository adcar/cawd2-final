import React from 'react'
import injectSheet from 'react-jss'
const styles = theme => ({
	root: {
		height: 50,
		width: 220,
		backgroundColor: 'transparent',
		borderColor: 'green',
		borderStyle: 'solid',
		borderWidth: 2,
		transition: theme.trans,
		cursor: 'pointer',
		borderImage: `${theme.accentGradient} 20`,
		color: '#fb6976',
		'&:hover': {
			backgroundImage: theme.accentGradient,
			color: 'white'
		}
	},
	text: {
		fontSize: 15
	}
})

const Button = ({ classes, children }) => (
	<button className={classes.root}>
		<span className={classes.text}>{children}</span>
	</button>
)

export default injectSheet(styles)(Button)
