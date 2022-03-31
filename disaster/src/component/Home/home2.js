import React, { Component } from 'react';
import HomeHeader from'./homeHeader';
import axios from 'axios';
import './home2.css';

const url ="http://localhost:8121/contact";

class Home2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            // disaster_reliefCenterid:'',
            // reliefCenterName: '',
            // totalAccomodation:'',
            // vaccancy:'',
            ContactData:''
            // index:''
        }
    }
    renderContact=(ContactData)=> {
        if(ContactData){  
            return ContactData.map((item,index)=>{
                return (  
                    <div className="contact">
                        {item.contact_Number}
                    </div>    
                )
            })
        }
    }      
    render() {
        return (
            <>
            <HomeHeader/> 
            <div className="mainDisaster">              
                <div className="contact-container">
                    <span>Contact Numbers</span>
                    {this.renderContact(this.state.ContactData)}
                </div>
                <div className="relifSupplyRequest-container">
                    <div className="relif-supply-section">
                        <button className="btn-rsr">Relief supply Request</button>
                    </div>
                    
                </div>
                <div className="location"><div className="supply-map1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64654573647!2d76.15320964942498!3d10.511379921115164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647505871176!5m2!1sen!2sin" style={{height:450,width:600,border:0,loading:"lazy",allowfullscreen:""}}>
                    </iframe>
                    </div>
                </div>
            </div> 
            </>
        )
    }
    componentDidMount(){
        const centreId = this.props.match.params.id;
        axios.get(`${url}/${centreId}`)
        .then((res) => {
            this.setState({ContactData:res.data})
        })
        
    }
}
export default Home2