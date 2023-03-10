import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from '@/components/homePage'
import Program from '@/components/program'
import Cards from '@/components/cards'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse DAO</title>
        <meta name="description" content="Panaverse DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins"></link>
      </Head>
      <main className={styles.main}>
        <Homepage />
        <Program />
        <Cards />
        <Footer />
      </main>
    </>
  )
}
