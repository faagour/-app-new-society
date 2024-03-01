import React, { useState, useEffect } from 'react';

// Utilisez axios ou une autre bibliothèque pour faire des requêtes HTTP
// Si vous utilisez Create React App, vous pouvez installer axios via npm ou yarn
// npm install axios ou yarn add axios
import axios from 'axios';

function BranchSelectComponent({ label, onChange }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
      const fetchBranches = async () => {
        try {
          const response = await axios.get('https://api.lasocietenouvelle.org/metadata/branches');
          if (response.data && response.data.meta) {
            const optionsFromApi = response.data.meta.map(option => ({
              value: option.code,
              label: option.label,
            }));
            setOptions(optionsFromApi);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des branches:', error);
        }
      };

      fetchBranches();
    }, []);

    return (
      <div>
        <label>{label}</label>
        <select onChange={onChange} style={{ width: '200px' }}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }

    export default BranchSelectComponent;
