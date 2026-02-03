import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyBottomCTAProps {
  onBuyClick: () => void;
}

const StickyBottomCTA = ({ onBuyClick }: StickyBottomCTAProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 glass md:hidden"
    >
      <Button
        onClick={onBuyClick}
        size="lg"
        className="w-full bg-success hover:bg-success/90 text-success-foreground font-bold text-lg py-6 rounded-xl"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Buy on Amazon
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
};

export default StickyBottomCTA;
