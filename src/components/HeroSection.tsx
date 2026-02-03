import { motion } from "framer-motion";
import ghostLogo from "@/assets/ghostprice_logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-primary flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={ghostLogo}
          alt="GhostPrice Ghost"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl glow-primary"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-6"
      >
        Stop Buying{" "}
        <span className="text-warning">Money Pits.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-white/80 text-center max-w-2xl mb-12"
      >
        We expose the hidden costs of cheap products and show you the 
        <span className="text-success font-semibold"> "Buy It For Life" </span>
        alternatives that actually save money.
      </motion.p>
    </section>
  );
};

export default HeroSection;
