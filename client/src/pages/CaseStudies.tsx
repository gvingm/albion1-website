import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "БиоПрайм (BioPrime)",
      industry: "Строительство и недвижимость",
      period: "Январь 2023 - Июль 2024",
      budget: "До 3 млн руб./мес",
      challenge: "Усиление лидогенерации и устранение системных операционных проблем, препятствующих масштабированию бизнеса",
      solution: {
        it: [
          "Спроектирована и внедрена комплексная операционная IT-экосистема",
          "Интеграция Битрикс24 (CRM), Planado (FSM), MySnab (закупки), 1С",
          "Построены воронки на основе смарт-процессов и бизнес-процессов",
          "Интегрирована телефония всех участников процесса",
          "Система операционного учета на Google Sheets с метриками маржинальности",
        ],
        marketing: [
          "Объединены 12 разрозненных рекламных кабинетов в один",
          "Внедрена сквозная аналитика (CallTouch, Alytics)",
          "Запущены новые каналы: Programmatic, Avito, DMP",
          "Настроены товарные и медийные кампании",
          "Доля РСЯ увеличена с 30% до 70%",
        ],
      },
      results: [
        { label: "MQL/мес (B2C)", value: "350", unit: "септики" },
        { label: "MQL/мес (B2B)", value: "150", unit: "оборудование" },
        { label: "Качество лидов", value: "Улучшено", unit: "система аналитики" },
        { label: "Маржинальность", value: "Отслеживается", unit: "по каждой сделке" },
      ],
      processes: [
        "MQL менеджерам",
        "SQL - КП клиенту",
        "Наряд на замер - монтажнику",
        "Заказ на производство",
        "Наряд на монтаж",
        "Ссылка на оплату - клиенту",
      ],
    },
    {
      id: 2,
      title: "Маринэк (Marinec)",
      industry: "Производство и дистрибьюция",
      period: "Июль 2021 - Декабрь 2022",
      budget: "Оптимизированный бюджет",
      challenge: "Формирование отдела маркетинга с нуля и систематизация работы с клиентской базой",
      solution: {
        it: [
          "Создание отдела маркетинга с нуля",
          "Внедрение CRM-системы для систематизации работы с клиентами",
          "Создание нового интернет-магазина на платформе Bitrix CMS",
          "Интеграция с системой управления товарами",
        ],
        marketing: [
          "Запуск и развитие продаж на ключевых B2B-маркетплейсах",
          "Разработка маркетинговой стратегии",
          "Создание контентной поддержки",
          "Вывод новых продуктов на рынок",
        ],
      },
      results: [
        { label: "Отдел маркетинга", value: "Создан", unit: "с нуля" },
        { label: "Маркетплейсы", value: "Активны", unit: "B2B каналы" },
        { label: "Интернет-магазин", value: "Запущен", unit: "Bitrix CMS" },
        { label: "Процессы", value: "Систематизированы", unit: "CRM" },
      ],
      processes: [
        "Управление контентом",
        "Маркетплейс интеграция",
        "Управление товарами",
        "Работа с клиентами",
      ],
    },
    {
      id: 3,
      title: "СтолБери (Stolberi)",
      industry: "Розничная торговля и мебель",
      period: "Февраль 2020 - Июнь 2021",
      budget: "Оптимизированный",
      challenge: "Цифровая трансформация розничной торговли и омниканальное развитие",
      solution: {
        it: [
          "Перенос сайтов на платформу Битрикс Магазин+CRM",
          "Интеграция с 1С (товары, цены, остатки в реальном времени)",
          "Синхронизация товаров и цен на всех каналах",
        ],
        marketing: [
          "Вывод на все ведущие маркетплейсы (Озон, WildBeries, Goods, Beru, Aliexpress)",
          "Создание новых РК с торговыми форматами",
          "Создание новых РК с медийными форматами",
          "Настройка сквозной аналитики",
          "Внедрение омниканальной модели",
          "Организация фотосессий для съёмки мебели в формате 360гр",
        ],
      },
      results: [
        { label: "Рост оборота", value: "4x", unit: "в 4 раза" },
        { label: "Маркетплейсы", value: "5+", unit: "активных каналов" },
        { label: "Модель", value: "Омниканальная", unit: "интегрированная" },
        { label: "Аналитика", value: "Сквозная", unit: "все каналы" },
      ],
      processes: [
        "Управление товарами",
        "Синхронизация цен",
        "Управление остатками",
        "Маркетплейс интеграция",
        "Аналитика продаж",
      ],
    },
    {
      id: 4,
      title: "1-й Конвейерный Завод",
      industry: "Промышленное оборудование",
      period: "Ноябрь 2017 - Февраль 2020",
      budget: "Оптимизированный",
      challenge: "Автоматизация производственных процессов и снижение стоимости заявки",
      solution: {
        it: [
          "Разработка стратегии компании и плана маркетинга",
          "Создание 14 Landing Pages",
          "Внедрение Битрикс24 для процессов: продажа, проектирование, закупка, бухгалтерия, производство, логистика",
          "Создание системы сквозной аналитики (Callibri+Оригами+Битрикс CMS+CRM Bitrix 24)",
        ],
        marketing: [
          "Создание и запуск контекстных объявлений Yandex Direct и Google Adwords",
          "Создание YouTube канала и контента",
          "Фотосъемка оборудования",
          "Создание и размещение статей в отраслевых журналах",
          "Разработка ABM-маркетинга",
          "Обучение всех сотрудников",
        ],
      },
      results: [
        { label: "Стоимость звонка", value: "1400", unit: "руб/целевой звонок" },
        { label: "Рост оборота", value: "25%", unit: "в год" },
        { label: "Рост прибыли", value: "25%", unit: "в год" },
        { label: "Процессы", value: "Автоматизированы", unit: "6 направлений" },
      ],
      processes: [
        "Продажа",
        "Проектирование",
        "Закупка",
        "Бухгалтерия",
        "Производство",
        "Логистика",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши кейсы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Реальные результаты внедрения Битрикс24 и оптимизации бизнес-процессов
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="container py-12 md:py-20">
        <div className="space-y-12">
          {cases.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">{caseStudy.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{caseStudy.industry}</Badge>
                      <Badge variant="outline">{caseStudy.period}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Задача
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Решение
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">IT-инфраструктура</h4>
                      <ul className="space-y-2">
                        {caseStudy.solution.it.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Маркетинг</h4>
                      <ul className="space-y-2">
                        {caseStudy.solution.marketing.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Результаты
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{result.label}</div>
                        <div className="text-xs text-muted-foreground">{result.unit}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Processes */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Интегрированные процессы
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.processes.map((process, idx) => (
                      <Badge key={idx} variant="secondary">
                        {process}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
