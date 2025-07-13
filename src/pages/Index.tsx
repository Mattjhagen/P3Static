import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bitcoin, 
  Shield, 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3,
  Wallet,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-lending.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-trust">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">BitLend</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#lending" className="text-muted-foreground hover:text-foreground transition-smooth">Lending</a>
            <a href="#borrowing" className="text-muted-foreground hover:text-foreground transition-smooth">Borrowing</a>
            <a href="#reputation" className="text-muted-foreground hover:text-foreground transition-smooth">Reputation</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Connect Wallet</Button>
            <Button variant="bitcoin">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Decentralized Finance
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Bitcoin-Native
                <span className="text-primary block">P2P Lending</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Lend and borrow Bitcoin directly with peers. Built on reputation, secured by blockchain, powered by trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="bitcoin" size="xl" className="flex items-center gap-2">
                Start Lending <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Borrow Bitcoin
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$2.4M+</div>
                <div className="text-sm text-muted-foreground">Total Lent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1,247</div>
                <div className="text-sm text-muted-foreground">Active Lenders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.2%</div>
                <div className="text-sm text-muted-foreground">Repayment Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Bitcoin P2P Lending Platform" 
              className="rounded-2xl shadow-depth w-full animate-float"
            />
            <div className="absolute inset-0 bg-gradient-bitcoin opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose BitLend?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of decentralized lending with our reputation-based system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reputation-Based Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build trust through verifiable transaction history. Your reputation determines your lending rates and borrowing limits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-smooth">
                  <Bitcoin className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Native Bitcoin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pure Bitcoin transactions without wrapping or tokens. Keep the integrity of the original Bitcoin network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-smooth">
                  <TrendingUp className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enjoy market-driven interest rates based on supply and demand, with rates starting from 3.5% APY.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Peer-to-Peer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Direct lending between individuals. No banks, no intermediaries, just pure peer-to-peer finance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-smooth">
                  <BarChart3 className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle>Transparent Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time dashboards showing market trends, your portfolio performance, and reputation metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated loan management with smart contracts ensuring trustless execution and timely repayments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start lending or borrowing in three simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-bitcoin rounded-full flex items-center justify-center mx-auto shadow-bitcoin">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Connect & Verify</h3>
              <p className="text-muted-foreground">
                Connect your Bitcoin wallet and complete identity verification to build your reputation score.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-depth rounded-full flex items-center justify-center mx-auto shadow-depth">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Browse & Match</h3>
              <p className="text-muted-foreground">
                Browse lending opportunities or loan requests. Our algorithm matches you with compatible peers.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto shadow-sm">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Lend & Earn</h3>
              <p className="text-muted-foreground">
                Complete the transaction through smart contracts and start earning or repaying according to terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-depth text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Join the Future of Finance?
            </h2>
            <p className="text-xl opacity-90">
              Start building your reputation and earning with Bitcoin today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="bitcoin" size="xl" className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Start Lending Now
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-lg">4.9/5 from 1,200+ users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bitcoin className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">BitLend</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
              <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
              <a href="#" className="hover:text-foreground transition-smooth">Security</a>
              <a href="#" className="hover:text-foreground transition-smooth">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 BitLend. Decentralized peer-to-peer Bitcoin lending platform.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
