'use client';

//import { main } from 'framer-motion/client';
import Hero from './sections/Hero';
import Loader from './components/Loader';
import { useState } from 'react';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return(
    <main>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <Hero />
    </main>
  )
}