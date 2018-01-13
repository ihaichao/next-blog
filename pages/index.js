import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/Nav'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head title="My blog" />
        <Nav />
      </div>
    )
  }
} 

export default Index