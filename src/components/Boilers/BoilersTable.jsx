import React from "react";
import PropTypes from "prop-types";
import Boiler from "./Boiler";

const BoilersTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
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
            <Boiler key={boiler.id} boiler={boiler} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes
BoilersTable.propTypes = {
  boilers: PropTypes.array.isRequired,
};

export default BoilersTable;
