import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      toast.error("Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (995) 5996615",
      href: "tel:+79955996615",
    },
    {
      icon: Mail,
      label: "Email",
      value: "560898@gmail.com",
      href: "mailto:560898@gmail.com",
    },
    {
      icon: MapPin,
      label: "Город",
      value: "Санкт-Петербург",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Свяжитесь с нами для консультации или обсуждения вашего проекта
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      <a href={info.href} className="text-primary hover:underline">
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Имя *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ваш@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Компания</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Название компании"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о вашем проекте или вопросе..."
                  required
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Telegram</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами в Telegram для быстрого общения и консультаций
              </p>
              <a
                href="https://t.me/gvingm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @gvingm
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Время работы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Мы доступны для консультаций в рабочие дни. Ответ на ваше сообщение обычно приходит в течение 24 часов.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
