import { easeOut, motion } from 'framer-motion';
import React from 'react';
import Lottie from 'lottie-react';
import team1 from '../../../assets/AnimationLogin.json';
import team2 from '../../../assets/Animation login2.json';

const HeaderBanner = () => {
    return (
        <div className="bg-[#dfeff7] min-h-screen flex items-center justify-center px-0 sm:px-4 md:px-6">
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between w-full max-w-screen-xl gap-10 py-10">

                {/* 🎥 Animations - NO extra margin or padding */}
                <div className="flex flex-col md:items-center justify-center gap-6 w-full md:w-2/3 lg:w-1/2 pl-14 ">
                    <motion.div
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-60 sm:w-64 md:w-72 lg:w-80  rounded-xl shadow-md"
                    >
                        <Lottie animationData={team1} className="w-full h-auto" />
                    </motion.div>

                    <motion.div
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="w-60 sm:w-64 md:w-72 lg:w-80 rounded-xl  "
                    >
                        <Lottie animationData={team2} className="w-full h-auto" />
                    </motion.div>
                </div>

                {/* 📝 Text Block */}
                <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                    >
                        Latest{' '}
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Jobs
                        </motion.span>{' '}
                        For You!
                    </motion.h1>

                    <p className="py-4 sm:py-6 text-base sm:text-lg text-gray-700">
                        Explore opportunities with animated style and smooth layouts. Responsive, beautiful, and tailored just for you!
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;
