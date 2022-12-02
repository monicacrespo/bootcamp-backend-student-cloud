"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListingAndReviewsContext = void 0;

var _servers = require("../../core/servers");

const getListingAndReviewsContext = () => _servers.db.collection('listingsAndReviews');

exports.getListingAndReviewsContext = getListingAndReviewsContext;