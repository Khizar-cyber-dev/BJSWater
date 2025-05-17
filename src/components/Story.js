import React, { useState, useEffect } from 'react';
import labotary from '../assets/images/labotary.png';
import flask from '../assets/images/flask.png';
import nano from '../assets/images/nano.png';
import Certification from '../assets/images/certification.png';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import { Element } from 'react-scroll';

function Story() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);
  useEffect(() => {
    console.log("isModalOpen state:", isModalOpen);
  }, [isModalOpen]);

  return (
    <Element name="story">
      <div className="bg-blue-50 w-full py-12 px-4 md:px-8" id="story">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          {/* Header Section */}
          <motion.div 
            className="text-center max-w-xl mx-auto"
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-blue-400 underline underline-offset-8 decoration-wavy decoration-1">
              Our <span className="text-black">Story</span>
            </h1>
            <motion.p 
              className="text-md font-medium text-gray-500 mt-4 px-3 md:px-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              At Bjs Water, we provide high-quality, refreshing mineral water sourced from pristine springs. Committed to health and sustainability, we offer eco-friendly solutions to keep you hydrated while protecting the planet.
            </motion.p>
          </motion.div>

          {/* Features Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { img: labotary, text: "Labotary Control", duration: 2 },
              { img: flask, text: "Great Composition", duration: 2.5 },
              { img: nano, text: "Nano Filtration Level", duration: 3 },
              { img: Certification, text: "Certificates of Quality", duration: 3.5 }
            ].map(({ img, text, duration }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: (idx + 1) * 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration }}
                viewport={{ once: true }}
              >
                <span className="flex items-center justify-center p-6 bg-white rounded-full shadow-md">
                  <img src={img} alt={text} className="h-[60px] w-auto" />
                </span>
                <p className="mt-2 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full">
            <motion.div
              className="w-full md:w-[350px]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/1FDGaso21Ns?autoplay=1&mute=1&loop=1&playlist=1FDGaso21Ns"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Water Extraction Video"
              ></iframe>
            </motion.div>

            <motion.div
              className="text-center md:text-left max-w-md"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl font-bold mb-2">How we Extract Our Water</h1>
              <h3 className="text-xl font-bold mb-4 text-blue-400"> Our Technology</h3>
              <p className="text-gray-600">
                Watch our video to learn about our unique water extraction process.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-[80vh] max-w-4xl">
              <button
                onClick={handleCloseModal}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-blue-400"
              >
                <IoMdClose />
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/1FDGaso21Ns?autoplay=1&mute=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
}

export default Story;
