import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Smartphone, Zap, Heart, Layout } from "lucide-react";

const projects = [
  {
    title: "ShapeTrack Pro",
    description: "SaaS de alta performance focado em 'Data-Driven Bodybuilding' com clientes reais. Monitora treinos, dieta e evolução biométrica.",
    tags: ["React", "Supabase", "Tailwind CSS", "Recharts"],
    github: "https://github.com/coltrox/shape-track-pro",
    link: "https://shapetrack.vercel.app/",
    icon: Zap,
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    title: "PetLar - IA & IoT",
    description: "Sistema de adoção consciente que utiliza IA para match comportamental e Smart Tags (NFC/QR) para prontuário médico digital.",
    tags: ["n8n", "AI Agents", "Mobile", "IoT"],
    github: "https://github.com/coltrox/Pet-Lar",
    link: "https://github.com/coltrox/Pet-Lar",
    icon: Heart,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Finance App Hub",
    description: "Gestão financeira inteligente com análise de dados em tempo real, transformando transações em gráficos intuitivos de saúde financeira.",
    tags: ["React 18", "TypeScript", "PostgreSQL", "Shadcn/UI"],
    github: "https://github.com/coltrox/finance-app",
    link: "https://financeapphub.vercel.app/",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Aurora Colony Command",
    description: "Dashboard Sci-Fi HUD simulando o centro de comando de uma colônia em Marte. Arquitetura full-stack desacoplada.",
    tags: ["Node.js", "React", "Canvas API", "Supabase"],
    github: "https://github.com/coltrox/colonia",
    link: "https://coltrox.github.io/colonia/",
    icon: Layout,
    color: "from-purple-500/20 to-indigo-500/10",
  },
  {
    title: "MedStudy Hub Pro",
    description: "Plataforma avançada de organização de estudos focada em produtividade e centralização de materiais.",
    tags: ["React", "Tailwind", "Productivity"],
    github: "https://github.com/coltrox/study-hub-pro",
    link: "https://medstudyhub.vercel.app/",
    icon: Smartphone,
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    title: "Snake Moderno",
    description: "Recriação do clássico Snake com física fluida, dificuldade progressiva e design glassmorphism em arquivo único.",
    tags: ["JavaScript Puro", "HTML5 Canvas", "CSS3"],
    github: "https://github.com/coltrox/Snake-Game",
    link: "https://coltrox.github.io/Snake-Game/",
    icon: Zap,
    color: "from-pink-500/20 to-rose-500/10",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Uma seleção dos meus melhores trabalhos, incluindo aplicações de mercado, 
            estudos de caso de IA e experimentos de UI de alto nível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl glass gradient-border overflow-hidden hover:bg-primary/5 transition-all duration-500 flex flex-col"
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <project.icon size={40} className="text-primary/40 group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Container de links com Z-Index alto e stopPropagation */}
                  <div className="flex gap-3 relative z-20">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors p-1" 
                      title="Ver código no GitHub"
                    >
                      <Github size={20} className="pointer-events-none" />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors p-1" 
                      title="Ver projeto online"
                    >
                      <ExternalLink size={20} className="pointer-events-none" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm">
            E outros 12+ projetos focados em inovação e performance.
          </p>
          <a 
            href="https://github.com/coltrox?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary font-mono text-xs hover:underline underline-offset-4"
          >
            VER TODOS NO GITHUB →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;