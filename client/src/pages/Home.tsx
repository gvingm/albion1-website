import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, BarChart3, Users, Mic, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Битрикс24",
      description: "Полная интеграция и настройка CRM с нуля",
    },
    {
      icon: BarChart3,
      title: "Оптимизация процессов",
      description: "Построение операционных IT-экосистем",
    },
    {
      icon: BarChart3,
      title: "Цифровой маркетинг",
      description: "Сквозная аналитика и лидогенерация",
    },
    {
      icon: Mic,
      title: "Голосовые роботы",
      description: "AI-Powered BDR на основе LLM",
    },
  ];

  const caseHighlights = [
    {
      title: "БиоПрайм",
      metric: "350 MQL/мес",
      description: "Интеграция Битрикс24 и сквозная аналитика",
    },
    {
      title: "СтолБери",
      metric: "4x рост",
      description: "Омниканальная модель и маркетплейсы",
    },
    {
      title: "1-й Конвейерный",
      metric: "1400 руб/звонок",
      description: "Автоматизация и оптимизация процессов",
    },
  ];

  const benefits = [
    "15+ лет опыта в маркетинге и интеграциях",
    "5+ лет специализации на Битрикс24",
    "Комплексный подход к цифровой трансформации",
    "Реальные результаты и измеримый ROI",
    "Полная поддержка и обучение команды",
    "Интеграция с современными AI-технологиями",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              Партнер Битрикс24
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Цифровая трансформация вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Интеграция Битрикс24, оптимизация бизнес-процессов, сквозная аналитика и голосовые роботы на основе LLM. Мы помогаем компаниям достичь значительного роста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Получить консультацию
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  Посмотреть кейсы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Комплексные решения для цифровой трансформации вашего бизнеса
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg">
              Все услуги
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Case Studies Preview */}
      <div className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Реальные результаты внедрения Битрикс24 и оптимизации бизнес-процессов
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {caseHighlights.map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{caseItem.metric}</div>
                  <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/case-studies">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Посмотреть все кейсы
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Мы не просто внедряем системы — мы строим экосистемы, которые работают
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Лет опыта в маркетинге</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Лет с Битрикс24</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4x</div>
              <p className="text-muted-foreground">Средний рост оборота</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-16 md:py-24">
        <div className="bg-primary/10 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Готовы начать трансформацию?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и обсуждения вашего проекта
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Получить консультацию
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
