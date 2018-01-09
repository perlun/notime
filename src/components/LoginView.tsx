import * as React from 'react';
import { SessionService } from '../services/SessionService';

export class LoginView extends React.Component<{}, {}> {
  public email: string;
  public password: string;
  public onChange: (any);

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  public login(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    SessionService.authenticate('foo', 'bar');
  }

  public render() {
    return (
      <div className='container'>
        {/* TODO: center content on screen. Flexbox? */}
        <div className='row'>
          <div className='col-6 offset-3'>
            <form>
              <div className='form-group'>
                <label>Email Address:</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  placeholder='Enter email'
                  value={this.email}
                  onChange={this.onChange} />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Enter password'
                  value={this.password}
                  onChange={this.onChange} />
              </div>
              <button type='submit' className='btn btn-primary' onClick={this.login}>
                Submit
              </button>
            </form >
          </div>
        </div>
      </div>
    );
  }
}
