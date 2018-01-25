import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import style from './index.scss'
import pageInfo from '../../config/page-info'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head title="My blog" />
        <Nav />
        <Header info={pageInfo.index} />
        <style global jsx>{style}</style>
      </div>
    )
  }
} 

export default Index