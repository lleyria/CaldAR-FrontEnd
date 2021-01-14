import React from "react";
import PropTypes from "prop-types";
import BoilerType from "./BoilerType";
import "./BoilersTypeTable.css";

const BoilersTypeTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr className="headerContainer">
            <th>Description</th>
            <th>Type</th>
            <th>Max Capacity</th>
            <th>Temperature Range</th>
            <th>Weight</th>
            <th>Expected Time for Monthly Maintenance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.boilersType.map((boilerType) => (
            <BoilerType
              key={boilerType.id}
              boilerType={boilerType}
              onDelete={props.onDeleteItem}
              onUpdate={props.onUpdateItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes
BoilersTypeTable.propTypes = {
    boilersType: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
  };
  
  export default BoilersTypeTable;
