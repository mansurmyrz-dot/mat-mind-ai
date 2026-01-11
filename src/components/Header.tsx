import { Button } from "@/components/ui/button";
import { Activity, Upload, BarChart3, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl tracking-wider text-foreground">WRESTLE<span className="text-primary">AI</span></h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Возможности
          </a>
          <a href="#analysis" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Анализ
          </a>
          <a href="#upload" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Загрузить
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="hero" size="default">
            <Upload className="w-4 h-4" />
            Загрузить матч
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
