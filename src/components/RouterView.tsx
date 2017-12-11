import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthenticatedRoute } from './AuthenticatedRoute';
import { Estimation } from './Estimation';
import { LoginView } from './LoginView';
import { TimeEntry } from './TimeEntry';

interface IRouterViewProps {
  className?: string;
}

export class RouterView extends React.Component<IRouterViewProps, {}> {
  public render() {
    return (
      <div className={this.props.className || 'router-view'}>
        {/* Workaround since Electron loading the index.html from file doesn't allow us to just match the path
            with /index.html */}
        {window.location.pathname.includes('index.html') && <Redirect to='/time_entry' />}
        <AuthenticatedRoute exact path='/'><Redirect to='/time_entry'/></AuthenticatedRoute>
        <AuthenticatedRoute path='/time_entry' component={TimeEntry} />
        <AuthenticatedRoute path='/estimation' component={Estimation} />
        <Route path='/login' component={LoginView} />
      </div>
    );
  }
}
