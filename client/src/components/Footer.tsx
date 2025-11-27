import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border mt-16">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Альбион-1</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ваш партнер по интеграции Битрикс24 и цифровой трансформации бизнеса
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Битрикс24
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Оптимизация процессов
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Цифровой маркетинг
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Голосовые роботы
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    О нас
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Кейсы
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Контакты
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+79955996615" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (995) 5996615
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:560898@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  560898@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Санкт-Петербург</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Альбион-1. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/gvingm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Telegram
              </a>
              <a
                href="mailto:560898@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
