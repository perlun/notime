import * as React from 'react';

export class TimeEntry extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h2>
          Timesheet for 2017-11-16
        </h2>

        <ul>
          {this.timesheetItems()}
        </ul>
      </div>
    );
  }

  public timesheetItems() {
    debugger
    const apiRoot = process.execPath; //process.env.NOTIME_API_ROOT;
    console.log("Root:" + apiRoot);

    const items = [
      'Internal: Internal misc',
      'External: External misc',
    ];

    return items.map(s => <li>{s}</li>);
  }
}
