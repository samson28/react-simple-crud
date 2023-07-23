import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';

function Layout(){
    const [currentRoute, setCurrentRoute] = useState();
    useEffect(()=>{
        const path = window.location.pathname.toLocaleLowerCase();
        setCurrentRoute(path)
    },[]);
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link 
                            onClick={() => setCurrentRoute("/home")}
                            className={currentRoute === '/home'?"nav-link active":"nav-link"}  
                            to={"/home"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            onClick={() => setCurrentRoute("/articles")}
                            className={currentRoute === '/articles'?"nav-link active":"nav-link"} 
                            to={"/articles"}>Article</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            onClick={() => setCurrentRoute("/newarticle")}
                            className={currentRoute === '/newarticle'?"nav-link active":"nav-link"} 
                            to={"/newarticle"}>NewArticle</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Layout;