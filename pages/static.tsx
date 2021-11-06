import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Clock from '../components/Clock'

const DataClientSide: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Static with client side code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Static with client side code" />
        <Clock />
        <p>This will tick using your browser clock.</p>
      </main>

      <Footer />
    </div>
  )
}

export default DataClientSide
