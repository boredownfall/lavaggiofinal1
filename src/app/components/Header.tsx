import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-xl" />
              <span className="relative text-2xl font-bold tracking-wider">
                Lavaggio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Работы
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Процесс
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79160368901">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                +7 (916) 036-89-01
              </Button>
            </a>
            <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-red-600 hover:bg-red-700">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+79160368901" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Позвонить</span>
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                Работы
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                Процесс
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                FAQ
              </button>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a href="tel:+79160368901">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    +7 (916) 036-89-01
                  </Button>
                </a>
                <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 bg-red-600 hover:bg-red-700">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
