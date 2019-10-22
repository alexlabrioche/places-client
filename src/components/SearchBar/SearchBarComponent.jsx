import React from 'react';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

import RenderSuggestions from './RenderSuggestions';

function SearchComponent({
  result,
  boxRef,
  suggestionOpen,
  searchValue,
  handleChange,
  onSelect,
  setSuggestionOpen,
}) {
  return (
    <Box
      fill="horizontal"
      ref={boxRef}
      align="center"
      round="small"
      direction="row"
      pad={{ horizontal: 'small', vertical: 'none' }}
      elevation={suggestionOpen ? 'medium' : undefined}
      border={{
        side: 'all',
        color: suggestionOpen ? 'transparent' : 'border',
      }}
      style={
        suggestionOpen
          ? {
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }
          : undefined
      }
    >
      <Search color="accent" />
      <TextInput
        type="search"
        dropTarget={boxRef.current}
        plain
        value={searchValue}
        onSelect={onSelect}
        onChange={(event) => handleChange(event)}
        placeholder="Rechercher..."
        suggestions={RenderSuggestions(result, searchValue)}
        onSuggestionsOpen={() => setSuggestionOpen(true)}
        onSuggestionsClose={() => setSuggestionOpen(false)}
      />
    </Box>
  );
}

export default SearchComponent;
