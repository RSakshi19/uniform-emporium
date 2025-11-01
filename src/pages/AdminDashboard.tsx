import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Package, Plus, Edit, Trash2, LogOut, Save, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  sizes: string;
  description: string;
  image: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Boys Shirt",
      price: 899,
      category: "boys",
      sizes: "XS,S,M,L,XL",
      description: "Premium quality school shirt",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Girls Top",
      price: 799,
      category: "girls",
      sizes: "XS,S,M,L,XL",
      description: "Comfortable school top",
      image: "/placeholder.svg"
    },
  ]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "boys",
    sizes: "XS,S,M,L,XL",
    description: "",
    image: "/placeholder.svg"
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      toast.error("Please fill in all required fields");
      return;
    }

    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      sizes: newProduct.sizes,
      description: newProduct.description,
      image: newProduct.image,
    };

    setProducts([...products, product]);
    setNewProduct({
      name: "",
      price: "",
      category: "boys",
      sizes: "XS,S,M,L,XL",
      description: "",
      image: "/placeholder.svg"
    });
    toast.success("Product added successfully!");
  };

  const handleUpdateProduct = () => {
    if (!editingProduct) return;

    setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
    setEditingProduct(null);
    toast.success("Product updated successfully!");
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success("Product deleted successfully!");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your store products and inventory</p>
          </div>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="rounded-xl shadow-lg hover-lift"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-12 rounded-xl">
            <TabsTrigger value="products" className="rounded-lg font-bold">
              <Package className="mr-2 h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="add" className="rounded-lg font-bold">
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card className="rounded-2xl shadow-lg border-2 border-primary/10">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-2xl">
                <CardTitle className="text-2xl font-bold">All Products</CardTitle>
                <CardDescription>Manage your product catalog</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-xl border-2 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold">Name</TableHead>
                        <TableHead className="font-bold">Category</TableHead>
                        <TableHead className="font-bold">Price (₹)</TableHead>
                        <TableHead className="font-bold">Sizes</TableHead>
                        <TableHead className="text-right font-bold">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell className="capitalize">{product.category}</TableCell>
                          <TableCell>₹{product.price}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {product.sizes}
                          </TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingProduct(product)}
                              className="rounded-lg hover-lift"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteProduct(product.id)}
                              className="rounded-lg hover-lift"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {editingProduct && (
              <Card className="rounded-2xl shadow-lg border-2 border-accent/50 animate-scale-in">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-t-2xl">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold">Edit Product</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingProduct(null)}
                      className="rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-bold">Product Name</Label>
                      <Input
                        value={editingProduct.name}
                        onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                        className="rounded-xl border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Price (₹)</Label>
                      <Input
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})}
                        className="rounded-xl border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Category</Label>
                      <Select
                        value={editingProduct.category}
                        onValueChange={(value) => setEditingProduct({...editingProduct, category: value})}
                      >
                        <SelectTrigger className="rounded-xl border-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="boys">Boys Uniform</SelectItem>
                          <SelectItem value="girls">Girls Uniform</SelectItem>
                          <SelectItem value="sportswear">Boys Sports</SelectItem>
                          <SelectItem value="girls-sports">Girls Sports</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Sizes (comma-separated)</Label>
                      <Input
                        value={editingProduct.sizes}
                        onChange={(e) => setEditingProduct({...editingProduct, sizes: e.target.value})}
                        placeholder="XS,S,M,L,XL"
                        className="rounded-xl border-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Description</Label>
                    <Textarea
                      value={editingProduct.description}
                      onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                      className="rounded-xl border-2 min-h-[100px]"
                    />
                  </div>
                  <Button
                    onClick={handleUpdateProduct}
                    className="w-full rounded-xl shadow-lg hover-lift font-bold"
                    size="lg"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="add">
            <Card className="rounded-2xl shadow-lg border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-2xl">
                <CardTitle className="text-2xl font-bold">Add New Product</CardTitle>
                <CardDescription>Add a new product to your catalog</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold">Product Name *</Label>
                    <Input
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      placeholder="e.g., Boys Shirt"
                      className="rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Price (₹) *</Label>
                    <Input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      placeholder="e.g., 899"
                      className="rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Category *</Label>
                    <Select
                      value={newProduct.category}
                      onValueChange={(value) => setNewProduct({...newProduct, category: value})}
                    >
                      <SelectTrigger className="rounded-xl border-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="boys">Boys Uniform</SelectItem>
                        <SelectItem value="girls">Girls Uniform</SelectItem>
                        <SelectItem value="sportswear">Boys Sports</SelectItem>
                        <SelectItem value="girls-sports">Girls Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Sizes (comma-separated)</Label>
                    <Input
                      value={newProduct.sizes}
                      onChange={(e) => setNewProduct({...newProduct, sizes: e.target.value})}
                      placeholder="XS,S,M,L,XL"
                      className="rounded-xl border-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">Description</Label>
                  <Textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Enter product description..."
                    className="rounded-xl border-2 min-h-[120px]"
                  />
                </div>
                <Button
                  onClick={handleAddProduct}
                  className="w-full rounded-xl shadow-lg hover-lift font-bold"
                  size="lg"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
