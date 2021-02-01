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

function Modal({ title, children, show, setOpenModal, meta, modalType }) {
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
    case modalTypes.ADD_BOILER:
      modalComponent = <BoilerForm />;
      break;
    case modalTypes.UPDATE_BOILER:
      modalComponent = <BoilerForm boilerId={meta.id} />;
      break;
    case modalTypes.DELETE_BOILER:
      modalComponent = <RemoveBoilerMessage boilerId={meta.id} />;
      break;
    default:
      modalComponent = null;
      break;
  }

  return (
    <Dialog
      open={show}
      modal={setOpenModal}
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
  title: PropTypes.func,
  setOpenModal: PropTypes.func,
  show: PropTypes.func,
  children: PropTypes.func,
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
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta,
  };
};

// export default Modal;
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
