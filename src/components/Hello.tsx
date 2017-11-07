import * as React from "react";
import './Hello.scss';

export interface HelloProps {
    id: string;
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div id={this.props.id} className="Hello"><h1>Hello from {this.props.compiler} and {this.props.framework}! Cool, eh?</h1></div>;
    }
}
