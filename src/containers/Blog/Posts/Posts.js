import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
     };


componentDidMount() {
    console.log(this.props);
    axios.get('/posts')
    .then(response => {
        const posts = response.data.slice(0,6); // só mostrar 6 posts
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: 'Eron'
            } // renderizar um elemento novo pra ter certeza de poder postar elementos em uma array nova
        })
       this.setState({posts: updatedPosts});
    })
    .catch(error => {
        console.log(error)
    })
}

postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
}

render () {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>
    if (!this.state.error) {
        posts = this.state.posts.map(
            post => { return ( <Link to={'/' + post.id} key={post.id} >
            <Post click={() => this.postSelectedHandler(post.id)} 
            title={post.title} 
            author={post.author}
            />
            </Link>        
            ) }
        );
    }
    return (
        <section className="Posts">
            {posts};
        </section>
    )
}
}

export default Posts;