import React from "react";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";

const Boilers = ({ boilers, formVisible, initialFormState }) => {
  return (
    <div className="Boilers">
      <BoilersTable boilers={boilers} />
      <AddButton />
      {formVisible && <BoilerForm initialState={initialFormState} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.boilersReducer;
};

export default connect(mapStateToProps, null)(Boilers);
