import React, { useState } from 'react';
// import TechMockData from '../../data/Technicians.json';
import TechTable from './TechTable';
import TechForm from './TechForm';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
    modal as modalAction,
    } from '../../redux/actions/TechActions';

const Techs = ({ techData, isOpen, modal }) => {
    return (
        <div className = 'Technicians'>
            <TechTable
                technicians = {techData}
            />
            <AddButton showForm = {modal} />
            {isOpen && (
                <TechForm />
            )}
        </div>
    );
};

Techs.propTypes = {
    techData: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool,
    modal: PropTypes.func
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    modal: modalAction
}, dispatch);

const mapStateToProps = (state) => {
    return {
        techData: state.techReducers.techData,
        isOpen: state.techReducers.isOpen
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Techs);