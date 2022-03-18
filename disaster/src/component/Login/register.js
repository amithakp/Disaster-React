import React from 'react';
import {Link} from 'react-router-dom';
import './register.css';

const Register = () =>{
    return (
        <center>
            <div className="container-fluid">
            <br/>
            <div className="panel panel-success">
                <div className="panel-heading">
                        <span>Register</span>
                    </div>
                    <div className="panel-body">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name" 
                                        placeholder="Name" required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                {/* <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div> */} 
                                    <label>Role</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected> select role</option>
                                        <option value="1">Admin</option>
                                        <option value="2">User</option>
                                    </select>
                                </div>
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
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Register;
