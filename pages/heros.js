import Head from 'next/head'
import ShowLayout from '../components/layouts/ShowLayout'
import Hero1 from '../components/Hero/Hero1/Hero1';
import Hero2 from '../components/Hero/Hero2/Hero2';

export default function Heros() {
  return (
    <ShowLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Heros</h1>
      <div className="comp-space">
        <Hero1 />
      </div>
      <div className="comp-space">
        <Hero2 />
      </div>
    </ShowLayout>
  )
}
