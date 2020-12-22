import React from "react";
import PropTypes from "prop-types";
import Boiler from "./Boiler";
import "./BoilersTable.css";

const BoilersTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr className="container">
            <th>Lot</th>
            <th>Company Name</th>
            <th>Boiler Type</th>
            <th>Installation Date</th>
            <th>Fabrication Date</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.boilers.map((boiler) => (
            <Boiler key={boiler.id} boiler={boiler} onDelete={props.onDeleteItem} onUpdate={props.onUpdateItem}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes
BoilersTable.propTypes = {
  boilers: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default BoilersTable;
