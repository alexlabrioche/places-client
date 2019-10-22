import React from 'react';
import ImageContainer from '../core/ImageContainer';
import { Box, Text } from 'grommet';

const RenderSuggestions = (result, searchValue) => {
  if (result.loading && searchValue.length >= 3) {
    return [
      {
        label: (
          <Box direction="row" align="center" gap="small" pad="small">
            <Text>
              <strong>Chargement...</strong>
            </Text>
          </Box>
        ),
        value: null,
      },
    ];
  }
  return result.data.map((value) => ({
    label: (
      <Box direction="row" align="center" gap="small" pad="small">
        {/* <ImageContainer size="4rem" source={value.image_url} /> */}
        <Box fill="horizontal">
          <Box fill="horizontal" direction="row" justify="between">
            <Text weight="bold">{value.name || ''}</Text>
            <Text weight="bold" color="brand">
              {value.price || ''}
            </Text>
          </Box>
          <Box fill="horizontal" direction="row" justify="between">
            <Text size="small" color="dark-3">
              {value.location.display_address[0] || ''}
            </Text>
            <Text size="small" color="dark-3">
              {value.location.display_address[1] || ''}
            </Text>
          </Box>
        </Box>
      </Box>
    ),
    value,
  }));
};

export default RenderSuggestions;
