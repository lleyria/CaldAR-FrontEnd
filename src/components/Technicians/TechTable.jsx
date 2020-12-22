import React from 'react';
import PropTypes from 'prop-types';
import Tech from './Tech';

const techTable = (props) => {
    return(
        <div>
            <table>
                <thread>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Boilers Type</th>
                        <th>Professional Level</th>
                        <th>Hour Rate</th>
                        <th>Monthly Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thread>
                <tbody>
                    {props.technicians.map((technician) => (
                        <Tech key={technician.id} technician = {technician} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// PropTypes

techTable.propTypes = {
    technicians: PropTypes.array.isRequired,
};

export default techTable;