import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const API_URL = 'https://monday-482dc.firebaseio.com';

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

  componentWillMount() {
    fetch(`${API_URL}/tasks.json`)
      .then(response => response.json())
      .then(data => {
        const array=Object.entries(data);
        cons=taskList=array.map(task=>task[1])
        this.setState({tasks:tasksList})
      })
  }


  handleClick = (event) => {
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks;
      const newTask = { taskName: this.state.taskName, completed: false };
      fetch(`${API_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify(newTask)
      }).then(() => {
        tasks.push(newTask);
        this.setState({ tasks, taskName: '' })
      })
    }
  }



  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Enter you task here"
            value={this.state.taskName}
            onChange={this.handleChange} />
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
