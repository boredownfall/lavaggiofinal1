import { motion } from "motion/react";
import { Shield, Award, Clock, Gem, Target, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Пленки 3M, XPEL, SunTek",
    description: "Работаем только с топовыми брендами с самовосстановлением царапин и защитой от пожелтения",
  },
  {
    icon: Target,
    title: "Компьютерные лекала — без швов",
    description: "Каждая деталь вырезается по точному лекалу. Пленка ложится без пузырей и видимых стыков",
  },
  {
    icon: Award,
    title: "500+ авто BMW, Mercedes, Porsche",
    description: "Знаем особенности каждой модели. Работаем только с премиальными автомобилями",
  },
  {
    icon: Clock,
    title: "Зоны риска — 1 день, полная — 3–4 дня",
    description: "Чёткие сроки без переносов. Результат готов, как обещали",
  },
  {
    icon: Shield,
    title: "Гарантия 5 лет на плёнку, 1 год на работы",
    description: "Письменная гарантия на материал и монтаж. Устраняем любые дефекты бесплатно",
  },
  {
    icon: HeartHandshake,
    title: "Один автомобиль на посту",
    description: "Не работаем потоком. Ваш автомобиль — единственный на посту. Никакой спешки",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
            <span className="text-sm text-red-500 font-medium">Преимущества</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Почему{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              Lavaggio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Конкретные причины, а не маркетинговые слова
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-[#141414]/50 backdrop-blur-sm border border-white/5 hover:border-red-600/20 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-600/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <reason.icon className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "500+", label: "Защищенных автомобилей" },
            { value: "5 лет", label: "Гарантия на пленку" },
            { value: "3-4 дня", label: "Срок полной оклейки" },
            { value: "100%", label: "Довольных клиентов" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
