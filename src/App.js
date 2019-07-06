import React , { Component }  from 'react';

import Navbar from './components/Navbar';

import { BrowserRouter ,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Posts from './components/Posts';
import Todo from './components/Todo';
import Post from './components/Post';

class App extends Component{



  render() {
    return (
      <div className="App-todo container">
        <BrowserRouter>
        <div className="App"> 
          <Navbar/>
          <Route exact path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/posts' component={Posts} />
          <Route path='/todo' component={Todo} />
          <Route path='/:post_id' component={Post} />

        </div>
        </BrowserRouter>
       
      </div>
    );
  }
}
export default App;
