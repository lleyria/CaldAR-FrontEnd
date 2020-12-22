import React, { useState } from 'react';
import TechMockData from '../../data/Technicians.json';
import TechTable from './TechTable';
import TechForm from './TechForm';

const Techs = () => {
    const [technicians, setTechnicians] = useState(TechMockData);

    const handleSubmit = (technician) => {
        setTechnicians([...technicians, technician]);
    };

    return(
        <div className = 'Technicians'>
            <TechTable technicians = {technicians} />
            <TechForm onSubmit = {handleSubmit} />
        </div>
    );
};

export default Techs;