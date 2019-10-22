import React from 'react';
import ImageContainer from '../core/ImageContainer';
import { Box, Button, Layer, Heading, Text, TextArea } from 'grommet';
import { Close } from 'grommet-icons';

const ModalSelectedLayer = ({ setShowLayer, name, categories, image_url, addComment }) => {
  const [comment, setComment] = React.useState('');
  return (
    <Layer animation="fadeIn">
      <Box fill width="large" pad="medium" justify="around" background="light-1">
        <Box
          fill="horizontal"
          pad={{ horizontal: 'small', vertical: 'medium' }}
          direction="row"
          justify="end"
          align="end"
        >
          <Button onClick={() => setShowLayer(false)} icon={<Close />} plain />
        </Box>
        <Box pad="small">
          <Box direction="row" justify="between" align="center" fill="horizontal">
            <Heading level={2}>{name}</Heading>
            <ImageContainer size="xsmall" source={image_url} isRound />
          </Box>

          <Box direction="row" fill="horizontal">
            {categories.map(({ title }, idx) => (
              <Text margin="small" size="small" color="lightgrey" key={idx}>
                {title}
              </Text>
            ))}
          </Box>
        </Box>
        <TextArea
          placeholder="Laisse ton commentaire"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          size="large"
        />
        <Box
          fill="horizontal"
          pad={{ horizontal: 'small', vertical: 'medium' }}
          direction="row"
          justify="end"
          align="end"
        >
          <Button primary label="Ajouter" onClick={() => addComment(comment)} />
        </Box>
      </Box>
    </Layer>
  );
};

export default ModalSelectedLayer;
