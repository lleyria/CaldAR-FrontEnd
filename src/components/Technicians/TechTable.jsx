import React from 'react';
import PropTypes from 'prop-types';
import Tech from './Tech';
import './TechTable.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const TechTable = (props) => {
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
                    {props.technicians.map((technician) =>(
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
    onDeleteItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

const mapStateToProps = (state) => {
return {
};
};

export default connect(mapStateToProps, mapDispatchToProps)(TechTable);