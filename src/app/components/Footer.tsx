import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/20 blur-xl" />
              <span className="relative text-2xl font-bold tracking-wider">
                Lavaggio
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Премиальная студия защиты автомобилей в Москве. Специализируемся на полной оклейке 
              защитной полиуретановой пленкой.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/79160368901"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-600/10 border border-green-600/20 flex items-center justify-center hover:bg-green-600/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
              <a
                href="https://t.me/vtcarlab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center hover:bg-blue-600/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-blue-500" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Полная оклейка PPF
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Оклейка зон риска
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Глянцевая пленка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Матовая пленка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Детейлинг-подготовка
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-6">Информация</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Наши работы
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Процесс работы
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Частые вопросы
                </a>
              </li>
              <li>
                <span className="text-gray-500">Гарантии</span>
              </li>
              <li>
                <span className="text-gray-500">Цены</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+79160368901" className="hover:text-white transition-colors">
                    +7 (916) 036-89-01
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@lavaggio.ru" className="hover:text-white transition-colors">
                    info@lavaggio.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>Москва, ЮЗАО, Тёплый Стан, 9-й микрорайон</div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>Ежедневно 9:00 - 23:00</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2026 Lavaggio. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
