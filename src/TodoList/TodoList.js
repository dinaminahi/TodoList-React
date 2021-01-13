import React, { Component } from "react";
import "./TodoList.css";
import CurrentDate from "../CurrentDate/CurrentDate";
import AddNewTask from "../AddNewTask/AddNewTask";
import Task from "../Task/Task";
import nextId from "react-id-generator";

export class TodoList extends Component {

  state = {
    tasks: [
      { id: nextId(), text: 'Buy eggs', done: false },
      { id: nextId(), text: 'Cook breakfast', done: false },
      { id: nextId(), text: 'Do homework', done: false }],
    todoListInputValue: ''
  }

  handleAddInput = event => {
    const newTask = {
      id: nextId(),
      text: event.target.value,
      done: false
    }

    if (event.key === 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, newTask],
        todoListInputValue: ''
      });
    }
  }

  handleValueChange = event => {
    this.setState({ todoListInputValue: event.target.value });
  }

  handleDelete = (taskToDetete) => {
    const tasks = this.state.tasks.filter(task => task.id !== taskToDetete.id);
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="TodoList">
        <CurrentDate />
        <AddNewTask
          handleEnter={this.handleAddInput}
          handleValue={this.handleValueChange}
          value={this.state.todoListInputValue} />
        <div>
          {this.state.tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    )
  }
}

export default TodoList


