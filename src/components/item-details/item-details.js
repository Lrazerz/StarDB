import React, {Component} from "react";
import "./item-details.scss";

export default class ItemDetails extends Component {

    render = () => {
        const {data} = this.props;
        const renderItems = React.Children.map(this.props.children,
            el => React.cloneElement(el, {item: data}));

        return (
            <div className="item-details-wrapper">
                <img className="item-image" src={data.imageUrl} alt={"Image of " + data.name}/>
                <ul className="list-group">
                    <li className="item-name list-group-item">{data.name}</li>
                    {renderItems}
                </ul>
            </div>
        )
    }

};
