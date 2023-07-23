import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import Stats from "./Stats";

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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link 
                            onClick={() => setCurrentRoute("/")}
                            className={currentRoute === '/'?"nav-link active":"nav-link"}  
                            to={"/"}>Home</Link>
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
                    <ul className="nav navbar">
                        <li>
                            <Stats></Stats>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Layout;