import React from "react";

import "./item-list.css";

const ItemList = (props) => {
    const renderItems = props.itemList.map(item => <li className="list-group-item" key={item.id}>{item.name}</li>);
    return (
        <div>
            <ul className="list-group">
                {renderItems}
            </ul>
        </div>);
};

export default ItemList;