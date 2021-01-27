import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'
import Head from 'next/head'
import ContextDarkMode from "./context/darkModeContext";
import Page from './Page'
import ContextModal from './context/modalContext'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Head>
          <title>Periodic Table</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"/>
        </Head>
      <ContextDarkMode>
      <ContextModal>
        <Page/>
        </ContextModal>
      </ContextDarkMode>
    </ThemeProvider>
  )
}
