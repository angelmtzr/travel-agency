import React from 'react'

export default function FlightList({flightList,carriers}) {
   
    return (
        <div className="lg:flex lg:justify-center">
        <div className="flex flex-col lg:max-w-7xl mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    FROM-TO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PRICE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TIME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Seats available
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AIRLINE
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">BOOK</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {flightList.map((flight) => (
                    
                  <tr key={flight.id}>
                      
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flight.itineraries[0].segments[0].departure.iataCode} - {flight.itineraries[0].segments.at(-1).arrival.iataCode} </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${flight.price.total} {flight.price.currency}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.itineraries[0].segments[0].departure.at.split('T')[1]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.numberOfBookableSeats}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carriers[flight.itineraries[0].segments[0].carrierCode]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/" className="text-primaryDark hover:text-primaryLight">
                        BOOK
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
