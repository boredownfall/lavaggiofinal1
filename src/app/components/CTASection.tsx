import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle, Camera } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739950075618-f9ae2f90b0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGx1eHVyeSUyMGNhciUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3OTI4NjQzNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-sm text-red-500 font-medium">Защитите автомобиль сейчас</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Защитите автомобиль,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              пока он еще
            </span>
            <br />
            выглядит идеально
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Каждый день без защиты — это риск повреждений, которых можно избежать. 
            Запишитесь на оклейку и получите спокойствие за свой автомобиль.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="tel:+79160368901">
              <Button
                size="lg"
                className="gap-2 bg-red-600 hover:bg-red-700 px-8 py-7 text-lg group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Записаться на оклейку
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/20 hover:bg-white/10 px-8 py-7 text-lg w-full sm:w-auto"
              >
                <Camera className="w-5 h-5" />
                Отправить фото авто
              </Button>
            </a>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400"
          >
            <a
              href="https://wa.me/79160368901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">WhatsApp</div>
                <div className="font-semibold">+7 (916) 036-89-01</div>
              </div>
            </a>
            
            <div className="hidden sm:block h-12 w-px bg-white/10" />

            <a
              href="https://t.me/vtcarlab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Telegram</div>
                <div className="font-semibold">@vtcarlab</div>
              </div>
            </a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Гарантия на пленку", value: "5 лет" },
              { label: "Защищенных авто", value: "500+" },
              { label: "Срок оклейки", value: "3-4 дня" },
              { label: "Средняя оценка", value: "4.9/5" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}