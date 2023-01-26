import type { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const Providers = ({ children }: PropsWithChildren): JSX.Element => (
    <ChakraProvider>{children}</ChakraProvider>
);

export default Providers;
