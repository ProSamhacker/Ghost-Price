import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full max-w-2xl mx-auto mb-8 px-4"
    >
      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-success opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
        <div className="relative glass rounded-2xl p-1">
          <div className="flex items-center bg-background/50 rounded-xl px-4 py-4">
            <Search className="w-6 h-6 text-muted-foreground mr-3" />
            <input
              type="text"
              placeholder="Paste Amazon Product URL..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-lg outline-none"
              disabled
            />
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-3">
        Paste any Amazon link to reveal its true cost
      </p>
    </motion.div>
  );
};

export default SearchInput;
