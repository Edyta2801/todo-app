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

  handleChange = (event) => {
    this.setState({ taskName: event.target.value });
  }
  handleClick = (event) => {
    let tasks = this.state.tasks;
    tasks.push({ taskName: this.state.taskName, completed: false })
    this.setState({ tasks })
  }


  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Enter you task here" onChange={this.handleChange} />
          <FlatButton label="Add" primary={true} onClick={this.handleClick} />
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
