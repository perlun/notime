import * as React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
  } from 'react-router-dom';
import './IconBar.scss';

export class IconBar extends React.Component<{}, {}> {
    public render() {
        return (
            <Router>
                <div className='icon-bar'>
                    <ul>
                        <li>
                            <Link to='/time_entry'>
                            <i className='fa fa-clock-o'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/estimation'>
                                <i className='fa fa-bar-chart'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }
}
