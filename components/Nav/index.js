import React, { Component } from "react";
import ToggleButton from "../ToggleButton"
import CollapseBar from "../CollapseBar"
import Link from 'next/link'
import { title } from '../../constants'
import style from './index.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pre: 0,
      toggle: false,
      fixed: false,
      visible: false
    }
  }

  render() {
    const {fixed, visible, toggle} = this.state
    const col = {fixed, toggle}
    return (
      <nav className={`root ${fixed ? 'fixed' : ''} ${visible ? 'visible' : ''}`}>
        <div className="container-fluid">
          <div className="header">
            <ToggleButton click={() => this.toggle()} />
            <Link href="/">
              <a className="brand">{title}</a>
            </Link>
          </div>
          <CollapseBar context={col} button={{state: toggle, handler: this.toggle}}/>
        </div>
        <style jsx>{style}</style>
      </nav>
    );
  }

  componentDidMount() {
		if (window.innerWidth > 1170) {
      // addEventListener(window, 'scroll', this._handleScroll);
      window.addEventListener('scroll', this._handleScroll)
		}
	}

	componentWillUnmount() {
		if (window.innerWidth > 1170) {
      // removeEventListener(window, 'scroll', this._handleScroll);
      window.removeEventListener('scroll', this._handleScroll)
		}
	}

  handleScroll(e) {
		let currentTop = window.scrollY;
		const $header = document.querySelector('header');
		// const pre = this.state.pre;
    // const nav = this.state.nav;
    const { pre, toggle, fixed, visible } = this.state
		// const {visible, fix} = this.props;

		if (currentTop < pre) {
			if (currentTop > 0 && nav.fixed) {
				if (!visible) {
          // visible(true);
          const state = Object.assign({}, this.state, { visible: true })
          this.setState(state)
				}
			} else {
				if (fixed) {
          // fix(false);
          const state = Object.assign({}, this.state, { fixed: false })
          this.setState(state)
				}
				if (visible) {
          // visible(false);
          const state = Object.assign({}, this.state, { visible: false })
          this.setState(state)
				}
			}
		} else {
			if (visible) {
				// visible(false);
        const state = Object.assign({}, this.state, { visible: false })
        this.setState(state)
			}
			if (currentTop > $header.clientHeight && !fixed) {
				if (!fixed) {
					const state = Object.assign({}, this.state, { fixed: true })
          this.setState(state)
				}
			}
    }
    const state = Object.assign({}, this.state, { pre: currentTop })
    this.setState(state)
		// this.setState({
		// 	pre: currentTop,
		// });
  }
  
  toggle() {
    const state = Object.assign({}, this.state, { toggle: !this.state.toggle })
    this.setState(state)
  }
}

export default Nav
