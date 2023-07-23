import React, { useContext } from 'react'
import { AppContext } from '../app/appContext';

function Stats() {
    const [state,setState] = useContext(AppContext);
  return (
    <div>
        <button type="button" className="btn btn-primary position-relative">
            nb_Article
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {state.articles.length}
            </span>
        </button>
    </div>
  )
}

export default Stats