import React from 'react';
import VolunteerHeader from './volunteerHeader';
import './report.css';

const Report = () => {
    return (
        <>
            <VolunteerHeader/>
            <div className="container-fluid">
                <span className="heading">Situation Report on Kerala Floods and Landslides</span>
                <p className="text-justify">Kerala is witnessing high-intensity floods due to the incessant rains over the past few days.
                    <br/>Residents are cut off in parts of the coastal state of Kerala as the rain started to intensify from late Friday, 15th October 2021. As per the authorities, the worst-affected areas are Kottayam and Idukki, which received 164.5 millimetres and 305.5 mm of rainfall, respectively, since Saturday morning. The heavy rains triggered landslides and swelled many rivers across the state. Roads are swept away, houses are damaged and trees uprooted. Several villages in hilly areas are cut off. At least 26 people have died in landslides and floods triggered by heavy rains in south-western India.</p>
                    <p id="secondPara">Five Children among are dead. There are fears that the death toll could rise further as many people are missing. Eleven bodies have been found so far in Idukki district and another fourteen in Kottayam district and thousands of people have been evacuated and at least 100 relief camps have been set up. Here is the video showing the flash flood barrelling into the town of Erattupetta in southern Kerala and another clip showing a house disappearing into a river that overflowed into its backyard shows widespread destruction in Kerala.</p>
            </div>
            <hr/>
        </>
    )
}

export default Report;