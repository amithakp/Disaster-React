import React,{Component} from 'react';
import VolunteerHeader from './volunteerHeader';
import './report.css';


const url ="http://localhost:8121/report";

class Report extends Component{
    constructor(props){
        super(props)
        this.state = {
            ReportData:''
        }
    }

    renderCard = (ReportData) => {
        if(ReportData){
            return ReportData.map((item,index)=>{
                return (
                    <div className="col" key={item._id}>
                        <div className="card border-info">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h4 className="card-title">{item.report_Name}</h4>
                            <p className="card-text">{item.report_description}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
       
        return (
            <>
                <VolunteerHeader/>
                <p className="heading">Report</p>
                <div className="containerCard">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                        {this.renderCard(this.state.BlogData)} 
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({BlogData:data})
            console.log(data);
        })
    }
}

export default Report;
