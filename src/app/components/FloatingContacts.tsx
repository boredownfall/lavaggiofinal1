import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Mobile sticky bottom bar (visible always on small screens) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="grid grid-cols-3 border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <a
            href="tel:+79160368901"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-red-600/20 transition-colors active:bg-red-600/30"
          >
            <Phone className="w-5 h-5 text-red-500" />
            <span className="text-[10px] text-gray-300 leading-none">Позвонить</span>
          </a>
          <a
            href="https://wa.me/79160368901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white bg-green-700/30 hover:bg-green-700/50 border-x border-white/10 transition-colors active:bg-green-700/60"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="text-[10px] text-gray-300 leading-none">WhatsApp</span>
          </a>
          <a
            href="https://t.me/vtcarlab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-blue-600/20 transition-colors active:bg-blue-600/30"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-[10px] text-gray-300 leading-none">Telegram</span>
          </a>
        </div>
      </div>

      {/* ── Desktop floating button (hidden on mobile) ── */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-2xl shadow-red-600/40 flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isOpen ? (
            <span className="text-white text-xl font-bold leading-none">✕</span>
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </button>

        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-red-600 -z-10"
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="hidden lg:flex fixed bottom-28 right-6 z-40 flex-col gap-3"
          >
            <motion.a
              href="https://wa.me/79160368901"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 bg-[#141414] border border-white/10 rounded-2xl p-4 hover:border-green-600/40 transition-all group shadow-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-green-600/10 border border-green-600/20 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-left pr-2">
                <div className="text-sm text-gray-400">WhatsApp</div>
                <div className="font-semibold text-white">Написать</div>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/vtcarlab"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex items-center gap-3 bg-[#141414] border border-white/10 rounded-2xl p-4 hover:border-blue-600/40 transition-all group shadow-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left pr-2">
                <div className="text-sm text-gray-400">Telegram</div>
                <div className="font-semibold text-white">@vtcarlab</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+79160368901"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex items-center gap-3 bg-[#141414] border border-white/10 rounded-2xl p-4 hover:border-red-600/40 transition-all group shadow-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <Phone className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left pr-2">
                <div className="text-sm text-gray-400">Позвонить</div>
                <div className="font-semibold text-white">+7 916 036-89-01</div>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
