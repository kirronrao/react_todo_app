import React , { Component }  from 'react';
import Todos from './Todos';
class App extends Component{

  state ={
    todos :[
      {id:1, content : 'Hey hows you?'},
      {id:2 , content : 'Hi am fine'}
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

  render() {
    return (
      <div className="App-todo container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
