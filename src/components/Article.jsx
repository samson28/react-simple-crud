import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { checkArticleApi, deleteArticleApi, getArticlesApi } from '../app/articleService';


function Article() {

    const [state, setState] = useState({
        articles:[],
        currentPage:1,
        pageSize:4,
        keyword:'',
        totalPages:0
    });

    useEffect(()=>{
        handleGetArticles(state.keyword,state.currentPage,state.pageSize);
    },[]);

    const handleGetArticles=(keyword,page,size)=>{
        getArticlesApi(keyword,page,size).then(resp =>{
            const totalElement = resp.headers['x-total-count'];
            let theTotalPages = Math.floor(totalElement/size);
            if(totalElement % size !=0) ++theTotalPages;
            setState({
                articles:resp.data,
                keyword:keyword,
                currentPage:page,
                pageSize:size,
                totalPages:theTotalPages});
        }).catch(err =>{
            console.log(err);
        });
    }

    const handleDeleteArticle =(article)=>{
        deleteArticleApi(article).then(resp =>{
            const newArticles = state.articles.filter((a) => a.id != article.id);
            setState({...state,articles:newArticles});
        }).catch(err =>{
            console.log(err);
        })
    }

    const handleCheckArticle =(article)=>{
        checkArticleApi(article).then(resp => {
            const newArticles = state.articles.map((a)=>{
                if(a.id == article.id){
                    a.available = !article.available;
                }
                return a;
            });
            setState({...state,articles:newArticles});
        }).catch(err =>{
            console.log(err);
        })

    }

    const handleGoToPage=(page)=>{
        handleGetArticles(state.keyword,page,state.pageSize);
    }

  return (
    <div className='container-fluid'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Available</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    state.articles.map((article) => (
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
        
        <ul className='nav nav-pills'>
            {
                
                new Array(state.totalPages).fill(0).map((v,index)=>(
                    
                    <li key={index + 1}>
                        <button 
                        onClick={()=>handleGoToPage(index + 1)}
                        className={((index+1)==state.currentPage)?'btn btn-info ms-1':'btn btn-outline-info ms-1'}>{index + 1}</button>
                    </li>
                ))
            }
        </ul>
        

    </div>

  )
}

export default Article