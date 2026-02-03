import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface RedirectOverlayProps {
  isVisible: boolean;
}

const RedirectOverlay = ({ isVisible }: RedirectOverlayProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-success/30 animate-ping" />
              <div className="relative w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-success animate-spin" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Finding best price...
            </h2>
            <p className="text-muted-foreground">
              Checking for deals and discounts
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RedirectOverlay;
