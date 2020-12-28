import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ width, height, children }) => {
    const [xPosition, setX] = useState(-width);

    const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    };

    useEffect(() => {
        setX(0);
    }, []);

    return (
        <React.Fragment>
            <div
            className = 'side-bar'
            style = {{
                transform: `translatex(${xPosition}px)`,
                width: width,
                minHeight: height
            }}
            >
                <button
                onClick = {() => toggleMenu()}
                className = 'toggle-menu'
                style = {{
                    transform: `translate(${width}px, 20vh)`
                }}
                >Menu</button>
                <div className = 'content'>{children}</div>
            </div>
        </React.Fragment>
    );
};

// PropTypes
Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired,
};

export default Sidebar;