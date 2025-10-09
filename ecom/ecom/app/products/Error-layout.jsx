import React, { Children } from 'react';
import Container from '../components/Container';

const layout = ({Children}) => {
    return (
        <Container>
            {Children}
        </Container>
    );
};

export default layout;