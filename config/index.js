import { config } from 'dotenv';
config({ path: `.env.${process.env.ENV || 'dev'}` });

// If .env wasn't provided then exit
if (!process.env.PORT) {
  console.error('==> Please check your .env');
}

export const PRODUCTION_ENV = process.env.ENV === 'prod';
export const DEV_ENV = process.env.ENV === 'dev';
export const TESTING_ENV = process.env.ENV === 'test';

export const {
HOST_URL,
PORT,
ROUTE_PREFIX,
PATH_URL
} = process.env;
