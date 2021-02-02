import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import BoilerForm from "../../Boilers/BoilerForm";
import RemoveBoilerMessage from "../../Boilers/RemoveBoilerMessage";
import {
  UPDATE_BOILER,
  DELETE_BOILER,
  ADD_BOILER,
} from "../../../redux/types/modalTypes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { closeModal } from "../../../redux/actions/modalActions";

function Modal({ title, children, show, meta, modalType }) {
  const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
      position: "absolute",
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  let modalComponent;
  switch (modalType) {
    case ADD_BOILER:
      modalComponent = <BoilerForm />;
      break;
    case UPDATE_BOILER:
      modalComponent = <BoilerForm initialState={meta} />;
      break;
    case DELETE_BOILER:
      modalComponent = <RemoveBoilerMessage boilerId={meta.id} />;
      break;
    default:
      modalComponent = null;
      break;
  }

  return (
    <Dialog
      open={show}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div>{children}</div>
      </DialogContent>
      {modalComponent}
    </Dialog>
  );
}

// PropTypes
Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  meta: PropTypes.object,
  modalType: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModal,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modalReducer.show,
    modalType: state.modalReducer.modalType,
    meta: state.modalReducer.meta,
  };
};

// export default Modal;
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
