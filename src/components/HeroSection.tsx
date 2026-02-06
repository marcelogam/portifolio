"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-500 via-blue-600 to-green-600">
              Olá, eu sou
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Marcelo',
                1000,
                'Web Developer',
                1000,
                'Full Stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-4 text-[#ADB7BE] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam assumenda veritatis non dolore optio asperiores, dicta cum placeat praesentium porro voluptatibus quod qui deleniti quam error et reprehenderit quae!</p>
          <div>
            <button className="bg-linear-to-br from-blue-500 via-blue-600 to-green-600 w-full md:w-fit px-6 py-2 rounded-full mt-4 cursor-pointer">Contrate-me</button>
            <button className="bg-linear-to-br from-blue-500 via-blue-600 to-green-600 w-full md:w-fit text-white px-1 py-1 rounded-full mt-4 md:ml-4 cursor-pointer">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-1">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-5 mt-4 md:mt-0 place-self-center">
          <div className="rounded-full bg-[#262626] w-87.5 h-87.5 flex items-center justify-center">
            <Image src="/images/marcelo.png" alt="Marcelo" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}