import React from "react";
import PropTypes from "prop-types";
import "./BoilerType.css";

const BoilerType = (props) => {
  const handleUpdateItem = () => {
    props.onUpdate(props.boilerType.id);
  };

  const handleDeleteItem = () => {
    props.onDelete(props.boilerType.id);
  };

  return (
    <tr className="boilerTypeRow">
      <td>{props.boilerType.description}</td>
      <td>{props.boilerType.type}</td>
      <td>{props.boilerType.maxCapacity}</td>
      <td>{props.boilerType.temperatureRange}</td>
      <td>{props.boilerType.weight}</td>
      <td>{props.boilerType.monthlyMaintenanceTime}</td>
      <td className="icons">
        <i className="fas fa-pen" onClick={handleUpdateItem} />
        <i className="fas fa-trash" onClick={handleDeleteItem} />
      </td>
    </tr>
  );
};

// PropTypes
BoilerType.propTypes = {
  boilerType: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BoilerType;
