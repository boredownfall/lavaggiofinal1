import { motion, AnimatePresence } from "motion/react";
import { X, Car, Shield, Calculator as CalcIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  const [selectedService, setSelectedService] = useState<"risk-zones" | "full" | null>(null);
  const [carModel, setCarModel] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка данных
    alert("Спасибо! Мы свяжемся с вами в течение 15 минут для расчета точной стоимости.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#141414] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#141414] border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                    <CalcIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Рассчитать стоимость</h2>
                    <p className="text-sm text-gray-400">Получите расчет в течение 15 минут</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <Label className="mb-4 block">Выберите услугу</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedService("risk-zones")}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          selectedService === "risk-zones"
                            ? "border-red-600 bg-red-600/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <Shield className="w-8 h-8 text-red-500 mb-3" />
                        <h3 className="font-semibold mb-2">Оклейка зон риска</h3>
                        <p className="text-sm text-gray-400 mb-3">
                          Капот, фары, передний бампер
                        </p>
                        <div className="text-lg font-bold text-red-500">от 55 000 ₽</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedService("full")}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          selectedService === "full"
                            ? "border-red-600 bg-red-600/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <Car className="w-8 h-8 text-red-500 mb-3" />
                        <h3 className="font-semibold mb-2">Полная оклейка</h3>
                        <p className="text-sm text-gray-400 mb-3">
                          100% защита всего кузова
                        </p>
                        <div className="text-lg font-bold text-red-500">от 230 000 ₽</div>
                      </button>
                    </div>
                  </div>

                  {/* Car Model */}
                  <div>
                    <Label htmlFor="car-model">Модель автомобиля</Label>
                    <Input
                      id="car-model"
                      placeholder="Например: BMW M5, Mercedes GLE, Li Auto L9"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      required
                      className="mt-2 bg-white/5 border-white/10 focus:border-red-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-2 bg-white/5 border-white/10 focus:border-red-600"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 rounded-xl bg-red-600/5 border border-red-600/20">
                    <p className="text-sm text-gray-400">
                      Наш менеджер свяжется с вами в течение 15 минут, рассчитает точную стоимость 
                      для вашего автомобиля и ответит на все вопросы.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={!selectedService || !carModel || !phone}
                  >
                    Получить расчет
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
