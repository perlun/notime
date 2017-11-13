import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Estimation } from './Estimation';
import { TimeEntry } from './TimeEntry';

export class RouterView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='router-view'>
        <Route exact path='/index.html' render={() => (
            <Redirect to='/time_entry'/>
          )
        }/>
        <Route path='/time_entry' component={TimeEntry}/>
        <Route path='/estimation' component={Estimation}/>
      </div>
    );
  }
}
