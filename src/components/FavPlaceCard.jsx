import React from 'react';
import { Stack, Box, Heading, Text, Image } from 'grommet';
import Link from './core/Link';

function FavPlaceCard({ name, description, slug, isMobile, ...props }) {
  console.info('FavPlaceCard', props);
  return (
    <Box height="small" pad={isMobile ? 'medium' : 'small'} basis={isMobile ? 'full' : '1/3'}>
      <Box
        fill
        round="small"
        elevation="medium"
        background="light-2"
        style={{ overflow: 'hidden' }}
      >
        <Stack fill>
          <Box fill>
            <Image src="/img/default-card.jpg" fit="cover" />
          </Box>
          <Link to={`/place/${slug}`}>
            <Box fill pad="small">
              <Heading level={3} alignSelf="center">
                {name}
              </Heading>
              <Text>{description}</Text>
            </Box>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default FavPlaceCard;
