import bjsWater from "../assets/images/bjswater.png";
import backImage from "../assets/images/backImage.png";
import upperLayer from "../assets/images/upperLayer.png";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="Hero" className="w-full bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="@container pb-10 pt-[90px] flex flex-col-reverse gap-14 p-0 md:gap-0 md:flex-row items-center justify-center min-h-screen md:min-h-0 px-16 mx-auto"
        id="home"
      >
         {/* LEFT CONTENT */}
       <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="max-w-lg text-center md:text-left space-y-5">
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Pure Water
              <span className="block text-blue-600 mt-2">Delivery Service</span>
            </motion.h1>

            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-gray-700"
            >
              <span className="text-blue-600 font-bold hidden md:inline mr-2">|</span>
              Welcome to <strong>BJS Water</strong>, your trusted partner in hydration and health.
              We provide premium mineral water that is naturally enriched and carefully purified to
              deliver unmatched quality and refreshing taste. Choose BJS Water for purity you can rely on.
            </motion.p>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <a href="https://wa.me/+923342301234" target="_blank" rel="noopener noreferrer">
                <button
                  className="py-3 px-6 rounded-full border border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-600 transition duration-300 font-semibold"
                >
                  Order Now
                </button>
              </a>
            </motion.div>
          </div>
        </div>

         {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center w-[80%] md:w-[50%] relative"
        >
          <motion.img
            src={bjsWater}
            alt="profile"
            className="w-[80%] h-auto md:h-1/4 z-[1] ml-[0px] md:ml-[15px]"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={upperLayer}
            alt="profile"
            className="w-[80%] absolute bottom-0 right-[25px] object-contain"
          />
          <motion.img
            src={backImage}
            alt="profile"
            className="w-[80%] h-full absolute bottom-0  right-[25px]  object-contain z-10 opacity-[0.7]"
          />
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Hero;