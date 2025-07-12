'use client';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import SectionHeader from '../SectionHeader/SectionHeader';
import categoryTitles from '../../app/utils/categoryTitles.json';

const categories = Object.keys(categoryTitles) as (keyof typeof categoryTitles)[];

export default function Content() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryTitles | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(100);

  const titleOptions =
    selectedCategory?.length && categoryTitles[selectedCategory]
      ? categoryTitles[selectedCategory].map((title) => ({ label: title, value: title }))
      : [];
      

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <SectionHeader
        title="Content type"
        subtitle="Choose a content type that best fits your needs."
      />

      <div className="mb-6">
        <p className="my-3 text-lg font-semibold">What type of content are you creating?</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-4 py-2 rounded-full border transition ${
                selectedCategory === cat ? 'bg-purple-600 text-white' : 'border-gray-400 text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      
      {selectedCategory && (
        <div className="mb-6 md:w-1/3 w-full">
          <label className="block mb-2 text-lg font-medium">
            Which type of <strong>{selectedCategory}</strong> content do you want to create?
          </label>
          <Select
            options={titleOptions}
            value={titleOptions.find((opt) => opt.value === selectedTitle) || null}
            onChange={(opt) => setSelectedTitle(opt?.value || '')}
            placeholder="Search"
            className="text-black"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                backgroundColor: '#1e1e24',
                borderColor: '#9b5cf4',
                color: 'white',
                paddingLeft: '10px',
              }),
              singleValue: (base) => ({ ...base, color: 'white' }),
              menu: (base) => ({
                ...base,
                backgroundColor: '#1e1e24',
                color: 'white',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#9b5cf4' : '#1e1e24',
                color: 'white',
              }),
            }}
          />
        </div>
      )}

     
      <div className="mb-4 md:w-1/3 w-full">
        <label className="block mb-2 font-medium">Set the number of words for output text.</label>
        <input
          type="range"
          min={100}
          max={1000}
          step={10}
          value={wordCount}
          onChange={(e) => setWordCount(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-right text-sm mt-1">{wordCount} words</div>
      </div>
      
    </div>
  );
}
