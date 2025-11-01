import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import boysUniform from "@/assets/boys-uniform.jpg";
import girlsUniform from "@/assets/girls-uniform.jpg";
import boysSports from "@/assets/boys-sports.jpg";
import girlsSports from "@/assets/girls-sports.jpg";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    { id: 1, name: "Boys School Shirt", price: 899, image: boysUniform, rating: 4.5, category: "boys" },
    { id: 2, name: "Girls School Skirt", price: 899, image: girlsUniform, rating: 4.8, category: "girls" },
    { id: 3, name: "Girls Top", price: 899, image: girlsUniform, rating: 4.6, category: "girls" },
    { id: 4, name: "Boys Sports Uniform", price: 899, image: boysSports, rating: 4.7, category: "sportswear" },
    { id: 5, name: "Girls Sports Kit", price: 899, image: girlsSports, rating: 4.9, category: "girls-sports" },
    { id: 6, name: "Boys Trousers", price: 899, image: boysUniform, rating: 4.4, category: "boys" },
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
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg">Browse our collection of quality school uniforms</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-gradient-to-br from-card to-primary/5 p-8 rounded-3xl shadow-2xl border-4 border-primary/20 hover-lift">
            <div className="flex flex-wrap gap-4 flex-1">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[220px] rounded-2xl border-3 border-primary/30 bg-background text-lg font-bold h-14">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-3">
                  <SelectItem value="all" className="text-lg">All Categories</SelectItem>
                  <SelectItem value="boys" className="text-lg">Boys Uniform</SelectItem>
                  <SelectItem value="girls" className="text-lg">Girls Uniform</SelectItem>
                  <SelectItem value="sportswear" className="text-lg">Boys Sports</SelectItem>
                  <SelectItem value="girls-sports" className="text-lg">Girls Sports</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[220px] rounded-2xl border-3 border-primary/30 bg-background text-lg font-bold h-14">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-3">
                  <SelectItem value="featured" className="text-lg">Featured</SelectItem>
                  <SelectItem value="price-low" className="text-lg">Price: Low to High</SelectItem>
                  <SelectItem value="price-high" className="text-lg">Price: High to Low</SelectItem>
                  <SelectItem value="rating" className="text-lg">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-primary font-bold text-xl bg-primary/10 px-6 py-3 rounded-2xl">
              {filteredProducts.length} products
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl animate-scale-in hover-lift bg-card cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div>
                    <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2 font-bold">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-primary animate-pulse">
                      ₹{product.price}
                    </p>
                  </div>
                  <Button className="w-full rounded-2xl shadow-lg hover-lift font-bold text-lg h-14" size="lg">
                    Add to Cart
                  </Button>
                </div>
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
    </div>
  );
};

export default Products;
