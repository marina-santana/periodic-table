import React, { useContext, useEffect, useState } from 'react';
import Container from '../styles/elementDetails';
import { ModalContext } from '../context/modalContext';
import { DarkModeContext } from '../context/darkModeContext';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';

interface DataProps {
  id: string;
  name: string;
  number: string;
  type: string;
  standardState: string;
  atomicMass: string;
  electronConfiguration: string;
  oxidationStates:	string;
  electronegativity:	string;
  atomicRadius:	string;
  ionizationEnergy:	string;
  electronAffinity:	string;
  meltingPoint:	string;
  boilingPoint:	string;
  density:	string;
  yearDiscovered:	string;
}

function ElementDetails() {
    const { handleModal } = useContext(ModalContext);
    const { darkMode } = useContext(DarkModeContext); 
    const router = useRouter()
    const { id } = router.query;
    const [data, setData] = useState<DataProps>();  
    const { returnHref } = useContextualRouting();
    
    useEffect(() => {
      const fetchData = async () => {
        if(id != ''){
          const response = await fetch(`http://localhost:3000/api/elements?id=${id}`);
          const data = await response.json();

          setData(data);
        }     
      };
        
      fetchData();
    }, [id])

    const handleCloseModal = () =>{
        router.push(returnHref, undefined, { shallow: true });
        handleModal();
    }

    const checkIfDataIsLoading = (data) => {        
        return data ?? 'Loading ...';
    }

    return (
        <Container darkMode={darkMode}>
            <div>
                <sub onClick={handleCloseModal}>&#10006;</sub>
                <span>{checkIfDataIsLoading(data?.number)}</span>
                <p>{checkIfDataIsLoading(data?.id)}</p>
                <b>{checkIfDataIsLoading(data?.name)}</b>
                <span>{checkIfDataIsLoading(data?.type)}</span>
            </div>
            <ul>
                <li>
                    <span>Standard state</span> <span>{checkIfDataIsLoading(data?.standardState)}</span>
                </li>
                <li>
                    <span>Atomic Mass</span> <span>{checkIfDataIsLoading(data?.atomicMass)}</span>
                </li>
                <li>
                    <span>Electron Configuration</span> <span>{checkIfDataIsLoading(data?.electronConfiguration)}</span>
                </li>
                <li>
                    <span>Oxidation States</span> <span>{checkIfDataIsLoading(data?.oxidationStates)}</span>
                </li>
                <li>
                    <span>Electronegativity (Pauling Scale)</span>{' '}
                    <span>{checkIfDataIsLoading(data?.electronegativity)}</span>
                </li>
                <li>
                    <span>Atomic Radius (van der Waals)</span>{' '}
                    <span>{checkIfDataIsLoading(data?.atomicRadius)}</span>
                </li>
                <li>
                    <span>Ionization Energy</span> <span>{checkIfDataIsLoading(data?.ionizationEnergy)}</span>
                </li>
                <li>
                    <span>Electron Affinity</span> <span>{checkIfDataIsLoading(data?.electronAffinity)}</span>
                </li>
                <li>
                    <span>Melting Point</span> <span>{checkIfDataIsLoading(data?.meltingPoint)}</span>
                </li>
                <li>
                    <span>Boiling Point</span> <span>{checkIfDataIsLoading(data?.boilingPoint)}</span>
                </li>
                <li>
                    <span>Density</span> <span>{checkIfDataIsLoading(data?.density)}</span>
                </li>
                <li>
                    <span>Year Discovered</span> <span>{checkIfDataIsLoading(data?.yearDiscovered)}</span>
                </li>
            </ul>
        </Container>
    );
};

export default ElementDetails;
