import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import boysUniform from "@/assets/boys-uniform.jpg";
import girlsUniform from "@/assets/girls-uniform.jpg";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Boys Blazer", price: 899, image: boysUniform, quantity: 1, size: "M" },
    { id: 2, name: "Girls Skirt", price: 899, image: girlsUniform, quantity: 2, size: "S" },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-8">Your cart is empty</p>
            <Button size="lg" onClick={() => navigate("/products")} className="rounded-2xl text-lg px-8">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="border-4 border-primary/20 rounded-3xl hover-lift">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-xl">{item.name}</h3>
                            <p className="text-sm text-muted-foreground font-medium">Size: {item.size}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="rounded-xl"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="rounded-xl border-2"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-xl font-bold w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="rounded-xl border-2"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <span className="text-2xl font-bold text-primary">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-4 border-primary/20 rounded-3xl sticky top-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground text-lg">
                      <span>Subtotal</span>
                      <span className="font-bold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-lg">
                      <span>Shipping</span>
                      <span className="font-bold">₹{shipping}</span>
                    </div>
                    <div className="border-t-2 pt-4 flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">₹{total}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full rounded-2xl shadow-lg hover-lift font-bold text-lg h-14"
                    size="lg"
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full mt-4 rounded-2xl border-3 font-bold text-lg h-14"
                    onClick={() => navigate("/products")}
                  >
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
