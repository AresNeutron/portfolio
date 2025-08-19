import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finances Tracker",
    description:
      "A personal finance management and tracking application. The front end is built with **Next.js** and **Tailwind CSS**, while a **Django REST Framework** backend securely handles transactions, categories, and date-tracked records. It allows users to monitor their income and expenses.",
    image: "/projects/finances_tracker.png",
    tags: ["Next.js", "Tailwind CSS", "Django", "JWT", "PostgreSQL"],
    demoUrl: "https://financialapp-chi.vercel.app/",
    githubUrl: "https://github.com/AresNeutron/Expenses-Tracker",
  },
  {
    id: 2,
    title: "Kingslayer",
    description:
      "A complete **chess platform** with a custom chess engine built from scratch in **C++**. This engine is exposed via a **FastAPI** backend, which powers a front end built using **React** and **Tailwind**. Users can play against the AI and analyze positions.",
    image: "/projects/kingslayer.png",
    tags: ["React", "Tailwind CSS", "FastAPI", "WebSockets", "C++"],
    demoUrl:
      "https://kingslayer-bay.vercel.app/",
    githubUrl: "https://github.com/AresNeutron/Kingslayer",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my key projects—built with scalability and solid backend
          logic in mind. I’m constantly building more projects which will become real apps in a near future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/AresNeutron"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
