import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar' // Importa el componente NavBar
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Agro Cann</title>

      </Head>
      <main className={styles.main}>
      <h1 className={styles.visuallyHidden}>AgroCann</h1> {/* Tu encabezado h1 con el nombre de la empresa */}
        {/* Resto del contenido de tu página */}
      </main>
    </>
  )
}
