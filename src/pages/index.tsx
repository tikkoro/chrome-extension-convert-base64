import dynamic from 'next/dynamic';

const Top = dynamic(() => import('@/features/top/components/Top'), {
    ssr: false,
});

const Home = (): JSX.Element => {
    return <Top />;
};

export default Home;
