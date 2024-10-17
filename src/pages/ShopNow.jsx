import React, { useRef, useContext, useState } from 'react';
import AlcoholicWines from '../components/DrinksCategory/AlchoholicWines';
import Beer from '../components/DrinksCategory/Beer';
import EnergyDrinks from '../components/DrinksCategory/EnergyDrinks';
import SoftDrinks from '../components/DrinksCategory/SoftDrinks';
import SoftWines from '../components/DrinksCategory/SoftWines';
import { CartContext } from '../context/CartContext';
import CartModal from '../components/CartModal';

const ShopNow = () => {
  const wineRef = useRef(null);
  const beerRef = useRef(null);
  const energyRef = useRef(null);
  const softDrinkRef = useRef(null);
  const softWineRef = useRef(null);

  const { addToCart } = useContext(CartContext); // Use context to add to cart
  const [cartModalOpen, setCartModalOpen] = useState(false); // State for cart modal

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openCartModal = () => setCartModalOpen(true); // Open cart modal
  const closeCartModal = () => setCartModalOpen(false); // Close cart modal

  return (
    <div className="shop-now-page p-6 mt-20">
      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8 ">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => scrollToSection(wineRef)}
        >
          Alcoholic Wines
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => scrollToSection(beerRef)}
        >
          Beer
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => scrollToSection(energyRef)}
        >
          Energy Drinks
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => scrollToSection(softDrinkRef)}
        >
          Soft Drinks
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={() => scrollToSection(softWineRef)}
        >
          Soft Wines
        </button>
      </div>

      {/* Category Sections */}
      <div ref={wineRef}><AlcoholicWines addToCart={addToCart} /></div>
      <div ref={beerRef}><Beer addToCart={addToCart} /></div>
      <div ref={energyRef}><EnergyDrinks addToCart={addToCart} /></div>
      <div ref={softDrinkRef}><SoftDrinks addToCart={addToCart} /></div>
      <div ref={softWineRef}><SoftWines addToCart={addToCart} /></div>

      {/* View Cart Button */}
      <button
        onClick={openCartModal}
        className="fixed bottom-5 right-5 bg-red-500 text-white py-2 px-4 rounded-full"
      >
        View Cart
      </button>

      {/* Cart Modal */}
      <CartModal isOpen={cartModalOpen} onRequestClose={closeCartModal} onClose={closeCartModal} />
    </div>
  );
};

export default ShopNow;
