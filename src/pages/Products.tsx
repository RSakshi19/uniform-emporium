import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    { id: 1, name: "Boys Blazer", price: 2499, image: "🧥", rating: 4.5, category: "boys" },
    { id: 2, name: "Girls Skirt", price: 1299, image: "👗", rating: 4.8, category: "girls" },
    { id: 3, name: "Sports T-Shirt", price: 799, image: "👕", rating: 4.6, category: "sportswear" },
    { id: 4, name: "School Backpack", price: 1499, image: "🎒", rating: 4.7, category: "accessories" },
    { id: 5, name: "Boys Trousers", price: 1199, image: "👖", rating: 4.4, category: "boys" },
    { id: 6, name: "Girls Top", price: 899, image: "👚", rating: 4.6, category: "girls" },
    { id: 7, name: "Sports Shorts", price: 599, image: "🩳", rating: 4.5, category: "sportswear" },
    { id: 8, name: "School Tie", price: 399, image: "👔", rating: 4.3, category: "accessories" },
  ];

  const filteredProducts = products
    .filter(p => selectedCategory === "all" || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">All Products</h1>

        {/* Filters */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="boys">Boys Uniform</SelectItem>
                <SelectItem value="girls">Girls Uniform</SelectItem>
                <SelectItem value="sportswear">Sportswear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Prize</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer hover:shadow-lg transition-shadow animate-fade-in"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardContent className="p-6">
                <div className="text-8xl mb-4 text-center bg-muted rounded-lg py-8">
                  {product.image}
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    {product.rating}
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found. Try adjusting your filters.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
