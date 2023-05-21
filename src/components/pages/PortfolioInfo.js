import React from 'react';
import Portfolio from './Portfolio';



const projects = [
    {
        
        name: '',
        description: '',
        url: '',
        scr: '',
    }
    ,
    ]

export default function PortfolioInfo() {
    return (
        <div>
            <Portfolio name={projects.name} description={projects.description} url={projects.url} scr = {projects.scr} />
        </div>
    );
}
