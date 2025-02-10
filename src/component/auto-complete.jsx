"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


//TODO:  Search Link not get the full name without space
//FIXME: Link name


export default function AutoComplete({ searchMeals }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    let isMounted = true
    const getSuggestions = async () => {
      if (searchTerm.length > 0) {
        const fetchedSuggestions = await searchMeals(searchTerm)
        if (isMounted) {
          setSuggestions(fetchedSuggestions)
          setShowSuggestions(true)
        }
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }

    const debounce = setTimeout(() => {
      getSuggestions()
    }, 300)

    return () => {
      isMounted = false
      clearTimeout(debounce)
    }
  }, [searchTerm, searchMeals])

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  function handleSuggestionClick(suggestion) {
    setSearchTerm(suggestion)
    setShowSuggestions(false)
  }

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="search"
        className="w-full p-3 rounded-lg bg-slate-300 cursor-pointer text-gray-500 font-mono  "
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Recipes..."
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute w-full bg-gray-50 border divide-y-2 divide-gray-100 border-gray-300 mt-1 max-h-40 overflow-y-auto rounded shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            <li 
            to="/"
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Link to={`/${searchTerm.split(" ").join("")}`}>
              {suggestion}
              </Link>
            </li>
          ))}
        </ul>
      )}


    </div>
  )
}
