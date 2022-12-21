"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envConstants = void 0;
const envConstants = {
  isProduction: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT,
  STATIC_FILES_PATH: process.env.STATIC_FILES_PATH,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CORS_METHODS: process.env.CORS_METHODS,
  isApiMock: process.env.API_MOCK === 'true',
  MONGODB_URI: process.env.MONGODB_URI,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET
};
exports.envConstants = envConstants;