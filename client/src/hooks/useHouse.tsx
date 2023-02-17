import React from 'react';
import ApiService from 'services/api-service';

const useHouse = (id: string | undefined) => {
  const [house, setHouse] = React.useState<HouseModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);

        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  return house;
};

export default useHouse;
