import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Loader2, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CostComparisonChart from "@/components/CostComparisonChart";
import VerdictSection from "@/components/VerdictSection";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import RedirectOverlay from "@/components/RedirectOverlay";
import { Button } from "@/components/ui/button";
import { mockComparisonData } from "@/lib/mockData";
import { fetchProductComparison, buildAffiliateLink } from "@/lib/api";
import { ComparisonData } from "@/lib/types";

const Analyze = () => {
  const [searchParams] = useSearchParams();
  const asin = searchParams.get('asin') || 'B07VVK39F7'; // Default ASIN for demo
  const [showRedirect, setShowRedirect] = useState(false);

  // Fetch real data from backend with fallback to mock data
  const { data, isLoading, error } = useQuery<ComparisonData>({
    queryKey: ['comparison', asin],
    queryFn: () => fetchProductComparison(asin),
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Use real data if available, otherwise fallback to mock data
  const comparisonData = data || mockComparisonData;
  const { trap, winner, breakEvenMonths, fiveYearSavings } = comparisonData;

  const handleBuyClick = () => {
    setShowRedirect(true);
    setTimeout(() => {
      setShowRedirect(false);
      // Use real affiliate link from API data
      const affiliateLink = buildAffiliateLink(data?.winner_asin || 'B08PVDSW21');
      window.open(affiliateLink, "_blank");
    }, 1500);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-lg text-muted-foreground">Loading comparison data...</p>
        </div>
      </div>
    );
  }

  // Error state (with fallback to mock data)
  if (error) {
    console.warn('API Error, using mock data:', error);
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Header showAnalysis />

      <main className="container mx-auto px-4 pt-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            TCO Showdown
          </h1>
          <p className="text-muted-foreground">
            Total Cost of Ownership comparison over 5 years
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <ProductCard product={trap} type="trap" delay={0.2} />
          <ProductCard product={winner} type="winner" delay={0.4} />
        </div>

        {/* Desktop Buy Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex justify-center mb-8"
        >
          <Button
            onClick={handleBuyClick}
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground font-bold text-lg px-12 py-6 rounded-xl animate-glow"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Buy Winner on Amazon
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Truth Graph */}
        <CostComparisonChart trap={trap} winner={winner} />

        {/* Verdict */}
        <VerdictSection
          breakEvenMonths={breakEvenMonths}
          fiveYearSavings={fiveYearSavings}
        />
      </main>

      {/* Mobile Sticky CTA */}
      <StickyBottomCTA onBuyClick={handleBuyClick} />

      {/* Redirect Overlay */}
      <RedirectOverlay isVisible={showRedirect} />
    </div>
  );
};

export default Analyze;
