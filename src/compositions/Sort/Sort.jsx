import React, {useState} from "react";
import { pluralizeProducts } from "@/helpers/pluralizeProducts";
import Container from "@/layout/Container/Container";
import IconFrame from "./icons/Frame.svg?react";
import IconChevronDown from "./icons/ChevronDown.svg?react";

import "./Sort.scss";

const Sort = ({ products, totalProducts, sortType, setSortType }) => {
    const [open, setOpen] = useState(false);

    const options = [
        { label: "По популярності", value: "popular" },
        { label: "По ціні ↑", value: "price-asc" },
        { label: "По ціні ↓", value: "price-desc" },
    ];

    const current = options.find(o => o.value === sortType);

    return (
        <div className="sort">
            <Container>
                <div className="sort__wrapper">
                    {totalProducts === 0 ? (
                        <p className="sort__count">
                            Товары не найдены
                        </p>
                    ) : (
                        <p className="sort__count">
                            {totalProducts} {pluralizeProducts(totalProducts)}
                        </p>
                    )}
                    <ul className="sort__list">
                        <li className="sort__item">
                            <IconFrame />
                        </li>
                        <li 
                            className="sort__selected"
                            onClick={() => setOpen(!open)}
                        >
                            {current.label} <IconChevronDown />
                        </li>

                        {open && (
                            <ul className="sort__dropdown">
                                {options.map(option => (
                                    <li
                                    key={option.value}
                                    onClick={() => {
                                        setSortType(option.value);
                                        setOpen(false);
                                    }}
                                    >
                                    {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Sort;

