/* eslint-disable @typescript-eslint/no-unused-vars */
import { Loader, Select, Table } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const [event, setEvent] = useState('');
  const [session, setSession] = useState('');

  const fetchRecordsAPI = `https://racingmike.com/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&eventid=${
    event || '8ed52491-e1aa-49a9-8d70-f1c1f8dd3090'
  }&categoryid=${category || 'e8c110ad-64aa-4e8e-8a86-f2f152f6a942'}&session=${session || 'RAC'}`;

  const [record, setRecord] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [sessions, setSessions] = useState<any>([]);
  const [events, setEvents] = useState<any>([]);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [page, setPage] = useState<any>(1);
  const [loading, setLoading] = useState<any>(false);
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

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
      console.log(response, 'response');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/v1.0/motogp-events?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
      );
      setEvents(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/v1.0/motogp-category?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
      );
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSession = async () => {
    try {
      const response = await axios.get(
        'https://racingmike.com/v1.0/motogp-full-results?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&eventid=8ed52491-e1aa-49a9-8d70-f1c1f8dd3090&categoryid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942&session=RAC'
      );
      setSessions(response?.data);
      console.log(response.data, 'response');
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
    const isDuplicate = uniqueItem.some((listitem) => listitem.value === item.session_id);
    if (!isDuplicate) {
      uniqueItem.push({
        value: item.id,
        label: item.name || 'Unknown',
      });
    }

    return uniqueItem;
  }, []);

  const sessionList = sessions?.reduce((uniqueItem: any[], item: any) => {
    const isDuplicate = uniqueItem.some((listitem) => listitem.value === item.session_id);
    if (!isDuplicate) {
      uniqueItem.push({
        value: item.session_id,
        label: item.name || 'Unknown',
      });
    }

    return uniqueItem;
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchSession();
    fetchEvent();
  }, []);

  useEffect(() => {
    fetchRecord();
  }, [page, category, event, session]);

  return (
    <div className="mx-auto max-w-screen-lg  pt-24">
      <h1 className="mb-2 text-center text-2xl font-bold">MOTOGP RACE RESULT</h1>
      <div className="mb-10 flex justify-center gap-5 ">
        <Select
          label="Year"
          placeholder="Select year"
          clearable
          value={selectedYear}
          onChange={handleYearChange}
          data={years.map((year) => ({ value: year, label: year }))}
        />
        <Select
          label="EVENT"
          placeholder="Pick one"
          searchable
          clearable
          onSearchChange={setEvent}
          searchValue={event}
          nothingFound="No options"
          data={eventList}
        />
        <Select
          label="Category"
          placeholder="Pick one"
          searchable
          clearable
          onSearchChange={setCategory}
          searchValue={category}
          nothingFound="No options"
          data={categoryList}
        />
        <Select
          label="Sessions"
          placeholder="Pick one"
          searchable
          clearable
          onSearchChange={setSession}
          searchValue={session}
          nothingFound="No options"
          data={sessionList}
        />
      </div>
      {!loading ? (
        <div className="w-full ">
          <Table striped highlightOnHover className="max-h-96">
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
                <tr key={item.id}>
                  <td>{item.classification_position}</td>
                  <td>{item.points}</td>
                  <td>{item.classification_rider_full_name}</td>
                  <td>{item.name}</td>
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
          {/* <div className="flex justify-center items-center mt-2">
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
          </div> */}
        </div>
      ) : (
        <div className="flex items-center justify-center pt-10">
          <Loader size="xl" />
        </div>
      )}
    </div>
  );
}
