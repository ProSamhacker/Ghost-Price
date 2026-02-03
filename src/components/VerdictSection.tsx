import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";

interface VerdictSectionProps {
  breakEvenMonths: number;
  fiveYearSavings: number;
}

const VerdictSection = ({ breakEvenMonths, fiveYearSavings }: VerdictSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="glass rounded-2xl p-6 mt-8 text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 mb-4">
        <TrendingDown className="w-6 h-6 text-success" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4">
        The Verdict
      </h3>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        You break even in{" "}
        <span className="font-bold text-foreground">{breakEvenMonths} months</span>. 
        Over 5 years, the Winix saves you{" "}
        <span className="font-bold text-success text-xl">${fiveYearSavings}</span>.
      </p>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          💡 The cheap option costs <span className="text-warning font-semibold">53% more</span> over its lifetime
        </p>
      </div>
    </motion.div>
  );
};

export default VerdictSection;
