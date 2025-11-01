import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Boys Uniform", path: "/products?category=boys" },
    { name: "Girls Uniform", path: "/products?category=girls" },
    { name: "Boys Sports Uniform", path: "/products?category=sportswear" },
    { name: "Girls Sports Uniform", path: "/products?category=girls-sports" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
              AS
            </div>
            <span className="hidden sm:inline-block text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aaryan's School Wear
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-bold">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {categories.map((category) => (
                        <li key={category.path}>
                          <Link
                            to={category.path}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover-lift"
                          >
                            <div className="text-sm font-bold leading-none">
                              {category.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/login"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2 hover:scale-110 transform"
            >
              <User className="h-4 w-4" />
              Account
            </Link>
            <Button
              variant="default"
              size="sm"
              className="relative shadow-lg hover-lift rounded-xl"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-md">
                0
              </span>
            </Button>
          </nav>

          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm font-bold text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-bold text-muted-foreground px-4 py-2">
                  Categories
                </div>
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-6 rounded-lg hover:bg-muted block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/login"
                className="text-sm font-bold text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
              <Button
                variant="default"
                size="sm"
                className="justify-start rounded-xl shadow-lg"
                onClick={() => {
                  navigate("/cart");
                  setMobileMenuOpen(false);
                }}
              >
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
