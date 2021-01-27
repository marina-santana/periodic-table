import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import { MyGlobalStyle } from './styles/global'
import theme from './styles/theme'
import Head from 'next/head'
import Element from './component/Element'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <MyGlobalStyle/>
      <Head>
        <title>Periodic Table</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <Element backgroundColor={theme.colors.yellow}/>

    </ThemeProvider>
  )
}
