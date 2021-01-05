import React from "react";
import PropTypes from "prop-types";
import BuildingItems from "./BuildingItems";

const BuildingsTable = ({buildings}) => {
  console.log(buildings);
  return (
    <div>
      {buildings.map((building) => (
        <BuildingItems key={building.id} building={building}
         />
      ))}
    </div>
  );
};

// PropTypes
BuildingsTable.propTypes = {
  buildings: PropTypes.array.isRequired,
};


export default BuildingsTable;