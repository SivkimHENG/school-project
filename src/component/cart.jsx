import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Minus, Plus } from "lucide-react";
import PropTypes from "prop-types";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearFromCart, getCartTotal } =
    useContext(CartContext);

  // Fixed toast notifications: changed "$fff" to "#fff" for valid color
  const notifyRemoveFromCart = (item) =>
    toast.error(`${item.strMeal} removed from the cart`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error("Cart Cleared!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (meal) => {
    removeFromCart(meal);
    notifyRemoveFromCart(meal);
  };

  return (
    showModal && (
      <div className="flex flex-col items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8 p-10 text-black dark:text-white font-normal uppercase text-sm">
        <ToastContainer />
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                {/* Ensure you are using the correct property name for the image */}
                <img src={item.strMealThumb} alt={item.strMeal} className="w-16 h-16 object-cover" />
                <div className="flex flex-col justify-center">
                  <h1>{item.strMeal}</h1>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => addToCart(item)}
                >
                  <Plus />
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find(
                      (meal) => meal.id === item.id
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                >
                  <Minus />
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <button
              className="px-4 py-2 bg-gray-800 text-xs font-bold uppercase rounded focus:outline-none hover:bg-gray-700 focus:bg-gray-700"
              onClick={() => {
                clearFromCart();
                notifyCartCleared();
              }}
            >
              Clear Cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
