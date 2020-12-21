import React from "react";
import PropTypes from "prop-types";

const Boiler = (props) => {
  return (
    <tr>
      <td>{props.boiler.lot}</td>
      <td>{props.boiler.companyName}</td>
      <td>{props.boiler.boilerType}</td>
      <td>{props.boiler.installationDate}</td>
      <td>{props.boiler.fabricationDate}</td>
      <td>{props.boiler.expirationDate}</td>
      <td>
        <i className="fas fa-pen" />
        <i className="fas fa-trash" />
      </td>
    </tr>
  );
};

// PropTypes
Boiler.propTypes = {
  boiler: PropTypes.object.isRequired,
};

export default Boiler;
