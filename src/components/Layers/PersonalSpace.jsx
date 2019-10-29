import React, { useState } from 'react';
import { Close } from 'grommet-icons';
import theme from '../../theme/theme';
import ImageContainer from '../core/ImageContainer';

import { Box, Button, Grommet, Layer, Heading, Text } from 'grommet';

const ModalUserLayer = ({ logout, user }) => {
  const [open, setOpen] = useState();
  console.info('USERPERSONNAL', user);
  return (
    <Grommet theme={theme}>
      <Box fill align="baseline" justify="center">
        <Button onClick={() => setOpen(true)} plain>
          <ImageContainer size="3rem" isRound />
        </Button>
      </Box>
      {open && (
        <Layer position="center" onClickOutside={() => setOpen(undefined)}>
          <Box pad="medium">
            <Box
              fill="horizontal"
              pad={{ horizontal: 'small', vertical: 'medium' }}
              direction="row"
              justify="between"
            >
              <ImageContainer size="4rem" source="img/placeholders/default-profile.png" isRound />
              <Button onClick={() => setOpen(undefined)} icon={<Close />} plain />
            </Box>

            <Box fill="horizontal" pad={{ horizontal: 'small', vertical: 'medium' }} align="end">
              <Button label="Se déconnecter" primary color="brand" onClick={() => logout()} />
            </Box>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};

export default ModalUserLayer;
