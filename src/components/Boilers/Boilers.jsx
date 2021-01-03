import React from "react";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";

const Boilers = ({ formVisible }) => {
  return (
    <div className="Boilers">
      <BoilersTable />
      <AddButton />
      {formVisible && <BoilerForm />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formVisible: state.boilersReducer.formVisible,
  };
};

export default connect(mapStateToProps, null)(Boilers);
