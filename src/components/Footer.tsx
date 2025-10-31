import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground text-primary font-bold text-lg">
                SW
              </div>
              <span className="text-lg font-bold">SchoolWear Pro</span>
            </div>
            <p className="text-sm opacity-90">
              Quality school uniforms and accessories for students. Trusted by schools nationwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="opacity-90 hover:opacity-100 transition-opacity">All Products</Link></li>
              <li><Link to="/products?category=boys" className="opacity-90 hover:opacity-100 transition-opacity">Boys Uniform</Link></li>
              <li><Link to="/products?category=girls" className="opacity-90 hover:opacity-100 transition-opacity">Girls Uniform</Link></li>
              <li><Link to="/products?category=sportswear" className="opacity-90 hover:opacity-100 transition-opacity">Sportswear</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/faq" className="opacity-90 hover:opacity-100 transition-opacity">FAQs</Link></li>
              <li><Link to="/shipping" className="opacity-90 hover:opacity-100 transition-opacity">Shipping Info</Link></li>
              <li><Link to="/returns" className="opacity-90 hover:opacity-100 transition-opacity">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>support@schoolwearpro.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, NY 10001</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 SchoolWear Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
