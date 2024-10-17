import React, { useState } from 'react';

const SoftWines = ({ addToCart }) => {
  const softWines = [
    { id: 1, name: 'Sparkling Grape', price: 20, description: 'A refreshing non-alcoholic sparkling grape wine.' },
    { id: 2, name: 'Non-Alcoholic Rose', price: 22, description: 'A crisp and light non-alcoholic rose wine.' },
  ];

  const [quantities, setQuantities] = useState(softWines.map(() => 1));

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
    <section id="soft-wines" className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Soft Wines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softWines.map((softWine, index) => (
          <div key={softWine.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold">{softWine.name}</h3>
            <p className="text-gray-600">{softWine.description}</p>
            <p className="font-bold text-xl mt-2">${softWine.price}</p>
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
              onClick={() => addToCart(softWine, quantities[index])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftWines;
