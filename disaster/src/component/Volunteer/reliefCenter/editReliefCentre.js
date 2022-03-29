import React, { Component } from 'react';

const editReliefCentre ="http://localhost:8121/reliefCenter";

class EditNew  extends Component {
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid:'',
            disaster_id: 1,
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:''
        }
    }
    handleUpdateReliefCentre  = (event) =>{
        fetch(editReliefCentre,{
            method:'PUT',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                disaster_reliefCenterid:event.target.reliefCenterId.value,
                reliefCenterName:event.target.reliefCenterName.value,
                totalAccomodation:event.target.totalAccomodation.value,
                vaccancy:event.target.vaccancy.value
            })
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result,"inside handleEditReliefCentre")
            this.setState({[this.state.disaster_reliefCenterid]:event.target.disaster_reliefCenterid,
                [this.state.reliefCenterName]:event.target.reliefCenterName,
                [this.state.totalAccomodation]:event.target.totalAccomodation,
                [this.state.vaccancy]:event.target.vaccancy
            })
        })
        alert("Successfully Added")
    } 

        // handleUpdateReliefCentre  = (event) =>{
        //     fetch(`${editReliefCentre}/${id}`,{
        //         method:'PUT',
        //         headers:{
        //             'accept': 'application/json',
        //             'content-type': 'application/json'
        //         },
        //         body:JSON.stringify({
        //             disaster_reliefCenterid:event.target.reliefCenterId.value,
        //             reliefCenterName:event.target.reliefCenterName.value,
        //             totalAccomodation:event.target.totalAccomodation.value,
        //             vaccancy:event.target.vaccancy.value
        //         })
        //     })
        //     .then(res => res.json())
        //     .then((result) =>{
        //         console.log(result,"inside handleEditReliefCentre")
        //         this.setState({[this.state.disaster_reliefCenterid]:event.target.disaster_reliefCenterid,
        //             [this.state.reliefCenterName]:event.target.reliefCenterName,
        //             [this.state.totalAccomodation]:event.target.totalAccomodation,
        //             [this.state.vaccancy]:event.target.vaccancy
        //         })
        //     })
        //     alert("Successfully Added")
        // }   
        
    // handleUpdateReliefCentre = (event) => {
    //     this.setState({[event.target.disaster_reliefCenterid]:event.target.disaster_reliefCenterid,
    //         [event.target.reliefCenterName]:event.target.reliefCenterName,
    //         [this.state.totalAccomodation]:event.target.totalAccomodation,
    //         [this.state.vaccancy]:event.target.vaccancy
    //     })   
    //  }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    } 
    
    render() {
        return (
            <>
            
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Edit  Centre</h2>
                                        <div className="mb-3">
                                            <label>Relief centre Id</label>
                                            <input type="text" name="disaster_reliefCenterid" defaultValue={this.props.disaster_reliefCenterid} onChange={this.handleChange} className="form-control" placeholder="Relief centre id" disabled/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Relief centre name</label>
                                            <input type="text" name="reliefCenterName" defaultValue={this.props.reliefCenterName} onChange={this.handleChange} className="form-control" placeholder="Relief centre name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Total Accomodation</label>
                                            <input type="text" name="totalAccomodation" defaultValue={this.props.totalAccomodation} onChange={this.handleChange} className="form-control" placeholder="Total Accomodation"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Vaccancy</label>
                                            <input type="text" name="vaccancy" defaultValue={this.props.vaccancy} onChange={this.handleChange} className="form-control"  placeholder="Vaccancy"/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleUpdateReliefCentre} className="btn btn-success d-grid gap-2 ">
                                              Update Relief Centre
                                            </button>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}

export default EditNew;