import React,{ Component} from 'react';
import VolunteerHeader from './volunteerHeader';

class ReliefItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <VolunteerHeader/>
                <p className="heading">Request Items from Here</p>
                {/* <div>
                        <div className ="col-md-7">
                            <b>itemNo</b> &nbsp;
                            &nbsp;&nbsp;
                            Item Name &nbsp; 
                            Quantity
                        </div>
                        <div className="col-md-4">
                            <button className="cartBtn btn btn-primary">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="cartBtn btn btn-danger" >
                                <span className="glyphicon glyphicon-minus"></span>
                            </button> 
                        </div>
                    </div> */}
                    <div className="container-fluid">
            <br/>
            <div className="panel panel-success">
                
                <div className="panel-body">
                    <h3></h3>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Item No</label>
                                         item Name
                                    </div>
                                </div> 
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input className="form-control" name="qauntity" type="password" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="parent-section">
                                <button  className="btn btn-success">
                                    Request
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ReliefItem;