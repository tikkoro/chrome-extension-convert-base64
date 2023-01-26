import { ChangeEvent, useCallback, useState } from 'react';
import {
    Button,
    Center,
    Input,
    VStack,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Editable,
    EditablePreview,
    EditableTextarea,
    HStack,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import fileToBase64 from '../util/fileToBase64';
import textToBase64 from '../util/textToBase64';

const acceptFile = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
};

const Top = (): JSX.Element => {
    const [value, setValue] = useState('');
    const [file, setFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string>('');
    const [convertedText, setConvertedText] = useState<string>();
    const [convertedFile, setConvertedFile] = useState<string>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onCovertText = (text: string) => {
        setConvertedText(textToBase64(text));
    };
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
        <Center my='2'>
            <Tabs variant='enclosed-colored' isFitted w='590px'>
                <TabList mb='1em'>
                    <Tab>Text</Tab>
                    <Tab>Image</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <VStack>
                            <Input
                                onChange={handleChange}
                                value={value}
                                w='400px'
                            />
                            <Button
                                colorScheme='teal'
                                onClick={() => {
                                    onCovertText(value);
                                }}
                            >
                                encode
                            </Button>
                            <Editable
                                borderWidth='1px'
                                px='2'
                                py='1'
                                defaultValue='result is here'
                                value={convertedText}
                                w='500px'
                                fontSize='lg'
                                isPreviewFocusable
                            >
                                <Center>
                                    <EditablePreview
                                        w='500px'
                                        h='200px'
                                        overflowY='hidden'
                                    />
                                </Center>
                                <EditableTextarea h='200px' />
                            </Editable>
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <HStack>
                                <Center
                                    {...getRootProps()}
                                    borderWidth='1px'
                                    borderColor={isDragActive ? 'red.300' : ''}
                                    borderRadius='md'
                                >
                                    <input
                                        {...getInputProps()}
                                        capture='user'
                                    />
                                    <Button colorScheme='blue'>
                                        Upload Image
                                    </Button>
                                </Center>
                                <Button
                                    colorScheme='teal'
                                    onClick={onCovertFile}
                                >
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
                                    <EditablePreview
                                        w='500px'
                                        h='200px'
                                        overflowY='hidden'
                                    />
                                </Center>
                                <EditableTextarea h='200px' />
                            </Editable>
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
    );
};

export default Top;
