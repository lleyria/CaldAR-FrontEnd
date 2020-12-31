import React from "react";
import BoilersTable from "./BoilersTable";
import BoilerForm from "./BoilerForm";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { ADD_BOILER, UPDATE_BOILER } from "../../redux/types/boilersConstants";
import { addBoiler } from "../../redux/actions/boilersActions";

const Boilers = ({ boilers, formVisible, initialFormState, addBoiler }) => {
  const showForm = (id) => {
    setFormVisible(true);
    if (id) {
      const result = boilers.filter((boiler) => boiler.id === id);
      setInitialFormState(result.lenght !== 0 ? result[0] : null);
    } else {
      setInitialFormState(null);
    }
  };

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

  const handleDeleteItem = (id) => {
    setBoilers(boilers.filter((boiler) => boiler.id !== id));
  };

  return (
    <div className="Boilers">
      <BoilersTable
        boilers={boilers}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={showForm}
      />
      <AddButton showForm={showForm} />
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
  return {
    boilers: state.boilersReducer.boilers,
    formVisible: state.boilersReducer.formVisible,
    initialFormState: state.boilersReducer.initialFormState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);
