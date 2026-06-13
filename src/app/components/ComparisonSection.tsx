import { motion } from "motion/react";
import { X, Check, Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const options = [
  {
    title: "Без защиты",
    price: "0 ₽",
    description: "Риск повреждений с первого дня",
    features: [
      { text: "Риск сколов и царапин", available: false },
      { text: "Потеря стоимости при продаже", available: false },
      { text: "Дорогой ремонт кузова", available: false },
      { text: "Постоянный стресс", available: false },
      { text: "Выгорание краски", available: false },
    ],
    recommended: false,
  },
  {
    title: "Оклейка зон риска",
    price: "от 55 000 ₽",
    description: "Базовая защита капота, фар и зеркал",
    features: [
      { text: "Защита ключевых зон", available: true },
      { text: "Быстрая установка (1 день)", available: true },
      { text: "Гарантия 1 год", available: true },
      { text: "Частичная защита кузова", available: true },
      { text: "Экономичное решение", available: true },
    ],
    recommended: false,
  },
  {
    title: "Полная оклейка",
    price: "от 230 000 ₽",
    description: "Комплексная премиальная защита",
    features: [
      { text: "100% защита всего кузова", available: true },
      { text: "Сохранение заводской краски", available: true },
      { text: "Гарантия на пленку 5 лет", available: true },
      { text: "Максимальная защита стоимости", available: true },
      { text: "Невидимая защита премиум-класса", available: true },
      { text: "Самовосстановление царапин", available: true },
    ],
    recommended: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />

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
            <span className="text-sm text-red-500 font-medium">Выберите решение</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Варианты защиты вашего автомобиля
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            От базовой защиты до комплексного премиального решения
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {option.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span className="text-xs font-semibold uppercase tracking-wide">Рекомендуем</span>
                  </div>
                </div>
              )}

              <div
                className={`relative h-full p-8 rounded-2xl transition-all duration-500 ${
                  option.recommended
                    ? "bg-gradient-to-br from-red-600/20 via-red-600/5 to-transparent border-2 border-red-600/40 shadow-2xl shadow-red-600/20 scale-105"
                    : "bg-[#141414] border border-white/5 hover:border-white/10"
                }`}
              >
                {option.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold mb-2">{option.price}</div>
                    {option.price !== "0 ₽" && (
                      <p className="text-sm text-gray-500">Срок: 3-4 дня</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.available
                              ? option.recommended
                                ? "bg-red-600/20 border border-red-600/40"
                                : "bg-green-600/20 border border-green-600/40"
                              : "bg-red-900/20 border border-red-900/40"
                          }`}
                        >
                          {feature.available ? (
                            <Check
                              className={`w-3 h-3 ${
                                option.recommended ? "text-red-400" : "text-green-400"
                              }`}
                            />
                          ) : (
                            <X className="w-3 h-3 text-red-400" />
                          )}
                        </div>
                        <span className={feature.available ? "text-gray-300" : "text-gray-600"}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {option.price === "0 ₽" ? (
                    <Button
                      className="w-full bg-white/5 cursor-not-allowed"
                      size="lg"
                      disabled
                    >
                      Не рекомендуем
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <a href="tel:+79160368901" className="w-full">
                        <Button
                          className={`w-full gap-2 ${
                            option.recommended
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-white/10 hover:bg-white/20"
                          }`}
                          size="lg"
                        >
                          <Phone className="w-4 h-4" />
                          Позвонить и записаться
                        </Button>
                      </a>
                      <a href="https://wa.me/79160368901" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full gap-2 border-green-700/40 text-green-400 hover:bg-green-700/10"
                          size="sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Узнать точную цену в WA
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-xl bg-[#141414] border border-white/10">
            <p className="text-gray-400">
              <span className="text-white font-semibold">Гарантия:</span> 1 год на работы, 5 лет на пленку |{" "}
              <span className="text-white font-semibold">Материалы:</span> Премиальные полиуретановые пленки с самовосстановлением
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}