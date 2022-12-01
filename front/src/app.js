console.log('Running front app');

fetch('/api/listingsAndReviews')
  .then((response) => {
    return response.json();
  })
  .then((listingsAndReviews) => {
    console.log({ listingsAndReviews });
  });