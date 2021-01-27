import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'
import Head from 'next/head'
import ContextDarkMode, { DarkModeContext } from "./context/DarkModeContext";
import Page from './Page'

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={theme}>
      <ContextDarkMode>
        <GlobalStyle darkMode={darkMode}/>
        
        <Head>
          <title>Periodic Table</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"/>
        </Head>
        <Page/>
      </ContextDarkMode>
    </ThemeProvider>
  )
}
