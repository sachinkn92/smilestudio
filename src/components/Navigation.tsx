import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Ss</span>
            </div>
            <span className="text-xl font-bold text-foreground">Smile Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`transition-colors hover:text-primary ${isActive(item.path) ? "text-primary font-medium" : "text-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">1234567890</span>
            </a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`px-3 py-2 rounded-md transition-colors ${isActive(item.path) ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted hover:text-primary"}`}>
                  {item.name}
                </Link>)}
              <div className="pt-2 mt-2 border-t border-border">
                <a href="tel:+911234567890" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>1234567890</span>
                </a>
                <Button className="w-full mt-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;