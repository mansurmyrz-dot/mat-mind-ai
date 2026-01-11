import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileVideo, Check, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "video/mp4") {
      setUploadedFile(file.name);
    }
  };

  return (
    <section id="upload" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            ЗАГРУЗИТЬ <span className="text-gold-gradient">МАТЧ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Загрузите видеозапись матча и настройте параметры анализа
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : uploadedFile
                  ? "border-success bg-success/5"
                  : "border-border hover:border-primary/50 bg-card/50"
              }`}
            >
              <input
                type="file"
                accept="video/mp4"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setUploadedFile(file.name);
                }}
              />
              
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                uploadedFile ? "bg-success/20" : "bg-primary/10"
              }`}>
                {uploadedFile ? (
                  <Check className="w-8 h-8 text-success" />
                ) : (
                  <FileVideo className="w-8 h-8 text-primary" />
                )}
              </div>

              {uploadedFile ? (
                <>
                  <p className="text-foreground font-medium mb-1">{uploadedFile}</p>
                  <p className="text-success text-sm">Файл загружен</p>
                </>
              ) : (
                <>
                  <p className="text-foreground font-medium mb-1">
                    Перетащите видео сюда
                  </p>
                  <p className="text-muted-foreground text-sm">
                    или нажмите для выбора файла (MP4)
                  </p>
                </>
              )}
            </div>

            {/* Settings */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Стиль борьбы
                </label>
                <Select defaultValue="freestyle">
                  <SelectTrigger className="w-full bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freestyle">Вольная борьба</SelectItem>
                    <SelectItem value="greco">Греко-римская борьба</SelectItem>
                    <SelectItem value="women">Женская борьба</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Весовая категория
                </label>
                <Select defaultValue="74">
                  <SelectTrigger className="w-full bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="57">57 кг</SelectItem>
                    <SelectItem value="65">65 кг</SelectItem>
                    <SelectItem value="74">74 кг</SelectItem>
                    <SelectItem value="86">86 кг</SelectItem>
                    <SelectItem value="97">97 кг</SelectItem>
                    <SelectItem value="125">125 кг</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Набор правил
                </label>
                <Select defaultValue="uww">
                  <SelectTrigger className="w-full bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uww">UWW International</SelectItem>
                    <SelectItem value="national">Национальные правила</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="hero" size="lg" className="w-full" disabled={!uploadedFile}>
                <Upload className="w-5 h-5" />
                Начать анализ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
