import { connectToDBServer, disconnectFromDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { getListingAndReviewsContext } from 'dals/listingAndReviews/listingAndReviews.context';
import { ListingAndReviews, listingAndReviewsRepository } from 'dals';

export const run = async () => {

    let listingsAndReviews: ListingAndReviews[] =
    [
        {
            _id: '76543210',
            listing_url: '/a-listing-url.png',
            description: 'a description',
            bedrooms: 1,
            beds: 2,
            bathrooms: 1,
            address: {
                street: 'Street Cupiana',
                market: 'Malaga',
                country: 'Spain',
            },
            reviews: [
            {
                date: new Date(),
                reviewer_name: 'Maria',
                comments: 'Extremely very nice',
                listing_id: '76543210'
            }]
        },
        {
            _id: '01234567',
            listing_url: '/02-detalle-casa.png',
            description: 'description',
            bedrooms: 2,
            beds: 3,
            bathrooms: 2,
            address: {
              street: 'Av. Duque de Nájera, 9',
              market: 'Cadiz',
              country: 'Spain',
            },
            reviews: [
              {
                date: new Date('2022-12-02'),
                reviewer_name: 'Marta',
                comments: 'Nice',
                listing_id: '01234567',
             }
            ]
        },
    ]
    
    await connectToDBServer(envConstants.MONGODB_URI);
    for (const listingAndReviews of listingsAndReviews) {
        await listingAndReviewsRepository.insertListingAndReviews(listingAndReviews);
    }
    await disconnectFromDBServer();
};