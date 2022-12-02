"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listingAndReviewsRepository = void 0;

var _listingAndReviews = require("./listingAndReviews.mock-repository");

var _listingAndReviews2 = require("./listingAndReviews.db-repository");

var _constants = require("../../../core/constants");

const listingAndReviewsRepository = _constants.envConstants.isApiMock ? _listingAndReviews.mockRepository : _listingAndReviews2.dbRepository;
exports.listingAndReviewsRepository = listingAndReviewsRepository;