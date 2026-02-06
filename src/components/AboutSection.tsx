"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>Sequelize</li>
      </ul>
    )
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pontifícia Universidade Católica de Minas Gerais (Ciencia da computação)</li>
        <li>SENAI Contagem CFP Euvaldo Lodi (Mecatrônica)</li>
      </ul>
    )
  },
  {
    title: "Experiência",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Desenvolvedor Full Stack na empresa TCS industrial</li>
      </ul>
    )
  },
  {
    title: "Certificação",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Networking Academy Learn-A-Thon 2023</li>
        <li>AWS Academy Graduate - AWS Academy Cloud Foundations</li>
      </ul>
    )
  }
]

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabClick = (selectedTab: string) => {
    startTransition(() => {
      setTab(selectedTab);
    });
  }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 xl:px-16">
        <Image className="rounded-4xl" src="/images/computer.png" alt="Marcelo" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam assumenda veritatis non dolore optio asperiores, dicta cum placeat praesentium porro voluptatibus quod qui deleniti quam error et reprehenderit quae!
          </p>
          <div className="flex flex-row justify-start mt-6">
            <TabButton active={tab === "skills"} selectTab={() => handleTabClick("skills")}>
              Skills
            </TabButton>
            <TabButton active={tab === "education"} selectTab={() => handleTabClick("education")}>
              Educação
            </TabButton>
            <TabButton active={tab === "experience"} selectTab={() => handleTabClick("experience")}>
              Experiência
            </TabButton>
            <TabButton active={tab === "certification"} selectTab={() => handleTabClick("certification")}>
              Certificação
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}