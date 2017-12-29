import * as React from 'react';

export class LoginView extends React.Component<{}, {}> {
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
                  placeholder='Enter email' />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password' />
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
          </div>
        </div>
      </div>
    );
  }
}
