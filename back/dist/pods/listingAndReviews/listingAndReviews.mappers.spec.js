"use strict";

var _listingAndReviews = require("./listingAndReviews.mappers");

describe('pods/listingAndReviews/listingAndReviews.mappers spec', () => {
  describe('maplistingAndReviewsListFromApiToModel', () => {
    it.each([undefined, null, []])('should return empty array when it feeds listingAndReviewsList equals %p', listingAndReviewsList => {
      // Arrange
      // Act
      const result = (0, _listingAndReviews.mapListingAndReviewsListFromModelToApi)(listingAndReviewsList); // Assert

      expect(result).toEqual([]);
    });
    it('should return one mapped item in array when it feeds listingAndReviewsList with one item', () => {
      // Arrange
      const listingAndReviewsList = [{
        _id: '10082422',
        listing_url: '',
        description: 'description',
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        address: {
          street: 'C. Colegios, 8',
          market: 'Alcalá de Henares',
          country: 'Spain'
        },
        reviews: [{
          date: new Date('2022-10-08'),
          reviewer_name: 'Monica',
          comments: 'Very Nice',
          listing_id: '10082422'
        }]
      }]; // Act

      const result = (0, _listingAndReviews.mapListingAndReviewsListFromModelToApi)(listingAndReviewsList); // Assert

      const expectedResult = [{
        id: '10082422',
        listing_url: '',
        description: 'description',
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        country: 'Spain',
        street: 'C. Colegios, 8',
        city: 'Alcalá de Henares',
        reviews: [{
          date: new Date('2022-10-08'),
          reviewer_name: 'Monica',
          comments: 'Very Nice',
          listing_id: '10082422'
        }]
      }];
      expect(result).toEqual(expectedResult);
    });
  });
});