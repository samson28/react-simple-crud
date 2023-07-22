import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { checkArticleApi, deleteArticleApi, getArticlesApi } from '../app/articleService';


function Article() {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        handleGetArticles();
    },[]);

    const handleGetArticles=()=>{
        getArticlesApi().then(resp =>{
            const newArticles = resp.data;
            setArticles(newArticles);
        }).catch(err =>{
            console.log(err);
        })
    }

    const handleDeleteArticle =(article)=>{
        deleteArticleApi(article).then(resp =>{
            const newArticle = articles.filter((a) => a.id != article.id);
            setArticles(newArticle);
        }).catch(err =>{
            console.log(err);
        })
    }

    const handleCheckArticle =(article)=>{
        checkArticleApi(article).then(resp => {
            const newArticles = articles.map((a)=>{
                if(a.id == article.id){
                    a.available = !article.available;
                }
                return a;
            });
            setArticles(newArticles);
        }).catch(err =>{
            console.log(err);
        })

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
                                onClick={() => handleCheckArticle(article)}
                                className='btn btn-outline-success'>
                                    <FontAwesomeIcon icon={article.available?faCheckCircle:faCircle}></FontAwesomeIcon>
                                </button>
                            </td>
                            <td>
                                <button 
                                onClick={() => handleDeleteArticle(article)}
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