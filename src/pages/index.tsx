import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '@/components/Services'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Siekay AI</title>
        <meta name="description" content="Breathe life into your systems with cutting-edge AI solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Services />
        <Blog />
    </main>
      
    </Layout>
  )
}

