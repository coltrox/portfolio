import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={18} className="text-primary" />
              <span className="text-sm">pedro@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Campinas, SP</span>
            </div>
          </div>

          <motion.a
            href="mailto:pedro@email.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow-box"
          >
            <Send size={18} />
            Enviar Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
