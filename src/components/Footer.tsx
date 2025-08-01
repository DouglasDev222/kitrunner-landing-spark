import { Package, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-b from-background to-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-energy-gradient bg-clip-text text-transparent">
                KitRunner
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolucionando a forma como corredores recebem seus kits. 
              Agilidade, praticidade e qualidade em cada entrega.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                contato@kitrunner.com.br
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 KitRunner. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;