import { useCallback, useState } from 'react';
import {
    Button,
    Center,
    VStack,
    Image,
    Editable,
    EditablePreview,
    EditableTextarea,
    HStack,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import fileToBase64 from '../util/fileToBase64';

const acceptFile = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
};

const ConvertFile = (): JSX.Element => {
    const [file, setFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string>('');
    const [convertedFile, setConvertedFile] = useState<string>();
    const onCovertFile = async () => {
        if (file) {
            setConvertedFile(await fileToBase64(file));
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptFile,
        multiple: false,
    });

    return (
        <VStack>
            <HStack>
                <Center
                    {...getRootProps()}
                    borderWidth='1px'
                    borderColor={isDragActive ? 'red.300' : ''}
                    borderRadius='md'
                >
                    <input {...getInputProps()} capture='user' />
                    <Button colorScheme='blue'>Upload Image</Button>
                </Center>
                <Button colorScheme='teal' onClick={onCovertFile}>
                    encode
                </Button>
            </HStack>
            {file && (
                <Image
                    src={fileUrl}
                    alt='no image'
                    boxSize='xs'
                    objectFit='cover'
                />
            )}
            <Editable
                borderWidth='1px'
                px='2'
                py='1'
                defaultValue='result is here'
                value={convertedFile}
                w='500px'
                isPreviewFocusable
                fontSize='lg'
            >
                <Center>
                    <EditablePreview w='500px' h='200px' overflowY='hidden' />
                </Center>
                <EditableTextarea h='200px' />
            </Editable>
        </VStack>
    );
};

export default ConvertFile;
