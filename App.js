import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import * as firebase from 'firebase';

import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyDcAeWVFB-aM4fabpqyi4m19ZoRVNwodlY',
  authDomain: 'mealstogo-b8cfb.firebaseapp.com',
  projectId: 'mealstogo-b8cfb',
  storageBucket: 'mealstogo-b8cfb.appspot.com',
  messagingSenderId: '797183048776',
  appId: '1:797183048776:web:a5d3fbb4cba79f6885ec7d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
