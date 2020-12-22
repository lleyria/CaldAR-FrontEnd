import React from "react";
import PropTypes from "prop-types";

const Boiler = (props) => {
  const handleUpdateItem = () => {
    props.onUpdate(props.boiler.id);
  };

  const handleDeleteItem = () => {
    props.onDelete(props.boiler.id);
  };

  return (
    <tr>
      <td>{props.boiler.lot}</td>
      <td>{props.boiler.companyName}</td>
      <td>{props.boiler.boilerType}</td>
      <td>{props.boiler.installationDate}</td>
      <td>{props.boiler.fabricationDate}</td>
      <td>{props.boiler.expirationDate}</td>
      <td>
        <i className="fas fa-pen" onClick={handleUpdateItem} />
        <i className="fas fa-trash" onClick={handleDeleteItem} />
      </td>
    </tr>
  );
};

// PropTypes
Boiler.propTypes = {
  boiler: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Boiler;
