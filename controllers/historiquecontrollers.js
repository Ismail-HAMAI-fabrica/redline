import CustomerHistory from '../models/customerHistory.model';

// Controller to find a customer history by ID
async function findCustomerHistoryById(req, res) {
  const { id } = req.user.id;

  try {
    const customerHistory = await CustomerHistory.findById(id);
    
    if (!customerHistory) {
      return res.status(404).json({ message: 'Customer history not found' });
    }

    res.status(200).json(customerHistory);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

export { findCustomerHistoryById };