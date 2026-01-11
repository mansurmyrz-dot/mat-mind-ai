import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, AlertTriangle, Check, X, Clock, Target, Shield, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockActions = [
  { time: "0:23", type: "attack", action: "Проход в ноги", score: 2, wrestler: "Красный", status: "scored" },
  { time: "0:45", type: "defense", action: "Защита от прохода", score: 0, wrestler: "Синий", status: "success" },
  { time: "1:12", type: "attack", action: "Бросок через спину", score: 4, wrestler: "Красный", status: "scored" },
  { time: "1:38", type: "error", action: "Пропущенный балл", score: 1, wrestler: "Синий", status: "missed" },
  { time: "2:05", type: "passive", action: "Пассивность", score: 0, wrestler: "Синий", status: "warning" },
  { time: "2:30", type: "attack", action: "Накат", score: 2, wrestler: "Красный", status: "scored" },
  { time: "3:15", type: "ground", action: "Контроль партера", score: 1, wrestler: "Красный", status: "scored" },
];

const refereeErrors = [
  { time: "1:38", type: "Пропущенный балл", description: "Не засчитан 1 балл за выход за ковёр", severity: "high" },
  { time: "2:45", type: "Неправильный счёт", description: "2 балла вместо 4 за бросок с амплитудой", severity: "medium" },
];

const athleteMetrics = {
  red: {
    attacks: 8, successful: 5, defense: 3, points: 9, efficiency: 62,
    weaknesses: ["Низкая защита от проходов в ноги", "Потеря баланса при атаках"]
  },
  blue: {
    attacks: 4, successful: 1, defense: 5, points: 2, efficiency: 25,
    weaknesses: ["Пассивная тактика", "Слабая контратака", "Низкая активность в партере"]
  }
};

const getActionIcon = (type: string) => {
  switch (type) {
    case "attack": return <Swords className="w-4 h-4" />;
    case "defense": return <Shield className="w-4 h-4" />;
    case "error": return <AlertTriangle className="w-4 h-4" />;
    case "passive": return <Clock className="w-4 h-4" />;
    default: return <Target className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "scored": return "text-success bg-success/10 border-success/30";
    case "missed": return "text-destructive bg-destructive/10 border-destructive/30";
    case "warning": return "text-warning bg-warning/10 border-warning/30";
    default: return "text-primary bg-primary/10 border-primary/30";
  }
};

const AnalysisDashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);

  return (
    <section id="analysis" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            ПАНЕЛЬ <span className="text-gradient">АНАЛИЗА</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Демонстрация результатов анализа матча
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video player mock */}
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-video rounded-xl bg-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Play className="w-10 h-10 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground">Видео матча</p>
                </div>
              </div>
              
              {/* Score overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="glass-panel px-4 py-2 rounded-lg">
                  <span className="text-destructive font-display text-2xl">9</span>
                  <span className="text-muted-foreground text-sm ml-2">Красный</span>
                </div>
                <div className="glass-panel px-4 py-2 rounded-lg">
                  <span className="text-primary font-display text-2xl">2</span>
                  <span className="text-muted-foreground text-sm ml-2">Синий</span>
                </div>
              </div>

              {/* Time overlay */}
              <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-lg">
                <span className="text-foreground font-mono">3:45 / 6:00</span>
              </div>
            </div>

            {/* Video controls */}
            <div className="card-gradient rounded-xl p-4 border border-border">
              <div className="flex items-center gap-4 mb-3">
                <Button variant="ghost" size="icon">
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button variant="hero" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </Button>
                <Button variant="ghost" size="icon">
                  <SkipForward className="w-5 h-5" />
                </Button>
                <div className="flex-1">
                  <Progress value={currentTime} className="h-2" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">3:45</span>
              </div>
              
              {/* Timeline markers */}
              <div className="relative h-8 bg-secondary rounded-lg overflow-hidden">
                {mockActions.map((action, idx) => (
                  <div
                    key={idx}
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-4 rounded-full cursor-pointer transition-transform hover:scale-150 ${
                      action.status === "missed" ? "bg-destructive" : 
                      action.status === "warning" ? "bg-warning" : "bg-primary"
                    }`}
                    style={{ left: `${(idx + 1) * 12}%` }}
                    title={`${action.time} - ${action.action}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Analysis panel */}
          <div className="space-y-4">
            <Tabs defaultValue="actions" className="w-full">
              <TabsList className="w-full bg-secondary">
                <TabsTrigger value="actions" className="flex-1">Действия</TabsTrigger>
                <TabsTrigger value="errors" className="flex-1">Ошибки</TabsTrigger>
                <TabsTrigger value="stats" className="flex-1">Статистика</TabsTrigger>
              </TabsList>

              <TabsContent value="actions" className="mt-4 space-y-2">
                {mockActions.map((action, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${getStatusColor(action.status)}`}
                  >
                    <div className="flex-shrink-0">
                      {getActionIcon(action.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{action.action}</p>
                      <p className="text-xs opacity-70">{action.wrestler} • {action.time}</p>
                    </div>
                    {action.score > 0 && (
                      <span className="font-display text-xl">+{action.score}</span>
                    )}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="errors" className="mt-4 space-y-3">
                {refereeErrors.map((error, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <span className="font-medium text-destructive">{error.type}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{error.time}</span>
                    </div>
                    <p className="text-sm text-foreground">{error.description}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="stats" className="mt-4 space-y-4">
                {/* Red wrestler */}
                <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-destructive">Красный борец</span>
                    <span className="font-display text-2xl text-foreground">{athleteMetrics.red.efficiency}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm mb-3">
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.red.attacks}</p>
                      <p className="text-xs text-muted-foreground">Атаки</p>
                    </div>
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.red.successful}</p>
                      <p className="text-xs text-muted-foreground">Успешные</p>
                    </div>
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.red.points}</p>
                      <p className="text-xs text-muted-foreground">Очки</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {athleteMetrics.red.weaknesses.map((w, i) => (
                      <p key={i} className="text-xs text-warning flex items-center gap-1">
                        <X className="w-3 h-3" /> {w}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Blue wrestler */}
                <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-primary">Синий борец</span>
                    <span className="font-display text-2xl text-foreground">{athleteMetrics.blue.efficiency}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm mb-3">
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.blue.attacks}</p>
                      <p className="text-xs text-muted-foreground">Атаки</p>
                    </div>
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.blue.successful}</p>
                      <p className="text-xs text-muted-foreground">Успешные</p>
                    </div>
                    <div>
                      <p className="font-display text-xl text-foreground">{athleteMetrics.blue.points}</p>
                      <p className="text-xs text-muted-foreground">Очки</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {athleteMetrics.blue.weaknesses.map((w, i) => (
                      <p key={i} className="text-xs text-warning flex items-center gap-1">
                        <X className="w-3 h-3" /> {w}
                      </p>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;
