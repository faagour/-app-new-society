import React, { useState, useEffect } from 'react';
import SelectComponent from './SelectComponent';
import BranchSelectComponent from './BranchSelectComponent';
import GraphComponent from './GraphComponent';

function App() {
  const [selectedAggregate, setSelectedAggregate] = useState('GHG');
  const [selectedBranch, setSelectedBranch] = useState('AZ');
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch('https://api.lasocietenouvelle.org/macrodata/macro_fpt_a38?indic=GHG&branch=AZ&aggregate=PRD&year=2019&area=FRA&currency=CPEUR', options)
      .then(response => response.json())
      .then(response => {
        const formattedData = response.data.map(item => ({
          name: item.year,  // XAxis expects 'name'
          uv: item.value,   // Line component for UV expects 'uv'
          // Si vous avez d'autres lignes ou valeurs, ajoutez-les ici avec des clés correspondantes
        }));
        setData(formattedData);
      })
      .catch(err => console.error(err));
  }, []);
  


    const handleAggregateChange = (event) => {
      setSelectedAggregate(event.target.value);
    };
  
    const handleBranchChange = (event) => {
      setSelectedBranch(event.target.value);
    };
  
    return (

    

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center' // Pour centrer le texte également
      }}>
      
        Courbes d'évolution
      
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <SelectComponent
            label="Agrégat"
            options={[/* Options d'agrégat ici */]}
            onChange={handleAggregateChange}
          />
          
          <BranchSelectComponent
            label="Branche"
            options={[/* Options de branche ici */]}
            onChange={handleBranchChange}
          />
        </div>
      
        <GraphComponent data={data} />
      </div>
      
      
    );
  }
  
  export default App;
  
