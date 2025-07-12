
'use client'
import React from 'react';
import { FaArrowLeft, FaPen } from 'react-icons/fa';

const MediaHeader = () => {
  return (
    <div className="bg-black text-white px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-700">
 
      <div className="flex items-start space-x-3">
     
        <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
          <FaArrowLeft className="text-white text-sm" />
        </button>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-md font-semibold">Media management</h1>
            <FaPen className="text-xs cursor-pointer" />
          </div>
          <p className="text-sm text-neutral-300 font-medium">Draft campaign</p>
        </div>
      </div>

     
      <div className="flex items-center justify-between sm:justify-end space-x-3 mt-3 sm:mt-0">
        <div className="text-right">
          <p className="text-sm font-semibold">Jane Cooper</p>
          <a href="#" className="text-sm text-purple-400 hover:underline">Change profile</a>
        </div>
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="Avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaHeader;
