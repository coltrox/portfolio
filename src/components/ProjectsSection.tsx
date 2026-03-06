import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Task Manager App",
    description: "Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Portfolio Generator",
    description: "Ferramenta para criar portfólios profissionais de forma rápida e customizável.",
    tags: ["React", "Tailwind", "Framer Motion"],
    color: "from-primary/15 to-accent/15",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard interativo de previsão do tempo com gráficos e dados em tempo real.",
    tags: ["React", "API REST", "Chart.js", "CSS"],
    color: "from-accent/15 to-primary/20",
  },
  {
    title: "Chat Application",
    description: "Aplicação de chat em tempo real com suporte a grupos e envio de arquivos.",
    tags: ["Socket.io", "Express", "MongoDB", "React"],
    color: "from-primary/20 to-accent/5",
  },
  {
    title: "Blog Platform",
    description: "Plataforma de blog com editor Markdown, SEO otimizado e sistema de comentários.",
    tags: ["Next.js", "MDX", "Supabase", "Vercel"],
    color: "from-accent/10 to-primary/15",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl glass gradient-border overflow-hidden hover:bg-primary/5 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <Folder size={40} className="text-primary/30 group-hover:text-primary/50 transition-colors duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Link externo">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
