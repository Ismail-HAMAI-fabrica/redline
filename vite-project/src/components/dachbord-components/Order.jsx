import { Button, Table } from 'flowbite-react';

import React from 'react'

const Order = () => {
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
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-100">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
        Magic Mouse 2
      </Table.Cell>
      <Table.Cell>
        Black
      </Table.Cell>
      <Table.Cell>
        Accessories
      </Table.Cell>
      <Table.Cell>
        $99
      </Table.Cell>
      <Table.Cell className='flex flex-row gap-2 pt-0'>
        <Button  color="success">
            Accapte
        </Button>
        <Button color="failure">
            Refuse
        </Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
    </>
  )
}

export default Order
