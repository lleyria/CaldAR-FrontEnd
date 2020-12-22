import React from 'react';
import PropTypes from "prop-types";

const BuildingItems = (props) => {
    return (
        <div className='box'>
            <ul>
                <li className='id1'>{ props.building.id }</li>
                <li>{ props.building.buildingName}</li>
                <li>{ props.building.companyName}</li>
                <li>{ props.building.address}</li>
                <li>{ props.building.managerName}</li>
                <li>{ props.building.phone}</li>
                <li className='id'>{ props.building.boilersId}</li>
                <li className='id'>{ props.building.boilersTypes}</li>
                <button  className='X'>X</button>
                <button  className='M'>M</button>  
            </ul>
    </div>
    );
  };
  
  // PropTypes
  BuildingItems.propTypes = {
    building: PropTypes.object.isRequired,
  };
  
  export default BuildingItems;