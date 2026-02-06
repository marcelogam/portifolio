import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        imgUrl: '/images/projects/bhPolaris.png',
        title: 'Bh polaris',
        description: 'Description for project one.',
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 2,
        imgUrl: '/images/projects/ye7.png',
        title: 'Ye7',
        description: 'Description for project two.',
        gitUrl: '/',
        previewUrl: '/',
    },
]

export default function ProjectsSection() {
    return (
        <section>
            <h2>Meus projetos</h2>
            <div>
                {projects.map(project => (
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