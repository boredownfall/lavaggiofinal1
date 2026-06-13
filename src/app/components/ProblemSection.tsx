import { motion } from "motion/react";
import { AlertTriangle, DollarSign, Shield, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const problems = [
  {
    icon: AlertTriangle,
    title: "Сколы от камней",
    description: "Каждая поездка — риск повреждений кузова от летящих камней и гравия",
  },
  {
    icon: DollarSign,
    title: "Потеря стоимости",
    description: "Царапины и сколы снижают цену автомобиля при продаже на сотни тысяч рублей",
  },
  {
    icon: Shield,
    title: "Парковочные повреждения",
    description: "Московские парковки — постоянная угроза вашему идеальному кузову",
  },
  {
    icon: Clock,
    title: "Постоянный стресс",
    description: "Вместо удовольствия от вождения — переживания за каждую царапину",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
              <span className="text-sm text-red-500 font-medium">Проблема</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Один скол способен испортить{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                ощущение
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              От машины за несколько миллионов. Вы заслуживаете наслаждаться безупречным 
              автомобилем без постоянных переживаний.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-red-600/20 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                PPF-плёнка закрывает каждый из этих рисков
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Оклейка зон риска — от 55 000 ₽. Полная оклейка — от 230 000 ₽. Гарантия 5 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+79160368901">
                  <Button size="lg" className="gap-2 bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </Button>
                </a>
                <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-green-700 hover:bg-green-600 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Написать в WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
