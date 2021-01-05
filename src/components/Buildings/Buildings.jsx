import React, {useEffect} from 'react';
import BuildingsTable from './BuildingsTable';
import Header from './Header';
import AddBuilding from './AddBuilding';
import PropTypes from "prop-types";
import './Buildings.css';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBuildings,
          addBuilding,
          delBuilding,
          updateBuilding } from '../../redux/actions/buildingsActions'

const Buildings = (props) => {
    const store = useStore();
    const buildings = props.list;
    useEffect(() => {
      props.getBuildings();
    }, [props.getBuildings])
    
    return (
      <div className="buildings">
        <Header />
        <BuildingsTable buildings={buildings}
        />
        <AddBuilding
        /> 
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      buildings: state.buildings,
      list: state.buildings.list
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getBuildings: getBuildings,
        addBuilding: addBuilding,
        delBuilding: delBuilding,
        updateBuilding: updateBuilding,
      },
      dispatch
    );
  };

  // PropTypes
Buildings.propTypes = {
  getBuildings: PropTypes.func,
  delBuilding: PropTypes.func,
  updateBuilding: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object)
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Buildings);