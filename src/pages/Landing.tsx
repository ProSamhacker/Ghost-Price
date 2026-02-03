import HeroSection from "@/components/HeroSection";
import SearchInput from "@/components/SearchInput";
import DemoButton from "@/components/DemoButton";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="gradient-primary pb-20 -mt-32">
        <SearchInput />
        <div className="flex justify-center">
          <DemoButton />
        </div>
      </div>
    </div>
  );
};

export default Landing;
