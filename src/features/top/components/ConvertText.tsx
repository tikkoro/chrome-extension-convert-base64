import { ChangeEvent, useState } from 'react';
import {
    Button,
    Center,
    Input,
    VStack,
    Editable,
    EditablePreview,
    EditableTextarea,
} from '@chakra-ui/react';
import textToBase64 from '../util/textToBase64';

const ConvertText = (): JSX.Element => {
    const [value, setValue] = useState('');
    const [convertedText, setConvertedText] = useState<string>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onCovertText = (text: string) => {
        setConvertedText(textToBase64(text));
    };

    return (
        <VStack>
            <Input
                onChange={handleChange}
                value={value}
                w='400px'
                placeholder='input here'
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
                    <EditablePreview w='500px' h='200px' overflowY='hidden' />
                </Center>
                <EditableTextarea h='200px' />
            </Editable>
        </VStack>
    );
};

export default ConvertText;
