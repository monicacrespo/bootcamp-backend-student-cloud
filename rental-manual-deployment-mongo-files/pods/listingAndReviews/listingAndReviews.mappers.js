"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReviewFromModelToApi = exports.mapReviewFromApiToModel = exports.mapListingAndReviewsListFromModelToApiAsync = exports.mapListingAndReviewsListFromModelToApi = exports.mapListingAndReviewsFromModelToApiAsync = exports.mapListingAndReviewsFromModelToApi = exports.mapListingAndReviewsFromApiToModel = void 0;

var _s3RequestPresigner = require("@aws-sdk/s3-request-presigner");

var _clientS = require("@aws-sdk/client-s3");

var _clients = require("../../core/clients");

var _constants = require("../../core/constants");

const mapPicture = async picture => {
  const command = new _clientS.GetObjectCommand({
    Bucket: _constants.envConstants.AWS_S3_BUCKET,
    Key: picture
  });
  const expiresIn = 60 * 60 * 24; // 1 day expiration time.

  return await (0, _s3RequestPresigner.getSignedUrl)(_clients.s3Client, command, {
    expiresIn
  });
};

const mapListingAndReviewsFromModelToApi = listingAndReviews => ({
  id: listingAndReviews._id,
  listing_url: listingAndReviews.listing_url,
  description: listingAndReviews.description,
  country: listingAndReviews.address.country,
  bedrooms: listingAndReviews.bedrooms,
  beds: listingAndReviews.beds,
  bathrooms: listingAndReviews.bathrooms,
  street: listingAndReviews.address.street,
  city: listingAndReviews.address.market,
  // Sorting the reviews by latest date
  // TypeScript only allows us to do arithmetic operations with values of type any, number, bigint or enum.
  // The getTime method returns a number
  reviews: listingAndReviews.reviews.sort(function (a, b) {
    return b.date.getTime() - a.date.getTime();
  }).slice(0, 5)
});

exports.mapListingAndReviewsFromModelToApi = mapListingAndReviewsFromModelToApi;

const mapListingAndReviewsFromModelToApiAsync = async listingAndReviews => {
  const listing_url = await mapPicture(listingAndReviews.listing_url);
  return {
    id: listingAndReviews._id,
    listing_url,
    description: listingAndReviews.description,
    country: listingAndReviews.address.country,
    bedrooms: listingAndReviews.bedrooms,
    beds: listingAndReviews.beds,
    bathrooms: listingAndReviews.bathrooms,
    street: listingAndReviews.address.street,
    city: listingAndReviews.address.market,
    // Sorting the reviews by latest date
    // TypeScript only allows us to do arithmetic operations with values of type any, number, bigint or enum.
    // The getTime method returns a number
    reviews: listingAndReviews.reviews.sort(function (a, b) {
      return b.date.getTime() - a.date.getTime();
    }).slice(0, 5)
  };
};

exports.mapListingAndReviewsFromModelToApiAsync = mapListingAndReviewsFromModelToApiAsync;

const mapListingAndReviewsListFromModelToApi = listingAndReviewsList => Array.isArray(listingAndReviewsList) ? listingAndReviewsList.map(mapListingAndReviewsFromModelToApi) : [];

exports.mapListingAndReviewsListFromModelToApi = mapListingAndReviewsListFromModelToApi;

const mapListingAndReviewsListFromModelToApiAsync = async listingAndReviewsList => {
  const list = await Promise.all(listingAndReviewsList.map(async l => {
    return mapListingAndReviewsFromModelToApiAsync(l);
  }));
  return list;
};

exports.mapListingAndReviewsListFromModelToApiAsync = mapListingAndReviewsListFromModelToApiAsync;

const mapListingAndReviewsFromApiToModel = listingAndReviews => ({
  _id: listingAndReviews.id,
  listing_url: listingAndReviews.listing_url,
  description: listingAndReviews.description,
  bedrooms: listingAndReviews.bedrooms,
  beds: listingAndReviews.beds,
  bathrooms: listingAndReviews.bathrooms,
  address: {
    street: listingAndReviews.street,
    market: listingAndReviews.city,
    country: listingAndReviews.country
  },
  reviews: listingAndReviews.reviews.map(mapReviewFromApiToModel)
}); // Review mapping from Api to db


exports.mapListingAndReviewsFromApiToModel = mapListingAndReviewsFromApiToModel;

const mapReviewFromApiToModel = listingAndReviews => ({
  listing_id: listingAndReviews.listing_id,
  date: new Date(),
  reviewer_name: listingAndReviews.reviewer_name,
  comments: listingAndReviews.comments
});

exports.mapReviewFromApiToModel = mapReviewFromApiToModel;

const mapReviewFromModelToApi = listingAndReviews => ({
  listing_id: listingAndReviews.listing_id,
  date: listingAndReviews.date,
  reviewer_name: listingAndReviews.reviewer_name,
  comments: listingAndReviews.comments
});

exports.mapReviewFromModelToApi = mapReviewFromModelToApi;