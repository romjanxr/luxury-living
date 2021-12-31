import React from 'react';
import bannerImg from './../../../Images/banner-1.png'

const TopBanner = () => {
    return (
        <section className="bg-gray-100	flex items-center h-screen">
            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold text-primary">We Build
                            <br /> Your Dream</h1>
                        <p className="my-5">Online Easte Agency, the mordern way to sell your own home,
                            You can use Griffin Residential to market your property</p>
                        <button className="bg-primary px-10 py-3 rounded text-white">Booking</button>
                    </div>
                </div>
                <div>
                    <img className="w-full" src={bannerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default TopBanner;