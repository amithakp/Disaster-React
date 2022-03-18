import React from 'react';
import AdminHeader from '../Admin/adminHeader';
// import Blog from '../Volunteer/blog';

const BlogAdmin = () => {
    return (
        <>
            <AdminHeader/>
            {/* <Blog/> */}
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title">Indian Army, NDRF aiding relief and rescue operations</h5>
                        <p class="card-text">Stating that a total of 11 NDRF teams were camping in various districts, CM Pinarayi Vijayan said that Indian Army personnel were also taking part in the rescue operations and the helicopters of the Air Force and the Navy were all set for any mission. Meanwhile, K Babu (Congress) who spoke in the House representing the opposition, urged the government to improve its disaster management system.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogAdmin;