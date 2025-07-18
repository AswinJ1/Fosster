'use client'
import React, { useState } from 'react'
import {
  Plane,
  TrainFront,
  Bus,
  Car,
  TramFront,
  MapPin,
  Globe,
  Info,
  Clock,
  IndianRupee,
  ExternalLink,
  Phone,
  Navigation,
  Wifi,
  CreditCard,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const TravelInfo = () => {
  const [activeTab, setActiveTab] = useState('air')
  
  const transportOptions = [
    { id: 'air', label: 'By Air', icon: Plane, activeClass: 'bg-blue-600 text-white' },
    { id: 'train', label: 'By Train', icon: TrainFront, activeClass: 'bg-green-600 text-white' },
    { id: 'bus', label: 'By Bus', icon: Bus, activeClass: 'bg-purple-600 text-white' },
    { id: 'local', label: 'Local Transport', icon: TramFront, activeClass: 'bg-pink-600 text-white' }
  ]

interface MapLocation {
    location: string;
}

const openInMaps = (location: string): void => {
    const encodedLocation: string = encodeURIComponent(location);
    const url: string = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(url, '_blank');
}

interface WebsiteURL {
    url: string;
}

const openWebsite = (url: string): void => {
    window.open(url, '_blank');
}

  const renderAirTravel = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Plane className="w-5 h-5" />
          Kempegowda International Airport (BLR)
        </h4>
        <p className="text-blue-800 mb-4">
          Main gateway to Bangalore, located ~40km from city center. Modern facilities with good connectivity.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Car className="w-4 h-4 text-blue-600" />
              From Airport to City
            </h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center justify-between">
                <span>• Ola/Uber</span>
                <span className="text-green-600 font-medium">₹400-800</span>
              </li>
              <li className="flex items-center justify-between">
                <span>• Prepaid Taxi</span>
                <span className="text-green-600 font-medium">₹600-1000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>• BMTC Vayu Vajra</span>
                <span className="text-green-600 font-medium">₹100-200</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              Travel Time
            </h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Non-peak hours: 45-60 minutes</li>
              <li>• Peak hours: 90-120 minutes</li>
              <li>• Early morning: 40-50 minutes</li>
            </ul>
          </div>
        </div>
        
        <button 
          onClick={() => openInMaps('Kempegowda International Airport, Bengaluru')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          View on Maps
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">✈️ Major Airlines Operating</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'GoAir', 'AirAsia', 'Emirates', 'Lufthansa'].map(airline => (
            <div key={airline} className="bg-gray-50 px-3 py-2 rounded text-sm text-center">
              {airline}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTrainTravel = () => (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <TrainFront className="w-5 h-5" />
          Major Railway Stations
        </h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'KSR Bengaluru City Junction', code: 'SBC', desc: 'Main station, city center' },
            { name: 'Yesvantpur Junction', code: 'YPR', desc: 'North Bangalore hub' },
            { name: 'Bengaluru Cantt', code: 'BNC', desc: 'South Bangalore' }
          ].map(station => (
            <div key={station.code} className="bg-white rounded-lg p-4 border">
              <h5 className="font-medium text-gray-900">{station.name}</h5>
              <p className="text-sm text-green-600 font-medium">({station.code})</p>
              <p className="text-sm text-gray-600 mt-1">{station.desc}</p>
              <button 
                onClick={() => openInMaps(`${station.name}, Bengaluru`)}
                className="mt-2 text-green-600 hover:text-green-800 text-sm flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                Directions
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">🚅 Popular Routes</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">From Major Cities</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Delhi → Bangalore: 34+ hours</li>
              <li>• Mumbai → Bangalore: 24+ hours</li>
              <li>• Chennai → Bangalore: 5-7 hours</li>
              <li>• Hyderabad → Bangalore: 12+ hours</li>
              <li>• Pune → Bangalore: 18+ hours</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Booking Platforms</h5>
            <div className="space-y-2">
              <button onClick={() => openWebsite('https://www.irctc.co.in')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                <ExternalLink className="w-3 h-3" />
                IRCTC Official
              </button>
              <button onClick={() => openWebsite('https://www.makemytrip.com')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                <ExternalLink className="w-3 h-3" />
                MakeMyTrip
              </button>
              <button onClick={() => openWebsite('https://www.cleartrip.com')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                <ExternalLink className="w-3 h-3" />
                Cleartrip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBusTravel = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
          <Bus className="w-5 h-5" />
          Bus Terminals & Services
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2">Main Terminals</h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Kempegowda Bus Station (Majestic)</strong> - Main hub</li>
              <li>• <strong>Satellite Bus Station</strong> - North routes</li>
              <li>• <strong>Shantinagar Bus Station</strong> - East routes</li>
            </ul>
            <button 
              onClick={() => openInMaps('Kempegowda Bus Station, Bengaluru')}
              className="mt-2 text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              View Majestic on Maps
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2">Bus Operators</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• KSRTC (Karnataka State)</li>
              <li>• APSRTC (Andhra Pradesh)</li>
              <li>• TSRTC (Telangana)</li>
              <li>• Private operators (Travels)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">🚌 Popular Routes & Fares</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Route</th>
                <th className="text-left py-2">Duration</th>
                <th className="text-left py-2">Fare Range</th>
                <th className="text-left py-2">Frequency</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-2">Chennai → Bangalore</td>
                <td>6-7 hours</td>
                <td>₹300-800</td>
                <td>Every 30 mins</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Hyderabad → Bangalore</td>
                <td>8-10 hours</td>
                <td>₹500-1200</td>
                <td>Every hour</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Mumbai → Bangalore</td>
                <td>12-14 hours</td>
                <td>₹800-2000</td>
                <td>Few daily</td>
              </tr>
              <tr>
                <td className="py-2">Mysore → Bangalore</td>
                <td>3-4 hours</td>
                <td>₹150-400</td>
                <td>Every 20 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderLocalTransport = () => (
    <div className="space-y-6">
      <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
        <h4 className="font-semibold text-pink-900 mb-3 flex items-center gap-2">
          <TramFront className="w-5 h-5" />
          Getting Around Bangalore
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Car className="w-4 h-4 text-pink-600" />
              Ride-hailing Apps
            </h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center justify-between">
                <span>• Ola (Most popular)</span>
                <span className="text-green-600 font-medium">₹10-15/km</span>
              </li>
              <li className="flex items-center justify-between">
                <span>• Uber</span>
                <span className="text-green-600 font-medium">₹12-18/km</span>
              </li>
              <li className="flex items-center justify-between">
                <span>• Namma Yatri</span>
                <span className="text-green-600 font-medium">₹8-12/km</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <TramFront className="w-4 h-4 text-pink-600" />
              Namma Metro
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Purple Line: East-West</li>
              <li>• Green Line: North-South</li>
              <li>• <strong>Fare:</strong> ₹10-60 per trip</li>
              <li>• <strong>Frequency:</strong> 3-15 minutes</li>
            </ul>
            <button 
              onClick={() => openWebsite('https://english.bmrc.co.in')}
              className="mt-2 text-pink-600 hover:text-pink-800 text-sm flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Metro Map & Timings
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">🚗 Other Transport Options</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 mb-2">Auto Rickshaws</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• ₹25 minimum fare</li>
              <li>• ₹15-20 per km</li>
              <li>• Always ask for meter</li>
              <li>• Negotiate for long trips</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 mb-2">BMTC Buses</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• ₹5-25 per trip</li>
              <li>• Extensive network</li>
              <li>• AC & Non-AC options</li>
              <li>• Peak hour crowding</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 mb-2">Car Rentals</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Self-drive: ₹1500-3000/day</li>
              <li>• With driver: ₹2500-4000/day</li>
              <li>• Zoomcar, Drivezy apps</li>
              <li>• Valid license required</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Getting to Bangalore for FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Comprehensive travel guide for international and domestic travelers
        </p>
      </div>

      {/* Transportation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {transportOptions.map(option => {
          const Icon = option.icon
          return (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                activeTab === option.id
                  ? option.activeClass
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {option.label}
            </button>
          )
        })}
      </div>

      {/* Content based on active tab */}
      <div className="mb-12">
        {activeTab === 'air' && renderAirTravel()}
        {activeTab === 'train' && renderTrainTravel()}
        {activeTab === 'bus' && renderBusTravel()}
        {activeTab === 'local' && renderLocalTransport()}
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4">
          <Info className="text-indigo-600 w-6 h-6" />
          <h3 className="text-2xl font-semibold text-gray-800">Essential Travel Tips</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Visa Requirements</h4>
                <p className="text-sm text-gray-700">International travelers need valid visa. Check e-visa options online.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Traffic Peak Hours</h4>
                <p className="text-sm text-gray-700">Avoid 8-11 AM & 5-8 PM. Plan extra time during these hours.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Wifi className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Connectivity</h4>
                <p className="text-sm text-gray-700">Get Indian SIM at airport. Jio, Airtel, Vi available with ID proof.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Payment Methods</h4>
                <p className="text-sm text-gray-700">UPI, cards widely accepted. Keep some cash for small vendors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mt-8 bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Emergency Contacts
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-yellow-900">Police</p>
            <p className="text-yellow-800">100</p>
          </div>
          <div>
            <p className="font-medium text-yellow-900">Medical Emergency</p>
            <p className="text-yellow-800">108</p>
          </div>
          <div>
            <p className="font-medium text-yellow-900">Tourist Helpline</p>
            <p className="text-yellow-800">1363</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelInfo