/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { BackgroundImage, Loader, Select, Table } from '@mantine/core';
import axios from 'axios';
import Link from 'next/link';

export default function MotoResult() {
  const [category, setCategory] = useState<any>('');
  const [event, setEvent] = useState<any>('');
  const [session, setSession] = useState<any>('');
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

  console.log(event, 'event');
  console.log(category, 'category');

  const fetchRecordsAPI = `https://racingmike.com/api/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9${
    selectedYear && `&year=${selectedYear}`
  }${event && `&eventid=${event}`}${category && `&categoryid=${category}`}${
    session && `&session=${session}`
  }`;

  const [record, setRecord] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [events, setEvents] = useState<any>([]);
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
  };

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/api/v1.0/motogp-events?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
      );
      setEvents(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/api/v1.0/motogp-category?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
      );
      console.log(response, 'response');
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

  console.log(categoryList, 'categoryList');
  console.log(eventList, 'eventList');

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
    fetchCategories();
    fetchEvent();
  }, []);

  useEffect(() => {
    fetchRecord();
  }, [page, selectedYear, category, event, session]);

  return (
    <div className="px-5 sm:px-0">
      <div className="max-w-screen-xl mx-auto">
        <BackgroundImage src="/motogpbanner2.jpg">
          <div className="h-40 mt-14 bg-black/50">
            <h1 className="z-50 text-white text-4xl font-bold text-center pt-14">
              MOTOGP RACE RESULT
            </h1>{' '}
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
            <div className="sm:flex gap-5 mt-4 pb-6 sm:mt-0 items-center sm:px-5 justify-end">
              <div className="flex gap-5">
                <Select
                  className="w-24"
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
                  nothingFound="No options"
                  data={eventList}
                />
              </div>
              <div className="flex gap-5">
                <Select
                  className="w-24"
                  label="Category"
                  placeholder="Pick one"
                  onChange={setCategory}
                  nothingFound="No options"
                  data={categoryList}
                />
                <Select
                  className="w-24"
                  label="Sessions"
                  placeholder="Pick one"
                  onChange={setSession}
                  nothingFound="No options"
                  data={sessionList}
                />
              </div>
              <p
                className="-mb-6 cursor-pointer hover:text-blue-600"
                onClick={() => {
                  setSelectedYear('');
                  setEvent('');
                  setCategory('');
                  setSession('');
                }}
              >
                Clear filter
              </p>
            </div>
          </div>
          <div className="py-2 px-5 bg-[#1A1B1E] sm:flex justify-between border">
            <div className="flex mb-3 sm:mb-0">
              <p className="text-xs text-white">TT Circuit Assen , June 25th 2023</p>
            </div>
            <div className="flex">
              <p className="text-xs text-white mb-3 sm:mb-0 mx-1">30º C</p>
              <p className="text-xs text-white mb-3 sm:mb-0 ml-2">Clear</p>
              <p className="text-xs text-white mb-3 sm:mb-0 ml-2">Track condition: Dry</p>
              <p className="text-xs text-white mb-3 sm:mb-0 ml-2">Humidity: 32%</p>
              <p className="text-xs text-white mb-3 sm:mb-0 ml-2">Ground: 47º</p>
            </div>
          </div>
          {!loading ? (
            <div>
              <>
                {record.length < 1 ? (
                  <div className="h-96">
                    <h1 className="text-center font-bold pt-20">Record not found :(</h1>
                  </div>
                ) : (
                  <Table
                    striped
                    highlightOnHover
                    className="max-h-96 min-w-[400px] !overflow-scroll overflow-x-auto"
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
                )}
              </>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center pt-10">
                <Loader size="xl" />
              </div>
              <div className="h-96" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
