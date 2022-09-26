import React, {createContext, useEffect, useState} from 'react';

import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [location, setLocation] = useState(false);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');

  const onSearch = searchKeyword => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      //don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{isLoading, error, location, search: onSearch, keyword}}>
      {children}
    </LocationContext.Provider>
  );
};
