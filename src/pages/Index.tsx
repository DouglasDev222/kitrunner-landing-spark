import { Button } from "@/components/ui/button";
import { Package, Zap } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Header simples */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">KitRunner</span>
          </div>
          <Button>Solicitar Retirada</Button>
        </div>
      </header>

      {/* Hero section limpa */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Seu Kit de Corrida,{" "}
              <span className="text-primary">Entregue com Agilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A solução que poupa seu tempo e te deixa focado no que importa: correr!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Zap className="h-5 w-5" />
              Solicitar Retirada
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Como Funciona
            </Button>
          </div>
        </div>

        {/* Seção como funciona */}
        <div className="max-w-4xl mx-auto mt-24 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Como Funciona</h2>
            <p className="text-muted-foreground">Simples e rápido</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground">Faça seu Pedido</h3>
              <p className="text-muted-foreground">Selecione o evento que gostaria da retirada kit através do nosso sistema</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground">Confirmamos</h3>
              <p className="text-muted-foreground">Nossa equipe fará a retirada do seu kit com cuidado e segurança</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground">Receba e Corra</h3>
              <p className="text-muted-foreground">Receba em sua casa e foque na sua corrida</p>
            </div>
          </div>
        </div>

        {/* Benefícios simples */}
        <div className="max-w-4xl mx-auto mt-24 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Por que KitRunner?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Economia de Tempo</h3>
                  <p className="text-muted-foreground">Não perca tempo indo até o local de retirada</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Entrega Rápida</h3>
                  <p className="text-muted-foreground">Receba no conforto de casa. Entrega garantida 1 dia antes do evento</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cuidado e Segurança</h3>
                  <p className="text-muted-foreground">Seu kit é entregue com cuidado e total segurança</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">Faça seu primeiro pedido agora</p>
              <Button size="lg" className="w-full">
                <Zap className="h-5 w-5" />
                Solicitar Retirada Agora
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simples */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">KitRunner</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 KitRunner. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;