import {Config} from 'react-native-config'

export const FIREBASE_CONFIG = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: "finance-analyze-prod.firebaseapp.com",
  projectId: "finance-analyze-prod",
  storageBucket: "finance-analyze-prod.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

export const ANALYTICS_SECRET = Config.ANALYTICS_SECRET;
