import React, { useEffect, useState } from 'react'
import { getArticleApi, updateArticleApi } from '../repository/articleRepository';
import { useParams } from 'react-router-dom';

function UpdateArticle() {

  const {id} =useParams();
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [check,setCheck] = useState(false);

  useEffect(()=>{
    handleGetArticleById(id);
  },[id])

  const handleGetArticleById=(id)=>{
    getArticleApi(id).then(resp =>{
      let article = resp.data;
      setName(article.name);
      setPrice(article.price);
      setCheck(article.available);
  }).catch(err =>{
      console.log(err);
  });
  }

  const handleUpdateArticle=(event)=>{
    event.preventDefault();
    let article = {id:id,name:name,price:price,available:check};
    updateArticleApi(article).then(resp =>{
      alert(JSON.stringify(resp.data));
    })
  }
  return (
    <div className='container-fluid'>
      <form onSubmit={handleUpdateArticle}>
        <div className="mb-3">
          <label  className="form-label">Name :</label>
          <input 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className="form-control"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Price :</label>
          <input 
          onChange={(e)=>setPrice(e.target.value)}
          value={price}
          className="form-control" 
          type='number'/>
        </div>
        <div className="form-check">
          <input 
          onChange={(e)=>setCheck(e.target.value)}
          value={check}
          className="form-check-input" 
          type="checkbox"/>
          <label className="form-check-label" > Checked</label>
        </div>
        <button className='btn btn-success'>Save</button>
      </form>
    </div>
  )
}

export default UpdateArticle