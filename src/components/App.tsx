import * as React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import './App.scss';

import { SessionService } from '../services/SessionService';
import { IconBar } from './IconBar';
import { RouterView } from './RouterView';

export class App extends React.Component<{}, {}> {
  public render() {
      return (
        <div id='window'>
            <Router>
                <div>
                    {/* The Router must have a single child element */}
                    {SessionService.isAuthenticated &&
                        <div>
                            <IconBar/>
                            <RouterView/>
                        </div>
                    }

                    {/* We show a special root element in non-authenticated mode */}
                    {!SessionService.isAuthenticated &&
                        <RouterView className='login-router-view'/>
                    }
                </div>
            </Router>
        </div>
      );
  }
}
