'use client'
import React, { useState } from 'react'
import { Star, Wifi, Info, MapPin, ExternalLink } from 'lucide-react'
import Image from "next/image";

type Spot = {
  name: string
  category: 'Attractions' | 'Food' | 'Shopping'
  description: string
  rating: number // out of 5
  img: string
  location: string // Google Maps search query
}

const spots: Spot[] = [
  // Attractions
  {
    name: 'Bangalore Palace',
    category: 'Attractions',
    description: 'A majestic heritage palace with Tudor architecture.',
    rating: 4.5,
    img: '/palace.png',
    location: 'Bangalore Palace, Bengaluru, Karnataka, India',
  },
  {
    name: 'Lal Bagh Botanical Garden',
    category: 'Attractions',
    description: 'Historical botanical garden with glasshouse & rare plants.',
    rating: 4.7,
    img: '/lalbagh.jpg',
    location: 'Lal Bagh Botanical Garden, Bengaluru, Karnataka, India',
  },
  {
    name: 'Vidhana Soudha',
    category: 'Attractions',
    description: 'Imposing legislative building in neo-Dravidian style.',
    rating: 4.6,
    img: '/vidhana-soudha.jpg',
    location: 'Vidhana Soudha, Bengaluru, Karnataka, India',
  },
  {
    name: 'Cubbon Park',
    category: 'Attractions',
    description: 'Large green lung of the city with walking paths and heritage buildings.',
    rating: 4.4,
    img: '/cubbon-park.jpg',
    location: 'Cubbon Park, Bengaluru, Karnataka, India',
  },
  // Food
  {
    name: 'Koramangala Food Hub',
    category: 'Food',
    description: 'Lively area with vibrant eateries & cafes.',
    rating: 4.4,
    img: '/koramangala-food.jpg',
    location: 'Koramangala, Bengaluru, Karnataka, India',
  },
  {
    name: 'Local Udupi Restaurant',
    category: 'Food',
    description: 'South Indian vegetarian cuisine with authentic flavors.',
    rating: 4.3,
    img: '/udupi-restaurant.jpg',
    location: 'Udupi Restaurant near Bangalore',
  },
  {
    name: 'Brigade Road Cafes',
    category: 'Food',
    description: 'Popular street with diverse restaurants and cafes.',
    rating: 4.5,
    img: '/brigade-road-cafes.jpg',
    location: 'Brigade Road, Bengaluru, Karnataka, India',
  },
  {
    name: 'Indiranagar Pub Street',
    category: 'Food',
    description: 'Nightlife hub with pubs, bars and late-night eateries.',
    rating: 4.2,
    img: '/indiranagar-pubs.jpg',
    location: 'Indiranagar, Bengaluru, Karnataka, India',
  },
  // Shopping
  {
    name: 'Commercial Street',
    category: 'Shopping',
    description: 'Bustling market for clothes, jewelry & street shopping.',
    rating: 4.5,
    img: '/commercial-street.jpg',
    location: 'Commercial Street, Bengaluru, Karnataka, India',
  },
  {
    name: 'Chickpet (Silk Shops)',
    category: 'Shopping',
    description: 'Traditional silk saree market with rich heritage.',
    rating: 4.2,
    img: '/chickpet-silk.jpg',
    location: 'Chickpet, Bengaluru, Karnataka, India',
  },
  {
    name: 'UB City Mall',
    category: 'Shopping',
    description: 'Luxury shopping mall with premium brands and dining.',
    rating: 4.6,
    img: '/ub-city-mall.jpg',
    location: 'UB City Mall, Bengaluru, Karnataka, India',
  },
  {
    name: 'Forum Mall',
    category: 'Shopping',
    description: 'Popular shopping destination with brands, food court and entertainment.',
    rating: 4.3,
    img: '/forum-mall.jpg',
    location: 'Forum Mall, Bengaluru, Karnataka, India',
  },
]

const categories = ['All', 'Attractions', 'Food', 'Shopping'] as const

export default function ExploreBangalore() {
  const [activeCat, setActiveCat] = useState<typeof categories[number]>('All')
  const [searchTerm, setSearchTerm] = useState('')
  
  const filtered = spots.filter(s => {
    const matchesCategory = activeCat === 'All' || s.category === activeCat
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         s.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderStars = (rating: number) => {
    const full = Math.floor(rating)
    const half = rating - full >= 0.5
    return (
      <div className="flex items-center text-yellow-500">
        {Array.from({ length: full }).map((_, i) => 
          <Star key={i} className="w-4 h-4 fill-current" />
        )}
        {half && <Star className="w-4 h-4 fill-current opacity-50" />}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    )
  }

  const openInGoogleMaps = (location: string) => {
    const encodedLocation = encodeURIComponent(location)
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    window.open(url, '_blank')
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white space-y-12">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">FOSSter 2025: Explore Bangalore</h1>
        <p className="text-lg text-gray-600 mt-2">Welcome to the Garden City & Silicon Valley of India.</p>
      </header>

      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search places..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCat === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-600">
        {filtered.length === 0 ? 'No places found' : `${filtered.length} place${filtered.length !== 1 ? 's' : ''} found`}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((spot, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
            <div className="relative overflow-hidden">
              <Image
                src={spot.img}
                alt={spot.name}
                width={400}
                height={160}
                className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openInGoogleMaps(spot.location)}
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => openInGoogleMaps(spot.location)}
              >
                <div className="bg-white bg-opacity-90 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">View on Maps</span>
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{spot.name}</h3>
              {renderStars(spot.rating)}
              <p className="text-gray-600 mt-1">{spot.description}</p>
              <button 
                onClick={() => openInGoogleMaps(spot.location)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wifi className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-800">Connectivity & SIM Cards</h2>
          </div>
          <p className="text-gray-700">
            Easily available SIM cards (Jio, Airtel, Vi) at airport/stores—bring ID or passport.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Info className="text-indigo-600 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-800">General Tips</h2>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li><strong>Best Time to Visit:</strong> October–March for pleasant weather.</li>
            <li><strong>Language:</strong> Kannada native; English/Hindi widely spoken.</li>
            <li><strong>Safety:</strong> Generally safe—just follow common-sense safety.</li>
            <li><strong>Transport:</strong> Use Ola/Uber, Metro, or autos—avoid rush hours.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}