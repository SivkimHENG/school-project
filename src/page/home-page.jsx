import { useEffect, useState } from "react";
import Header from "../component/Header.jsx";
import Card from "../component/ui/card.jsx";
import { Link } from "react-router-dom";


//TODO: Meal of the week for the api mealdb
export default function Home() {
  const [meals, setMeal] = useState(null);

  const fetchMeal = async () => {
    try {
      const mealRequests = Array.from({ length: 12 }, () =>
        fetch("https://themealdb.com/api/json/v1/1/random.php").then((res) =>
          res.json()
        )
      );
      const mealResponse = await Promise.all(mealRequests);
      setMeal(mealResponse.map((response) => response.meals[0]));
      console.log(mealResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (!meals) {
    return <div className="text-center py-5"></div>;
  }

  return (
    <>
      <Header />

      <main>
        <section className="mt-10">
          <div className=" flex items-center justify-center w-full  py-16 bg-green-400">
            <h1 className="font-mono font-bold text-white text-4xl ">
              Meals of the week
            </h1>
          </div>
        </section>
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <Card key={meal.idMeal} className="w-full">
                <Card.Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-64 object-cover"
                />
                <Card.Title className="text-2xl font-bold  flex justify-center mt-4">
                  {meal.strMeal}
                </Card.Title>
                <Card.Body className="m-5">
                  <h1 className="text-green-600 font-bold text-xl">Ingredient List</h1>
                  <ul className="list-disc pl-5 text-gray-700 text-xs mt-4">
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                      .filter((i) => {
                        const ingredient = meal[`strIngredient${i}`];
                        return ingredient && ingredient.trim();
                      })
                      .map((i) => {
                        const measure = meal[`strMeasure${i}`] || "";
                        const ingredient = meal[`strIngredient${i}`];
                        return (
                          <li key={i}>
                            {measure} {ingredient}
                          </li>
                        );
                      })}
                  </ul>
                  <Link
                  className="mt-4 text-md font-thin"
                   to={meal.strSource}>Read more</Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
