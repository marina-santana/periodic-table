import React, { useContext, useEffect, useState } from 'react';
import Container from '../styles/elementDetails';
import { ModalContext } from '../context/modalContext';
import { DarkModeContext } from '../context/darkModeContext';
import { GetStaticPaths, GetStaticProps } from 'next';
import dataBase from '../db/db-element-details.json'

function ElementDetails({data}: any) {
    const { handleModal } = useContext(ModalContext);
    const { darkMode } = useContext(DarkModeContext);   

    return (
        <Container darkMode={darkMode}>
            <div>
                <sub onClick={handleModal}>&#10006;</sub>
                <span>{data?.number}</span>
                <p>H</p>
                <b>Hydrogen</b>
                <span>NonMetal</span>
            </div>
            <ul>
                <li>
                    <span>Standard state</span> <span>Solid</span>
                </li>
                <li>
                    <span>Atomic Mass</span> <span> 22.9897693 u</span>
                </li>
                <li>
                    <span>Electron Configuration</span> <span>[Ne]3s¹</span>
                </li>
                <li>
                    <span>Oxidation States</span> <span>+1</span>
                </li>
                <li>
                    <span>Electronegativity (Pauling Scale)</span>{' '}
                    <span>0.93</span>
                </li>
                <li>
                    <span>Atomic Radius (van der Waals)</span>{' '}
                    <span>227 pm</span>
                </li>
                <li>
                    <span>Ionization Energy</span> <span>5.139 eV</span>
                </li>
                <li>
                    <span>Electron Affinity</span> <span>0.548 eV</span>
                </li>
                <li>
                    <span>Melting Point</span> <span>370.95 K</span>
                </li>
                <li>
                    <span>Boiling Point</span> <span>1156 K</span>
                </li>
                <li>
                    <span>Density</span> <span>0.97 g/cm³</span>
                </li>
                <li>
                    <span>Year Discovered</span> <span>1807</span>
                </li>
            </ul>
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/elements?id=H`);
  const data = await response.json();
  
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  }
}

export default ElementDetails;