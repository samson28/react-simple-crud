import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../app/appContext';

function SearchForm({ handleGetArticles}) {
    const [query,setQuery] = useState("");

    const [state, setState] = useContext(AppContext);

    const handleSearch=(event)=>{
        event.preventDefault();
        handleGetArticles(query,1,state.pageSize);
    }
  return (
    <form onSubmit={handleSearch}>
        <div className='row g-2'>
            <div className="col-auto">
                <input 
                onChange={(e)=>setQuery(e.target.value)}
                value={query}
                className="form-control"/>
            </div>
            <div className="col-auto">
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    </form>
  )
}

export default SearchForm