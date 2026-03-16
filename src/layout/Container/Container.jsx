import React from "react";
import PropTypes from "prop-types";
import './Container.scss';

const Container = ({children}) => {
    return (
        <div className="g-container">
            {children}
        </div>
    )
}

Container.defaultProps = {
    children: null,
}

Container.propTypes = {
    children: PropTypes.any,
}

export default Container;