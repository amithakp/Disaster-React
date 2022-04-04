import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const registerUrl ="http://localhost:5000/api/auth/register";

class RegisterAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            role:'Admin',
            message:''
        }
    }

    handleSubmit = () => {
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }
    // handleDropdownChange = (e) => {
    //     console.log(e.target.value)
    //     this.setState({role : e.target.value});
    // }

    render(){
        return (
            <center>
                <div className="container-fluid">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading text-center">
                            <span>Register</span>
                        </div>
                        <div className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" name="name" 
                                            value={this.state.name} onChange={this.handleChange} placeholder="Name" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" required/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password" 
                                            value={this.state.password} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button  className="btn btn-success" onClick={this.handleSubmit}>
                                        Register
                                    </button>
                                </div>
                                <div className="parent-section">
                                    Back To Login?
                                    <Link to="/login">SignIn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
    
}

export default RegisterAdmin;
