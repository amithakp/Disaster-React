import React,{Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
import './blog.css';
const url ="http://localhost:8121/blogAdmin";

class BlogAdmin extends Component  {
    constructor(props){
        super(props)
        this.state = {
            BlogData:''
        }
    }
    renderCard = (BlogData) => {
        if(BlogData){
            return BlogData.map((item,index)=>{
                return (
                    <div className="col" key={item._id}>
                        <div className="card border-info" id="cardHeight">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h4 className="card-title">{item.blog_Name}</h4>
                            <p className="card-text">{item.blog_Name_description}</p>
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
                <p className="heading">Blog</p>
                <div className="containerCard">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
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

export default BlogAdmin;