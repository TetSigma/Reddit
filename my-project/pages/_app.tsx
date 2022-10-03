import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import client from '../apollo-client'
import {ApolloProvider} from '@apollo/client'
import {Session} from 'next-auth'
import { Toaster } from 'react-hot-toast'


function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
  <ApolloProvider client={client}>
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <div className='h-screen overflow-y-scroll bg-slate-200'>
        <Header/>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  </ApolloProvider>
  
  )

}

export default MyApp

