import React from 'react';
import BuildingsTable from './BuildingsTable';
import Header from './Header';
import AddBuilding from './AddBuilding';
import './Buildings.css'
import { connect, useStore } from 'react-redux';

const Buildings = () => {
    const store = useStore();
    const buildings = store.getState().buildings;
    
    return (
      <div className="buildings">
        <Header />
        <BuildingsTable buildings={buildings}
        />
        <AddBuilding
        /> 
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      buildings: state.buildings,
    };
  };
  
export default connect(mapStateToProps)(Buildings);