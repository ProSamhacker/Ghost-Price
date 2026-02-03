import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DemoButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="px-4"
    >
      <Link to="/analyze">
        <Button
          size="lg"
          className="relative group bg-success hover:bg-success/90 text-success-foreground font-bold text-lg px-8 py-6 rounded-xl animate-glow"
        >
          <span className="flex items-center gap-2">
            See Live Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </Link>
    </motion.div>
  );
};

export default DemoButton;
