import React from 'react';
// import TechMockData from '../../data/Technicians.json';
import TechTable from './TechTable';
import TechForm from './TechForm';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Techs = ({ formVisible }) => {
    return (
        <div className = 'Technicians'>
            <TechTable />
            <AddButton />
            {formVisible && <TechForm />}
        </div>
    );
};

Techs.propTypes = {
    formVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        formVisible: state.techReducer.formVisible,
    };
};

export default connect(mapStateToProps, null)(Techs);