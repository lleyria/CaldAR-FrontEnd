import React from 'react'

const Header = () => {
        return (
            <div className='head'>
                <ul>
                <li className='id-column'>Id</li>
                <li>Building Name</li>
                <li>Company Name</li>
                <li>Address</li>
                <li>Manager Name</li>
                <li>Phone Number</li>
                <li className='short-column'>Boilers Id</li>
                <li className='short-column'>Boilers Types</li>
                <li className='short-column'>Actions</li>
            </ul>
            </div>
        )
    }

export default Header