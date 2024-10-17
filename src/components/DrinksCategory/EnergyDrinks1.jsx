import React, { useState } from 'react';

const EnergyDrinks = ({ addToCart }) => {
  const energyDrinks = [
    { id: 1, name: 'Red Bull', price: 10, description: 'Popular energy drink with a boost.' },
    { id: 2, name: 'Monster', price: 12, description: 'Strong energy for a long-lasting effect.' },
  ];

  const [quantities, setQuantities] = useState(energyDrinks.map(() => 1));

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
    <section id="energy-drinks" className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Energy Drinks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {energyDrinks.map((energyDrink, index) => (
          <div key={energyDrink.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold">{energyDrink.name}</h3>
            <p className="text-gray-600">{energyDrink.description}</p>
            <p className="font-bold text-xl mt-2">${energyDrink.price}</p>
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
              onClick={() => addToCart(energyDrink, quantities[index])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnergyDrinks;
