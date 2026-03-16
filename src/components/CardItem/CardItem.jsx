import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import IconArrow from "./images/arrow.svg?react";
import productImage from "./images/product.png";
import IconChevronDown from "./images/ChevronDown.svg?react";
import IconShoppingCart from "./images/ShoppingCart.svg?react";
import "./CardItem.scss";

const CardItem = ({ product }) => {
    const [volume, setVolume] = useState(product.selected_volume_id);
    const [open, setOpen] = useState(false);
    const [added, setAdded] = useState(false);

    const currentVolume = product.volumes.find(
        v => v.id === volume
    );

    const hasMultipleVolumes = product.volumes.length > 1;


    const handleAddToCart = () => {
        if (!product.in_stock) return;
        setAdded(true);
    };

    return (
        <div className="card">
            <div className="card__img">
                {/* <img src={`/images/${product.image}`} alt={product.name} /> */}
                <img src={productImage} alt={product.name}/>
            </div>
            <div className="card__prices">
                <p className="card__oldprice">{product.old_price}</p>
                <p className="card__price">{product.price} {product.currency}</p>
                <div className="card__discount">
                    <IconArrow className="icon-arrow"/>
                    <p className="discount">{product.discount_percent}%</p>
                </div>
            </div>
            <div className="card__descr">
                <p className="card__name">{product.name}</p>
            </div>
            <div className="card__valores">
                <p className="card__rating">⭐ {product.rating}</p>
                <p className="card__rating count">{product.reviews_count}</p>
            </div>
            <div className="card__otros">
                <p className={`card__stock ${product.in_stock ? "in-stock" : "out-stock"}`}>
                    {product.in_stock ? "В наличии" : "Товар отсутствует"}
                </p>
                <p className="card__category">{product.category}</p>
            </div>
            <div className="card__volum-cesta">
                {hasMultipleVolumes && (
                    <div
                        className="volum__selected"
                        onClick={() => setOpen(!open)}
                    >
                        {currentVolume?.label} <IconChevronDown />
                    </div>
                )}
                {hasMultipleVolumes && open && (
                    <ul className="volum__dropdown">
                        {product.volumes.map((v) => (
                            <li
                                key={v.id}
                                className={!v.in_stock ? "disabled" : ""}
                                onClick={() => {
                                    if (!v.in_stock) return;
                                    setVolume(v.id);
                                    setOpen(false);
                                }}
                            >
                                {v.label}
                            </li>
                        ))}
                    </ul>
                )}
                <div className={`card__cesta ${!hasMultipleVolumes ? "full" : ""}`}>
                    <Button onClick={handleAddToCart} disabled={!product.in_stock}>
                        <IconShoppingCart />
                        {added ? "В корзине" : "В корзину"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    product: PropTypes.object,
};

export default CardItem;