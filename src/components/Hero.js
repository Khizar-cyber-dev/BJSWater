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
        className="pb-10 pt-[90px] flex flex-col-reverse gap-14 p-0 md:gap-0 md:flex-row items-center justify-center min-h-screen md:min-h-0 container px-16 mx-auto"
        id="home"
      >
        <div className="tracking-wide flex justify-center md:justify-start align-center md:w-[60%]">
          <div className="w-[95%] md:w-[75%]">
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="header text-4xl font-bold mb-4 text-center md:text-start"
            >
              Pure Water
              <span className="text-blue-600 block mt-2">Delivery Service</span>
            </motion.h1>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-[100%] text-center md:text-start"
            >
              <p>
                <strong>
                  <span className="text-blue-600 mr-2 font-bold hidden md:inline">|</span>
                </strong>
                Welcome to <strong>BJS Water</strong>, your trusted partner in hydration and
                health. We provide premium mineral water that is naturally
                enriched and carefully purified to deliver unmatched quality and
                refreshing taste. Our commitment is to ensure every sip supports
                your well-being and revitalizes your day. Choose BJS Water for
                purity you can rely on.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="space-x-3 mt-5 flex items-center justify-center md:flex md:justify-start font-semibold mb-18 md:mb-0"
              style={{ marginBottom: "10px" }}
            >
              <a href="https://wa.me/+923342301234" target="_blank">
                <button
                  className="py-3 px-6 rounded-3xl border border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-black"
                  type="button"
                >
                  Order Now
                </button>
              </a>
            </motion.div>
          </div>
        </div>
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
