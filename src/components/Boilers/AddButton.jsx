import React from "react";
import PropTypes from "prop-types";
import "./AddButton.css";
import { connect } from "react-redux";
import { showForm } from "../../redux/actions/boilersActions";

const AddButton = ({ showForm }) => {
  return (
    <i className="fas fa-plus-circle add-button" onClick={() => showForm()} />
  );
};

// PropTypes
AddButton.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default connect(null, { showForm })(AddButton);
