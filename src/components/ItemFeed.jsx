import axios from "axios";
import { baseURL } from "../api";
import { useState, useEffect } from "react";

export default function ItemFeed() {
  const [feed, setFeed] = useState();

  async function fetchAPI() {
    const response = await axios.get(`${baseURL}/starships`);
    setFeed(response.data.results);
    console.log(response.data.results);
  }

  useEffect(() => {
    fetchAPI();
    console.log(feed);
  }, []);

  return (
    <div className="relative w-1/3 p-1 float-right border-2">
      <h4 className="text-center">Here&apos;s the Feed!</h4>
      {feed && feed.map((item, index) => (
        <div className="my-1 max-w-sm w-full lg:max-w-full lg:flex border border-black" key={index}>
        <img className="h-48 p-1 lg:h-auto lg:w-48 flex-none object-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://www.gstatic.com/webp/gallery/1.jpg" title="Woman holding a mug">
        </img>
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              {item.name}
            </p>
            <div className="text-gray-900 font-bold text-md mb-2">{item.model}</div>
            <p className="text-gray-700 text-base">Class: {item.starship_class}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="https://www.gstatic.com/webp/gallery/3.jpg" alt="Avatar of Jonathan Reinink"></img>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{item.manufacturer}</p>
              <p className="text-gray-600">{item.cost_in_credits} credits</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
