import React from "react";
import PropTypes from "prop-types";
import "./Boiler.css";
import { connect } from "react-redux";
import { delBoiler } from "../../redux/actions/boilersActions";

const Boiler = ({ boiler, delBoiler }) => {
  const handleUpdateItem = () => {
    // onUpdate(boiler.id);
  };

  return (
    <tr className="boilerRow">
      <td>{boiler.lot}</td>
      <td>{boiler.companyName}</td>
      <td>{boiler.boilerType}</td>
      <td>{boiler.installationDate}</td>
      <td>{boiler.fabricationDate}</td>
      <td>{boiler.expirationDate}</td>
      <td className="icons">
        <i className="fas fa-pen" onClick={handleUpdateItem} />
        <i className="fas fa-trash" onClick={(id) => {delBoiler(boiler.id)}} />
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

export default connect(null, { delBoiler })(Boiler);
