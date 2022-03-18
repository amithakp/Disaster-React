import React from 'react';
import {Link} from 'react-router-dom';

const AdminHeader = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Admin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        <li class="nav-item">
                            <Link to ="/blogAdmin" class="nav-link" href="#">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to ="/reliefCampaign" class="nav-link" href="#">Relief Campaign Create</Link>
                        </li>
                        <li class="nav-item">
                            <Link to ="/helpLine" class="nav-link" href="#">Help Line Number</Link>
                        </li>
                        <li class="nav-item">
                            <Link to ="/newsAdmin" class="nav-link" href="#">News / Notification </Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                    </ul>
                    </div>
                    <form className="d-flex">
                        <button id="login" className="btn btn-outline-primary" type="submit">Log Out</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader;
