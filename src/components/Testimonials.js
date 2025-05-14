import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/images/avator-1.png';
import img2 from '../assets/images/avator-2.png';
import img3 from '../assets/images/avator-3.png';
import img4 from '../assets/images/avator4.png'

const Testimonials = () => {
  const cards = [
    {
      id: 1,
      name: "Ahmad Aftab",
      role: "Developer",
      image: img,
      text: "I’ve tried many water brands, but nothing compares to Bjs Water. It’s clean, fresh, and perfectly balanced with essential minerals. Highly recommend it!",
    },
    {
      id: 2,
      name: "Designer 4 you",
      role: "Developer",
      image: img2,
      text: "Bjs Water is incredibly refreshing! The mineral water tastes pure and clean, keeping me hydrated all day. I trust them for my family's daily water needs.",
    },
    {
      id: 3,
      name: "Ismail Asif",
      role: "Developer",
      image: img3,
      text: "I love the taste of Bjs Water! It's always fresh, and I can feel the difference in my energy levels. The quality of the mineral water is unmatched.",
    },
    {
      id: 4,
      name: 'Usama Mahmood',
      role: "Developer",
      text: 'Refreshing and pure, the mineral water from BJS Water keeps me hydrated and energized all day. Truly unmatched quality!',
      image: img4,
    },
  ];

 const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 cursor-pointer text-indigo-600 text-2xl"
    onClick={onClick}
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 cursor-pointer text-indigo-600 text-2xl"
    onClick={onClick}
  >
    ❮
  </div>
);

const settings = {
  dots: true,
  arrows: true,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

  return (
    <div className="w-[90%] ml-[5%] py-16 relative z-10">
      <Slider {...settings} pauseOnHover={true}>
        {cards.map((d) => (
          <motion.div key={d.name} className="px-2" initial={{ opacity: 0, y: 200}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.image} alt={d.name} className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;


// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../assets/images/avator-1.png';
// import img2 from '../assets/images/avator-2.png';
// import img3 from '../assets/images/avator-3.png';
// import img4 from '../assets/images/avator4.png';

// const testimonials = [
//   {
//     name: "Ahmad Aftab",
//     role: "Developer",
//     image: img1,
//     text: "I’ve tried many water brands, but nothing compares to Bjs Water. It’s clean, fresh, and perfectly balanced with essential minerals. Highly recommend it!",
//   },
//   {
//     name: "Designer 4 you",
//     role: "Developer",
//     image: img2,
//     text: "Bjs Water is incredibly refreshing! The mineral water tastes pure and clean, keeping me hydrated all day. I trust them for my family's daily water needs.",
//   },
//   {
//     name: "Ismail Asif",
//     role: "Developer",
//     image: img3,
//     text: "I love the taste of Bjs Water! It's always fresh, and I can feel the difference in my energy levels. The quality of the mineral water is unmatched.",
//   },
//   {
//     name: "Usama Mahmood",
//     role: "Developer",
//     image: img4,
//     text: "Refreshing and pure, the mineral water from BJS Water keeps me hydrated and energized all day. Truly unmatched quality!",
//   },
// ];

// // Custom Arrows
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 cursor-pointer text-indigo-600 text-2xl"
//     onClick={onClick}
//   >
//     ❯
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 cursor-pointer text-indigo-600 text-2xl"
//     onClick={onClick}
//   >
//     ❮
//   </div>
// );

// const Testimonials = () => {
// const settings = {
//   dots: true,
//   arrows: true,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
//   infinite: true,
//   speed: 1000,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   pauseOnHover: true,
//   pauseOnFocus: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 2 },
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 1 },
//     },
//   ],
// };


//   return (
//    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10">
//       <Slider {...settings}>
//         {testimonials.map((item, index) => (
//           <motion.div
//             key={index}
//             className="px-4 my-4"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col items-center text-center p-6">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-24 w-24 rounded-full object-cover mb-4 border-4 border-indigo-500"
//               />
//               <h3 className="text-lg font-semibold text-indigo-600">{item.name}</h3>
//               <p className="text-gray-700 text-sm">{item.text}</p>
//             </div>
//           </motion.div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;