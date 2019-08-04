import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    console.log(props)
    return (
    <article onClick={props.click} className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    )
};

// o withrouter vai permitir que o router logue toda a estrutura da 'história'
// da renderização do componente, que vai facilitar a busca de parâmetros pra 
// condições de rotas, etc

export default withRouter(post);