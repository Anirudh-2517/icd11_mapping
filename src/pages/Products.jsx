import { useState } from 'react';

const products = [
  { 
    name: "Basmati Rice", 
    img: "https://cdn.pixabay.com/photo/2014/12/11/02/55/rice-563027_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/8b5a2b?text=Basmati+Rice"
  },
  { 
    name: "Red Lentils", 
    img: "https://cdn.pixabay.com/photo/2016/08/26/17/23/red-lentils-1621519_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/d2691e?text=Red+Lentils"
  },
  { 
    name: "Turmeric Powder", 
    img: "https://cdn.pixabay.com/photo/2018/04/17/15/24/turmeric-3327244_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/ffd700?text=Turmeric+Powder"
  },
  { 
    name: "Chickpeas", 
    img: "https://cdn.pixabay.com/photo/2016/03/05/22/31/chickpeas-1239190_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/daa520?text=Chickpeas"
  },
  { 
    name: "Cumin Seeds", 
    img: "https://cdn.pixabay.com/photo/2017/05/11/11/15/cumin-2303576_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/8b4513?text=Cumin+Seeds"
  },
  { 
    name: "Soybeans", 
    img: "https://cdn.pixabay.com/photo/2016/08/26/17/06/soy-1621508_960_720.jpg",
    fallback: "https://via.placeholder.com/400x300/f8f8f8/228b22?text=Soybeans"
  },
];

function Products() {
  const [imageStatus, setImageStatus] = useState({});

  const handleImageLoad = (index) => {
    setImageStatus(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index) => {
    setImageStatus(prev => ({ ...prev, [index]: 'error' }));
  };

  const getImageSrc = (product, index) => {
    if (imageStatus[index] === 'error') {
      return product.fallback;
    }
    return product.img;
  };

  return (
    <div className="p-10 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Products</h1>
      <p className="text-gray-600 text-center mb-10 text-lg">Premium quality agricultural products for your kitchen</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img 
                src={getImageSrc(product, index)}
                alt={product.name} 
                className="w-full h-48 object-cover"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Fresh
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <h2 className="text-xl font-bold text-white">{product.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">Premium Quality • Organic</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">Available</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 text-sm">All images loaded successfully</span>
        </div>
      </div>
    </div>
  );
}

export default Products;