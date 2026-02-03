import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Product, calculateTotalCost } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
  type: "trap" | "winner";
  delay?: number;
}

const CountUp = ({ end, duration = 1.5, prefix = "$" }: { end: number; duration?: number; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}</span>;
};

const ProductCard = ({ product, type, delay = 0 }: ProductCardProps) => {
  const isWinner = type === "winner";
  const fiveYearCost = calculateTotalCost(product, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`glass rounded-2xl p-6 flex-1 min-w-[280px] ${
        isWinner ? "glow-success" : "glow-warning"
      }`}
    >
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 ${
        isWinner 
          ? "bg-success/20 text-success" 
          : "bg-warning/20 text-warning"
      }`}>
        {isWinner ? (
          <>
            <CheckCircle className="w-4 h-4" />
            BIFL Choice
          </>
        ) : (
          <>
            <AlertTriangle className="w-4 h-4" />
            High Maintenance
          </>
        )}
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-bold text-foreground mb-2">
        {product.name}
      </h3>

      {/* Upfront Price */}
      <div className="mb-4">
        <p className="text-muted-foreground text-sm">Upfront Cost</p>
        <p className="text-2xl font-bold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Consumable Info */}
      <div className="glass-dark rounded-lg p-3 mb-4">
        <p className="text-muted-foreground text-sm">Recurring Cost</p>
        <p className="text-foreground">
          <span className="font-semibold">${product.consumableCost}</span> filter every{" "}
          <span className="font-semibold">{product.consumableFrequencyMonths}</span> months
        </p>
      </div>

      {/* 5-Year Total */}
      <div className={`rounded-xl p-4 text-center ${
        isWinner ? "bg-success/20" : "bg-warning/20"
      }`}>
        <p className="text-sm text-muted-foreground mb-1">5-Year Total Cost</p>
        <p className={`text-4xl font-extrabold ${
          isWinner ? "text-success" : "text-warning"
        }`}>
          <CountUp end={fiveYearCost} />
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
