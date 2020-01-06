import React from "react";
import "./item-details.css";

const ItemDetails = (props) => {
    const {item} = props;
    const renderItems = React.Children.map(props.children,
        el => React.cloneElement(el, {item}));
    return (
        <div className="item-details-wrapper">
            <img className="item-image" src={item.imageUrl} alt={"Image of " + item.name}/>
            <ul className="list-group">
                {renderItems}
            </ul>
        </div>
    )

};

export default ItemDetails;