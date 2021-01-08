import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tech from './Tech';
import './TechTable.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTechs } from '../../redux/actions/TechActions';

const TechTable = ({ technicians, getTechs }) => {
    useEffect(() => {
        getTechs();
    }, [getTechs]);

    return(
        <div>
            <table>
                <thead>
                    <tr className = 'container'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Boilers Type</th>
                        <th>Professional Level</th>
                        <th>Hour Rate</th>
                        <th>Monthly Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map((technician) =>(
                        <Tech key = {technician.id}
                            technician = {technician}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// PropTypes
TechTable.propTypes = {
    technicians: PropTypes.array.isRequired,
    getTechs: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTechs: getTechs,
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        technicians: state.techReducer.technicians,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TechTable);