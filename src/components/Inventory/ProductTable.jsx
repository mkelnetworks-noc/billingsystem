import React from 'react';

const ProductTable = ({ products, onEdit, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">{product.category}</td>
              <td className="py-2 px-4 border">#{product.price}</td>
              <td className="py-2 px-4 border">
                <div className="flex items-center justify-center">
                  <button onClick={() => onDecrement(product.id)}>-</button>
                  <span className="mx-2">{product.quantity}</span>
                  <button onClick={() => onIncrement(product.id)}>+</button>
                </div>
              </td>
              <td className="py-2 px-4 border">
                <button onClick={() => onEdit(product)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white px-2 py-1 ml-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
