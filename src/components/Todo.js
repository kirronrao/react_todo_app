import React  ,{ Component } from 'react';

import Todos from '../Todos';
import AddTodo from '../AddTodo';

class Todo extends Component {

    
  state ={
    todos :[
      {id:1, content : 'Create todo app using react js'},
      {id:2 , content : 'Create todo app using angular 5'},
      {id:3 , content : 'Create todo app using meteor'},
      {id:4 , content : 'Create todo apis using loopback'}
    ]
  }

  deleteTodo = (id)=>{
    console.log(id);
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
   // this.setState(todos)
    this.setState({todos : todos})
  }
  addTodo =(todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos , todo];
    this.setState({todos})
  }
    

  render() {
    return (
      <div className="App-todo container">  
       
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
export default Todo;