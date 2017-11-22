import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Estimation } from './Estimation';
import { TimeEntry } from './TimeEntry';

export class RouterView extends React.Component<{}, {}> {
  public render() {
    // TODO: breaks with reload, should likely use MemoryRouter instead.
    return (
      <div className='router-view'>
        {/* Workaround since Electron loading the index.html from file doesn't allow us to just match the path
            with /index.html */}
        {window.location.pathname.includes('index.html') && <Redirect to='/time_entry' />}
        <Route path='/time_entry' component={TimeEntry}/>
        <Route path='/estimation' component={Estimation}/>
      </div>
    );
  }
}
