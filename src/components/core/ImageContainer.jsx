import React from 'react';
import { Grommet, Box, Image } from 'grommet';
import theme from '../../theme/theme';

function ImageContainer({
  size = '2rem',
  source = 'img/placeholders/default-profile.png',
  isRound,
  ...otherProps
}) {
  return (
    <Grommet theme={theme}>
      <Box
        alignSelf="center"
        round={isRound ? 'full' : 'none'}
        border={isRound ? { size: 'medium', color: 'brand' } : null}
        margin={{ horizontal: 'small' }}
        style={{ overflow: 'hidden' }}
        height={size}
        width={size}
        {...otherProps}
      >
        <Image fit="cover" src={source} />
      </Box>
    </Grommet>
  );
}

export default ImageContainer;
