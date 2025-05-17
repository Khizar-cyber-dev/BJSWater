import { motion } from "framer-motion";

const ProductCard = ({
  imgSrc,
  title,
  originalPrice,
  discountedPrice,
  description,
  isOnSale,
  motionProps,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={motionProps.initial}
      whileInView={motionProps.animate}
      transition={motionProps.transition}
      viewport={{ once: true }}
      className="cursor-pointer bg-white rounded-lg shadow-lg p-5 text-center relative overflow-hidden w-full max-w-[270px]"
    >
      {isOnSale && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
          Sale
        </div>
      )}
      <img src={imgSrc} alt={title} className="mx-auto mb-4 h-40 object-contain" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 line-through">{originalPrice}</p>
      <p className="text-blue-600 text-xl font-bold">{discountedPrice}</p>
      <p>{description}</p>
    </motion.div>
  );
};

export default ProductCard;