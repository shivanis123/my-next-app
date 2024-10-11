"use client"

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-80 object-cover mb-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-semibold">{product.price} USD</p>
      <button
        onClick={() => alert('Product added to cart!')}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
