import React from 'react';
import PopularProducts from '../components/home/PopularProducts';
import Container from '../components/Container';

const page = () => {
    return (
        <Container>
            <PopularProducts text="All Products" viewAll={false}/>
        </Container>
    );
};

export default page;