import React, {Component} from "react";
import LoadingIndicator from "../loading-indicator";
import ErrorIndicator from "../error-indicator";

const withData = (Wrapped) => class extends Component {
        static defaultProps = {
            itemId: 2
        };

        state = {
            data: [],
            loading: true,
            error: false
        };

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if(prevProps.getData != this.props.getData ||
            prevProps.itemId != this.props.itemId) this.update();
        }

    update = () => {
            this.setState({loading: true,error:false});

            this.props.getData(this.props.itemId)
                .then(data => this.setState({data,loading: false}))
                .catch((error) => {console.log(error);

                    this.setState({error:true,loading:false})});
        };

        render = () => {
            const {loading,error,data} = this.state;

            if(error) return <ErrorIndicator/>;
            else if(loading) return <LoadingIndicator/>;
            return <Wrapped {...this.props} data={data}/>
        };
};

export default withData;


