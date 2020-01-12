import React from "react";

import "./item-list.scss";

const ItemList = (props) => {
    const renderItems = props.data
        .map(item =>
            <li className="list-group-item" onClick={() => props.onItemSelected(item.id)} key={item.id}>
                {item.name}
            </li>);

    return (
        <div>
            <ul className="list-group">
                {renderItems}
            </ul>
        </div>);
};

// ItemList.defaultProps = {
//     onItemSelected: () => {}
// };

export default ItemList;