import React from 'react';
import {Link} from 'react-router-dom';

const VolunteerHeader = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/blog" className="nav-link" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/reliefCenter" className="nav-link" >Relief center & Collection Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/reliefItem" className="nav-link" href="#">Relief Item</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to ="/tracking" className="nav-link" href="#">Tracking</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to ="/report" className="nav-link" href="#">Report</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to ="/news" className="nav-link" href="#">News</Link>
                        </li>
                    </ul>
                    </div>
                    <form classNameName="d-flex">
                        <button id="login" classNameName="btn btn-outline-primary" type="submit">Log Out</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default VolunteerHeader;
