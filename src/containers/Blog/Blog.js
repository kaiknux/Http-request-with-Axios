import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';



//installing router with npm install --save react-router react-router-dom

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

// react router SEMPRE VAI USAR SÓ ABSOLUTE PATH

// pra falar pro react como carregar só uma das rotas: usar o switch
// se eu usar o switch o :id tem que ser necessariametne o último pq ele vai analizar tudo como string d epossível id


// importante sempre jogar exact no home (no "/")

// como fazer relative path no react router: ele tem a props this.props.match.url,
// aí é só usra this.props.match.url + '/new-post'

// com NavLink em vez de Link
// <li><Link to={{
// é que ele adiciona a active class pro a Link pra você conseguir fazer estilo no active
// só que aí você tem que usar o activeClassName pra "my-active" pra ficar o certo

// deixar o :id por último pra por exmemplo o new-post não ser interpretado como id

// exact fala: é o meu path EXATAMENTE o que tá rolando? se sim renderiza isso
// <Route path="/" exact render={() => <h1>Home</h1>}/>
// O Link component é pra não renderizar a porra toda de novo, ele previne a aplicação de ficar pesada e sem sentido

// uma opção pra não usar o Link seria usar o mesmo postSelectedHandler com um this.props.history.push({pathname: '/' + id})
// em um click event listener
export default Blog;