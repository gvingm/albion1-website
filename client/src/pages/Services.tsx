import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, BarChart3, Mic } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Интеграция и настройка Битрикс24",
      description: "Полный цикл внедрения CRM с нуля, миграция данных, кастомизация и настройка смарт-процессов",
      features: [
        "Внедрение CRM с нуля",
        "Миграция из других систем",
        "Настройка смарт-процессов и BPMN-схем",
        "Интеграция с 1С, Planado, PayKeeper",
        "IP-телефония и автоматизация",
      ],
    },
    {
      icon: BarChart3,
      title: "Оптимизация бизнес-процессов",
      description: "Аудит и построение операционных IT-экосистем, разработка регламентов и алгоритмов",
      features: [
        "Аудит текущих процессов",
        "Проектирование новых процессов",
        "Система операционного учета",
        "BI-дашборды и отчетность",
        "Обучение и поддержка пользователей",
      ],
    },
    {
      icon: BarChart3,
      title: "Цифровой маркетинг и аналитика",
      description: "Полный цикл лидогенерации с внедрением сквозной аналитики и оптимизацией каналов",
      features: [
        "Yandex Direct, Google Ads, VK ADS",
        "Avito, Programmatic, DMP",
        "Сквозная аналитика (CallTouch, Alytics)",
        "Google Data Studio дашборды",
        "Оптимизация стоимости лида и сделки",
      ],
    },
    {
      icon: Mic,
      title: "Голосовые роботы на основе LLM",
      description: "Разработка AI-Powered BDR и виртуальных колл-центров для автоматизации продаж",
      features: [
        "Виртуальные колл-центры",
        "Голосовые боты с NLP",
        "Telegram-боты квалификаторы",
        "RAG-системы и базы знаний",
        "Интеграция с Битрикс24",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Готовы начать трансформацию?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и обсуждения вашего проекта
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a>Получить консультацию</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
