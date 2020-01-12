import React, {Component} from "react";

import "./error-boundary.scss";

export default class ErrorBoundary extends Component {

    state = {
        isError: false,
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error,isError: true});
        console.log(error);
    }

    render = () => {
        if(this.state.error) return <div>Error</div>;
        return this.props.children;
    };
}