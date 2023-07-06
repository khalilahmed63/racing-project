/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, Table } from '@mantine/core';
import axios from 'axios';

export default function Home() {
  const fetchRecordsAPI = process.env.REACT_APP_API_RECORDS;

  const [record, setRecord] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [roll, setRoll] = useState<any>('admin');

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`${fetchRecordsAPI}?=${page}`
      );
      setRecord(response?.data);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, [page]);

  return (
    <div className='max-w-screen-lg mx-auto'>
      <h1 className="py-40 text-2xl text-center p-4">Record with Pagination</h1>
      <Table striped highlightOnHover>
        <thead className='my-4'>
          <tr className="">
            <th className='border-2 border-black rounded'>POS</th>
            <th className='border-2 border-black rounded'>POINTS</th>
            <th className='border-2 border-black rounded'>RIDER</th>
            <th className='border-2 border-black rounded'>NATION</th>
            <th className='border-2 border-black rounded'>TEAM</th>
            <th className='border-2 border-black rounded'>BIKE</th>
            <th className='border-2 border-black rounded'>KM.h</th>
            <th className='border-2 border-black rounded'>TIME/GAP</th>

          </tr>
        </thead>
        <tbody>
          {record?.map((item: any) => (
            <tr key={item.id}>
              <td>{item.body}</td>
              <td>{item.email}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.post_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex justify-center items-center mt-2">
        <Button
          variant="default"
          disabled={page <= 1}
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="mr-4"
        >
          Previous
        </Button>
        <Button
          variant="default"
          disabled={page >= 10}
          onClick={() => {
            if (page < 10) setPage(page + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
