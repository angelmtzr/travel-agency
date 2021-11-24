import React from "react";
import { useState, useEffect } from "react";
import FlightList from "./FlightList";
import NavBar from "./NavBar";
var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: "WAtxFAxKW4rk7DaxkotEEodnduGpw6xY",
  clientSecret: "y33hZ8AtBArynVWw",
});

export default function FlightSearch() {
  const [search, setsearch] = useState({
    origins: "SYD",
    destinations: "BKK",
    departDate: "2021-12-12",
  });
  const [flights, setFlights] = useState([]);
  const [carriers, setCarriers] = useState({});
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [error, setError] = useState(null);

  const query = () => {
    setsearch({
      origins: origin,
      destinations: destination,
      departDate: date,
    });
  };
  useEffect(() => {
    setLoading(true);
    const { origins, destinations, departDate } = search;
    amadeus.shopping.flightOffersSearch
      .get({
        originLocationCode: origins,
        destinationLocationCode: destinations,
        departureDate: departDate,
        adults: 1,
        max: 10,
      })
      .then((response) => {
        setError(null);
        setLoading(false);
        if (response.result.errors) {
          console.log("HOLA");
        } else {
          const flights = response.data;
          const carriers = response.result.dictionaries.carriers;
          setCarriers(carriers);
          setFlights(flights);
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        if (error.description != undefined) {
          setError(error.description[0].detail);
        } else {
          setError("Error, check the code you entered again.");
        }
      });
  }, [search]);

  const handleOrigin = (e) => setOrigin(e.target.value);

  const handleDestination = (e) => setDestination(e.target.value);

  const handleDate = (e) => setDate(e.target.value);

  return (
    <div className="bg-gray-900 h-screen">
      <NavBar />
      <div className="md:flex justify-center">
        <div className="md:flex space-y-4 justify-around items-center space-x-10 mt-10">
          <div className="flex rounded-lg shadow-sm bg-white mx-3 md:mx-0">
            <div className="px-3 py-2 focus-within:z-10 border-r border-gray-300 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-700"
              >
                ORIGIN
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleOrigin}
                value={origin}
                className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="SYD"
              />
            </div>
            <div className="px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
              <label
                htmlFor="job-title"
                className="block w-full text-xs font-medium text-gray-700"
              >
                DESTINATION
              </label>
              <input
                value={destination}
                onChange={handleDestination}
                type="text"
                name="job-title"
                id="job-title"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="BKK"
              />
            </div>
          </div>
          <div className="h-10 flex justify-center ">
            <input
              className="focus:ring-primary rounded-lg"
              type="date"
              value={date}
              onChange={handleDate}
            />
          </div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={query}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-white ml-1 font-bold">Search</span>
          </div>
        </div>
      </div>
      {loading ? (
        <h1 className="text-primary text-center font-extrabold mt-10">
          Loading your optimal flight offers...
        </h1>
      ) : error ? (
        <h1 className="text-red-500 text-center font-extrabold mt-10">
          {error}
        </h1>
      ) : (
        <FlightList flightList={flights} carriers={carriers} />
      )}
    </div>
  );
}
