import React, { useState } from 'react'
import { saveArticleApi } from '../app/articleService';

function NewArticle() {

  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [check,setCheck] = useState(false);

  const handleSaveArticle=(event)=>{
    event.preventDefault();
    let article = {name:name,price:price,available:check};
    saveArticleApi(article).then(resp =>{
      alert(JSON.stringify(resp.data));
    })
  }
  return (
    <div className='container-fluid'>
      <form onSubmit={handleSaveArticle}>
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

export default NewArticle