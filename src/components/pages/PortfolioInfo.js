import React from 'react';
import Portfolio from './Portfolio';

const feline = 
    {
        name: 'Fluffykins',
        description: 'A cat that acts like a dog',
        id: 1,
    }
    // ,
    // {
    //     name: 'Fluffy',
    //     description: 'A cat that acts like a cat',
    //     id: 2,
    // }



export default function PortfolioInfo() {
    return (
        <div>
            <Portfolio name={feline.name} description={feline.description} id={feline.id} />
        </div>
    );
}
