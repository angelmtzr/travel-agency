import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BookedList() {
  const [bookedList, setFlights] = useState([]);

  useEffect(async () => {
    const userID = sessionStorage.getItem("currentUserId");

    const response = await axios.get("/api/flights");

    const flights = response.data.filter((flight) => userID == flight.user);

    setFlights(flights);
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/flights/${id}`);
    setFlights(bookedList.filter((flight) => id !== flight._id));
  };

  return (
    <div className="h-screen bg-gray-900">
      <NavBar />

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
                        DATE
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
                        AIRLINE
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">BOOK</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookedList.map((flight) => (
                      <tr key={flight._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {flight.origin} - {flight.destination}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${flight.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {flight.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {flight.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {flight.airline}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleDelete(flight._id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            DELETE
                          </button>
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
    </div>
  );
}
