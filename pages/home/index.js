import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import PreviewList from '../../components/PreviewList'
import './index.scss'
import pageInfo from '../../config/page-info'

export default class Index extends React.Component {
  static async getInitialProps () {
    return {}
  }

  render() {
    return (
      <div>
        <Head title="Zongzheng blog" />
        <Nav />
        <Header info={pageInfo.index} />
      </div>
    )
  }
}