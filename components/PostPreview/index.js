import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import moment from 'moment'

class PostPreview extends Component {
	static propTypes = {
		context: PropTypes.shape({
			title: PropTypes.string.isRequired,
			summary: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
			subtitle: PropTypes.string,
			author: PropTypes.string,
			date: PropTypes.any,
		}),
	}

	render() {
		const ctx = this.props.context
		const date = new Date(ctx.date)
		const d = moment(date).format('MMMM DD YYYY')

		return (
			<div className="post-preview">
				<Link to={ctx.path}>
					<h2 className="title">{ctx.title}</h2>
					<div className="preview">{ctx.content}</div>
				</Link>
				<p className="meta">Posted on {d}</p>
			</div>
		)
	}
}

export default PostPreview
