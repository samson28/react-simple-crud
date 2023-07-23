import React, { useContext } from 'react'
import { AppContext } from '../app/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ArticleList(props) {
    const [state, setState] = useContext(AppContext);
    const navigate = useNavigate();
  return (
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
                            onClick={() => props.onCheck(article)}
                            className='btn btn-outline-success'>
                                <FontAwesomeIcon icon={article.available?faCheckCircle:faCircle}></FontAwesomeIcon>

                            </button>
                        </td>
                        <td>
                            <button 
                            onClick={() => navigate(`/updateArticle/${article.id}`)}
                            className='btn btn-outline-warning'>
                                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </button>
                        </td>
                        <td>
                            <button 
                            onClick={() => props.onDelete(article)}
                            className='btn btn-outline-danger'>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default ArticleList