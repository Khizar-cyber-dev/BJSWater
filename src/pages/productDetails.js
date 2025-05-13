import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch("/data/product-details.json"); 
        const data = await res.json();
        const found = data.find((p) => p.id === parseInt(id)); 
        setProduct(found);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!product) return <div className="p-10">Loading or product not found...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <img src={product.img} alt={product.title} className="w-64 mb-4" />
      <p className="text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center gap-4 mb-4">
        <span className="line-through text-gray-500">{product.originalPrice}</span>
        <span className="text-green-500 text-xl font-semibold">{product.discountedPrice}</span>
      </div>

      <h3 className="text-lg font-semibold">Ingredients:</h3>
      <ul className="list-disc pl-5 mb-4">
        {product.ingredients?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold">Nutritional Facts:</h3>
      <p>Calories: {product.nutritionalFacts?.calories}</p>
      <p>Sodium: {product.nutritionalFacts?.sodium}</p>
    </div>
  );
};

export default ProductDetail;
