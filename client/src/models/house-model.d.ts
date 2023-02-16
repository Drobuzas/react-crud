type HouseModel = {
  [x: string]: ReactNode;
  id: string,
  title: string,
  location: {
    country: string,
    city: string
  },
  images: string[],
  price: string,
  rating: number
};
