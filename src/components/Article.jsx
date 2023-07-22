import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


function Article() {

    const [articles, setArticles] = useState([
        { id: 1, name: "Computer", price: 3400, available: true },
        { id: 2, name: "Printer", price: 1200, available: false },
        { id: 3, name: "Smart Phone", price: 800, available: true },
    ]);

    useState(()=>{
        getArticles()
    },[]);

    const getArticles=()=>{
        
    }

    const deleteArticle =(article)=>{
        const newArticles = articles.filter((a)=> a.id != article.id);
        setArticles(newArticles)
    }

    const checkArticle =(article)=>{
        const newArticles = articles.map((a)=>{
            if(a.id == article.id){
                a.available = !article.available;
            }
            return a;
        });
        setArticles(newArticles)
    }

  return (
    <div className='container-fluid'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Available</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                {
                    articles.map((article) => (
                        <tr key={article.id}>
                            <th scope="row">{article.id}</th>
                            <td>{article.name}</td>
                            <td>{article.price}</td>
                            <td>
                                <button 
                                onClick={() => checkArticle(article)}
                                className='btn btn-outline-success'>
                                    <FontAwesomeIcon icon={article.available?faCheckCircle:faCircle}></FontAwesomeIcon>
                                </button>
                            </td>
                            <td>
                                <button 
                                onClick={() => deleteArticle(article)}
                                className='btn btn-outline-danger'>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>

  )
}

export default Article