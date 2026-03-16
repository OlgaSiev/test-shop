import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
    const {
        onClick,
        type,
        className,
        href,
        to,
        children,
        isOutline,
        isPrimary,
		isSecondary,
		isOutlinePrimary,
		isOutlineSecondary,
		isText,
		...restProps
    } = props
    
    let Element = href ? "a" : "button";

    if(to) {
        Element = Link;
    }

    return (
        <Element 
            type={href || to ? undefined : type}
            className={cn(
                "button", 
                {"outline": isOutline},
                {'btn-primary': isPrimary},
				{'btn-secondary': isSecondary},
				{'btn-outline-primary': isOutlinePrimary},
				{'btn-outline-secondary': isOutlineSecondary},
				{'btn-light': isText},
				className
            )}
            onClick={onClick}
            href={href}
            to={to}
            {...restProps}
        >
         {children}   
        </Element>
    );
};

Button.defaultProps = {
	onClick: () => {
	},
	type: "button",
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.any,
    isOutline: PropTypes.bool,
    isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isOutlinePrimary: PropTypes.bool,
	isOutlineSecondary: PropTypes.bool,
	isText: PropTypes.bool,
    restProps: PropTypes.object,
}

export default Button;
