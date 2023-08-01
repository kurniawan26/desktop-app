import React from 'react';
import ImagePlaceholder from '../assets/svg/ImagePlaceholder';
import { Icon, Image, Text } from '@chakra-ui/react';
import Dropzone from 'react-dropzone';
import { CloseIcon } from '@chakra-ui/icons';

export default function DropzoneComponent({ handleDrop, files, setFiles }) {
  const previews = files?.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageprops={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <Dropzone
      onDrop={handleDrop}
      accept="image/*"
      minSize={1024}
      maxSize={3072000}
      disabled={files.length === 1}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
      }) => {
        const additionalClass = isDragAccept
          ? 'accept'
          : isDragReject
          ? 'reject'
          : '';

        return (
          <div
            {...getRootProps({
              className: `dropzone ${additionalClass}`,
            })}
          >
            <input {...getInputProps()} />
            <div className="relative flex flex-col items-center justify-center gap-3 p-4 my-8 bg-white rounded-xl">
              {files.length === 0 ? (
                <div className="cursor-pointer">
                  <ImagePlaceholder />
                  <Text className="text-xl font-bold text-[#3B97CB] underline">
                    Upload Image Here
                  </Text>
                </div>
              ) : (
                <div>
                  <Icon
                    as={CloseIcon}
                    className="absolute cursor-pointer right-4"
                    color={'red'}
                    onClick={() => setFiles([])}
                  />
                  <div className="flex flex-wrap gap-4">{previews}</div>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
}
