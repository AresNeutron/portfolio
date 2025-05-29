import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Expenses Tracker",
    description:
      "A prototype full-stack application to securely manage and record your personal finances. Next.js and Tailwind CSS power a clean, responsive UI, while a Django REST Framework backend (with JWT auth) handles transactions, categories and date-tracked records.",
    image: "/projects/expenses_tracker_picture.png",
    tags: ["Next.js", "Tailwind CSS", "Django", "MongoDB"],
    demoUrl: "https://expensetrackerfrontend-olive.vercel.app/",
    githubUrl: "https://github.com/AresNeutron/Expenses-Tracker",
  },
  {
    id: 2,
    title: "Kingslayer",
    description:
      "A full-stack chess platform featuring a custom Python engine exposed via FastAPI and consumed by a React & Tailwind front end. Play against the AI, analyze positions, and explore engine-driven move recommendations.",
    image: "/projects/chess_engine_picture.png",
    tags: ["React", "Tailwind CSS", "Python", "FastAPI"],
    demoUrl:
      "https://kingslayer-frontend-git-main-fabio-quevedos-projects.vercel.app/",
    githubUrl: "https://github.com/AresNeutron/Kingslayer",
  },
  {
    id: 3,
    title: "Search Engine",
    description:
      "A Python & NumPy implementation of a TF-IDF search algorithm. It preprocesses text documents, computes term frequencies and inverse document frequencies, and builds vector representations for efficient keyword searches.",
    image: "/projects/search_engine_picture.png",
    tags: ["Python", "NumPy", "TF-IDF"],
    demoUrl: "https://searchenginefront-fabio-quevedos-projects.vercel.app/",
    githubUrl: "https://github.com/AresNeutron/Search-Engine",
  },
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
          logic in mind. I’m continually iterating on each one to improve performance,
          extend features, and ensure they can grow with real-world demands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
