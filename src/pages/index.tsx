import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectedLang, testAsync, toggleLanguage } from '../features/lang/langSlice'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const selectedLanguage = useAppSelector(selectedLang)
  const { t } = useTranslation()
  // if (selectedLanguage.language === "EN") {
  //   i18n.changeLanguage("EN")
  // } else {
  //   i18n.changeLanguage("TH")
  // }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href="/home">{t('home.main')}</a>
        <h2>{selectedLanguage.language}</h2>
        <button onClick={() => dispatch(toggleLanguage())}>Toggle Language</button>
        <button onClick={() => dispatch(testAsync())}>Async</button>
        <h4>{selectedLanguage.status}</h4>
        <h6>{JSON.stringify(selectedLanguage.data, null, 2)}</h6>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
