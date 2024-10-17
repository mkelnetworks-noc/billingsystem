import React from 'react';

const LowStockAlert = ({ products }) => {
  const lowStockItems = products.filter((product) => product.quantity <= 5);

  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500">
      <h2 className="text-xl font-bold">Low Stock Alert</h2>
      <ul>
        {lowStockItems.map((product) => (
          <li key={product.id} className="mt-2">
            {product.name} - {product.quantity} left
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockAlert;
