import { useCallback, useState } from "react";
import Card from "../component/ui/card";
import AutoComplete from "../component/auto-complete";
import Header from "../component/Header";
import { Link } from "react-router-dom";

export default function Recipe () {
  const SEARCH_MEALS_URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [selectedMeal, setSelectedMeal] = useState([]);

  const searchMeal = useCallback(async (searchTerm) => {
    try {
      const response = await fetch(
        `${SEARCH_MEALS_URL}${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      if (data.meals) {
        console.log(data.meals);
        return data.meals.map((meal) => meal.strMeal);
      }
      return [];
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleMealChange = async (mealName) => {
    try {
      const response = await fetch(
        `${SEARCH_MEALS_URL}${encodeURIComponent(mealName)}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setSelectedMeal(data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-20">
        <AutoComplete searchMeals={searchMeal} />

        {selectedMeal && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedMeal.strMeal}
            </h2>
            <ul className="list-disc pl-5 mb-4">
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .filter((i) => selectedMeal[`strIngredient${i}`])
                .map((i) => (
                  <li key={i}
                  onChange={handleMealChange}
                  >
                    {selectedMeal[`strIngredient${i}`]} -{" "}
                    {selectedMeal[`strMeasure${i}`]}
                  </li>
                ))}
            </ul>
            <p className="whitespace-pre-line">
              {selectedMeal.strInstructions}
            </p>
          </div>
        )}
      </div>

      <main>



      </main>
    </>
  );
}