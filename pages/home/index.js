import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/Nav'
import style from './index.scss'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head title="My blog" />
        <Nav />
        <style global jsx>{style}</style>
      </div>
    )
  }
} 

export default Index