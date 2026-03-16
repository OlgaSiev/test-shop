import React from "react";
import { Link } from "react-router-dom";
import Container from "@/layout/Container/Container";
import IconMinilogo from "./icons/minilogo.svg?react";
import IconUkr from "./icons/ukr.svg?react";
import IconMasterCard from "./icons/MasterCard.svg?react";
import IconVisa from "./icons/Visa.svg?react";
import IconApplePay from "./icons/ApplePay.svg?react";
import IconGooglePay from "./icons/GooglePay.svg?react";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <ul className="footer__copyright">
                        <li className="footer__item">
                            <IconMinilogo />
                            <IconUkr />
                        </li>
                        <li className="footer__item">
                            <Link to="/" className="footer__link">AQVEX  ©  2026  |  Все права защищены</Link>
                        </li>
                    </ul>
                    <ul className="footer__icons">
                        <li className="footer__item">
                            <Link to="/" className="footer__link"><IconMasterCard /></Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/" className="footer__link"><IconVisa /></Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/" className="footer__link"><IconApplePay /></Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/" className="footer__link"><IconGooglePay /></Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;