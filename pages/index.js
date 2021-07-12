import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero1 from '../components/Hero/Hero1/Hero1'
import Hero2 from '../components/Hero/Hero2/Hero2'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero2 />
      This is the index page
    </MainLayout>
  )
}
