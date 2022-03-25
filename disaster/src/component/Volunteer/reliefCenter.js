import React,{Component} from 'react';
import VolunteerHeader from './volunteerHeader';
import './reliefCenter.css';

class ReliefCenter extends Component{
    render() {
        // if(localStorage.getItem('ltk') == null){
        //     return(
        //         <>
        //         <h2>You Need to Login First </h2>
        //         </>
        //     )
        // }
        return (
            <>
                <VolunteerHeader/>
                <div className ="container">
                    <table class="table table-hover table-light">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-warning">Edit</button>&nbsp;&nbsp;
                                <button type="button" class="btn btn-outline-danger">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-warning">Edit</button>&nbsp;&nbsp;
                                <button type="button" class="btn btn-outline-danger">Delete</button>
                                </div>
                            </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ReliefCenter;