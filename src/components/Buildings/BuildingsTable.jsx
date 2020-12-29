import React from "react";
import PropTypes from "prop-types";
import BuildingItems from "./BuildingItems";

const BuildingsTable = ({buildings, delBuilding, updateBuilding}) => {
  return (
    <div>
      {buildings.map((building) => (
        <BuildingItems key={building.id} building={building}
        delBuilding={delBuilding}
        updateBuilding={updateBuilding}
         />
      ))}
    </div>
  );
};

// PropTypes
BuildingsTable.propTypes = {
  buildings: PropTypes.array.isRequired,
  delBuilding: PropTypes.func,
  updateBuilding: PropTypes.func,
};


export default BuildingsTable;