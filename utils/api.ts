import axios from 'axios';

interface Event {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface Result {
  // Define the structure of the result object according to your API response
}

async function fetchEvents(year: number): Promise<Event[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}events?year=${year}`);
  return response.data as Event[];
}

async function fetchCategories(eventId: string): Promise<Category[]> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}categories?eventId=${eventId}`
  );
  return response.data as Category[];
}

async function fetchResults(eventId: string, categoryId: string): Promise<Result> {
  const response = await axios.get(`https://racingmike.com/v1.0/motogp-full-results`, {
    params: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      eventId,
      categoryId,
      session: 'RAC',
    },
  });
  return response.data as Result;
}

async function populateEvents(year: number): Promise<Event[]> {
  const events = await fetchEvents(year);
  // Populate the event dropdown here
  return events;
}

async function populateCategories(eventId: string): Promise<Category[]> {
  const categories = await fetchCategories(eventId);
  // Populate the category dropdown here
  return categories;
}

async function handleSelection(year: number, eventId: string, categoryId: string): Promise<void> {
  // Call the API and fetch the results
  const results = await fetchResults(eventId, categoryId);

  // Display the results
  console.log('handleSelection', results);
}

export { handleSelection, populateCategories, populateEvents };
