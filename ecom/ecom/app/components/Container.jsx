import React from 'react';

const Container = ({children}) => {
    return (
        <section className='max-w-[1200px] mx-auto px-4'>
            {children}
        </section>
    );
};

export default Container;