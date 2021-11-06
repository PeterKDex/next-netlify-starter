import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Demo App" />
        <p className="description">
          Page rendering capabilities demo:
        </p>
        <Link href="static">Static with client side code</Link>
        <Link href="ssg/static">Static site generated (SSG)</Link>
        <Link href="ssg/dynamic">SSG with dynamic fallback</Link>
        <Link href="server">Server rendered</Link>
      </main>

      <Footer />
    </div>
  )
}

export default Home
