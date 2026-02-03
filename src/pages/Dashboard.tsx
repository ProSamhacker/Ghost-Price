import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy, Skull } from "lucide-react";
import Header from "@/components/Header";
import DashboardProductCard from "@/components/DashboardProductCard";
import { dashboardData, DashboardProduct } from "@/lib/mockData";

type Category = "All" | "Tech" | "Home" | "Office" | "Audio";

const categories: Category[] = ["All", "Tech", "Home", "Office", "Audio"];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = dashboardData.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const immortals = filteredProducts.filter((p) => p.ghostScore >= 80);
  const graveyard = filteredProducts.filter((p) => p.ghostScore < 50);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Hero Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-success opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
            <div className="relative glass rounded-2xl p-1">
              <div className="flex items-center bg-background/50 rounded-xl px-4 py-4">
                <Search className="w-6 h-6 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Search the Ghost Database..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-lg outline-none"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* The Immortals Section */}
        {immortals.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-7 h-7 text-success" />
              <h2 className="text-2xl font-bold text-foreground">The Immortals</h2>
              <span className="text-muted-foreground text-sm">(Score 80+)</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {immortals.map((product, index) => (
                <DashboardProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* The Graveyard Section */}
        {graveyard.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Skull className="w-7 h-7 text-warning" />
              <h2 className="text-2xl font-bold text-foreground">The Graveyard</h2>
              <span className="text-muted-foreground text-sm">(Score &lt;50)</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {graveyard.map((product, index) => (
                <DashboardProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Empty State */}
        {immortals.length === 0 && graveyard.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
