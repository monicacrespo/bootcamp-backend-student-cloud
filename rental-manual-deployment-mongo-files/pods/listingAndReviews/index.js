"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listingAndReviews = require("./listingAndReviews.rest-api");

Object.keys(_listingAndReviews).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _listingAndReviews[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listingAndReviews[key];
    }
  });
});