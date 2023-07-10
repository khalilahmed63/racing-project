// import { useEffect } from 'react';

import HomePage from '@/components/HomePage/HomePage';
// import { handleSelection, populateCategories, populateEvents } from '@/utils/api';

export default function Home() {
  // useEffect(() => {
  //   // Usage example
  //   const selectedYear = 2023;
  //   const selectedEventId = '8ed52491-e1aa-49a9-8d70-f1c1f8dd3090';
  //   const selectedCategoryId = 'e8c110ad-64aa-4e8e-8a86-f2f152f6a942';

  //   populateEvents(selectedYear)
  //     .then(() => populateCategories(selectedEventId))
  //     .then(() => handleSelection(selectedYear, selectedEventId, selectedCategoryId))
  //     .catch((error) => console.error(error));
  // }, []);

  return <HomePage />;
}
