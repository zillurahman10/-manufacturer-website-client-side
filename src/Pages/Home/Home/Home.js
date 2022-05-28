import React from 'react';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Coundown from '../Coundown/Coundown';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <Coundown></Coundown>
        </div>
    );
};

export default Home;