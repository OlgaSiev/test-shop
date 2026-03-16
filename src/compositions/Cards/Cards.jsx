import React from "react";
import CardItem from "@/components/CardItem/CardItem";
import "./Cards.scss";

const Cards = ({products}) => {
    return (
        <div className="cards__wrapper">
                    {products.map((product) => (
                        <CardItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
    )
}

export default Cards;