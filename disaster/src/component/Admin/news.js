import React,{Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
import './news.css';

const url ="http://localhost:8121/news";

class NewsAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            NewsData:''
        }
    }
    renderCard = (NewsData) => {
        if(NewsData){
            return NewsData.map((item,index)=>{
                return (
                    <div className="col" key={item._id}>
                        <div className="card border-info">
                        <img className="signal-flood card-img-top" src={item.news_img} alt="road-closed"/>
                        <div className="card-body">
                            <h4 className="card-title">{item.news_title}</h4>
                            <p className="card-text">{item.news_body}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
    }
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
                <AdminHeader/>
                <p className="heading">News</p>
                <div className="row row-cols-1 row-cols-md-2 g-4" id="card">
                        {this.renderCard(this.state.NewsData)} 
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({NewsData:data})
            console.log(data);
        })
    }
}
export default NewsAdmin;
