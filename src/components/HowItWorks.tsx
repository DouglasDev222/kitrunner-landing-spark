import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Zap, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      title: "1. Faça seu Pedido",
      description: "Selecione os itens do seu kit de corrida através do nosso sistema simples e intuitivo."
    },
    {
      icon: MapPin,
      title: "2. Confirme o Local",
      description: "Informe o endereço de entrega e horário de preferência para receber seu kit."
    },
    {
      icon: Zap,
      title: "3. Preparamos Tudo",
      description: "Nossa equipe monta seu kit com cuidado e carinho, verificando cada item."
    },
    {
      icon: CheckCircle,
      title: "4. Receba e Corra!",
      description: "Receba seu kit no horário combinado e foque apenas no que importa: sua corrida!"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Como{" "}
            <span className="bg-energy-gradient bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e eficiente que economiza seu tempo e garante que você tenha tudo que precisa para sua corrida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-energy-gradient rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-card/50 to-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Faça seu primeiro pedido agora e descubra como é fácil ter seu kit de corrida entregue na sua porta.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              <Zap className="h-5 w-5" />
              Solicitar Retirada Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;