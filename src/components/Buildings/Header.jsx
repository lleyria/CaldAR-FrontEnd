import React from 'react'

const Header = () => {
        return (
            <div className='head'>
                <ul>
                <li className='id-column-header'>Id</li>
                <li>Building Name</li>
                <li>Company Name</li>
                <li>Address</li>
                <li>Manager Name</li>
                <li>Phone Number</li>
                <li className='id-column-header'>Boilers Id</li>
                <li className='id-column-header'>Boilers Types</li>
                <li className='id-column-header'>Actions</li>
            </ul>
            </div>
        )
    }

export default Header