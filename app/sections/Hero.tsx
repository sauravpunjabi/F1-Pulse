'use client'
import { motion } from 'framer-motion'
// import Image from 'next/image'
// import f1Car from '/public/assets/f1-car.png'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">

      {/* 🔴 Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-red-600 opacity-30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-[100px] rounded-full -z-10" />

      {/* 👈 Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Welcome to <span className="text-red-600">F1Pulse</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Discover Formula 1 like never before — real-time data, track insights, and driver stats in one sleek dashboard.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all">
          Get Started <ArrowRight size={20} />
        </button>
      </motion.div>

      {/* 🏎️ Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[300px] sm:w-[400px] md:w-[500px]"
      >
         <Image src="/assets/f1logo.jpg" alt="F1 Logo" width={500} height={300} />
      </motion.div>
    </section>
  )
}
