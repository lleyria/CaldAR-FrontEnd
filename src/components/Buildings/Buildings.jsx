import React, { useState } from 'react';
import buildingBD from '../../data/mock_buildings.json';
import BuildingsTable from './BuildingsTable';
import Header from './Header'
import './Buildings.css'

const Buildings = () => {
    const [buildings] = useState(buildingBD);

    

    return (
      <div className="buildings">
        <Header />
        <BuildingsTable buildings={buildings} />
      </div>
    );
  };
  
  export default Buildings;