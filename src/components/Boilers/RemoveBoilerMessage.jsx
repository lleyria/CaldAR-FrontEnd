import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { closeModal } from "../../redux/actions/modalActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteBoiler } from "../../redux/actions/boilersActions";

const RemoveBoilerMessage = ({ closeModal, deleteBoiler, boilerId }) => {
  const onDeleteBoiler = () => {
    deleteBoiler(boilerId);
    closeModal();
  };

  return (
    <div>
      Are you sure you want to delete this boiler?
      <div>
        <Button type="button" onClick={closeModal}>Cancel</Button>
        <Button type="button" onClick={onDeleteBoiler}>Confirm</Button>
      </div>
    </div>
  );
};

// PropTypes
RemoveBoilerMessage.propTypes = {
  deleteBoiler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  boilerId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteBoiler: deleteBoiler,
      closeModal: closeModal,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RemoveBoilerMessage);
