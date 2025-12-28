import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Кейсы", href: "/case-studies" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Альбион-1
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const activeClass = isActive(item.href)
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground";
            return (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium transition-colors ${activeClass}`}>
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Консультация
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const activeClass = isActive(item.href)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground";
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`text-sm font-medium transition-colors block py-2 ${activeClass}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              );
            })}
            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Консультация
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
