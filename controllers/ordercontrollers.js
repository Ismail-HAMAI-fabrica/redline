import Order from '../models/order.js';
import Recipe from '../models/recipes.js'

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const  profilid  = req.user.id;
    console.log(profilid);
    const  recipesid  = req.params.id;
    console.log(recipesid);

    const recipe = await Recipe.findById(recipesid);
    const price = recipe.price;
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
