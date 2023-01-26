import {
    Center,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import ConvertFile from './ConvertFile';
import ConvertText from './ConvertText';

const Top = (): JSX.Element => {
    return (
        <Center my='2'>
            <Tabs variant='enclosed-colored' isFitted w='590px'>
                <TabList mb='1em'>
                    <Tab>Text</Tab>
                    <Tab>Image</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel minH='400px'>
                        <ConvertText />
                    </TabPanel>
                    <TabPanel minH='400px'>
                        <ConvertFile />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
    );
};

export default Top;
