
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="text-center xl:text-left space-y-6">
      {/* Role (Animated with Gradient Text) */}
      <motion.span
        className="text-3xl font-medium bg-gradient-to-r from-pink-700 via-green-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Software Developer
      </motion.span>

      {/* Name Title */}
      <motion.h1
        className="text-4xl xl:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-500 via-green-500 to-purple-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hello, I'm <br />
        <span className="underline decoration-wavy decoration-accent underline-offset-4">
          Vipul Kumar Patel
        </span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="max-w-[500px] mx-auto xl:mx-0 text-white/80 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I excel at crafting elegant digital experiences and I am proficient in various
        programming languages and technologies.
      </motion.p>
    </div>
  );
}
