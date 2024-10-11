"use client";  // Add this line at the top

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: email,// "mor_2314",
            password: password //"83r5^_"
        })
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
    router.push('/products');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input 
            // type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border rounded w-full p-2" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="border rounded w-full p-2" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
