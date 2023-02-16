import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const HousePage = () => {
  const { id } = useParams();

  const [house, setHouse] = React.useState<HouseModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);

        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(house, null, 4)}
    </Box>
  );
};

export default HousePage;
