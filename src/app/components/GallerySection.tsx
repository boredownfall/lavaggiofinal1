import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgBmwX5 from "../../imports/image.png";
import imgBmwM3 from "../../imports/image-1.png";
import imgVoyah from "../../imports/image-2.png";
import imgSubaru from "../../imports/image-3.png";
import imgLiAuto from "../../imports/image-4.png";
import imgHonda from "../../imports/image-5.png";

const projects = [
  {
    image: imgBmwX5,
    title: "BMW X5",
    service: "Полная оклейка PPF",
    description: "Глянцевая защита всего кузова с гарантией 5 лет на плёнку",
  },
  {
    image: imgBmwM3,
    title: "BMW M3",
    service: "Оклейка зон риска",
    description: "Защита капота, передних крыльев, порогов и зеркал",
  },
  {
    image: imgVoyah,
    title: "Voyah Passion",
    service: "Полная оклейка PPF",
    description: "Комплексная защита кузова премиального китайского кроссовера",
  },
  {
    image: imgSubaru,
    title: "Subaru Outback",
    service: "Полная оклейка + детейлинг",
    description: "Комплексная подготовка и защита — в нашей студии",
  },
  {
    image: imgLiAuto,
    title: "Li Auto L7",
    service: "Оклейка зон риска",
    description: "Защита капота, фар и передних элементов от сколов",
  },
  {
    image: imgHonda,
    title: "Honda Accord",
    service: "Полная оклейка матовой плёнкой",
    description: "Смена текстуры глянец → матовый сатин с полной защитой",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden bg-black">
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
            <span className="text-sm text-red-500 font-medium">Наши работы</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Портфолио премиальной защиты
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Опыт работы с самыми требовательными автомобилями
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Red Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      {project.service}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/30 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Более 500 защищенных автомобилей премиум-класса</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>BMW</span>
            <span>Mercedes</span>
            <span>Porsche</span>
            <span>Li Auto</span>
            <span>Zeekr</span>
            <span>Voyah</span>
            <span>Audi</span>
            <span>Lexus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
