import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { FormField, TextInput, Box, Text } from 'grommet';

const searchOptions = {
  componentRestrictions: { country: ['fr'] },
};

const LocationSearchInput = ({ onPlaceSelected, handleError }) => {
  const [address, setAddress] = useState('');

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    try {
      setAddress(address);
      let results = await geocodeByAddress(address);
      let coordinates = await getLatLng(results[0]);
      onPlaceSelected((s) => ({ ...s, location: { coordinates, address } }));
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        return (
          <Box fill>
            <FormField label="Adresse" htmlFor="text-input" error={handleError}>
              <TextInput
                id="text-input"
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
                {...getInputProps({
                  className: 'location-search-input',
                })}
              />
            </FormField>
            <div className="autocomplete-dropdown-container">
              {loading && <Text>Loading...</Text>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#f2f2f2', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <Text>{suggestion.description}</Text>
                  </div>
                );
              })}
            </div>
          </Box>
        );
      }}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
