"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projects = [
    {
        id: 1,
        imgUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/bhPolaris.png`,
        title: 'Bh polaris',
        description: 'Description for project one.',
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/marcelogam/polaris-drive-design',
        previewUrl: 'https://www.polarisbh.com.br/',
    },
    {
        id: 2,
        imgUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/ye7.png`,
        title: 'Ye7',
        description: 'Description for project two.',
        tag: ["All", "Mobile"],
        gitUrl: 'https://github.com/marcelogam/ye7',
        previewUrl: 'https://ye7.com.br/',
    },
];

export default function ProjectsSection() {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag: string) => {        
        setTag(newTag);
    }

    const filteredProjects = projects.filter(project => project.tag.includes(tag))

    return (
        <section>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">Meus projetos</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}