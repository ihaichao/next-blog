import React, {Component} from 'react'
import style from './index.scss'
import Link from 'next/link'

class CollapseBar extends Component {
	render() {
		const {fixed, toggle} = this.props.context;
		return (
			<div className={toggle ? 'wrapper in' : 'wrapper'}>
				<div className={`root ${fixed ? 'fixed' : ''}`} ref="bar">
					<ul className="bar" onClick={(e) => this.handleClick(e)}>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/portfolio">
								<a>Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href="/tags">
								<a>Tags</a>
							</Link>
						</li>
					</ul>
				</div>
				<style jsx>{style}</style>
			</div>
		);
	}

	componentDidUpdate() {
		var $bar = this.refs.bar;
		if (this.props.context.toggle) {
			$bar.style.height = "auto";
		} else {
			setTimeout(function () {
				$bar.style.height = "0px";
			}, 200);
		}
	}

	handleClick(e) {
		if (this.props.button.state) {
			this.props.button.handler();
		}
	}
}

export default CollapseBar
