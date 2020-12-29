import React, { useState } from 'react';
import buildingBD from '../../data/mock_buildings.json';
import BuildingsTable from './BuildingsTable';
import Header from './Header';
import AddBuilding from './AddBuilding';
import './Buildings.css'

const Buildings = () => {
    const [buildings, setBuildings] = useState(buildingBD);

      const delBuilding = (id) => {
         setBuildings(buildings.filter(building => building.id !== id))
       }
      const handleSubmit = (building) => {
        setBuildings([...buildings, building]);
      };
      const updateBuilding = (updated) =>{
          setBuildings(buildings.map((building) => {
              if(building.id === updated.id) {
                building = updated;
                return updated ;
              }
              return building;
          }))
      }

    return (
      <div className="buildings">
        <Header />
        <BuildingsTable buildings={buildings}
        delBuilding={delBuilding}
        updateBuilding={updateBuilding}
        />
        <AddBuilding
        onSubmit={handleSubmit}
        /> 
      </div>
    );
  };

  export default Buildings;