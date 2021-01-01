import React from "react";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { ADD_BOILER, UPDATE_BOILER } from "../../redux/types/boilersConstants";
import { addBoiler } from "../../redux/actions/boilersActions";

const Boilers = ({ boilers, formVisible, initialFormState, addBoiler }) => {
  const handleSubmit = (boiler) => {
    setFormVisible(false);
    if (initialFormState) {
      setBoilers(
        boilers.map((element) => {
          if (element.id === boiler.id) {
            element.id = boiler.id;
            element.lot = boiler.lot;
            element.companyName = boiler.companyName;
            element.boilerType = boiler.boilerType;
            element.installationDate = boiler.installationDate;
            element.fabricationDate = boiler.fabricationDate;
            element.expirationDate = boiler.expirationDate;
          }
          return element;
        })
      );
    } else {
      addBoiler(boiler);
    }
  };

  return (
    <div className="Boilers">
      <BoilersTable
        boilers={boilers}
        // onDeleteItem={handleDeleteItem}
        // onUpdateItem={showForm}
      />
      <AddButton />
      {formVisible && (
        <BoilerForm onSubmit={handleSubmit} initialState={initialFormState} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoiler: (boiler) => dispatch(addBoiler(boiler)),
    // updateBoiler: (boiler) =>
    //   dispatch({ type: UPDATE_BOILER, payload: boiler }),
  };
};

const mapStateToProps = (state) => {
  return state.boilersReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);
