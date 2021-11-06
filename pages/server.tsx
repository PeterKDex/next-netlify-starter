import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Clock {
  timeValue: string
}

const DataServerSide:NextPage<{ clock: Clock }> = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Server rendered</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Server rendered" />
        <h2>{ props.clock.timeValue }</h2>
        <p>This will show server clock at request time, updating with each request.</p>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clock: Clock = { timeValue: `${(new Date()).toLocaleTimeString()} (UTC)` }

  return {
    props: { clock }
  }
}

export default DataServerSide
