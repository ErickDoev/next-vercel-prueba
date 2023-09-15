import Head from "next/head"
import { Navbar } from "../Navbar"
import styles from './MainLayout.module.css';
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Home</title>
            <meta name="description" content="Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        <main className={`${styles.main} ${inter.className}`}>
          { children }
        </main>
    </div>
  )
}
