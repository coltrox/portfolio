import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/coltrox", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/pedro-henrique-soares-da-costa-coltro-497833386/", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:pedrocoltro.dev@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <footer className="py-12 border-t border-border/40 relative overflow-hidden">
      {/* Detalhe de luz sutil no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="gradient-text font-bold">Pedro Coltro</span>
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/60 tracking-tighter uppercase">
            Full Stack Developer • Campinas, SP
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={label}
            >
              <Icon size={18} className="relative z-10" />
              {/* Efeito de hover circular */}
              <span className="absolute inset-0 scale-0 rounded-full bg-primary/10 group-hover:scale-100 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;