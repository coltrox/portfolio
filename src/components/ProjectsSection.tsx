import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, Dumbbell, BookOpen, Wallet, Server, PawPrint, Lock, X, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nima — IA & IoT",
    description: "Meu projeto principal: ecossistema multiplataforma de adoção de pets com IA para match comportamental entre tutor e animal e Smart Tags (IoT) para segurança antiperda.",
    features: [
      "Match comportamental por IA entre tutor e pet",
      "Smart Tags (IoT/NFC) para localização antiperda",
      "Apps dedicados para Adotante, Tutor e ONGs",
      "Serviço de IA com n8n + OpenAI para avaliar adoções",
    ],
    tags: ["React Native", "Expo", "n8n", "OpenAI", "IoT"],
    github: "https://github.com/coltrox/app-nima",
    icon: PawPrint,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "ShapeTrack Pro",
    description: "SaaS de alta performance focado em 'Data-Driven Bodybuilding' com clientes reais. Monitora treinos, dieta e evolução biométrica.",
    features: [
      "Triple Streak: constância de treino, dieta e cardio",
      "Curva de peso em tempo real para identificar platôs",
      "Fases de protocolo: Cutting, Bulking e Manutenção",
      "Backend e autenticação via Supabase — usado por clientes reais",
    ],
    tags: ["React", "Supabase", "Tailwind CSS", "Recharts"],
    github: "https://github.com/coltrox/shape-track-pro",
    icon: Dumbbell,
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    title: "Finance App",
    description: "Gestão financeira inteligente com análise de dados em tempo real, transformando transações em gráficos intuitivos de saúde financeira.",
    features: [
      "Transações viram gráficos intuitivos de saúde financeira",
      "Análise de dados em tempo real com Recharts",
      "Auth e persistência via Supabase (PostgreSQL)",
      "UI responsiva construída com Shadcn/UI",
    ],
    tags: ["React 18", "TypeScript", "Supabase", "Recharts"],
    github: "https://github.com/coltrox/finance-app",
    icon: Wallet,
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "API de Adoção de Pets",
    description: "API RESTful completa: cadastro de tutores, questionário de adoção, fila de pedidos, doações e rotas administrativas protegidas com JWT.",
    features: [
      "Cadastro de tutores com questionário obrigatório de adoção",
      "Fila de pedidos de adoção e sistema de doações",
      "Rotas administrativas protegidas com JWT + bcrypt",
      "Upload de imagens (Multer) e ORM Sequelize/SQLite",
    ],
    tags: ["Node.js", "Express", "Sequelize", "JWT"],
    github: "https://github.com/coltrox/Api-App-Adocao",
    icon: Server,
    color: "from-purple-500/20 to-indigo-500/10",
  },
  {
    title: "MedStudy Hub Pro",
    description: "Plataforma avançada de organização de estudos focada em produtividade e centralização de materiais de aprendizado.",
    features: [
      "Centralização de materiais de estudo em um só lugar",
      "Foco em produtividade e organização da rotina",
      "Interface moderna com React + Tailwind",
    ],
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    github: "https://github.com/coltrox/study-hub-pro",
    icon: BookOpen,
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    title: "LCKP — Locação de Armários",
    description: "SaaS multi-tenant onde alunos alugam armários da própria escola. Cada ETEC tem seus armários, identidade e pagamento via Mercado Pago.",
    features: [
      "Multi-tenant: cada escola com seus armários e identidade",
      "Alunos alugam armários físicos da própria instituição",
      "Pagamento via Mercado Pago (token no front, cobrança no back)",
      "Backend Express + Supabase com autenticação JWT",
    ],
    tags: ["React", "Express", "Supabase", "Mercado Pago"],
    github: "https://github.com/coltrox/rede-compras",
    icon: Lock,
    color: "from-pink-500/20 to-rose-500/10",
  },
];

type Project = (typeof projects)[number];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selected, setSelected] = useState<Project | null>(null);

  // Fecha com Esc e trava o scroll do body enquanto o modal está aberto
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 relative scroll-mt-16" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm sm:text-base">
            Uma seleção dos meus melhores trabalhos, incluindo aplicações de mercado,
            estudos de caso de IA e experimentos de UI de alto nível. Toque em um card para ver os detalhes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(project)}
              aria-label={`Ver detalhes de ${project.title}`}
              className={`group relative rounded-2xl glass gradient-border overflow-hidden cursor-pointer hover:bg-primary/5 hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)/0.3)] transition-all duration-500 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                i === 0 ? "ring-1 ring-primary/40 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]" : ""
              }`}
            >
              {i === 0 && (
                <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary text-primary-foreground shadow-lg">
                  ★ Projeto principal
                </span>
              )}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <project.icon size={40} className="text-primary/40 group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono font-medium text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-primary/70 group-hover:text-primary transition-colors">
                    detalhes <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
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

      {/* Modal de detalhes do projeto */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-background/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="relative w-full sm:max-w-lg max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl glass gradient-border"
            >
              {/* Cabeçalho com gradiente e ícone */}
              <div className={`h-28 bg-gradient-to-br ${selected.color} flex items-center justify-center relative`}>
                <selected.icon size={44} className="text-primary" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] to-transparent opacity-60" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Fechar"
                  className="absolute top-3 right-3 p-2 rounded-full bg-background/60 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                {selected.title === projects[0].title && (
                  <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20">
                    ★ Projeto principal
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {selected.description}
                </p>

                <h4 className="text-xs font-mono text-primary uppercase tracking-widest mt-6 mb-3">Destaques</h4>
                <ul className="space-y-2">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-mono text-primary uppercase tracking-widest mt-6 mb-3">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Ver código no GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
