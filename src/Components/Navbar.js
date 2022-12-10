import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import nature from './Components/nature.jpg';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">NewsBlog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link className="nav-link text-light" aria-current="page" to="/">Trending</Link> */}
                                </li>

                                {/* <li><Link className="nav-link  text-light" to="/business">Business</Link></li> */}
                                {/* <li><Link className="nav-link  text-light" to="sports/">Sports</Link></li> */}
                                {/* <li><Link className="nav-link  text-light" to="technology/">Technology</Link></li> */}
                                {/* <li><Link className="nav-link  text-light" to="science/">Science</Link></li> */}
                                {/* <li><Link className="nav-link  text-light" to="health/">Health</Link></li> */}
                                {/* <li><Link className="nav-link  text-dark" to="facts/">Facts</Link></li> */}
                                {/* <li><Link className="nav-link text-light" to="/content">Quotes</Link></li> */}
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News
                                    </Link>
                                    <ul class="dropdown-menu">
                                       <li><Link className="nav-link text-dark" aria-current="page" to="/">Trending</Link></li>
                                        <li><Link class="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link class="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="nav-link  text-dark" to="technology/">Technology</Link></li>
                                        <li><Link className="nav-link  text-dark" to="science/">Science</Link></li>
                                        <li><Link className="nav-link  text-dark" to="health/">Health</Link></li>
                                        
                                        {/* <li><Link class="dropdown-item" to="#">Something else here</Link></li> */}
                                    </ul>
                                    
                                </li>
                                <li><Link className="nav-link text-light" to="/content">Quotes</Link></li>
                                <li><Link className="nav-link text-light" to="/Weather">Weather</Link></li>
                                <li><Link className="nav-link text-light" to="/Horoscope">Horoscope</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
