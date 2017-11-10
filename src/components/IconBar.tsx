import * as React from 'react';
import './IconBar.scss';

export class IconBar extends React.Component<{}, {}> {
    public render() {
        return (
            <div className='icon-bar'>
                <ul>
                    <li>
                        <a className='active'
                           title='Time'
                           href='#'
                           route-href='route: time_entry'>
                           <i className='fa fa-clock-o'></i>
                        </a>
                    </li>
                    <li>
                        <a title='Estimation'
                            href='#'
                            route-href='route: estimation'>
                            <i className='fa fa-bar-chart'></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
