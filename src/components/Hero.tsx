import { Button } from "@/components/ui/button";
import { Star, Zap, Clock, Shield } from "lucide-react";
import heroRunner from "@/assets/hero-runner.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Seu <span className="text-primary-glow">Kit de Corrida</span>,
                <br />
                Entregue com{" "}
                <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                  Agilidade
                </span>{" "}
                e{" "}
                <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                  Praticidade!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                Chegou a solução que poupa seu tempo e te deixa focado no que importa: 
                <span className="font-semibold text-primary-glow"> correr!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 animate-pulse-glow"
              >
                <Zap className="h-6 w-6" />
                Solicite sua Entrega!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              >
                Como Funciona
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">Serviço de Qualidade!</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-white/70">Entrega Rápida</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/70">Seguro</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-sm text-white/70">Avaliação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroRunner} 
                alt="Corredor em ação" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;