import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

type HouseCardProps = HouseModel;

const HouseCard: React.FC<HouseCardProps> = ({
  id,
  images,
  location,
  price,
  rating,
  title,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => navigate(routes.HouseUpdatePage.createLink(id))}
        >
          Update
        </Button>
        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
            <Styled.Rating>{rating}</Styled.Rating>
          </Box>
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{title}</Typography>
          <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
            {`${location.country}, ${location.city}`}
          </Typography>
        </Box>

        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined">Remember</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.HousePage.createLink(id))}
          >
            View details
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default HouseCard;
