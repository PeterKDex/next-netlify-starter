import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface Clock {
  timeValue: string
}
interface IParams extends ParsedUrlQuery {
  path: string
}

const DataGenerated:NextPage<{ path: string, clock: Clock }> = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Static site generated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={ `Static site generated - ${props.path}` } />
        <h2>{ props.clock.timeValue }</h2>
        <p>For a static page this will show server clock at <em>site build time</em> during deployment.</p>
        <p>For a dynamic fallback page this will show server clock at <em>page first request time</em>. Note: this happens the when anyone loads this page, or the home page due to link prefetching.</p>
        <p>In either case the content will not update again until a new site build/deploy.</p>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ['static']
  const paths = arr.map((path) => {
      return {
          params: { path },
      }
  })
  return { 
    paths, 
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { path } = context.params as IParams
  const clock: Clock = { timeValue: `${(new Date()).toLocaleTimeString()} (UTC)` }

  return {
    props: { path, clock }
  }
}

export default DataGenerated
