import ProductCard from '../helpers/ProductCard'
import water1 from '../assets/images/waterbottle.png'
import water2 from '../assets/images/1watertank.png'
import water3 from '../assets/images/3watertank.png'
import bottle from '../assets/images/productHalfBottle.png'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 0,
      imgSrc: water1,
      title: "500 ml Bottles",
      originalPrice: "$24.33",
      discountedPrice: "$13.25",
      description: "Convenient mineral water for on-the-go hydration anytime, anywhere.",
      isOnSale: true,
      motion: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1 },
        viewport: { once: true },
      }
    },
    {
      id: 1,
      imgSrc: water2,
      title: "1.5 Litre Bottle",
      originalPrice: "$19.97",
      discountedPrice: "$46.99",
      description: "Perfect family-sized mineral water for long-lasting hydration and refreshment.",
      isOnSale: false,
      motion: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.5 },
        viewport: { once: true },
      }
    },
    {
      id: 2,
      imgSrc: water3,
      title: "6 Litre Bottles",
      originalPrice: "$17.93",
      discountedPrice: "$17.93",
      description: "Ideal for small events, providing refreshing mineral water for everyone.",
      isOnSale: false,
      motion: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2 },
        viewport: { once: true }
      }
    },
    {
      id: 3,
      imgSrc: bottle,
      title: "19 Litre Bottles",
      originalPrice: "$17.93",
      discountedPrice: "$17.93",
      description: "Bulk mineral water for homes and offices, ensuring all-day hydration.",
      isOnSale: false,
      motion: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 2 },
        viewport: { once: true }
      }
    },
  ];

  return (
    <Element name="products">
      <div className="bg-blue-50 w-full py-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-semibold"
          >
            Choose Your Water
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center text-md text-gray-500 mt-2 px-4"
          >
            Bottle we deliver is always clean, safe, and refreshing.
          </motion.h3>

          <div className="mt-12 w-[90%] mx-auto flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  imgSrc={product.imgSrc}
                  title={product.title}
                  description={product.description}
                  motionProps={product.motion}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Products;
