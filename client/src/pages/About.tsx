import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Zap, Target } from "lucide-react";

export default function About() {
  const expertise = [
    "Битрикс24 (5+ лет опыта)",
    "Смарт-процессы и BPMN",
    "Сквозная аналитика",
    "BI-дашборды",
    "NLP-боты и AI",
    "Интеграции (1С, Planado, PayKeeper)",
    "Google Data Studio",
    "Цифровая трансформация",
  ];

  const skills = [
    { category: "CRM/Процессы", items: ["Bitrix24", "amoCRM", "Smart-процессы", "BPMN-схемы", "Регламенты"] },
    { category: "Интеграции", items: ["1С", "IP-телефония", "Planado", "PayKeeper", "CarrotQuest", "DMP One"] },
    { category: "Аналитика", items: ["Google Data Studio", "Google Sheets", "CallTouch", "Alytics", "Сквозная аналитика"] },
    { category: "Маркетинг", items: ["Yandex Direct", "Google Ads", "VK ADS", "Avito", "Programmatic", "Email-маркетинг"] },
    { category: "AI/Автоматизация", items: ["ChatGPT", "Claude", "Llama", "NLP-боты", "Telegram-боты", "RAG-системы"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О компании</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Команда экспертов с 15+ летним опытом в маркетинге и цифровой трансформации
          </p>
        </div>
      </div>

      {/* Company Info */}
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Альбион-1</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Альбион-1 — это команда специалистов, специализирующихся на интеграции Битрикс24, оптимизации бизнес-процессов и цифровом маркетинге. Мы помогаем компаниям трансформировать свои операции и достичь значительного роста.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Наш подход основан на комплексном анализе текущего состояния бизнеса, стратегическом планировании и внедрении современных технологий. Мы не просто внедряем системы — мы строим экосистемы, которые работают.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша цель — стать официальным партнером Битрикс24 и помочь российским компаниям максимально эффективно использовать возможности этой мощной платформы.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта в маркетинге</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Лет с Битрикс24</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Успешных проектов</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">4x</div>
                <div className="text-sm text-muted-foreground">Средний рост оборота</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Expert */}
        <Card className="mb-16 overflow-hidden">
          <CardHeader className="bg-primary/5 pb-6">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Ключевой эксперт
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-foreground mb-2">Галиакберов Альберт Таирович</h3>
                <p className="text-sm text-muted-foreground mb-4">Специалист по внедрению и сопровождению CRM-систем</p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Опыт:</span> 18+ лет в маркетинге и интеграциях
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Специализация:</span> Битрикс24, Бизнес-процессы, Аналитика
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Контакт:</span> +7 (995) 5996615
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span> 560898@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Telegram:</span> @gvingm
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Ключевые компетенции
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="justify-start">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Expertise */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Target className="w-8 h-8 text-primary" />
            Технический стек и навыки
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <Badge key={itemIdx} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="bg-primary/5 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Users className="w-8 h-8 text-primary" />
            Наш подход
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Стратегический анализ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы начинаем с глубокого анализа вашего бизнеса, используя методики Адизеса, Гайдо и Карты ценностного предложения.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Комплексное внедрение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы не просто внедряем системы — мы строим полные IT-экосистемы, интегрируя все необходимые инструменты и процессы.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Поддержка и обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы обучаем вашу команду и обеспечиваем постоянную поддержку, чтобы система работала на полную мощность.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
