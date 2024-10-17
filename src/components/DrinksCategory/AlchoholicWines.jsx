import React, { useState, useEffect } from 'react';

const AlcoholicWines = ({ addToCart }) => {
  const [wines, setWines] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/drinks.json')
      .then((response) => response.json())
      .then((data) => {
        setWines(data.alcoholicWines);
        setQuantities(data.alcoholicWines.map(() => 1));
      })
      .catch((error) => {
        console.error('Error fetching the wines data:', error);
      });
  }, []);

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
        {wines.length > 0 ? (
          wines.map((wine, index) => (
            <div key={wine.id} className="border rounded-lg p-4 shadow-lg">
              <img src={wine.image} alt={wine.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold">{wine.name}</h3>
              <p className="text-gray-600">{wine.description}</p>
              <p className="font-bold text-xl mt-2">#{wine.price}</p>
              <div className="flex items-center mt-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-l" onClick={() => decrement(index)}>-</button>
                <span className="px-3">{quantities[index]}</span>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-r" onClick={() => increment(index)}>+</button>
              </div>
              <button className="bg-gray-100 hover:bg-red-50  py-2 px-4 rounded mt-4 w-full" onClick={() => addToCart(wine, quantities[index])}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No wines available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default AlcoholicWines;
