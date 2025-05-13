import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Experience = () => {
  const [startCount, setStartCount] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [startCount]);

  return (
    <div>
      <div className='w-full h-64 flex flex-col md:flex-row mt-10 md:mt-0 items-center justify-around md:mb-16' ref={countRef}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex flex-col items-center justify-center gap-3'>
          {startCount && (
            <CountUp start={0} end={100000} duration={3} separator="," className='text-4xl font-bold text-blue-500'/>
          )}
          <span className='text-md font-semibold'>Bottles we have delivered</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex flex-col items-center justify-center gap-3'>
          {startCount && (
            <CountUp start={0} end={5} duration={3} separator="," className='text-4xl font-bold text-blue-500'/>
          )}
          <span className='text-md font-semibold'>Years of experience</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex flex-col items-center justify-center gap-3'>
          {startCount && (
            <CountUp start={0} end={99} duration={3} separator="," suffix='.99%' className='text-4xl font-bold text-blue-500'/>
          )}
          <span className='text-md font-semibold'>Satisfied customers</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;