"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;

var _mockData = require("../../mock-data");

var _mongodb = require("mongodb");

const insertReview = (id, review) => {
  const listingsAndReviews = _mockData.db.listingsAndReviews;
  let newReview = { ...review
  };
  const listingIndex = listingsAndReviews.findIndex(l => l._id === id);

  if (listingIndex != -1) {
    listingsAndReviews[listingIndex].reviews.push(newReview);
  } else {
    newReview = {
      date: new Date(),
      reviewer_name: "",
      comments: "",
      listing_id: "0"
    };
  }

  return newReview;
};

const paginateListingAndReviewsList = (listingAndReviewsList, country, page, pageSize) => {
  let paginatedListingAndReviewsList = [...listingAndReviewsList];

  if (country !== 'undefined') {
    paginatedListingAndReviewsList = paginatedListingAndReviewsList.filter(l => l.address.country === country);
  }

  if (paginatedListingAndReviewsList.length > 0 && page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedListingAndReviewsList.length);
    paginatedListingAndReviewsList = paginatedListingAndReviewsList.slice(startIndex, endIndex);
  }

  return paginatedListingAndReviewsList;
};

const insertListingAndReviews = listingAndReviews => {
  const _id = new _mongodb.ObjectId().toString();

  const newlistingAndReviews = { ...listingAndReviews,
    _id
  };
  _mockData.db.listingsAndReviews = [..._mockData.db.listingsAndReviews, newlistingAndReviews];
  return newlistingAndReviews;
};

const updateListingAndReviews = (id, listingAndReviews) => {
  _mockData.db.listingsAndReviews = _mockData.db.listingsAndReviews.map(l => l._id === id ? { ...l,
    ...listingAndReviews
  } : l);
  return listingAndReviews;
};

const mockRepository = {
  getListingAndReviewsList: async (country, page, pageSize) => paginateListingAndReviewsList(_mockData.db.listingsAndReviews, country, page, pageSize),
  getListingAndReviews: async id => _mockData.db.listingsAndReviews.find(l => l._id === id),
  insertReview: async (id, review) => insertReview(id, review),
  updateListingAndReviews: async (id, listingAndReviews) => updateListingAndReviews(id, listingAndReviews),
  insertListingAndReviews: async listingAndReviews => insertListingAndReviews(listingAndReviews)
};
exports.mockRepository = mockRepository;