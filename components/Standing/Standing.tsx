/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { BackgroundImage, Loader, Select, Table } from '@mantine/core';
import axios from 'axios';
import Link from 'next/link';

export default function Standing() {
  const [category, setCategory] = useState<any>('');
  const [selectedYear, setSelectedYear] = useState<any | undefined>('');
  const fetchRecordsAPI = `https://racingmike.com/api/v1.0/motogp-world-standing-riders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9${
    selectedYear && `&year=${selectedYear}`
  }${category && `&categoryid=${category}`}`;

  const [record, setRecord] = useState<any | undefined>([]);
  const [categories, setCategories] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [loading, setLoading] = useState<any>(false);

  const startYear = new Date().getFullYear();
  const endYear = startYear - 73;
  const years = Array.from({ length: startYear - endYear + 1 }, (_, index) =>
    (startYear - index).toString()
  );

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  const fetchRecord = async () => {
    if (category && selectedYear) {
      setLoading(true);
      try {
        const response = await axios.get(`${fetchRecordsAPI}`);
        setRecord(response?.data);
        setLoading(false);
        // console.log(response, 'response');
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const clearFilter = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://racingmike.com/api/v1.0/motogp-world-standing-riders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      );
      setRecord(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/api/v1.0/motogp-category?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
      );
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryList = categories?.reduce((uniqueItem: any[], item: any) => {
    const isDuplicate = uniqueItem.some((listitem) => listitem.value === item.id);
    if (!isDuplicate) {
      uniqueItem.push({
        value: item.id,
        label: item.name || 'Unknown',
      });
    }

    return uniqueItem;
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchRecord();
  }, [page, selectedYear, category]);

  return (
    <div className="px-5 sm:px-0">
      <div className="max-w-screen-xl mx-auto">
        <BackgroundImage src="/motogpbanner2.jpg">
          <div className="h-40 mt-14 bg-black/50">
            <h1 className="z-50 text-white text-4xl font-bold text-center pt-14">Standing</h1>{' '}
          </div>
        </BackgroundImage>
        <div className="">
          <div className="w-full sm:flex justify-between p-4">
            <div className="">
              <h1 className="text-xl font-bold mb-3">Motul TT Assen</h1>
              <Link href="#" target="_blank" passHref>
                <p className="underline">MotoGP™ RAC Classification 2023</p>
              </Link>
            </div>
            <div className="sm:flex gap-5 mt-4 sm:mt-0 items-center sm:px-5 justify-end">
              <div className="flex gap-5">
                <Select
                  className="w-44"
                  label="Year"
                  placeholder="Select year"
                  searchable
                  clearable
                  value={selectedYear}
                  onChange={handleYearChange}
                  nothingFound="No options"
                  data={years.map((year) => ({ value: year, label: year }))}
                />
                <Select
                  className="w-44"
                  label="Category"
                  placeholder="Pick one"
                  onChange={setCategory}
                  value={category}
                  nothingFound="No options"
                  data={categoryList}
                />
              </div>
              <p
                className="my-2 sm:-mb-6 cursor-pointer hover:text-blue-600"
                onClick={() => {
                  setSelectedYear('');
                  setCategory('');
                  clearFilter();
                }}
              >
                Clear filter
              </p>
            </div>
          </div>
          <div className="py-2 px-5 bg-[#1A1B1E] flex justify-between border min-w-[800px]">
            <div className="flex">
              <p className="text-xs text-white">TT Circuit Assen , June 25th 2023</p>
            </div>
            <div className="flex">
              <p className="text-xs text-white mx-1">30º C</p>
              <p className="text-xs text-white ml-2">Clear</p>
              <p className="text-xs text-white ml-2">Track condition: Dry</p>
              <p className="text-xs text-white ml-2">Humidity: 32%</p>
              <p className="text-xs text-white ml-2">Ground: 47º</p>
            </div>
          </div>
          {!loading ? (
            <div>
              <>
                {record?.length === 0 ? (
                  <div className="h-96">
                    <h1 className="text-center font-bold pt-20">Record not found :(</h1>
                  </div>
                ) : (
                  <Table
                    striped
                    highlightOnHover
                    className="max-h-96 min-w-[800px] !overflow-scroll overflow-x-auto"
                    verticalSpacing="lg"
                  >
                    <thead className="my-4">
                      <tr>
                        <th className="">POS</th>
                        <th className="">RIDER</th>
                        <th className="">NATION</th>
                        <th className="">TEAM</th>
                        <th className="">BIKE</th>
                        <th className="">POINTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record?.map((item: any) => (
                        <tr key={item.id} className="!py-4">
                          <td>{item.classification_position}</td>
                          <td>{item.classification_rider_full_name}</td>
                          <td>{item.classification_rider_country_iso}</td>
                          <td>{item.classification_team_name}</td>
                          <td>{item.classification_constructor_name}</td>
                          <td>{item.classification_points_id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </>
            </div>
          ) : (
            <div>
              <div className="flex justify-center items-center pt-10">
                <Loader size="xl" />
              </div>
              <div className="h-96" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
