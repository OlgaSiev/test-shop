import React from "react";
import Container from "@/layout/Container/Container";

import IconSearch from "./icons/Search.svg?react";

import "./Search.scss";

const Search = ({searchQuery, setSearchQuery}) => {
    const handleClear = () => {
        setSearchQuery("");
    };

    return (
        <div className="search">
            <Container>
                <div className="search__menu">
                    <IconSearch className="search__icon"/>       
                    <input
                        type="text"
                        placeholder="Поиск..."
                        className="search__input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {searchQuery && (
                        <button className="search__clear-btn" onClick={handleClear}>
                            ×
                        </button>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Search;