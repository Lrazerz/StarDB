import React, {Component} from "react";
import "./item-details.scss";

export default class ItemDetails extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.itemId != prevProps.itemId) this.update();
    }

    update = () => {
        this.props.getData().then(data => this.setState({data, loading: false}))
    };

    render = () => {
        const {item} = this.props;
        const renderItems = React.Children.map(this.props.children,
            el => React.cloneElement(el, {item}));

        return (
            <div className="item-details-wrapper">
                <img className="item-image" src={item.imageUrl} alt={"Image of " + item.name}/>
                <ul className="list-group">
                    <li className="item-name list-group-item">{item.name}</li>
                    {renderItems}
                </ul>
            </div>
        )
    }

};
