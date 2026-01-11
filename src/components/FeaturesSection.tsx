import { Video, Brain, AlertTriangle, TrendingUp, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Анализ видео",
    description: "Загрузите видео матча в формате MP4 и получите детальный анализ всех действий с точными временными метками",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Классификация действий",
    description: "ИИ распознает атаки, защиты, броски, пасы, контроль на земле, выходы с ковра и пассивность",
    color: "accent",
  },
  {
    icon: AlertTriangle,
    title: "Ошибки рефери",
    description: "Выявление неправильного начисления очков, пропущенных баллов и некорректного определения пассивности",
    color: "destructive",
  },
  {
    icon: TrendingUp,
    title: "Анализ спортсмена",
    description: "Технические ошибки, тактические просчеты и повторяющиеся паттерны в атаке и защите",
    color: "success",
  },
  {
    icon: Clock,
    title: "Временная шкала",
    description: "Интерактивная временная шкала с возможностью перехода к любому моменту матча",
    color: "warning",
  },
  {
    icon: Users,
    title: "Все стили борьбы",
    description: "Поддержка вольной, греко-римской и женской борьбы с правилами UWW и национальными",
    color: "primary",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    primary: "text-primary bg-primary/10 border-primary/20",
    accent: "text-accent bg-accent/10 border-accent/20",
    destructive: "text-destructive bg-destructive/10 border-destructive/20",
    success: "text-success bg-success/10 border-success/20",
    warning: "text-warning bg-warning/10 border-warning/20",
  };
  return colors[color] || colors.primary;
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            ВОЗМОЖНОСТИ <span className="text-gradient">ПЛАТФОРМЫ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Комплексный инструментарий для анализа борьбы на базе искусственного интеллекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
