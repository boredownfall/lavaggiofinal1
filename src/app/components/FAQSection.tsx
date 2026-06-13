import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Желтеет ли пленка со временем?",
    answer: "Нет. Мы используем только премиальные полиуретановые пленки от мировых производителей с UV-защитой. Они не желтеют, не мутнеют и сохраняют прозрачность на протяжении всего срока службы — 5-7 лет.",
  },
  {
    question: "Можно ли снять пленку без повреждения краски?",
    answer: "Да, пленка снимается полностью без следов и повреждений заводской краски. Более того, под пленкой краска сохраняется в идеальном состоянии, как в день установки. Это особенно важно при продаже автомобиля.",
  },
  {
    question: "Сколько служит защитная пленка?",
    answer: "При правильном уходе пленка служит 5-7 лет. Мы даем гарантию 5 лет на материал и 1 год на работы. Пленка не теряет защитных свойств и сохраняет внешний вид на протяжении всего срока.",
  },
  {
    question: "Можно ли мыть автомобиль на автомойке?",
    answer: "Да, автомобиль с защитной пленкой можно мыть на любых автомойках, включая бесконтактные. Пленка устойчива к химии, высокому давлению и температуре. Рекомендуем избегать только щеток на роликовых мойках.",
  },
  {
    question: "Защищает ли пленка от сколов и царапин?",
    answer: "Да. Полиуретановая пленка толщиной 150-200 микрон эффективно защищает от сколов, царапин, абразивного воздействия песка и гравия. Мелкие царапины на пленке самовосстанавливаются от тепла (солнце, горячая вода).",
  },
  {
    question: "Видна ли пленка на автомобиле?",
    answer: "При качественной установке пленка практически незаметна. Мы используем компьютерные лекала для точной подгонки и минимизации швов. На расстоянии 1-2 метров пленку невозможно обнаружить.",
  },
  {
    question: "Как быстро можно записаться на оклейку?",
    answer: "Обычно мы записываем на оклейку в течение 3-5 дней. Для срочных случаев возможна запись в течение 1-2 дней. Свяжитесь с нами по телефону или WhatsApp для уточнения актуальной записи.",
  },
  {
    question: "Какие гарантии вы даете?",
    answer: "Мы даем 1 год гарантии на работы (качество установки, отсутствие отслоений) и 5 лет гарантии производителя на саму пленку (отсутствие пожелтения, помутнения, потери свойств).",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-black">
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
            <span className="text-sm text-red-500 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ответы на основные вопросы о защитной пленке
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/5 rounded-xl px-6 bg-[#141414] hover:border-red-600/20 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Не нашли ответ на свой вопрос?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79160368901" className="text-red-500 hover:text-red-400 transition-colors">
              Позвонить: +7 (916) 036-89-01
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="https://wa.me/79160368901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
