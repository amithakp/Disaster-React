import React,{Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import './login.css';

const loginUrl ="http://localhost:5000/api/auth/login";

class VolunteerLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            role:'',
            message:''
        }
    }
    
    handleSubmit = () => {
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })

        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                // localStorage.setItem('ltk',data.token)
                // this.props.history.push('/') 
                localStorage.setItem('ltk',data.token)
                this.props.history.push('/volunteerHeader')
                .then(this.props.loggedRole = localStorage.setItem('role',this.state.role))
            }
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        // if(localStorage.getItem('ltk') == null){
        //     return(
        //         <>
        //         <Header/>
        //         <h2>You Need to Login First </h2>
        //         </>
        //     )
        // }
        return (
            <center>  
                <div className="container-fluid">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                    <span id="login-span">Login</span>
                    </div>
                    <div className="panel-body">
                    <div className ="message">{this.state.message}</div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value= {this.state.email} onChange={this.handleChange} placeholder="name@example.com" required/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password" 
                                             value= {this.state.password} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button  className="btn btn-success" onClick = {this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                                <div className="parent-section">
                                    Need an account?
                                    <Link to="/registerVolunteer">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
   
}

export default VolunteerLogin;