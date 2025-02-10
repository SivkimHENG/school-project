import { Search } from "lucide-react";

export default function Input() {


  return (
    <div className="mb-4">
      {/* Label on top of the input */}
      <label
        htmlFor="search"
        className="block mb-2 text-xl font-medium text-gray-900"
      >
        Search Meal...
      </label>
      {/* Container with relative positioning for the input and icon */}
      <div className="relative">
        {/* Input with placeholder and padding adjusted to accommodate the icon */}
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="block  pl-10 pr-16 py-3 bg-slate-100 rounded-md focus:outline-double focus:outline-stone-600"
        />
        {/* Search icon positioned inside the input */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );

}