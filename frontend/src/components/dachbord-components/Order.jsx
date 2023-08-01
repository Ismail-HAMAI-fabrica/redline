import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the server
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.get('http://localhost:3000/api/getOrdersOfTheDay', { headers })
      .then((response) => setOrders(response.data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  const handleAccept = async (orderId) => {
    try {
      // Update the order status to "Accepted" by sending a PUT request to the server
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(`http://localhost:3000/api/createFactur/${orderId}`, { status: 'Accepted' }, { headers });
      console.log('Order accepted successfully');
      // You can also show a success notification here

      // Now, delete the order
      await handleDelete(orderId);
    } catch (error) {
      console.error('Error accepting order:', error);
      // Show an error notification if needed
    }
  };

  const handleDelete = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.delete(`http://localhost:3000/api/deleteOrder/${orderId}`, { headers });
      console.log(response.data.message); 
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
      // Show an error notification if needed
    }
  };

  return (
    <>
    <Table>
  <Table.Head>
    <Table.HeadCell>
      UserName
    </Table.HeadCell>
    <Table.HeadCell>
      PhoneNumber
    </Table.HeadCell>
    <Table.HeadCell>
      Position
    </Table.HeadCell>
    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Action
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
  {orders.map((order) => (
    <Table.Row  key={order._id} className="bg-white dark:border-gray-700 dark:bg-gray-100">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
      {order.username}
      </Table.Cell>
      <Table.Cell>
      {order.phonnumber}
      </Table.Cell>
      <Table.Cell>
      {order.localisation}
      </Table.Cell>
      <Table.Cell>
      {order.price}DZ
      </Table.Cell>
      <Table.Cell className='flex flex-row justify-center gap-2 '>
        <Button  color="success" onClick={() => handleAccept(order._id)}>
            Accapte
        </Button>
        <Button onClick={() => handleDelete(order._id)} color="failure">
            Refuse
        </Button>
      </Table.Cell>
    </Table.Row>
       ))}
  </Table.Body>
</Table>
    </>
  )
}

export default Order
