/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BackgroundImage, Card, Loader, Select, Table } from '@mantine/core';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MotoResult() {
  const [category, setCategory] = useState<any>('');
  const [event, setEvent] = useState<any>('');
  const [session, setSession] = useState<any>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const fetchRecordsAPI = `https://racingmike.com/api/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9${
    event && `&eventid=${event}`
  }${category && `&categoryid=${category}`}${session && `&session=${session}`}`;

  const [record, setRecord] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [events, setEvents] = useState<any>([]);
  // eslint-disable-next-line unused-imports/no-unused-vars
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
    if (category && selectedYear && session && selectedYear) {
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
        'https://racingmike.com/api/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      );
      setRecord(response?.data);
      setLoading(false);
      // console.log(response, 'response');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        `https://racingmike.com/api/v1.0/motogp-events?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9${
          selectedYear && `&year=${selectedYear}`
        }`
      );
      setEvents(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `https://racingmike.com/api/v1.0/motogp-category?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9${
          selectedYear && `&year=${selectedYear}`
        }`
      );
      // console.log(response, 'response');
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eventList = events?.reduce((uniqueItem: any[], item: any) => {
    const isDuplicate = uniqueItem.some((listitem) => listitem.value === item.session_id);
    if (!isDuplicate) {
      uniqueItem.push({
        value: item.id,
        label: item.name || 'Unknown',
      });
    }

    return uniqueItem;
  }, []);

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

  const sessionList = [
    { value: 'RAC', label: 'RAC' },
    { value: 'FP1', label: 'FP1' },
    { value: 'FP2', label: 'FP2' },
    { value: 'FP3', label: 'FP3' },
    { value: 'FP4', label: 'FP4' },
    { value: 'Q1', label: 'Q1' },
    { value: 'Q2', label: 'Q2' },
    { value: 'WUP', label: 'WUP' },
    { value: 'SPR', label: 'SPR' },
  ];

  useEffect(() => {
    setCategory('');
    setEvent('');
    fetchCategories();
    fetchEvent();
  }, [selectedYear]);

  useEffect(() => {
    fetchRecord();
  }, [page, selectedYear, category, event, session]);

  return (
    <div className="px-5 sm:px-0">
      <div className="mx-auto max-w-screen-xl">
        <BackgroundImage src="/motogpbanner2.jpg">
          <div className="mt-14 h-40 bg-black/50">
            <h1 className="z-50 pt-14 text-center text-4xl font-bold text-white">
              MOTOGP RACE RESULT
            </h1>{' '}
          </div>
        </BackgroundImage>
        <div className="">
          <div className="w-full justify-between p-4 sm:flex">
            <div className="">
              <h1 className="mb-3 text-xl font-bold">Motul TT Assen</h1>
              <Link href="/#" target="_blank" passHref>
                <p className="underline">MotoGP™ RAC Classification 2023</p>
              </Link>
            </div>
            <div className="mt-4 items-center justify-end gap-5 pb-6 sm:mt-0 sm:flex sm:px-5">
              <div className="flex gap-5">
                <Select
                  className="w-44 md:w-24"
                  label="Year"
                  placeholder="Select year"
                  searchable
                  value={selectedYear}
                  onChange={handleYearChange}
                  nothingFound="No options"
                  data={years.map((year) => ({ value: year, label: year }))}
                />
                <Select
                  className="w-44"
                  label="EVENT"
                  placeholder="Pick one"
                  onChange={setEvent}
                  value={event}
                  nothingFound="No options"
                  data={eventList}
                />
              </div>
              <div className="flex gap-5">
                <Select
                  className="w-44 md:w-24"
                  label="Category"
                  placeholder="Pick one"
                  onChange={setCategory}
                  value={category}
                  nothingFound="No options"
                  data={categoryList}
                />
                <Select
                  className="w-44 md:w-24"
                  label="Sessions"
                  placeholder="Pick one"
                  onChange={setSession}
                  value={session}
                  nothingFound="No options"
                  data={sessionList}
                />
              </div>
              <p
                className="sm:-mb-6 my-2 cursor-pointer text-blue-600"
                onClick={() => {
                  setSelectedYear('');
                  setEvent('');
                  setCategory('');
                  setSession('');
                  clearFilter();
                }}
              >
                Clear filter
              </p>
            </div>
          </div>
        </div>
        {!loading ? (
          <div>
            {record.length < 1 ? (
              <div className="h-96">
                <h1 className="pt-20 text-center font-bold">Record not found :(</h1>
              </div>
            ) : (
              <Card shadow="xl" p="lg" radius="md" className="overflow-x-auto w-full">
                <div className="py-2 px-5 flex justify-between border w-full min-w-[800px]">
                  <div className="flex">
                    <p className="text-xs">TT Circuit Assen , June 25th 2023</p>
                  </div>
                  <div className="flex">
                    <p className="text-xs mx-1">30º C</p>
                    <p className="text-xs ml-2">Clear</p>
                    <p className="text-xs ml-2">Track condition: Dry</p>
                    <p className="text-xs ml-2">Humidity: 32%</p>
                    <p className="text-xs ml-2">Ground: 47º</p>
                  </div>
                </div>
                <Table
                  striped
                  highlightOnHover
                  className="max-h-96 min-w-[800px] !overflow-scroll overflow-x-auto"
                  verticalSpacing="lg"
                >
                  <thead className="my-4">
                    <tr>
                      <th className="">POS</th>
                      <th className="">POINTS</th>
                      <th className="">RIDER</th>
                      <th className="">NATION</th>
                      <th className="">TEAM</th>
                      <th className="">BIKE</th>
                      <th className="">KM.h</th>
                      <th className="">TIME/GAP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record?.map((item: any) => (
                      <tr key={item.id} className="!py-4">
                        <td>{item.classification_position}</td>
                        <td>{item.points}</td>
                        <td>{item.classification_rider_full_name}</td>
                        <td>{item.record_rider_country_name}</td>
                        <td>{item.classification_team_name}</td>
                        <td>{item.constructor_name}</td>
                        <td>{item.record_speed}</td>
                        <td>
                          {item.time}/{item.gap_first}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center pt-10">
              <Loader size="xl" />
            </div>
            <div className="h-96" />
          </>
        )}
      </div>
    </div>
  );
}
