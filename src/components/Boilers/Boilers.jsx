import React from "react";
import PropTypes from "prop-types";
import BoilersTable from "./BoilersTable";
// import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import Modal from "../SharedComponents/Modal/Modal";

const Boilers = () => {
  return (
    <div className="Boilers">
      <BoilersTable />
      <AddButton />
      {/* {formVisible && <BoilerForm />} */}
      <Modal></Modal>
    </div>
  );
};

Boilers.propTypes = {
  formVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formVisible: state.boilersReducer.formVisible,
  };
};

export default connect(mapStateToProps, null)(Boilers);
