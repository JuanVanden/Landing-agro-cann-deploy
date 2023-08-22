import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/ClubCannabico.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ClubCannabico() {
  return (
    <>
      <Head>
        <title>Club Cannabico</title>
      </Head>
      <main className={styles.main}>
        {/* Contenido de tu página */}
      </main>
    </>
  )
}