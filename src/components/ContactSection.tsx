import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, MessageCircle, Check, Copy } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "pedrocoltro.dev@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "E-mail",
      value: email,
      href: "#",
      onClick: handleCopyEmail,
      isCopy: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/pedro-coltro",
      href: "https://www.linkedin.com/in/pedro-henrique-soares-da-costa-coltro-497833386/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Enviar mensagem",
      href: "https://wa.me/5519996640912",
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Estou disponível para novas oportunidades de mercado, projetos Full Stack 
            ou para trocar uma ideia sobre o ecossistema SaaS e IA.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                target={link.isCopy ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 rounded-2xl glass gradient-border hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3 relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    {link.isCopy && copied ? (
                      <Check size={22} className="text-emerald-500" />
                    ) : (
                      <link.icon size={22} className="text-primary" />
                    )}
                  </div>
                  
                  <span className="text-xs font-mono text-primary uppercase tracking-tighter flex items-center gap-2">
                    {link.label}
                    {link.isCopy && <Copy size={10} className="opacity-50" />}
                  </span>

                  <span className="text-sm font-medium text-foreground truncate w-full">
                    {link.isCopy && copied ? "E-mail copiado!" : link.value}
                  </span>

                  {/* Tooltip de feedback para mobile/desktop */}
                  <AnimatePresence>
                    {link.isCopy && copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -20 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-10 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded shadow-lg"
                      >
                        Copiado!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground mb-4"
            >
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">Campinas, São Paulo - Brasil</span>
            </motion.div>
            
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.5)] transition-all glow-box"
            >
              <Send size={20} />
              Enviar E-mail Direto
            </motion.a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-border/40 py-10 text-center">
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} • Pedro Coltro • Full Stack Developer
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;