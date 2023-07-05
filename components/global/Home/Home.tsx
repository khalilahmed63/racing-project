import { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import axios from 'axios';
import HomePageVariantA from '../../variantA/Home/HomePageVariantA';
import HomePageVariantB from '../../variantB/Home/HomePageVariantB';

export default function Home() {
  const fetchDevicesCountAPI = process.env.REACT_APP_API_DEVICES_COUNT;

  const { variant } = useStoreState((state: any) => state.global);

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

  const getHome = () => {
    switch (variant) {
      case 'A':
        return <HomePageVariantA />;
      case 'B':
        return <HomePageVariantB />;
      default:
        return <HomePageVariantA />;
    }
  };

  return <>{getHome()}</>;
}
