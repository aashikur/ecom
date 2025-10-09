import React from 'react';

const Container = ({children, className = ""}) => {
    return (
        <section className={`max-w-[1200px] mx-auto px-4 ${className}`}>
            {children}
        </section>
    );
};

export default Container;