import React from 'react';
import Portfolio from './Portfolio';
import triWebsitePhoto from './imgs/SundaeHomepage.png'



const projects = [
    {
        
        name: 'Sunday Sundae Triathlon',
        description: 'An inclusive DIY triathlon in south Seattle',
        url: 'https://sundaesunday.herokuapp.com/',
        scr: {triWebsitePhoto},
    }
    ,
    {
        name: 'EventDash',
        description: 'A tool for folks with bad direction skills, but the need for adventure',
        url: 'https://caseyfee.github.io/EventDash/',
        scr: {triWebsitePhoto},
    
    }]



export default function PortfolioInfo() {
    return (
        <div>
            <Portfolio name={projects.name} description={projects.description} url={projects.url} scr = {projects.scr} />
        </div>
    );
}
