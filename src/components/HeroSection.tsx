import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="lg:col-span-7 place-self-center">
                <h1 className="text-5xl font-extrabold">Olá, meu nome é Marcelo</h1>
                <p className="mt-4 text-[#ADB7BE] text-lg">Desenvolvedor Full Stack apaixonado por tecnologia e inovação.</p>
                <div>
                  <button className="bg-white text-black hover:bg-transparent hover:text-white px-6 py-2 rounded-lg mt-4">Contrate-me</button>
                  <button className="bg-transparent border-1 border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-lg mt-4 ml-4">Download CV</button>
                </div>
            </div>
            <div className="lg:col-span-5 place-self-center">
              <div className="rounded-full bg-[#181818] w-[350px] h-[350px] flex items-center justify-center">
                <Image src="/images/marcelo.png" alt="Marcelo" width={300} height={300} />
              </div>
            </div>
        </div>
    </section>
  );
}