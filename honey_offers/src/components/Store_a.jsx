import React from 'react'
import ChatApp from './ChatApp'


const Store_a = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Adidas</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Offer 1</h2>
            <p className="text-gray-700">Description of Offer 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Offer 2</h2>
            <p className="text-gray-700">Description of Offer 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Offer 3</h2>
            <p className="text-gray-700">Description of Offer 3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Offer 4</h2>
            <p className="text-gray-700">Description of Offer 4</p>
          </div>
        </div>
      </div>
      <ChatApp/>
    </div>
  )
}

export default Store_a