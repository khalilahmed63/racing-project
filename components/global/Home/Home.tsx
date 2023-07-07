/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, MultiSelect, Select, Table } from '@mantine/core';
import axios from 'axios';

export default function Home() {
  // const fetchRecordsAPI = process.env.REACT_APP_API_RECORDS;
  const fetchRecordsAPI =
    'https://racingmike.com/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&eventid=8ed52491-e1aa-49a9-8d70-f1c1f8dd3090&categoryid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942&session=RAC';

  const [record, setRecord] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [roll, setRoll] = useState<any>('admin');
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

  const startYear = new Date().getFullYear();
  const endYear = startYear - 73;
  const years = Array.from({ length: startYear - endYear + 1 }, (_, index) =>
    (startYear - index).toString()
  );

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };
  const [searchValue, onSearchChange] = useState('');

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`${fetchRecordsAPI}?=${page}`);
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
    <div className="max-w-screen-lg mx-auto">
      <div className=" flex justify-center gap-5 py-48 ">
        <Select
          label="Year"
          placeholder="Select year"
          value={selectedYear}
          onChange={handleYearChange}
          data={years.map((year) => ({ value: year, label: year }))}
        />
        <Select
          label="EVENT"
          placeholder="Pick one"
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <Select
          label="Category"
          placeholder="Pick one"
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <Select
          label="Sessions"
          placeholder="Pick one"
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No options"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
      </div>
      <Table striped highlightOnHover className="border-collapse border border-black">
        <thead className="my-4">
          <tr>
            <th className="border border-black">POS</th>
            <th className="border border-black">POINTS</th>
            <th className="border border-black">RIDER</th>
            <th className="border border-black">NATION</th>
            <th className="border border-black">TEAM</th>
            <th className="border border-black">BIKE</th>
            <th className="border border-black">KM.h</th>
            <th className="border border-black">TIME/GAP</th>
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
