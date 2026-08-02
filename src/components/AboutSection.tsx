import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, GraduationCap, CheckCircle2, PawPrint } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["JavaScript", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "SQL", "PostgreSQL", "APIs REST"] },
  { category: "Ferramentas", items: ["Git", "VS Code", "Figma", "Docker"] },
];

const highlights = [
  { icon: CheckCircle2, title: "18 Projetos", desc: "Aplicações completas e concluídas" },
  { icon: PawPrint, title: "Nima", desc: "Ecossistema de adoção com IA & IoT" },
  { icon: Rocket, title: "Performance", desc: "Código otimizado e escalável" },
  { icon: GraduationCap, title: "Formação", desc: "Concluindo Sistemas na ETEC" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 relative scroll-mt-16" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Sobre mim</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Construindo o <span className="gradient-text">futuro digital</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Olá! Sou o <span className="text-foreground font-medium">Pedro Coltro</span>, um desenvolvedor
              full stack focado em resultados. Atualmente estou concluindo o curso de desenvolvimento de sistemas na
              <span className="text-primary font-medium"> ETEC Bento Quirino</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Com um portfólio de <span className="text-foreground font-medium">18 projetos concluídos</span>,
              minha experiência vai além da teoria. Meu principal projeto é o
              <span className="text-primary font-medium"> Nima</span>, um ecossistema multiplataforma de adoção de pets
              que une <span className="text-foreground font-medium">Inteligência Artificial</span> para match comportamental
              e <span className="text-foreground font-medium">IoT (Smart Tags)</span> para segurança antiperda.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl glass gradient-border group hover:bg-primary/5 transition-colors duration-300"
                >
                  <Icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-8">
              {skills.map((group, gi) => (
                <div key={group.category}>
                  <h3 className="text-sm font-mono text-primary mb-4 tracking-wider">{`// ${group.category}`}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + gi * 0.1 + si * 0.05 }}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal-style block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 rounded-xl glass p-5 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-primary">const</span> <span className="text-foreground">pedro</span> = {"{"}</p>
                <p className="pl-4"><span className="text-accent">status</span>: <span className="text-primary/70">"Finalizando ETEC"</span>,</p>
                <p className="pl-4"><span className="text-accent">projetos</span>: <span className="text-primary/70">18</span>,</p>
                <p className="pl-4"><span className="text-accent">projeto_principal</span>: <span className="text-primary/70">"Nima (IA + IoT)"</span></p>
                <p>{"};"}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;