import { useEffect, useState, useCallback } from "react"

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getContent = useCallback(async () => {
    if (!search) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching meals. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getContent();
  }, [getContent]);

  return (
    <div className="container mx-auto p-4">
      <div className="  p-6 mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">Meal Search</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter an ingredient"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={getContent}
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && meals.length === 0 && search && (
        <p className="text-center">No meals found for "{search}"</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{meal.strMeal}</h3>
            </div>
            <img
              src={meal.strMealThumb || "/placeholder.svg?height=200&width=200"}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

