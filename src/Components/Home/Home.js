import React from 'react';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <Banner/>
            <Services/>
        </div>
    );
};

export default Home;