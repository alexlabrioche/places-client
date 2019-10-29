import React, { useState, useCallback } from 'react';
import { Box, Button, Text } from 'grommet';
import { useDropzone } from 'react-dropzone';
import ImageContainer from './ImageContainer';
import { Upload, AddCircle } from 'grommet-icons';

function ImageDrop({ handleFile }) {
  const [previewImg, setPreviewImg] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setPreviewImg(URL.createObjectURL(acceptedFiles[0]));
    handleFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box fill justify="center" align="center" {...getRootProps()}>
      <input {...getInputProps()} />
      {previewImg ? (
        <ImageContainer source={previewImg} size="small" isRound />
      ) : (
        <>
          <Text>Glisser déposer ou cliquer pour ajouter</Text>
          <Box height="xsmall" width="small" justify="center" align="center">
            {isDragActive ? <Upload /> : <Button label="Ajouter" icon={<AddCircle />} />}
          </Box>
        </>
      )}
    </Box>
  );
}
export default ImageDrop;
