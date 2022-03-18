import React from 'react';
import VolunteerHeader from './volunteerHeader';
import './news.css';

const News = () => {
    return (
        <>
            <VolunteerHeader/>
            <div class="section-header">
                <h4>news</h4>
                <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                    <div class="focused-news-left">
                        <img class="signal-flood" src="https://i.ibb.co/VCkqmsV/kelly-sikkema-whs7-FPfkw-Q-unsplash.jpg" alt="signal"/>
                        <h5 class="card-title">Kerala: Rains continue to lash Pathanamthitta and Alappuzha</h5>
                        <p>The Formula envisages allocating 66% of funds for planning, prevention, preparedness and recovery and 34% for response.Climate change, particularly the warming ocean, probably influenced the strength of the storm, atmospheric researchers told AP.
                            Thick layers of snow blanketed the affected states. Boston received its one-day highest snowfall (60 centimetres). New York and Massachusetts also received around 61 centimetres of snowfall each. The frigid conditions reached lands as far away as Florida.</p>
                    </div>
                    <div class="col">
                    <div class="card">
                    <img class="signal-flood card-img-top" src="https://i.ibb.co/DrTQJn3/phillip-flores-38wq-GW802-RM-unsplash.jpg" alt="road-closed"/>
                    <div class="card-body">
                        <h5 class="card-title">Indian Army, NDRF aiding relief and rescue operations</h5>
                        <p class="card-text">Stating that a total of 11 NDRF teams were camping in various districts, CM Pinarayi Vijayan said that Indian Army personnel were also taking part in the rescue operations and the helicopters of the Air Force and the Navy were all set for any mission. Meanwhile, K Babu (Congress) who spoke in the House representing the opposition, urged the government to improve its disaster management system.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="signal-flood card-img-top" src="https://i.ibb.co/p3zsQcf/sonnie-hiles-i-ANAda-Nu7mg-unsplash.jpg" alt="home"/>
                    <div class="card-body">
                        <h5 class="card-title">Kerala assembly pays homage to flood victims</h5>
                        <p class="card-text">The Kerala assembly paid homage to the flood victims and pledged all support to the affected families after which Speaker MB Rajesh declared the House as adjourned today. The session for the next two days stands canceled in the wake of the fresh rain alert as the MLAs have to rush to their respective constituencies to coordinate flood relief programs. The House is scheduled to be convened again from October 25.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default News;