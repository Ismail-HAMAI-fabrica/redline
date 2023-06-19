import Factur from "../models/factur.js";
import Order from "../models/order.js";
import User from "../models/profiles.js";

// Create a new factur
export const createFactur = async (req, res) => {
  try {
    const profilid = req.user.id;
    const orderid = req.params.id;
    const order = await Order.findById(orderid);
    const mult = order.mult
    const price = order.price
    
    const tax = 400
    // Calculate the total
    const total = mult * price + tax;

    const profil = await User.findById(profilid);
    const phonnumber = profil.phonnumber;
    const addres = profil.localisation;

    // Create a new factur document
    const factur = new Factur({
      orderid,
      addres,
      phonnumber,
      items: {
        price,
        mult
      },
      tax,
      total
    });

    // Save the factur to the database
    await factur.save();

    res.status(201).json(factur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};