import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


const url ="http://localhost:5000/api/auth/userInfo";

class VolunteerHeader extends Component {
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

    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li className="nav-item">
                            <Link to="/blogDisplay" className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/reliefCenter" className="nav-link" >Relief centre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/collectionCentre" className="nav-link" >Collection Centre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/reliefItem" className="nav-link" href="#">Relief Item</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to ="/tracking" className="nav-link" href="#">Tracking</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to ="/details" className="nav-link" href="#">Details</Link> 
                            </li>
                        </ul>
                        </div>
                        <form className="d-flex">
                            <button  onClick={this.handleLogout} className="btn btn-outline-primary" type="submit">Log Out</button>
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
export default withRouter(VolunteerHeader);
