import React, { Component } from 'react';
import './TodoList.css';
import CurrentDate from '../CurrentDate/CurrentDate';
import AddNewTask from '../AddNewTask/AddNewTask';
import Task from '../Task/Task';
import nextId from 'react-id-generator';
import firebase from 'firebase'

export class TodoList extends Component {

  componentDidMount() {
    const tasksRef = firebase.database().ref('tasks');
    tasksRef.on('value', (snapshot) => {
      let tasks = snapshot.val();
      let newState = [];
      for (let task in tasks) {
        newState.push({
          id: task,
          text: tasks[task].text,
          done: tasks[task].done
        });
      }
      this.setState({
        tasks: newState
      });
    });

  }

  state = {
    tasks: [],
    todoListInputValue: '',
  };

  addNewTaskToList = (event) => {
    if (event.key === 'Enter') {
      const tasksRef = firebase.database().ref('tasks');
      const newTask = {
        id: nextId(),
        text: event.target.value,
        done: false,
      };
      tasksRef.push(newTask);
      this.setState({ todoListInputValue: '' });
    }
  };

  handleValueChange = (event) => {
    this.setState({ todoListInputValue: event.target.value });
  };

  handleDelete = (taskToDelete) => {
    const tasksRef = firebase.database().ref(`/tasks/${taskToDelete.id}`);
    tasksRef.remove();
  };

  checkTheBox = (event, taskId) => {
    const tasksRef = firebase.database().ref(`/tasks`);
    tasksRef.child(taskId).update({ done: event.target.checked });
  }


  render() {
    return (
      <div className="TodoList">
        <CurrentDate />
        <AddNewTask
          handleEnter={this.addNewTaskToList}
          handleValue={this.handleValueChange}
          value={this.state.todoListInputValue}
        />
        <div>
          {this.state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={this.handleDelete}
              checkTheBox={this.checkTheBox}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
