'use client'
import React, { useState } from 'react';
import { Search, MapPin, Star, Wifi, Car, Coffee, Utensils, Filter } from 'lucide-react';

const BangaloreHotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const hotels = [
    {
      id: 1,
      name: "The Leela Palace Bangalore",
      type: "luxury",
      area: "HAL Airport Road",
      rating: 4.8,
      price: 15000,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      amenities: ["wifi", "parking", "restaurant", "spa"],
      description: "Luxury hotel with world-class amenities and exceptional service."
    },
    {
      id: 2,
      name: "ITC Gardenia",
      type: "luxury",
      area: "Residency Road",
      rating: 4.7,
      price: 12000,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      amenities: ["wifi", "parking", "restaurant", "gym"],
      description: "Premium business hotel in the heart of Bangalore."
    },
    {
      id: 3,
      name: "Taj MG Road",
      type: "luxury",
      area: "MG Road",
      rating: 4.6,
      price: 11000,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["wifi", "restaurant", "bar", "concierge"],
      description: "Iconic hotel on the famous MG Road with heritage charm."
    },
    {
      id: 4,
      name: "Radisson Blu Atria",
      type: "business",
      area: "Palace Road",
      rating: 4.3,
      price: 8000,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      amenities: ["wifi", "parking", "restaurant", "pool"],
      description: "Modern business hotel with excellent connectivity."
    },
    {
      id: 5,
      name: "Sheraton Grand Bangalore",
      type: "luxury",
      area: "Brigade Gateway",
      rating: 4.5,
      price: 10000,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      amenities: ["wifi", "parking", "restaurant", "spa"],
      description: "Contemporary luxury hotel in the IT corridor."
    },
    {
      id: 6,
      name: "Zostel Bangalore",
      type: "budget",
      area: "Koramangala",
      rating: 4.2,
      price: 1500,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      amenities: ["wifi", "cafe", "common-area"],
      description: "Trendy hostel perfect for backpackers and young travelers."
    },
    {
      id: 7,
      name: "TreeHouse Hotels",
      type: "boutique",
      area: "Rajajinagar",
      rating: 4.1,
      price: 4500,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      amenities: ["wifi", "restaurant", "unique-design"],
      description: "Quirky boutique hotel with innovative design."
    },
    {
      id: 8,
      name: "Ginger Bangalore",
      type: "business",
      area: "Electronic City",
      rating: 4.0,
      price: 3500,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
      amenities: ["wifi", "restaurant", "business-center"],
      description: "Smart business hotel with modern amenities."
    }
  ];

  type AmenityType = 'wifi' | 'parking' | 'restaurant' | 'cafe';
  
  const amenityIcons: Record<AmenityType, React.ReactNode> = {
    wifi: <Wifi size={16} />,
    parking: <Car size={16} />,
    restaurant: <Utensils size={16} />,
    cafe: <Coffee size={16} />
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || hotel.type === filterType;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && hotel.price <= 3000) ||
                        (priceRange === 'mid' && hotel.price > 3000 && hotel.price <= 8000) ||
                        (priceRange === 'luxury' && hotel.price > 8000);
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Hotels & Accommodations
          </h1>
          <p className="text-sm sm:text-base text-gray-600 flex items-center">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
            Bangalore, Karnataka
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hotels or areas..."
              className="w-full pl-8 sm:pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
            
            {showFilters && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                >
                  <option value="all">All Types</option>
                  <option value="luxury">Luxury</option>
                  <option value="business">Business</option>
                  <option value="budget">Budget</option>
                  <option value="boutique">Boutique</option>
                </select>
                
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (₹0 - ₹3,000)</option>
                  <option value="mid">Mid-range (₹3,000 - ₹8,000)</option>
                  <option value="luxury">Luxury (₹8,000+)</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredHotels.length} accommodation{filteredHotels.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Hotel Grid - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              {/* Hotel Image */}
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />

                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs sm:text-sm font-medium capitalize">
                  {hotel.type}
                </div>
              </div>

              {/* Hotel Details */}
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {hotel.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mr-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600 truncate">{hotel.area}</span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-medium text-gray-900 ml-1">
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                  {hotel.description}
                </p>

                {/* Amenities - Responsive Layout */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <div key={amenity} className="flex items-center bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                      {amenityIcons[amenity as AmenityType] || <div className="w-3 h-3 sm:w-4 sm:h-4" />}
                      <span className="text-xs text-gray-600 ml-1 capitalize hidden sm:inline">
                        {amenity.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <div className="bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                      <span className="text-xs text-gray-600">
                        +{hotel.amenities.length - 3}
                      </span>
                    </div>
                  )}
                </div>

                {/* Price and Book Button - Responsive Layout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mt-auto">
                  <div className="w-full sm:w-auto">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">
                      ₹{hotel.price.toLocaleString()}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600 ml-1">/night</span>
                  </div>
                  <button 
                    onClick={() => window.open(`https://booking.com/hotel/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    className="w-full sm:w-auto bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
              No hotels found
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BangaloreHotels;