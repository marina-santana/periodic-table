import React, { useContext } from 'react'
import Header from './Header'
import { DarkModeContext } from "./context/DarkModeContext";
import Table from './Table'
import { Container } from './styles/page'

export default function Page() {
  const { darkMode } = useContext(DarkModeContext);

  return (
      <Container darkMode={darkMode}>
        <Header/>
        <Table/>
      </Container>
  )
}
