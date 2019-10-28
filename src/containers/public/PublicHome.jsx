import React from 'react';
import Link from '../../components/core/Link';
import ImageContainer from '../../components/core/ImageContainer';
import { Box, Button, Text, Heading } from 'grommet';

function PublicHome() {
  return (
    <Box fill align="center" justify="center">
      <Heading level={4}>Public home</Heading>
      <ImageContainer source="img/home-logo.png" size="small" />

      <Button
        primary
        margin="medium"
        label={
          <Text>
            <Link to="/sign">Sign</Link>
          </Text>
        }
      />
    </Box>
  );
}

export default PublicHome;
