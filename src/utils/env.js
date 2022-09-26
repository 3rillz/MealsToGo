import {Platform} from 'react-native';

const liveHost =
  'https://7fce-105-112-188-232.eu.ngrok.io/mealstogo-b8cfb/us-central1';
const localHost = 'http://localhost:5001/mealstogo-b8cfb/us-central1';

export const isAndroid = Platform.OS === 'android';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
