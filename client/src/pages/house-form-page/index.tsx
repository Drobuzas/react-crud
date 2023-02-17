import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';
import { btnColorMap, btnMap, titleMap } from './data';
import { formatValues } from './helpers';

type HouseFormPageProps = {
  mode?: 'create' | 'update'
};

const HouseFormPage: React.FC<HouseFormPageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      console.log(values);
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Title" fullWidth variant="filled" name="title" required />
          <LocationField />
          <ImagesField />

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default HouseFormPage;
