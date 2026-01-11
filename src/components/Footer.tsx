import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wider text-foreground">
              WRESTLE<span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О платформе</a>
            <a href="#" className="hover:text-foreground transition-colors">Документация</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 WrestleAI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
