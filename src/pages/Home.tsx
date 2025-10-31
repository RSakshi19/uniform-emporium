import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Boys Uniform", image: "👔", color: "bg-blue-100", category: "boys" },
    { name: "Girls Uniform", image: "👗", color: "bg-pink-100", category: "girls" },
    { name: "Sportswear", image: "⚽", color: "bg-green-100", category: "sportswear" },
    { name: "Accessories", image: "🎒", color: "bg-yellow-100", category: "accessories" },
  ];

  const featuredProducts = [
    { id: 1, name: "Boys Blazer", price: 2499, image: "🧥", rating: 4.5 },
    { id: 2, name: "Girls Skirt", price: 1299, image: "👗", rating: 4.8 },
    { id: 3, name: "Sports T-Shirt", price: 799, image: "👕", rating: 4.6 },
    { id: 4, name: "School Backpack", price: 1499, image: "🎒", rating: 4.7 },
  ];

  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
    { icon: Shield, title: "Quality Guarantee", description: "100% satisfaction guaranteed" },
    { icon: ShoppingBag, title: "Easy Returns", description: "30-day return policy" },
    { icon: Star, title: "Top Rated", description: "5-star customer reviews" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Quality School Uniforms for Every Student
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Affordable prices, premium quality, and fast delivery. Everything your school needs in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate("/products")}
                  className="text-lg"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <feature.icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 animate-scale-in"
                  onClick={() => navigate(`/products?category=${category.category}`)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-8 h-48">
                    <div className={`text-6xl mb-4 ${category.color} rounded-full p-4`}>
                      {category.image}
                    </div>
                    <h3 className="font-semibold text-lg text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Prize</h2>
              <Button variant="outline" onClick={() => navigate("/products")}>
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="text-8xl mb-4 text-center bg-muted rounded-lg py-8">
                      {product.image}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        {product.rating}
                      </div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our complete collection and find the perfect uniform for your school.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/products")}
              className="text-lg"
            >
              Shop All Products
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
