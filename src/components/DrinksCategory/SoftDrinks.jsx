import React, { useState, useEffect } from 'react';

const SoftDrinks = ({ addToCart }) => {
  const [softDrinks, setSoftDrinks] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/drinks.json')
      .then((response) => response.json())
      .then((data) => {
        setSoftDrinks(data.softDrinks);
        setQuantities(data.softDrinks.map(() => 1));
      })
      .catch((error) => {
        console.error('Error fetching the soft drinks data:', error);
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
    <section id="soft-drinks" className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Soft Drinks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softDrinks.length > 0 ? (
          softDrinks.map((drink, index) => (
            <div key={drink.id} className="border rounded-lg p-4 shadow-lg">
              <img src={drink.image} alt={drink.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold">{drink.name}</h3>
              <p className="text-gray-600">{drink.description}</p>
              <p className="font-bold text-xl mt-2">#{drink.price}</p>
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
          <p className="text-gray-600">No soft drinks available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default SoftDrinks;
