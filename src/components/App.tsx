import * as React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import './App.scss';

import { IconBar } from './IconBar';
import { RouterView } from './RouterView';

export class App extends React.Component<{}, {}> {
  public render() {
      return (
        <div id='window'>
        <Router>
            {/* The Router must have a single child element */}
            <div>
                <IconBar/>
                <RouterView/>
            </div>
        </Router>
        </div>
      );
  }
}
