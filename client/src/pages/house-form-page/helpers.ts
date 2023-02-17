export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const country = formData.get('country');
  const city = formData.get('city');

  if (title === null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (country === null || country instanceof File || country.length < 2) throw new Error('incorrect Country');
  if (city === null || city instanceof File || city.length < 2) throw new Error('incorrect City');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    title,
    location: {
      country,
      city,
    },
    images: images as string[],
    price: `${Number(price).toFixed(2)}€`,
    rating: Number(rating),
  };
};
