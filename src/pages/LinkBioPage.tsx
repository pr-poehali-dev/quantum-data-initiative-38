import { motion } from "framer-motion"
import { ProfileSection } from "@/components/ProfileSection"
import { SocialFooter } from "@/components/SocialFooter"
import { Mail, Send, MessageCircle, BookOpen, HardHat, ShieldCheck, Layers } from "lucide-react"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "60–70%", label: "доля монолитного строительства в крупных городах РФ", color: "#7c3aed" },
  { value: "9–10", label: "баллов сейсмостойкости обеспечивают монолитные конструкции", color: "#db2777" },
  { value: "3", label: "ключевых фактора определяют эффективность конструкций", color: "#2563eb" },
]

const advantages = [
  {
    icon: "Layers",
    title: "Пространственная жёсткость",
    description: "Монолит работает как единая система, обеспечивая высокую несущую способность",
  },
  {
    icon: "ShieldCheck",
    title: "Сейсмостойкость до 9–10 баллов",
    description: "Соответствует требованиям строительства в зонах высокой сейсмической активности",
  },
  {
    icon: "HardHat",
    title: "Свобода планировочных решений",
    description: "Безбалочные перекрытия и нестандартные формы — без ограничений по геометрии",
  },
]

const factors = [
  { number: "01", text: "Выбор материалов" },
  { number: "02", text: "Соблюдение технологии" },
  { number: "03", text: "Корректный расчёт" },
]

const socials = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Mail, href: "#", label: "Email" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
}

const glassCard = {
  background: "rgba(255, 255, 255, 0.45)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  boxShadow: `
    inset 0 1px 1px rgba(255, 255, 255, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.08)
  `,
  border: "1px solid rgba(255, 255, 255, 0.5)",
}

export function LinkBioPage() {
  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      {/* Animated gradient orbs */}
      <motion.div
        className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{ x: [0, 100, 50, 0], y: [0, 50, 100, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed z-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "30%",
          right: "-20%",
        }}
        animate={{ x: [0, -80, -40, 0], y: [0, 80, -40, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed z-0 w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "-5%",
          left: "20%",
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-[440px] w-full flex flex-col gap-6"
      >
        {/* Profile */}
        <motion.div variants={itemVariants} className="pt-2">
          <ProfileSection
            name="Монолитное строительство"
            bio="Теоретические основы и практические подходы к проектированию железобетонных конструкций"
            imageUrl="/images/544291433-18043960274659947-5766591717842883293-n.jpg"
          />
        </motion.div>

        {/* Цель работы */}
        <motion.div
          variants={itemVariants}
          className="rounded-[20px] px-5 py-4 flex items-start gap-3"
          style={glassCard}
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ background: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}
          >
            <Icon name="BookOpen" size={20} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Цель работы</p>
            <p className="text-[14px] text-gray-700 leading-snug">
              Систематизация теоретических основ и практических подходов к проектированию монолитных железобетонных конструкций
            </p>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div variants={itemVariants}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">Ключевые цифры</p>
          <div className="flex flex-col gap-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                className="rounded-[20px] px-5 py-4 flex items-center gap-4"
                style={glassCard}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <span
                  className="text-2xl font-bold shrink-0 min-w-[64px] text-center"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <p className="text-[13px] text-gray-600 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div variants={itemVariants}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">Ключевые преимущества</p>
          <div className="flex flex-col gap-3">
            {advantages.map((adv) => (
              <motion.div
                key={adv.title}
                className="rounded-[20px] px-5 py-4 flex items-start gap-4"
                style={glassCard}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-700 mt-0.5"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,1), 0 2px 4px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <Icon name={adv.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-semibold text-gray-800">{adv.title}</h3>
                  <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3 фактора */}
        <motion.div variants={itemVariants}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">3 фактора эффективности</p>
          <div
            className="rounded-[20px] px-5 py-4 flex flex-col gap-3"
            style={glassCard}
          >
            {factors.map((f) => (
              <div key={f.number} className="flex items-center gap-4">
                <span className="text-[13px] font-bold tabular-nums" style={{ color: "#7c3aed", minWidth: 24 }}>{f.number}</span>
                <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.15)" }} />
                <span className="text-[14px] text-gray-700 font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="pb-4">
          <SocialFooter socials={socials} copyright="2025 Монолитное строительство" />
        </motion.div>
      </motion.div>
    </main>
  )
}
