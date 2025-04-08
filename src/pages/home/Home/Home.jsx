import React from 'react';
import HeaderBanner from '../../header/HeadBanar/HeaderBanner';
import AllDataLoad from '../../../hooks/useFetch/allDataLoad';
const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <AllDataLoad ></AllDataLoad>


        </div>
    );
};

export default Home;