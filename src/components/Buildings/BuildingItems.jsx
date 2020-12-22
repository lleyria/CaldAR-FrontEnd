import React from 'react';
import PropTypes from "prop-types";

const BuildingItems = ({building, delBuilding}) => {
    const {
        id,
        buildingName,
        companyName,
        address,
        managerName,
        phone,
        boilersId,
        boilersTypes} = building;
    return (
        <div className='box'>
            <ul>
                <li className='id1'>{ id }</li>
                <li>{ buildingName }</li>
                <li>{ companyName }</li>
                <li>{ address }</li>
                <li>{ managerName }</li>
                <li>{ phone }</li>
                <li className='id'>{ boilersId }</li>
                <li className='id'>{ boilersTypes }</li>
                <button onClick={() => delBuilding(id)} className='X'>X</button>
                <button  className='M'>M</button> 
            </ul>
    </div>
    );
  };
  
  // PropTypes
  BuildingItems.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func,
    onClick: PropTypes.func,
  };
  
  export default BuildingItems;