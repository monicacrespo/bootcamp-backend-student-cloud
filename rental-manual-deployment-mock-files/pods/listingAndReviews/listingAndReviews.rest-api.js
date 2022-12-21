"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listingsAndReviewsApi = void 0;

var _express = require("express");

var _dals = require("../../dals");

var _listingAndReviews = require("./listingAndReviews.mappers");

const listingsAndReviewsApi = (0, _express.Router)();
exports.listingsAndReviewsApi = listingsAndReviewsApi;
listingsAndReviewsApi // Display all listings and its reviews. If country is given, returns the listings that matches that criteria. Sames happens with page & pageSize
.get('/', async (req, res, next) => {
  try {
    const country = String(req.query.country);
    const pageSize = Number(req.query.pageSize);
    const page = Number(req.query.page);
    const listingList = await _dals.listingAndReviewsRepository.getListingAndReviewsList(country, page, pageSize);

    if (listingList.length >= 1) {
      const apiListingAndReviewsList = await (0, _listingAndReviews.mapListingAndReviewsListFromModelToApiAsync)(listingList);
      res.send(apiListingAndReviewsList);
    } else res.send('We could not find what you are looking for right now');
  } catch (error) {
    next(error);
  }
}) // Display all details of a listing
.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const listing = await _dals.listingAndReviewsRepository.getListingAndReviews(id);

    if (listing) {
      const apiListingAndReviews = await (0, _listingAndReviews.mapListingAndReviewsFromModelToApiAsync)(listing);
      res.send(apiListingAndReviews);
    } else res.send('The property requested is not found');
  } catch (error) {
    next(error);
  }
}) // Add a new review
// id used to filter the listing
.put('/:id/reviews', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const review = (0, _listingAndReviews.mapReviewFromApiToModel)(req.body);
    let newReview = await _dals.listingAndReviewsRepository.insertReview(id, review);
    res.send((0, _listingAndReviews.mapReviewFromModelToApi)(newReview));
  } catch (error) {
    next(error);
  }
}) // Update a listing
.put('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const updatedListingAndReviews = (0, _listingAndReviews.mapListingAndReviewsFromApiToModel)(req.body);
    await _dals.listingAndReviewsRepository.updateListingAndReviews(id, updatedListingAndReviews);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}) // Add a listing
.post('/', async (req, res, next) => {
  try {
    const listingAndReviews = (0, _listingAndReviews.mapListingAndReviewsFromApiToModel)(req.body);
    const newlistingAndReviews = await _dals.listingAndReviewsRepository.insertListingAndReviews(listingAndReviews);
    const apiListingAndReviews = await (0, _listingAndReviews.mapListingAndReviewsFromModelToApiAsync)(newlistingAndReviews);
    res.status(201).send(apiListingAndReviews);
  } catch (error) {
    next(error);
  }
});