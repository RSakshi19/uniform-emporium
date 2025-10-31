import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              AS
            </div>
            <span className="hidden sm:inline-block text-xl font-bold text-foreground">Aaryan's School Wear</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search uniforms..."
                className="pl-10"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/products?search=${e.currentTarget.value}`);
                  }
                }}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
              <User className="h-4 w-4" />
              Account
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="relative"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search uniforms..." className="pl-10" />
            </div>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Products
              </Link>
              <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Account
              </Link>
              <Button variant="outline" size="sm" className="justify-start" onClick={() => navigate("/cart")}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
