import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Check } from "lucide-react";
import { useEffect, useState } from "react";

const TypeWriter = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, started]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle rounded-sm"
        style={{ display: displayed.length >= text.length ? "none" : "inline-block" }}
      />
    </span>
  );
};

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [copied, setCopied] = useState(false);
  const email = "pedrocoltro.dev@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowCursor(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-accent/40"
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(270 80% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 80% 60% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-5 py-2 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-10 glow-box">
              ⚡ Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          >
            <TypeWriter text="Pedro Coltro" className="gradient-text glow-text" delay={600} />
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", delay: 2.5 }}
                className="inline-block w-[4px] h-[0.75em] bg-primary ml-2 align-middle rounded-sm"
              />
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Estou no último ano do curso de <span className="text-primary font-medium">Desenvolvimento de Sistemas pela ETEC Bento Quirino</span>. 
            Gosto de colocar em prática minhas ideias e criar apps bonitos e úteis para o dia a dia!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-5 mb-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 glow-box overflow-hidden"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary hover:glow-box transition-all duration-300"
            >
              Contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/coltrox?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pedro-henrique-soares-da-costa-coltro-497833386/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            <div className="relative">
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: -45, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-md whitespace-nowrap shadow-lg pointer-events-none"
                  >
                    E-mail copiado!
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleCopyEmail}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 relative"
                aria-label="Copiar Email"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check size={20} className="text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mail"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Mail size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;