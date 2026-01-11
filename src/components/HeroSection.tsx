import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Zap, Target, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(199 89% 48% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(199 89% 48% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Платформа на базе ИИ</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">АНАЛИЗ</span>
            <br />
            <span className="text-gradient">БОРЬБЫ</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Передовая система компьютерного зрения для анализа техники, выявления ошибок судей и улучшения результатов спортсменов
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5" />
              Начать анализ
            </Button>
            <Button variant="outline" size="xl">
              Смотреть демо
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="stat-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-display text-4xl text-foreground">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Точность распознавания</p>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-display text-4xl text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Типов действий</p>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="font-display text-4xl text-foreground">UWW</span>
              </div>
              <p className="text-sm text-muted-foreground">Сертификация</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
