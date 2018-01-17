import React, {Component} from 'react'
import style from './index.scss'

class ToggleButton extends Component {
	render() {
		return (
			<div>
				<button type="button" className="toggle-btn" onClick={(e) => this.handleClick(e)}>
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<style jsx>{style}</style>
			</div>
		);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.click();
	}
}

export default ToggleButton
