import React from "react";
import {LinearProgress} from "@material-ui/core";

type LoaderProps = {
    loader: () => Promise<JSX.Element>
};
type LoaderState = {
    component: JSX.Element|null,
    promise: boolean,
};

class Loader extends React.Component<LoaderProps,LoaderState>{
    constructor(props: LoaderProps, context: any) {
        super(props,context);

        this.state = {
            component: null,
            promise: false,
        };
    }

    componentDidMount() {
        this.refresh();
    }

    async refresh(){
        if (this.state.promise){
            return;
        }

        this.setState({
            component: null,
            promise: true,
        })

        this.props.loader().then((el) => {
            this.setState({
                component: el,
                promise: false,
            })
        });

        return;
    }

    render() {
        if (this.state.promise || this.state.component === null){
            return (
                <LinearProgress/>
            );
        }
        return  this.state.component;
    }
}

export default Loader;