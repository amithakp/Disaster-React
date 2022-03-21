import React,{Component} from 'react';
import AdminHeader from '../Admin/adminHeader';
// import Blog from '../Volunteer/blog';

class BlogAdmin extends Component  {
    render() {
        if(localStorage.getItem('ltk') == null){
            return(
                <>
                <h2>You Need to Login First </h2>
                </>
            )
        }
        return (
            <>
                <AdminHeader/>
                {/* <Blog/> */}
                <div className="blogAdmin" style={{padding:'65px'}}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                                <h5 className="card-title">Indian Army, NDRF aiding relief and rescue operations</h5>
                                <p className="card-text">Stating that a total of 11 NDRF teams were camping in various districts, CM Pinarayi Vijayan said that Indian Army personnel were also taking part in the rescue operations and the helicopters of the Air Force and the Navy were all set for any mission. Meanwhile, K Babu (Congress) who spoke in the House representing the opposition, urged the government to improve its disaster management system.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }  
}

export default BlogAdmin;