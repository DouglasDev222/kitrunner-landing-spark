import { Clock, Shield, Zap, Heart, Truck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kitPackage from "@/assets/kit-package.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Não perca tempo montando seu kit. Nós cuidamos de tudo para você!"
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Receba seu kit em até 24h, sempre no horário combinado."
    },
    {
      icon: Shield,
      title: "Produtos Verificados",
      description: "Todos os itens são cuidadosamente selecionados e verificados."
    },
    {
      icon: Heart,
      title: "Personalização",
      description: "Kits montados de acordo com suas necessidades específicas."
    },
    {
      icon: Truck,
      title: "Logística Inteligente",
      description: "Sistema de entrega otimizado para máxima eficiência."
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Satisfação garantida ou seu dinheiro de volta."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher o{" "}
            <span className="bg-energy-gradient bg-clip-text text-transparent">
              KitRunner
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os benefícios que fazem do KitRunner a melhor escolha para corredores que valorizam tempo e qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <benefit.icon className="h-10 w-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={kitPackage} 
                alt="Kit de corrida personalizado" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-energy-gradient rounded-2xl blur-2xl opacity-20 animate-pulse" />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold">Mais de 1000 corredores satisfeitos!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;