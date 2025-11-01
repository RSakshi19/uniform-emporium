import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.success("Account created successfully!");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <Card className="w-full max-w-md animate-scale-in border-4 border-primary/20 rounded-3xl shadow-2xl hover-lift">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-3xl">
            <CardTitle className="text-3xl font-bold">{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
            <CardDescription className="text-lg">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Sign up to start shopping for school uniforms"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-xl border-2 h-12"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl border-2 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-bold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl border-2 h-12"
                />
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline font-bold">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full rounded-2xl shadow-lg hover-lift font-bold text-lg h-14" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline font-bold"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;
