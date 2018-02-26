import React, { Component } from "react"
import PropTypes from 'prop-types'
import moment from "moment"
import "./index.scss"

class Header extends Component {
  static propTypes = {
    style: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      image: PropTypes.string,
      type: PropTypes.string.isRequired,
      tags: PropTypes.array,
      author: PropTypes.string,
      date: PropTypes.string
    })
  }

  render() {
    const {info} = this.props
    const type = info.type
    return (
      <header
        className="header"
        style={{backgroundImage: `url(${info.image})`}}
      >
        <div className="header-mask" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div
                className={`head ${
                  type === "post" ? 'post' : ""
                }`}
              >
                {type === "post" && (
                  <div className="post-tags">
                    {info.tags.map((value, index) => (
                      <span>{value}</span>
                    ))}
                  </div>
                )}
                <h1>{info.title}</h1>
                {type === "post" && (
                  <span className={s.meta}>
                    Posted By {info.author}
                    on {moment(new Date(info.date)).format("MMMM DD YYYY")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
