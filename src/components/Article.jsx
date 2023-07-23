import React, { useContext, useEffect } from 'react';
import { checkArticleApi, deleteArticleApi, getArticlesApi } from '../repository/articleRepository';
import { AppContext } from '../app/appContext';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';


function Article() {

    const [state, setState] = useContext(AppContext);

    useEffect(()=>{
        handleGetArticles(state.keyword,state.currentPage,state.pageSize);
    },[]);

    const handleGetArticles=(keyword,page,size)=>{
        getArticlesApi(keyword,page,size).then(resp =>{
            const totalElement = resp.headers['x-total-count'];
            let theTotalPages = Math.floor(totalElement/size);
            if(totalElement % size !==0) ++theTotalPages;
            setState({
                ...state,
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
            const newArticles = state.articles.filter((a) => a.id !== article.id);
            setState({...state,articles:newArticles});
        }).catch(err =>{
            console.log(err);
        })
    }

    const handleCheckArticle =(article)=>{
        checkArticleApi(article).then(resp => {
            const newArticles = state.articles.map((a)=>{
                if(a.id === article.id){
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
        <div className="card" >
            <div className="card-body">
                <SearchForm handleGetArticles={handleGetArticles}></SearchForm>
            </div>
            <div className="card-body">
               <ArticleList
                    onCheck={handleCheckArticle}
                    onDelete={handleDeleteArticle}
                ></ArticleList>
            </div>
            <div className="card-footer">
                <ul className='nav nav-pills'>
                    { 
                        new Array(state.totalPages).fill(0).map((v,index)=>(
                            
                            <li key={index + 1}>
                                <button 
                                onClick={()=>handleGoToPage(index + 1)}
                                className={((index+1)===state.currentPage)?'btn btn-info ms-1':'btn btn-outline-info ms-1'}>{index + 1}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>  
    </div>

  )
}

export default Article