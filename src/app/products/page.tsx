"use client";  // Add this line at the top

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <Link href={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-lg">{product.price} USD</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
