import React, { useState } from 'react';
import ProductTable from '../components/Inventory/ProductTable';
import ProductForm from '../components/Inventory/ProductForm';
import LowStockAlert from '../components/Inventory/LowStockAlert';
import SearchBar from '../components/Inventory/SearchBar';

const Inventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Red Wine', category: 'Alcoholic Wines', price: 25, quantity: 10 },
    { id: 2, name: 'White Wine', category: 'Alcoholic Wines', price: 20, quantity: 2 },
    { id: 3, name: 'Lager Beer', category: 'Beer', price: 15, quantity: 8 },
    { id: 4, name: 'Energy Drink', category: 'Energy Drinks', price: 10, quantity: 20 },
    { id: 5, name: 'Cola', category: 'Soft Drinks', price: 3, quantity: 30 },
    { id: 6, name: 'Sparkling Wine', category: 'Soft Wines', price: 12, quantity: 5 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle Add Product Form

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setShowAddForm(false); // Hide form after adding product
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleIncrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl text-center mb-6">Inventory Management</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <LowStockAlert products={products} />

      <ProductTable
        products={filteredProducts}
        onEdit={setEditingProduct}
        onDelete={handleDeleteProduct}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {/* Add Product Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Product
        </button>
      </div>

      {/* Add Product Form */}
      {showAddForm && (
        <ProductForm
          onSave={handleAddProduct}
          onCancel={() => setShowAddForm(false)} // Cancel Add Product
        />
      )}

      {/* Edit Product Form */}
      {editingProduct && (
        <ProductForm
          initialData={editingProduct}
          onSave={handleEditProduct}
          onCancel={() => setEditingProduct(null)} // Cancel Edit
        />
      )}
    </div>
  );
};

export default Inventory;
