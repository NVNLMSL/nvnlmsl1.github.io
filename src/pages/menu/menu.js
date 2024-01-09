import React, { useState } from "react";
import burger1 from '../../components/image/burger1.jpg';
import soup1 from '../../components/image/soup1.jpg';
import dumpling1 from '../../components/image/dumpling1.jpg';
import salad1 from '../../components/image/salad1.jpg';

const Menu = () => {
  const [cart, setCart] = useState([]); // Array to store cart items
  const [itemCounts, setItemCounts] = useState({}); // Object to store item counts
  const [totalPrice, setTotalPrice] = useState(0); // Total cart price

  // Function to add an item to the cart
  const addItemToCart = (itemName, price) => {
    setCart([...cart, itemName]);
    setItemCounts({
      ...itemCounts,
      [itemName]: (itemCounts[itemName] || 0) + 1,
    });
    setTotalPrice(totalPrice + price);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemName, price) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== itemName);
    setCart(updatedCart);
    setItemCounts({
      ...itemCounts,
      [itemName]: Math.max((itemCounts[itemName] || 0) - 1, 0),
    });
    setTotalPrice(totalPrice - price);
  };

  return (
    <div className='menu'>
      <main>
        <h1>Our Delicious Vegan Menu</h1>
        <div className="cart">
          <span role="img" aria-label="Cart">
            🛒
          </span> 
          <span>Total: ${totalPrice.toFixed(2)} AUD</span>
        </div>

        <div className="menu-item">
          <img src={burger1} alt="Veggie burger pic" />
          <h2>Veggie Burger</h2>
          <p>Veg pattie with lettuce, tomato, onion, and vegan mayo</p>
          <p className="price">Price: $10.99 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Veggie Burger", 10.99)}>+</button>
            <span>{itemCounts["Veggie Burger"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Veggie Burger", 10.99)}
              disabled={!itemCounts["Veggie Burger"]}
            >
              -
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src={dumpling1} alt="Dumpling pic" />
          <h2>Veggie Dumpling</h2>
          <p>mience vegetables marinated with spice wrapped in pastry</p>
          <p className="price">Price: $11.99 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Veggie Dumpling", 11.99)}>+</button>
            <span>{itemCounts["Veggie Dumpling"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Veggie Dumpling", 11.99)}
              disabled={!itemCounts["Veggie Dumpling"]}
            >
              -
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src={soup1} alt="Soup pic" />
          <h2>Pumpkin soup</h2>
          <p>Red pumpkin soup with vegan cream</p>
          <p className="price">Price: $9.99 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Pumpkin soup", 9.99)}>+</button>
            <span>{itemCounts["Pumpkin soup"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Pumpkin soup", 9.99)}
              disabled={!itemCounts["Pumpkin soup"]}
            >
              -
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src={salad1} alt="Salad pic" />
          <h2>Greek Salad</h2>
          <p>Fresh Greens with vegan cheese in Italian dressing</p>
          <p className="price">Price: $8.99 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Greek Salad", 8.99)}>+</button>
            <span>{itemCounts["Greek Salad"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Greek Salad", 8.99)}
              disabled={!itemCounts["Greek Salad"]}
            >
              -
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;