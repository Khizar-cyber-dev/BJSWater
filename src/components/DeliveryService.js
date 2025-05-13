import React from "react";
import delivery from "../assets/images/Delivery-Boy.jpg";
import { FaTruckDroplet } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const DeliveryService = () => {
  return (
    <Element name="delivery">
      <div className="flex items-center justify-center h-[auto] w-[100vw]">
        <div className="flex items-center justify-center md:shadow-xxl w-[100%]  md:w-3/4 md:h-3/4 mb-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex justify-center flex-col-reverse md:flex-row items-center gap-20 w-full h-full"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
             <img
                src={delivery}
                alt="delivery"
                className="w-full h-auto max-w-[100%] md:max-w-[300px] lg:max-w-[350px] object-contain rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="w-[100%] md:w-[50%] h-full text-center md:text-left"
            >
              <h1 className="header text-4xl font-bold mt-5">
                Delivery{" "}
                <span className="text-blue-500 uppercase">service</span>
              </h1>
              <p className="text-l mt-5 text-center md:text-left px-3 md:px-0">
                Our refreshing purified bottled water can now be delivered
                directly to your door with our water delivery service.
              </p>
              <div className="icons h-[75%] flex flex-col gap-10 ">
                <div className="flex items-center md:justify-start justify-center gap-5 mt-10 ">
                  <div className="p-3 bg-blue-300 rounded-full w-[50px] h-[50px] flex items-center justify-center ">
                    <FaTruckDroplet className="text-3xl" />
                  </div>
                  <p>
                    <span className="text-xl text-blue-300 mr-2">|</span>
                    Free Delivery
                  </p>
                </div>

                <div className="flex items-center md:justify-start justify-center gap-5">
                  <div className="p-3 bg-blue-300 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <SlCalender className="text-3xl" />
                  </div>
                  <p>
                    <span className="text-xl text-blue-300 mr-2">|</span>7 days
                    a week
                  </p>
                </div>

                <div className="flex items-center md:justify-start justify-center gap-5">
                  <div className="border p-3 bg-blue-300 rounded-full w-[50px] h-[50px] flex items-center justify-center ml-9 md:ml-0">
                    <LuClock3 className="text-3xl" />
                  </div>
                  <p>
                    <span className="text-xl text-blue-300  mr-2">|</span>
                    8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default DeliveryService;
