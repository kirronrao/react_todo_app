import React  ,{ Component } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import Pokeball from '../Pokeball.png'
class Posts extends Component {

    state = {
        posts :[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({ posts : res.data.slice(0,10)})
        })
    }

    render() { 
        const { posts } = this.state;
        const postList = posts.length ?
        (
            posts.map(post=>{
               return (
                <div className="post card poke" key={post.id}>
                    <img className="pokeball" src={Pokeball} alt="A pokeball"/>
                    <div className="card-content">
                      <Link to={'/'+post.id}><span className="card-title">{post.title}</span></Link>  
                    <p>{post.body}</p>
                    </div>
                </div>
               )
            })
        ) 
        :
        (
            <div className="center"> No posts found </div>
        );

        return (
            <div className="container">
                <h4 className="center">Posts</h4>
                {postList}
    
    
            </div>
        )
    }
}
export default Posts;