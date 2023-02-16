import React from 'react';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import Header from './header';
import HouseCard from './house-card';
import * as Styled from './styled';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Styled.HouseCardGrid>
        {houses.map((house) => <HouseCard key={house.id} {...house} />)}
      </Styled.HouseCardGrid>
    </Container>
  );
};

export default HomePage;
