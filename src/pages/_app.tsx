import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import store from '../app/store'
import '../styles/app.scss'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Lang from '../features/lang/Lang'
import '../i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script defer src="/js/all.js"></script>  */}
        <link href="/css/all.css" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}
export default MyApp
