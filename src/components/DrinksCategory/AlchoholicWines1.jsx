import React, { useState } from 'react';

const AlcoholicWines = ({ addToCart }) => {
  const wines = [
    { id: 1, name: 'Chardonnay', price: 25, description: 'A dry, white wine with fruity notes.' },
    { id: 2, name: 'Merlot', price: 30, description: 'A smooth, medium-bodied red wine.' },
  ];

  const [quantities, setQuantities] = useState(wines.map(() => 1));

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
    <section id="alcoholic-wines" className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Alcoholic Wines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wines.map((wine, index) => (
          <div key={wine.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold">{wine.name}</h3>
            <p className="text-gray-600">{wine.description}</p>
            <p className="font-bold text-xl mt-2">${wine.price}</p>
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
              onClick={() => addToCart(wine, quantities[index])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlcoholicWines;
