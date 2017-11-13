import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './IconBar.scss';

export class IconBar extends React.Component<{}, {}> {
    public render() {
        return (
            <div className='icon-bar'>
                <ul>
                    <li>
                        <NavLink to='/time_entry'>
                            <i className='fa fa-clock-o'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/estimation'>
                            <i className='fa fa-bar-chart'></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
