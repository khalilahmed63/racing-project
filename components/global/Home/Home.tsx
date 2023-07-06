import { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import axios from 'axios';

export default function Home() {
  const fetchDevicesCountAPI = process.env.REACT_APP_API_DEVICES_COUNT;

 

  const fetchDevicesCount = async () => {
    try {
      const response = await axios.get(`${fetchDevicesCountAPI}`);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevicesCount();
  }, []);


}
