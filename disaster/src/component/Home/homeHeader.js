import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomeHeader extends Component{
    render() {
        return (
        <>  
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                </ul>
                </div>
                <form className="d-flex">
                    <Link to="/registerAdmin"  className="btn btn-outline-primary">Admin</Link>&nbsp;&nbsp;
                    <Link to="/registerVolunteer"  className="btn btn-outline-success">Volunteer</Link>
                </form>
            </div>
        </nav>
         </>
        )
    }
    
}

export default HomeHeader;    