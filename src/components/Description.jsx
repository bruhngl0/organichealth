import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/description.scss";

const Description = ({  threshold = 0.4 }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, {
    amount: threshold,
    once: false, // Change to false if you want the animation to replay when scrolling back up
  });

  const isImageInView = useInView(imageRef, {
    amount: threshold,
    once: false, // Same replay logic
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1], // Smooth easing
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: '-10vw', // Starts off-screen to the left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="description-wrapper">
      {/* Image Section */}
      <motion.div
        className="description-image"
        ref={imageRef}
        variants={imageVariants}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
      >
        <img src= "kok.png" alt="Decorative Item" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="description-text"
        ref={textRef}
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        <h1>ORGANIC HEALTH</h1>
        <p>Organic Health specializes in crafting premium medicinal extracts and plant-based powders to promote natural healing and wellness. Our products are carefully sourced and processed to preserve their therapeutic benefits. With a focus on sustainability, we aim to bring nature’s remedies to your doorstep. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
        <button> Enquiry</button>
      </motion.div>
    </section>
  );
};

export default Description;
