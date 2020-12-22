import React from "react";
import PropTypes from "prop-types";
import BuildingItems from "./BuildingItems";

const BuildingsTable = (props) => {
  return (
    <div>
      {props.buildings.map((building) => (
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