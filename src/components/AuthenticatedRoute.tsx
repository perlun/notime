import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SessionService } from '../services/SessionService';

// Based on an idea at
// https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4

interface IAuthenticatedRouteProps {
    exact?: boolean;
    path: string;
    location?: string;

    // TODO: Figure out what these should be.
    component?: any;
    children?: any;
}

export class AuthenticatedRoute extends React.Component<IAuthenticatedRouteProps, {}> {
    public path: string;

    public render() {
        return (
            SessionService.isAuthenticated ?
                <Route
                    exact={this.props.exact}
                    path={this.props.path}
                    component={this.props.component}>
                    {this.props.children}
                </Route>
            :
                <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />
        );
    }
}
