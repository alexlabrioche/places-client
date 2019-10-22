import React, { useContext } from 'react';
import { Box, Image, Text, ResponsiveContext } from 'grommet';

function EmptyMap() {
  const size = useContext(ResponsiveContext);
  const imageContainerSize = size === 'small' ? 'xsmall' : 'small';
  const textSize = size === 'small' ? 'medium' : 'large';
  return (
    <Box fill justify="center" align="center">
      <Text textAlign="center" size={textSize} margin={{ bottom: 'medium' }}>
        Ajoutes des adresses favorites pour voir la carte
      </Text>
      <Box height={imageContainerSize} width={imageContainerSize}>
        <Image fit="cover" src="img/placeholders/square-map.png" />
      </Box>
    </Box>
  );
}

export default EmptyMap;
