import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Product, getChartData } from "@/lib/mockData";

interface CostComparisonChartProps {
  trap: Product;
  winner: Product;
}

const CostComparisonChart = ({ trap, winner }: CostComparisonChartProps) => {
  const data = getChartData(trap, winner);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glass rounded-2xl p-6 mt-8"
    >
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">
        The Truth Graph
      </h3>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
            <XAxis 
              dataKey="year" 
              tick={{ fill: "hsl(215 20% 65%)" }}
              axisLine={{ stroke: "hsl(217 33% 17%)" }}
            />
            <YAxis 
              tick={{ fill: "hsl(215 20% 65%)" }}
              axisLine={{ stroke: "hsl(217 33% 17%)" }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222 47% 11%)",
                border: "1px solid hsl(217 33% 17%)",
                borderRadius: "8px",
                color: "hsl(210 40% 98%)",
              }}
              formatter={(value: number) => [`$${value}`, ""]}
            />
            <Legend />
            <Bar 
              dataKey="trap" 
              name={trap.name}
              fill="hsl(0 84% 60%)" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="winner" 
              name={winner.name}
              fill="hsl(142 71% 45%)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CostComparisonChart;
