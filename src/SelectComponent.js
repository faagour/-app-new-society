import React, { useState, useEffect } from 'react';


import axios from 'axios';

function SelectComponent({ label, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchAggregates = async () => {
      try {
        const response = await axios.get('https://api.lasocietenouvelle.org/metadata/aggregates');
        if (response.data && response.data.meta) {
          const filteredOptions = response.data.meta.filter(option =>
            ['PRD', 'IC', 'CFC', 'NVA'].includes(option.code)
          ).map(option => ({
            value: option.code,
            label: option.label,
          }));
          setOptions(filteredOptions);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des agrégats:', error);
      }
    };

    fetchAggregates();
  }, []);

  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
        }


export default SelectComponent;





