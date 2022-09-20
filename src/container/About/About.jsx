import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';

const abouts = [
    { title: "Hey,", description: "I'm a 21 year old undergrad at UCSC with a passion for software engineering.", imgUrl: ''},
    { title: "Data Science", description: "I'm interested in learning more about Data Science and am currently working on a certification course.", imgUrl: images.about02},
    { title: "Web Development", description: "I enjoy designing and creating websites regarding various topics.", imgUrl: images.about01},
    { title: "Interests", description: "In my free time I enjoy reading, working out, programming, and sleeping.", imgUrl: images.about03}
    
];

const About = () => {
    return (
        <>
            <h2 className="head-text"> About Me </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1}}
                        whileHover={{ scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.tite} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about', 
    "app__whitebg"
);
