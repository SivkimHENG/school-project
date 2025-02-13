import { useEffect, useState } from "react";
import Header from "../component/Header.jsx";
import Card from "../component/ui/card.jsx";
import { Link } from "react-router-dom";
import Footer from "../component/Footer.jsx"

//TODO:  Modal for the Card Body
export default function Home() {
  const [meals, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState(null);

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

    const fetchIngredient = async () => {
        try {
            const response =  await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            const data = await response.json();
            setIngredients(data.meals.slice(0,12));
            console.log(data);

        } catch (err) {
            console.log(err);
        }


    }

  useEffect(() => {
    fetchMeal();
    fetchIngredient();
  }, []);

  if (!meals) {
    return <div className="text-center py-5"></div>;
  }

  return (
    <>
      <Header />

            <main>
                <img src="/cover-for-project.jpg"
                    className="shadow-lg"
                />

                <section className="mt-10">
                    <div className=" flex items-center justify-center w-full  py-16 bg-green-700">
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
                <section className="mt-10">
                    <div className="flex items-center justify-center w-full py-16 bg-green-700">
                        <h1 className="font-mono font-bold text-white text-4xl">
                            Popular Ingredients
                        </h1>
                    </div>
                    <div className="min-h-screen bg-gray-100 p-6">
                        {ingredients ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {ingredients.map((ingredient) => {
                                    const ingredientNames = ingredient.strIngredient;
                                    const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredientNames}.png`;
                                    return (
                                        <Card key={ingredientNames} className="w-full">
                                            <Card.Image
                                                src={imageUrl}
                                                alt={ingredientNames}
                                                className="h-72 object-cover"
                                            />
                                            <Card.Title className="text-2xl font-bold flex justify-center mt-4 pb-10">
                                                {ingredientNames}
                                            </Card.Title>
                                        </Card>
                                    );
                                })}
                            </div>
                        ) : (
                                <div className="text-center py-5">Loading ingredients...</div>
                            )}
                    </div>
                </section>

      </main>


            <Footer/>

    </>
  );
}
