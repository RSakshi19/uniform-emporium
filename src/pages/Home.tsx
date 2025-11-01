import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import boysUniform from "@/assets/boys-uniform.jpg";
import girlsUniform from "@/assets/girls-uniform.jpg";
import boysSports from "@/assets/boys-sports.jpg";
import girlsSports from "@/assets/girls-sports.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Boys Uniform", image: boysUniform, category: "boys" },
    { name: "Girls Uniform", image: girlsUniform, category: "girls" },
    { name: "Boys Sports", image: boysSports, category: "sportswear" },
    { name: "Girls Sports", image: girlsSports, category: "girls-sports" },
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
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Find the perfect uniform for your child</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in border-4 border-primary/20 hover:border-primary rounded-3xl overflow-hidden hover-lift group"
                  onClick={() => navigate(`/products?category=${category.category}`)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5">
                      <h3 className="text-2xl font-bold text-center group-hover:text-primary transition-colors animate-bounce-gentle">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prize Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prize
              </h2>
              <p className="text-muted-foreground text-lg">Fixed pricing for all uniforms</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-4 border-primary/20 rounded-3xl shadow-2xl hover-lift bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-12">
                  <div className="text-center space-y-6">
                    <div className="inline-block p-4 bg-primary/10 rounded-2xl animate-bounce-gentle">
                      <ShoppingBag className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-primary">Fixed Price</h3>
                    <p className="text-2xl text-muted-foreground">All school uniforms and sportswear</p>
                    <div className="text-6xl font-bold text-primary animate-pulse">
                      ₹899
                    </div>
                    <p className="text-lg text-muted-foreground">Same great quality, same great price!</p>
                    <Button 
                      size="lg" 
                      className="text-xl px-12 py-6 rounded-2xl shadow-lg hover-lift font-bold mt-4"
                      onClick={() => navigate("/products")}
                    >
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
