import React , { Component }  from 'react';
import Todos from './Todos';
import Navbar from './components/Navbar';
import AddTodo from './AddTodo';
import { BrowserRouter ,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


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
  addTodo =(todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos , todo];
    this.setState({todos})
  }

  render() {
    return (
      <div className="App-todo container">
        <BrowserRouter>
        <div className="App"> 
          <Navbar/>
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </div>
        </BrowserRouter>
       
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
export default App;
