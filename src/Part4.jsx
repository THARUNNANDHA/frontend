import React from 'react';
import Cardpart4 from "./components/Cardpart4"
import "./css/Part4.css"
import icon1 from "./images/Icon1.png"
import Learnmorecard from './components/Learnmorecard';
import redeme1 from "./images/rafiki.png"
import redeme2 from "./images/pana.png"
import Statusdisplay from "./components/Statusdisplay";

export default function Part4(){
    return(
        <div>
            <div className="outer_part4">
                <div className="heading_part4">
                    <h3>Manage your entire community</h3>
                    <h3>in a single system</h3>
                    <p>Who is Nextcent suitable for?</p>
                </div>
                <div className='card_part4'>
                    <Cardpart4 
                        scr={icon1}
                        heading="Membership Organisations"
                        para="Our membership management software provides full automation of membership renewals and payments"
                    />
                    <Cardpart4 
                        scr={icon1}
                        heading="Membership Organisations"
                        para="Our membership management software provides full automation of membership renewals and payments"
                    />
                    <Cardpart4 
                        scr={icon1}
                        heading="Membership Organisations"
                        para="Our membership management software provides full automation of membership renewals and payments"
                    />
                </div>

            </div>
            <Learnmorecard 
                src={redeme1}
                heading="The unseen of spending three years at Pixelgrade"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
            />
            <div className="stats_outer">
                <div className='stats_header'>
                    <h3>Helping a local</h3>
                    <h3 style={{color:"#4CAF4F"}}>business reinvent itself</h3>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className="stats_status">
                    <div className='stats_status1'>
                        <Statusdisplay
                            scr={icon1}
                            heading="2,245,341"
                            para="Members"
                        />
                        <Statusdisplay
                            scr={icon1}
                            heading="2,245,341"
                            para="Members"
                        />
                    </div>
                    <div className='stats_status2'>
                        <Statusdisplay
                            scr={icon1}
                            heading="2,245,341"
                            para="Members"
                        />
                        <Statusdisplay
                            scr={icon1}
                            heading="2,245,341"
                            para="Members"
                        />
                    </div>
                </div>
            </div>
            <Learnmorecard 
                src={redeme2}
                heading="How to design your site footer like we did"
                para="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            />
        </div>
    )
}