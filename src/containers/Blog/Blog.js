import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';


class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
     };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,4); // só mostrar 4 posts
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
            this.setState({error: true})
        })

    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p>Something went wrong.</p>
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => { return <Post click={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author}/>}
            );
        }
        return (
            <div>
                <section className="Posts">
                    {posts};

                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;