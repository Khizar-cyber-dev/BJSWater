import glass from "../assets/images/Layer 1.png";
import drop from "../assets/images/drop.png";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const composition = () => {
  return (
    <Element name="composition">
      <div className="mt-10 w-full mb-10" id="box">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="header mt-10 text-4xl font-semibold text-center px-2 md:px-0"
        >
          Water Composition
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center text-xl mt-10 px-4 md:px-3"
        >
          The human body is made up of 60% water. It is essential for life and
          plays a crucial role
           in maintaining our health.
        </motion.h3>
        <div className="w-full">
          <div className="flex justify-between gap-10 md:gap-0 flex-col md:flex-row items-center w-[90%] ml-[5%]">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="pr-[10px]"
            >
              {[
                {
                  title: "Calcium ca2+",
                  range: "45-90 mg/L",
                  desc: "This water supports bone strength and essential body functions.",
                },
                {
                  title: "Sodium Na+",
                  range: "20-45 mg/L",
                  desc: "This water helps maintain hydration and supports nerve and muscle function.",
                },
                {
                  title: "Magnesium Mg2+",
                  range: "10-45 mg/L",
                  desc: "This water supports muscle function, energy production, and heart health.",
                },
                {
                  title: "Potassium",
                  range: "0.7-0.4 mg/L",
                  desc: "This water supports electrolyte balance and healthy muscle function.",
                },
              ].map((item, idx) => (
                <div key={idx} className="w-[290px] flex flex-row gap-0 mt-5 text-end">
                  <div className="relative w-[50%] p-0">
                    <img
                      src={drop}
                      alt="drop"
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[120px]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-start md:text-end">{item.title}</h2>
                    <h3 className="text-l font-semibold text-blue-400 mt-2 text-start md:text-end">
                      {item.range}
                    </h3>
                    <p className="text-sm mt-2 text-start">
                      <span className="text-blue-400 w-4 font-bold mr-1 hidden md:inline">|</span>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Middle Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="flex justify-center items-center w-[320px]"
            >
              <img src={glass} alt="glass" className="w-80 animate-glass-spin" />
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="pr-[5px]"
            >
              {[
                {
                  title: "Chloride",
                  range: "50-110 mg/L",
                  desc: "This water aids in digestion and helps maintain fluid balance in the body.",
                },
                {
                  title: "Sulphate SO4(2-)",
                  range: "20-60 mg/L",
                  desc: "This water supports digestion and helps cleanse the body of toxins.",
                },
                {
                  title: "Fluoride",
                  range: "0.1-0.7mg/L",
                  desc: "This water helps support dental health by strengthening teeth and preventing cavities.",
                },
                {
                  title: "pH",
                  range: "7.0-9.2 mg/L",
                  desc: "This water helps balance body acidity, supporting overall hydration and wellness.",
                },
              ].map((item, idx) => (
                <div key={idx} className="w-[280px] flex flex-row gap-0 mt-5 text-end">
                  <div className="relative w-[50%] p-0">
                    <img
                      src={drop}
                      alt="drop"
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[120px]"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-start md:text-end">{item.title}</h2>
                    <h3 className="text-l font-semibold text-blue-400 mt-2 text-start md:text-end">
                      {item.range}
                    </h3>
                    <p className="text-sm mt-2 text-start">
                      <span className="text-blue-400 w-4 font-bold mr-1 hidden md:inline">|</span>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default composition;
