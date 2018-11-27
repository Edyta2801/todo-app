import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  state = {
    tasks: [
      { taskName: 'Odkurzanie', completed: false },
      { taskName: 'Nakarmić kota', completed: false }
    ],
    taskName: ''
  }


  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Enter you task here" />
          <FlatButton label="Add" primary={true} />
        </div>
        <div>
          {this.state.tasks.map((task, index) => (
            <div>{task.taskName}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
