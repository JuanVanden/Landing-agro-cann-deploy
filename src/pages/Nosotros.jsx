import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Nosotros.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros</title>
      </Head>
      <main className={styles.main}>
        {/* Contenido de tu página */}
      </main>
    </>
  )
}