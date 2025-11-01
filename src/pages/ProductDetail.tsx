import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import boysUniform from "@/assets/boys-uniform.jpg";
import girlsUniform from "@/assets/girls-uniform.jpg";
import boysSports from "@/assets/boys-sports.jpg";
import girlsSports from "@/assets/girls-sports.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const product = {
    id: Number(id),
    name: "Boys School Blazer",
    price: 899,
    image: boysUniform,
    rating: 4.5,
    reviews: 128,
    description: "Premium quality school blazer made from durable fabric. Perfect fit and comfort for daily school wear. Features reinforced stitching and traditional styling.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% Polyester blend fabric",
      "Machine washable",
      "Reinforced stitching",
      "Two-button closure",
      "Traditional fit"
    ]
  };

  const relatedProducts = [
    { id: 5, name: "Boys Trousers", price: 899, image: boysUniform, rating: 4.4 },
    { id: 8, name: "Girls Skirt", price: 899, image: girlsUniform, rating: 4.3 },
    { id: 3, name: "Sports T-Shirt", price: 899, image: boysSports, rating: 4.6 },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden mb-4 border-4 border-primary/20">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="text-5xl font-bold text-primary mb-6 animate-pulse">₹{product.price}</div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 text-xl rounded-2xl shadow-lg hover-lift font-bold h-16" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-6 w-6" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-3 h-16 w-16">
                <Heart className="h-6 w-6" />
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-primary/20 hover:border-primary rounded-3xl overflow-hidden hover-lift"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                    <h3 className="font-semibold text-xl mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{relatedProduct.price}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        {relatedProduct.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
