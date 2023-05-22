import React from 'react';
import Portfolio from './Portfolio';



const projects = [
    {
        
        name: '',
        description: '',
        url: '',
        github: '',
    }
    ,
    ]

export default function PortfolioInfo() {
    return (
        <div className=''>
            <Portfolio name={projects.name} description={projects.description} url={projects.url} scr = {projects.scr} />
        </div>
    );
}
