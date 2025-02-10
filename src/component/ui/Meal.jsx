
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../cart";
import { ToastContainer, toast } from "react-toastify";

export default function Meal() {
  // Rename the modal state setter to keep naming consistent
  const [meal, setMeal] = useState([]);
  const { cartItems, addToCart, removeFromCart, clearFromCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  // Consistent toggle function naming and usage
  function toggleModal() {
    setShowModal(!showModal);
  }

  // Fetching the meal from the API and using the proper response structure
  async function getMeal() {
    try {
      const response = await fetch("https://themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      // Assuming the API returns an object with a "meals" array
      setMeal(data.meals);
    } catch (error) {
      console.error("Error fetching the API service:", error);
    }
  }

  useEffect(() => {
    getMeal();
  }, []);

  // Renamed notification functions to avoid duplication.
  const notifySuccess = (item) =>
    toast.success(`${item.strMeal} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyError = (item) =>
    toast.error(`Error adding ${item.strMeal} to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  function handleRemoveFromCart(mealItem) {
    removeFromCart(mealItem);
  }

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <ToastContainer />
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">Shop</h1>
        {!showModal && (
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggleModal}
          >
            Cart ({cartItems.length})
          </button>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {meal.map((mealItem) => (
          <div key={mealItem.idMeal} className="bg-white shadow-md rounded-lg px-10 py-10">
            <img
              src={mealItem.strMealThumb}
              alt={mealItem.strMeal}
              className="rounded-md h-48"
            />
            <div className="mt-4">
              <h1 className="text-lg uppercase font-bold">{mealItem.strMeal}</h1>
              <p className="mt-2 text-gray-600 text-sm">
                {mealItem.strInstructions.slice(0, 40)}...
              </p>
              {/* Optionally, if you have a price property */}
              {/* <p className="mt-2 text-gray-600">${mealItem.price}</p> */}
            </div>
            <div className="mt-6 flex justify-between items-center">
              {!cartItems.find((item) => item.id === mealItem.idMeal) ? (
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(mealItem);
                    notifySuccess(mealItem);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => addToCart(mealItem)}
                  >
                    +
                  </button>
                  <p className="text-gray-600">
                    {cartItems.find((item) => item.id === mealItem.idMeal).quantity}
                  </p>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      const cartItem = cartItems.find((item) => item.id === mealItem.idMeal);
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(mealItem);
                      } else {
                        removeFromCart(mealItem);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Cart showModal={showModal} toggle={toggleModal} />
    </div>
  );
}
