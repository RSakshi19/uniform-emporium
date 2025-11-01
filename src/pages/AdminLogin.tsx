import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Shield, Lock, Mail } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demo
    if (email && password) {
      toast.success("Admin login successful!");
      navigate("/admin/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="mb-8 text-center animate-bounce-gentle">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Admin Portal
        </h1>
        <p className="text-muted-foreground mt-2">Secure access for administrators only</p>
      </div>

      <Card className="w-full max-w-md animate-scale-in shadow-2xl border-2 border-primary/20 hover-lift rounded-2xl">
        <CardHeader className="space-y-1 bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-2xl">
          <CardTitle className="text-3xl text-center font-bold">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border-2 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-bold flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl border-2 focus:border-primary transition-all"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full text-lg font-bold shadow-lg hover-lift rounded-xl h-12" 
              size="lg"
            >
              <Shield className="mr-2 h-5 w-5" />
              Login to Dashboard
            </Button>

            <div className="text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-xl">
              <Lock className="inline h-4 w-4 mr-1" />
              Secure admin access protected
            </div>
          </form>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        className="mt-6 hover-lift rounded-xl"
        onClick={() => navigate("/")}
      >
        ← Back to Store
      </Button>
    </div>
  );
};

export default AdminLogin;
