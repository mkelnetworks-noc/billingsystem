import React, { useState, useEffect } from 'react';

const ProductForm = ({ initialData = {}, onSave, onCancel }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    // Only update the state if initialData has actual data
    if (Object.keys(initialData).length > 0) {
      setProduct({
        id: initialData.id || '',
        name: initialData.name || '',
        category: initialData.category || '',
        price: initialData.price || '',
        quantity: initialData.quantity || '',
      });
    }
  }, [initialData]); // Make sure initialData is stable and not re-created on every render

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    // Optionally reset the form here or when adding a new product
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-xl mb-4">{initialData.id ? 'Edit Product' : 'Add New Product'}</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select a category</option>
          <option value="Alcoholic Wines">Alcoholic Wines</option>
          <option value="Beer">Beer</option>
          <option value="Energy Drinks">Energy Drinks</option>
          <option value="Soft Drinks">Soft Drinks</option>
          <option value="Soft Wines">Soft Wines</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          min="0"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          min="0"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {initialData.id ? 'Save Changes' : 'Add Product'}
        </button>
        {onCancel && (
          <button onClick={onCancel} type="button" className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
