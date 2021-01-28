import React, { useContext } from 'react'
import Header from './Header'
import { DarkModeContext } from "../context/darkModeContext";
import Table from './Table'
import Container from '../styles/page'
import Modal from '../component/Modal';
import ElementDetails from './ElementDetails';

function Page() {
  const { darkMode } = useContext(DarkModeContext);

  return (
      <Container darkMode={darkMode}>
        <Header/>
        <Table/>
        <Modal>
          <ElementDetails/>
        </Modal>
      </Container>
  )
};

export default Page;
