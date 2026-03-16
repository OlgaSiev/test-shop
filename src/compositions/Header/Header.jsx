import React from "react";
import { Link } from "react-router-dom";
import Container from "@/layout/Container/Container";

import IconLogo from "./icons/logo.svg?react";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/" className="logo">
                            <IconLogo />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;

