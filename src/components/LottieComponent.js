import { useState, useEffect } from "react";
import Lottie from "lottie-react";
//import data from '../data.json';

const LottieComponent = () => {
    const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/data.json") 
      .then(res => res.json())
      .then(data => setAnimationData(data));
      console.log(animationData);
  }, []);
  return (
    <div className="lottie-container">
        <h1>Hello</h1>
      <Lottie 
  animationData={animationData} 
  loop={true} 
  autoplay={true} 
  style={{ height: 300, width: 300 }} 
/>
    </div>
  );
};

export default LottieComponent;
