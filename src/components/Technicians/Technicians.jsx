import React, { useState } from 'react';
import TechMockData from '../../data/Technicians.json';
import TechTable from './TechTable';
import TechForm from './TechForm';
import AddButton from './AddButton';

const Techs = () => {
    const [technicians, setTechnicians] = useState(TechMockData);
    const [formVisible, setFormVisible] = useState(false);
    const [initialFormState, setInitialFormState] = useState(null);

    const showForm = (id) => {
        setFormVisible(true);
        if (id) {
            const result = technicians.filter((technician) => technician.id === id);
            setInitialFormState(result.length !== 0 ? result[0] : null);
        } else {
            setInitialFormState(null);
        }
    };

    const handleSubmit = (technician) => {
        setFormVisible(false);
        if (initialFormState) {
            setTechnicians(
                technicians.map((element) => {
                    if (element.id === technician.id) {
                        element.id = technician.id;
                        element.firstName = technician.firstName;
                        element.lastName = technician.lastName;
                        element.email = technician.email;
                        element.boilersType = technician.boilersType;
                        element.professionalLevel = technician.professionalLevel;
                        element.hourRate = technician.hourRate;
                        element.monthlyCapacity = technician.monthlyCapacity;
                    }
                    return element;
                })
            );
        } else {
            setTechnicians([...technicians, technician]);
        }
    };

    const handleDeleteItem = (id) => {
        setTechnicians(technicians.filter((technician) => technician.id !== id));
    };

    return (
        <div className = 'Technicians'>
            <TechTable
                technicians = {technicians}
                onDeleteItem = {handleDeleteItem}
                onUpdateItem = {showForm}
            />
            <AddButton showForm = {showForm} />
            {formVisible && (
                <TechForm onSubmit = {handleSubmit} initialState = {initialFormState} />
            )}
        </div>
    );
};

export default Techs;