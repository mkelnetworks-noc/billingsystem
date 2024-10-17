import React, { useState } from 'react';

const Beer = ({ addToCart }) => {
  const beers = [
    { id: 1, name: 'Lager', price: 15, description: 'A light, crisp lager beer.' },
    { id: 2, name: 'IPA', price: 18, description: 'A bold, hoppy Indian Pale Ale.' },
  ];

  const [quantities, setQuantities] = useState(beers.map(() => 1));

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  return (
    <section id="beer" className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Beer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beers.map((beer, index) => (
          <div key={beer.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold">{beer.name}</h3>
            <p className="text-gray-600">{beer.description}</p>
            <p className="font-bold text-xl mt-2">${beer.price}</p>
            <div className="flex items-center mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-l"
                onClick={() => decrement(index)}
              >
                -
              </button>
              <span className="px-3">{quantities[index]}</span>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-r"
                onClick={() => increment(index)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 w-full"
              onClick={() => addToCart(beer, quantities[index])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beer;
