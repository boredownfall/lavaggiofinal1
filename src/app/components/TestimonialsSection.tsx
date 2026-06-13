import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Александр К.",
    car: "BMW M5 Competition",
    rating: 5,
    text: "Оклеил полностью новую M5. Пленка легла идеально, ни одного шва не видно. Спустя год езды по Москве — ни единой царапины. Машина выглядит как из салона. Очень доволен.",
  },
  {
    name: "Михаил Р.",
    car: "Mercedes-AMG GT",
    rating: 5,
    text: "До этого делал в другой студии — разочаровался. В VTCARLAB подошли к делу профессионально. Объяснили каждый этап, показали материалы. Результат превзошел ожидания.",
  },
  {
    name: "Дмитрий В.",
    car: "Li Auto L9",
    rating: 5,
    text: "Защитили Li Auto сразу после покупки. Работали быстро и аккуратно. Через полгода ни одного скола на капоте, хотя езжу каждый день по МКАД. Вложения окупились полностью.",
  },
  {
    name: "Сергей П.",
    car: "Zeekr 001",
    rating: 5,
    text: "Приехал на консультацию — сразу почувствовал профессионализм. Все объяснили, рассчитали, сделали быстро. Zeekr выглядит идеально, пленка незаметна, но работает.",
  },
  {
    name: "Владимир Т.",
    car: "Porsche 911 Carrera",
    rating: 5,
    text: "Критически важно было сохранить оригинальную краску 911. VTCARLAB справились на 100%. Качество материалов и работы выше всяких похвал. Рекомендую всем.",
  },
  {
    name: "Андрей Ж.",
    car: "Mercedes GLS",
    rating: 5,
    text: "Делал полную оклейку GLS. Ребята работали 4 дня, результат стоил ожидания. Автомобиль защищен, спокоен за каждую поездку. Сервис и качество — на высшем уровне.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

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
            <span className="text-sm text-red-500 font-medium">Отзывы</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Владельцы премиальных автомобилей доверяют нам защиту своих инвестиций
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-red-600/20 transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-red-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/5">
                  <div className="font-semibold mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 p-6 rounded-xl bg-[#141414]/50 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                <Star className="w-6 h-6 fill-red-600 text-red-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-500">Средняя оценка</div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm text-gray-500">Отзывов</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
