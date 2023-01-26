import { ChangeEvent, useState } from 'react';
import { Button, Center, Input, VStack, Text } from '@chakra-ui/react';
import textToBase64 from '../util/textToBase64';

const Top = (): JSX.Element => {
    const [value, setValue] = useState('');
    const [covertedText, setCovertedText] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onCovertText = (text: string) => {
        setCovertedText(textToBase64(text));
    };

    return (
        <Center>
            <VStack>
                <Center>Top Page</Center>
                <Input onChange={handleChange} value={value} w='400px' />
                <Button
                    onClick={() => {
                        onCovertText(value);
                    }}
                >
                    covert
                </Button>
                <Text w='400px'>{covertedText}</Text>
            </VStack>
        </Center>
    );
};

export default Top;
