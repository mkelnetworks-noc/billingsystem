import React from 'react';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Wine Bottle A', price: '₦50.00' },
    { id: 2, name: 'Wine Bottle B', price: '₦80.00' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <ul className="space-y-4">
        {wishlistItems.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm">Price: {item.price}</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
