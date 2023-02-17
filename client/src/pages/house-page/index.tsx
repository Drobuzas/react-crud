import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import { Box } from '@mui/material';
import useHouse from 'hooks/useHouse';

const HousePage = () => {
  const { id } = useParams();
  const house = useHouse(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(house, null, 4)}
    </Box>
  );
};

export default HousePage;
