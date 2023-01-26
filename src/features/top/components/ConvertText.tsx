import { ChangeEvent, useState } from 'react';
import {
    Button,
    Center,
    Input,
    VStack,
    Editable,
    EditablePreview,
    EditableTextarea,
    useClipboard,
} from '@chakra-ui/react';
import textToBase64 from '../util/textToBase64';

const ConvertText = (): JSX.Element => {
    const { onCopy, setValue, hasCopied } = useClipboard('');

    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState<string>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const onCovertText = (text: string) => {
        setValue(textToBase64(text));
        setConvertedText(textToBase64(text));
    };

    return (
        <VStack>
            <Input
                onChange={handleChange}
                value={text}
                w='400px'
                placeholder='input here'
            />
            <Button
                colorScheme='teal'
                onClick={() => {
                    onCovertText(text);
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
            <Button
                position='relative'
                right='-210px'
                bottom='50px'
                size='sm'
                colorScheme='red'
                onClick={onCopy}
                opacity='0.9'
            >
                {hasCopied ? 'copied' : 'copy'}
            </Button>
        </VStack>
    );
};

export default ConvertText;
