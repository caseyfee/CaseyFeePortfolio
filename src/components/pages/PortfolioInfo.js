import React from 'react';
import Portfolio from './Portfolio';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function PortfolioInfo() {
  return (
    <div>
        <Portfolio name={feline.name} description={feline.description} id={feline.id} />
    </div>
  );
}
