import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, {theme} from '../styles/global';
import Head from 'next/head';
import Page from '../views/Page';
import ModalProvider from '../context/modalContext';
import DarkModeProvider from '../context/darkModeContext';

function Home() {  
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Head>
                <title>Periodic Table</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <DarkModeProvider>
                <ModalProvider>
                    <Page />
                </ModalProvider>
            </DarkModeProvider>
        </ThemeProvider>
    );
};

export default Home;
