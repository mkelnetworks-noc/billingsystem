import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 mt-10">
      {/* Hero Section */}
     {/*  <section className="bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1567306226416-28f0efdc88ce)' }}> */}
      {/* <section className="bg-cover bg-center h-[90vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1700893417257-c87e3d2857a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}> */}
      <section className="bg-cover bg-center h-[100vh] flex items-center justify-center" style={{ backgroundImage: `url('/images/featured/redlabel2.avif')` }} >
      
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to WineBar</h1>
          <p className="text-xl mt-4">A selection of the finest wines from around the world</p>
          <Link to="/shopnow">
          <button className="mt-6 px-6 py-3 bg-red-500 rounded-md text-white hover:bg-red-600">Explore Our Collection</button>
          </Link>
        </div>
      </section>

      {/* Featured Wines Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Featured Wines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chardonnay */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://images.pexels.com/photos/3850860/pexels-photo-3850860.jpeg" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" /> */}
               {/* <img src="https://images.pexels.com/photos/3850860/pexels-photo-3850860.jpeg" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" /> */}
               <img src="public/images/featured/redlabel1.avif" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Chardonnay</h3>
              <p className="text-gray-700">A smooth, buttery wine with hints of oak and vanilla.</p>
            </div>

            {/* Merlot */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://images.pexels.com/photos/5272971/pexels-photo-5272971.jpeg" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" /> */}
              <img src="images/featured/whisky1.webp" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Merlot</h3>
              <p className="text-gray-700">Rich and velvety, with deep notes of berry and spice.</p>
            </div>

            {/* Cabernet Sauvignon */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0e" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" /> */}
              <img src="images/featured/yoghurt.webp" alt="Wine Bottle" className="h-64 w-full object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Cabernet Sauvignon</h3>
              <p className="text-gray-700">Bold and full-bodied, with dark fruit flavors and a hint of tobacco.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
