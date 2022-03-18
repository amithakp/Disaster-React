import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
const Login = () => {
    return (
        <center>  
            <div className="container-fluid">
            <br/>
            <div className="panel panel-success">
                <div className="panel-heading">
                <span id="login-span">Login</span>
                </div>
                <div className="panel-body">
                    <h3></h3>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email" 
                                        placeholder="name@example.com" required/>
                                    </div>
                                </div> 
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" name="password" type="password" 
                                        value="name" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent-section">
                                <button  className="btn btn-success">
                                    Login
                                </button>
                            </div>
                            <div className="parent-section">
                                Need an account?
                                <Link to="/Register">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Login;