import { motion } from "motion/react";
import { Phone, MessageCircle, Shield, Clock, Star, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1563969105242-37c55b40c5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBCTVclMjBzcG9ydHMlMjBjYXIlMjBkYXJrJTIwc3R1ZGlvfGVufDF8fHx8MTc3OTI4NjQzNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury BMW"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Red Accent Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-sm text-red-500 font-medium">Оклейка PPF-плёнкой · Москва · Тёплый Стан</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
          >
            Оклейка автомобиля{" "}
            <span className="relative inline-block">
              <span className="relative z-10">PPF-плёнкой</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-600/40 -z-0" />
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              в Москве с гарантией 5 лет
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Защитите кузов от сколов, царапин и реагентов до того, как московские дороги испортят его.
            <br className="hidden md:block" />
            <span className="text-white font-semibold"> Зоны риска от 55 000 ₽ · Полная оклейка от 230 000 ₽</span>
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {[
              { icon: Shield, text: "Гарантия 5 лет на плёнку" },
              { icon: Star, text: "500+ защищённых авто" },
              { icon: Clock, text: "Работаем 09:00–23:00" },
              { icon: MapPin, text: "ЮЗАО, Тёплый Стан" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
                <item.icon className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a href="tel:+79160368901" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full"
              >
                <Phone className="w-5 h-5" />
                Позвонить: +7 916 036-89-01
              </Button>
            </a>
            <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-6 text-lg w-full"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp — узнать цену
              </Button>
            </a>
          </motion.div>

          {/* Telegram link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-3 text-sm"
          >
            <a
              href="https://t.me/vtcarlab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <MessageCircle className="w-4 h-4 text-blue-400" />
              </div>
              <span>Telegram: @vtcarlab</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}