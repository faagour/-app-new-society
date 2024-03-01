import { useState, useEffect } from 'react';
import axios from 'axios';
export const useApi = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(url);
          setData(result.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
  
      fetchData();
    }, [url]);
  
    return data;
  };