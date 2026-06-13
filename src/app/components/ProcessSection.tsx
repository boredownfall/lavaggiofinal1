import { motion } from "motion/react";
import { Phone, Search, Sparkles, Shield, CheckCircle2, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Консультация",
    description: "Обсудим ваши потребности, подберем оптимальный вариант защиты и рассчитаем точную стоимость",
  },
  {
    number: "02",
    icon: Search,
    title: "Осмотр автомобиля",
    description: "Детальная оценка состояния кузова, выявление особенностей и составление плана работ",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Подготовка поверхности",
    description: "Профессиональная мойка, детейлинг и обезжиривание для идеального сцепления пленки",
  },
  {
    number: "04",
    icon: Shield,
    title: "Оклейка пленкой",
    description: "Точная установка защитной пленки по компьютерным лекалам без видимых швов",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Финальная проверка",
    description: "Контроль качества каждого сантиметра, устранение малейших недочетов",
  },
  {
    number: "06",
    icon: Car,
    title: "Выдача автомобиля",
    description: "Рекомендации по уходу, документы и гарантия. Ваш автомобиль защищен",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 overflow-hidden bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
            <span className="text-sm text-red-500 font-medium">Процесс</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Как проходит работа
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Прозрачный и понятный процесс от консультации до выдачи
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line (hidden on mobile, shown on desktop for specific positions) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-red-600/40 to-transparent -z-10" />
                )}

                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-black border border-white/5 hover:border-red-600/20 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center font-bold shadow-lg shadow-red-600/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                      <step.icon className="w-7 h-7 text-red-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600/10 via-red-600/5 to-transparent border border-red-600/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Оклейка зон риска</h3>
                <p className="text-gray-400 mb-4">
                  Быстрое решение для защиты самых уязвимых частей автомобиля
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-lg font-semibold">от 1 дня</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Полная оклейка</h3>
                <p className="text-gray-400 mb-4">
                  Комплексная защита всего автомобиля с гарантией на 5 лет
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-lg font-semibold">3-4 дня</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
