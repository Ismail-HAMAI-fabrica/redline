import Order from '../models/order.js';
import User from '../models/profiles.js';
import Recipe from '../models/recipes.js'

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const  profilid  = req.user.id;
    const  recipesid  = req.params.id;
    const amil = req.body.mult

    const recipe = await Recipe.findById(recipesid);
    const price1 = recipe.price;
    const price =  price1 * amil
    console.log(price);

    const order = new Order({
      recipeid: recipesid,
      profileid: profilid,
      price,
      mult: req.body.mult
    });

    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getOrdersOfTheDay = async (req, res) => {
  try {
    // Get the current date and set the time to midnight (start of the day)
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Get the orders with 'addedAt' greater than or equal to the current date
    const orders = await Order.find({ addedAt: { $gte: currentDate } });

    // Create an array to hold the processed orders with user data
    const processedOrders = [];

    // Fetch user data for each order
    for (const order of orders) {
      const { profileid, ...orderData } = order.toObject();

      // Fetch user data from the User model based on the profileid
      const user = await User.findById(profileid);

      // Extract the required user fields
      const { phonnumber, localisation, username } = user;

      // Add the user data to the orderData object
      const orderWithUserData = { ...orderData, phonnumber, localisation, username };
      
      // Add the order with user data to the processedOrders array
      processedOrders.push(orderWithUserData);
    }

    res.json(processedOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single order
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.user.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await order.remove();

    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
