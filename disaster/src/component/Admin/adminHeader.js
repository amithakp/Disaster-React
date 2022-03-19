import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const url ="http://localhost:5000/api/auth/userInfo";
class AdminHeader extends Component {
    constructor(props){
        super()
         this.state={
            userdata:''
         }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    render() {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Admin</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li className="nav-item">
                                <Link to ="/blogAdmin" className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/reliefCampaign" className="nav-link" href="#">Relief Campaign Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/helpLine" className="nav-link" href="#">Help Line Number</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/newsAdmin" className="nav-link" href="#">News / Notification </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li> */}
                        </ul>
                        </div>
                        <form className="d-flex">
                            <button onClick={this.handleLogout} className="btn btn-outline-primary" type="submit">Log Out</button>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
}
export default withRouter(AdminHeader);
