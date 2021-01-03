import React from "react";
import PropTypes from "prop-types";
import "./Boiler.css";
import { connect } from "react-redux";
import { delBoiler, showForm } from "../../redux/actions/boilersActions";

const Boiler = ({ boiler, delBoiler, showForm }) => {
  return (
    <tr className="boilerRow">
      <td>{boiler.lot}</td>
      <td>{boiler.companyName}</td>
      <td>{boiler.boilerType}</td>
      <td>{boiler.installationDate}</td>
      <td>{boiler.fabricationDate}</td>
      <td>{boiler.expirationDate}</td>
      <td className="icons">
        <i
          className="fas fa-pen"
          onClick={() => {
            showForm(boiler.id);
          }}
        />
        <i
          className="fas fa-trash"
          onClick={() => {
            delBoiler(boiler.id);
          }}
        />
      </td>
    </tr>
  );
};

// PropTypes
Boiler.propTypes = {
  boiler: PropTypes.object.isRequired,
  delBoiler: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delBoiler: (id) => dispatch(delBoiler(id)),
    showForm: (id) => dispatch(showForm(id)),
  };
};

export default connect(null, mapDispatchToProps)(Boiler);
