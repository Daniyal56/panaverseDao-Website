import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
