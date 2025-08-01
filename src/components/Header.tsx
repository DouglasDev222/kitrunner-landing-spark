import { Button } from "@/components/ui/button";
import { Package, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-energy-gradient bg-clip-text text-transparent">
            KitRunner
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </a>
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="cta" className="hidden sm:flex">
            Solicite sua Entrega!
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;