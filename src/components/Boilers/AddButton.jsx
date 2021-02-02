import React from "react";
import PropTypes from "prop-types";
import "./AddButton.css";
import { showModal } from "../../redux/actions/modalActions";
import { ADD_BOILER } from "../../redux/types/modalTypes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const AddButton = ({ showModal }) => {
  return (
    <i
      className="fas fa-plus-circle add-button"
      onClick={() => showModal(ADD_BOILER)}
    />
  );
};

// PropTypes
AddButton.propTypes = {
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModal,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(AddButton);
