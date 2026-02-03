import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { DashboardProduct } from "@/lib/mockData";

interface DashboardProductCardProps {
  product: DashboardProduct;
  index: number;
}

const DashboardProductCard = ({ product, index }: DashboardProductCardProps) => {
  const navigate = useNavigate();
  const isGood = product.status === "BIFL_APPROVED";
  
  // Calculate stroke values for circular progress
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (product.ghostScore / 100) * circumference;

  const handleClick = () => {
    navigate(`/analyze?asin=${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={handleClick}
      className={`glass rounded-2xl p-4 cursor-pointer transition-all ${
        isGood ? "glow-success" : "glow-warning"
      }`}
    >
      {/* Badge */}
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${
        isGood 
          ? "bg-success/20 text-success" 
          : "bg-warning/20 text-warning"
      }`}>
        {isGood ? (
          <>
            <CheckCircle className="w-3 h-3" />
            BIFL Approved
          </>
        ) : (
          <>
            <AlertTriangle className="w-3 h-3" />
            Money Pit
          </>
        )}
      </div>

      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-secondary/50">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Ghost Score Overlay */}
        <div className="absolute bottom-2 right-2">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="currentColor"
                strokeWidth="6"
                fill="hsl(var(--secondary))"
                className="text-secondary"
              />
              {/* Progress circle */}
              <motion.circle
                cx="40"
                cy="40"
                r={radius}
                stroke={isGood ? "hsl(var(--success))" : "hsl(var(--warning))"}
                strokeWidth="6"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-lg font-bold ${isGood ? "text-success" : "text-warning"}`}>
                {product.ghostScore}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Title */}
      <h3 className="text-foreground font-semibold text-sm leading-tight line-clamp-2 mb-2 min-h-[2.5rem]">
        {product.name}
      </h3>

      {/* Annual Cost */}
      <div className="flex items-baseline gap-1">
        <span className="text-muted-foreground text-xs">Real Cost:</span>
        <span className={`font-bold ${isGood ? "text-success" : "text-warning"}`}>
          {product.annualCost === 0 ? "Free" : `$${product.annualCost}/yr`}
        </span>
      </div>
    </motion.div>
  );
};

export default DashboardProductCard;
