import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import ghostLogo from "@/assets/ghostprice_logo.jpg";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showAnalysis?: boolean;
}

const Header = ({ showAnalysis = false }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={ghostLogo} 
            alt="GhostPrice" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-foreground">
            GhostPrice
            {showAnalysis && (
              <span className="text-muted-foreground font-normal ml-2">Analysis</span>
            )}
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link 
            to="/dashboard" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Dashboard
          </Link>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Download className="w-4 h-4 mr-1.5" />
            Get Extension
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
