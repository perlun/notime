import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { IconBar } from './components/IconBar';
import { RouterView } from './components/RouterView';
import './index.scss';

ReactDOM.render(
    <div id='window'>
        <Router>
            {/* The Router must have a single child element */}
            <div>
                <IconBar/>
                <RouterView/>
            </div>
        </Router>
    </div>,
    document.getElementById('example'),
);
