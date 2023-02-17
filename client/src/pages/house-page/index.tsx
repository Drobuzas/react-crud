import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import useHouse from 'hooks/useHouse';

const HousePage = () => {
  const { id } = useParams();
  const house = useHouse(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        my: 4,
        '@media (min-width:600px)': {
          maxWidth: 800,
        },
        '@media (min-width:960px)': {
          maxWidth: 1000,
        },
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={house?.images[0]}
          alt={house?.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {house?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {house?.location.city}
            ,
            {' '}
            {house?.location.country}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {house?.price}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Rating:
            {' '}
            {house?.rating}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HousePage;
