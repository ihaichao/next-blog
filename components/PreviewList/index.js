import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PostPreview from '../PostPreview'
import './index.scss'

class PreviewList extends Component {
	static propTypes = {
		list: PropTypes.array.isRequired,
		pageNum: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		pager: PropTypes.object
	}

	render() {
		const {list, pageNum, pager, max} = this.props

		const previews = []
		for (let i = 0; i < 10; i++) {
			if (list[pageNum * 10 + i] !== undefined) {
				previews.push(list[pageNum * 10 + i])
			} else {
				break
			}
		}

		const previous = pageNum === 0 ? {} : {
			text: '← Newer Posts',
			pager: pager.decrease
		}

		const next = pageNum === max ? {} : {
			text: 'Older Posts →',
			pager: pager.increase
		}

		return (
			<div className={`col-lg-8 col-md-12 ${s.postList}`}>
				{previews.map(function (item, index) {
					return <PostPreview context={item} key={pageNum * 10 + index}/>
				})}
			</div>
		)
	}
}

export default PreviewList
