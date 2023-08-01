import Factur from "../models/factur.js";
import Order from "../models/order.js";
import User from "../models/profiles.js";

// Create a new factur
export const createFactur = async (req, res) => {
  try {
    const orderid = req.params.id;
    const order = await Order.findById(orderid);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    const price = order.price;
    const recipeid = order.recipeid;
    const tax = 400;
    // Calculate the total
    const total = price + tax;

    const profil = await User.findById(order.profileid);
    
    if (!profil) {
      return res.status(404).json({ error: "User profile not found" });
    }

    const phonnumber = profil.phonnumber;
    const addres = profil.localisation;

    // Create a new factur document
    const factur = new Factur({
      orderid,
      recipeid,
      addres,
      phonnumber,
      items: {
        price,
        mult: 1, // If you have a "mult" value in the order, you can use it here.
      },
      tax,
      total,
    });

    // Save the factur to the database
    await factur.save();

    res.status(201).json(factur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getFacturById = async (req, res) => {
  try {
    const facturId = req.params.id;

    // Find the factur in the database by its ID
    const factur = await Factur.findById(facturId);

    if (!factur) {
      return res.status(404).json({ error: "Factur not found" });
    }

    res.json(factur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
