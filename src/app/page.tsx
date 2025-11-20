import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Play, Star, Menu } from "lucide-react";
import ParticlesBackground from "@/components/Particles";
import CompanyCarousel from "@/components/CompanyCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A1A1A]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/appsmartt.svg"
              alt="Appsmartt Logo"
              width={140}
              height={50}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://crm.appsmartt.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00E676] transition-colors">
              Portal clientes
            </a>
            <Button asChild className="bg-[#00E676] text-black hover:bg-[#00E676]/90">
              <a href="https://calendly.com/hola-appsmartt/30min" target="_blank" rel="noopener noreferrer">AGENDAR ASESORÍA</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-[#00E676]" aria-label="Abrir menú de navegación">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#1A1A1A] border-white/10 p-6 [&>button]:bg-white/10 [&>button]:text-white [&>button]:hover:bg-white/20 [&>button]:hover:text-white [&>button]:rounded-md [&>button]:p-2 [&>button]:top-6 [&>button]:right-6 [&>button]:focus:outline-none [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0"
              >
                <div className="flex flex-col space-y-8 mt-12">
                  <a
                    href="https://crm.appsmartt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00E676] transition-colors text-lg font-medium"
                  >
                    Portal clientes
                  </a>
                  <Button asChild className="bg-[#00E676] text-black hover:bg-[#00E676]/90 w-full">
                    <a href="https://calendly.com/hola-appsmartt/30min" target="_blank" rel="noopener noreferrer">
                      AGENDAR ASESORÍA
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-sm uppercase tracking-wider text-white/90 mb-4">
            DESARROLLO DE SOFTWARE PARA STARTUPS Y PYMES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}>
            <span className="block">CREAMOS SOFTWARE</span>
            <span className="block">A TU MEDIDA</span>
            <span className="block text-[#00E676]">MÁS RÁPIDO QUE UN FERRARI</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
            Ya no tendrás que esperar meses para ver resultados. Con nosotros, tu software estará listo para impulsar tu negocio en tiempo récord.
          </p>
          <Button asChild size="lg" className="bg-[#00E676] text-black hover:bg-[#00E676]/90 text-lg px-8 py-6">
            <a href="https://calendly.com/hola-appsmartt/30min" target="_blank" rel="noopener noreferrer">AGENDAR ASESORÍA</a>
          </Button>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">+50 Empresas ya confían en Appsmartt</h2>
          <CompanyCarousel />
        </div>
      </section>

      {/* What is Appsmartt */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">¿QUE ES APPSMARTT?</h2>
          <div className="relative">
            <div className="w-96 h-64 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
              <Button
                size="lg"
                className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-full w-16 h-16"
                aria-label="Reproducir video ¿Qué es Appsmartt?"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/verygood.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-sm uppercase tracking-wider text-white/90 mb-8 px-4">
            ¿TUS PROCESOS SON MÁS LENTOS QUE UNA TORTUGA?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 px-4">
            <span className="block text-[#00E676]">¡PON TU MARCA EN LINEA</span>
            <span className="block text-[#00E676]">CON SOFTWARE QUE SE ADAPTE A TI!</span>
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-16 leading-relaxed px-4">
            En el mundo digital de hoy, es crucial que tu marca tenga una presencia en línea poderosa y única. Con nuestro software personalizado, transformamos tus ideas en soluciones tecnológicas que reflejan la esencia de tu negocio. No importa el tamaño de tu empresa o la complejidad de tus necesidades, estamos aquí para desarrollar una plataforma que no solo cumpla con tus expectativas, sino que las supere.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-white/90 mb-6">EN 3 SIMPLES PASOS</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00E676] mb-12">
              INTEGRA SOFTWARE DENTRO DE TU NEGOCIO
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white/5 border-white/20 hover:bg-white/10 transition-all duration-300 group relative">
                <div className="absolute -top-4 -left-4 bg-[#00E676] rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-2xl">1</span>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-lg p-4 group-hover:bg-white/90 transition-colors duration-300">
                    <Image
                      src="/schedule.svg"
                      alt="Agenda una consulta"
                      width={128}
                      height={128}
                      className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Agenda una consulta gratuita</h4>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/20 hover:bg-white/10 transition-all duration-300 group relative">
                <div className="absolute -top-4 -left-4 bg-[#00E676] rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-2xl">2</span>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-lg p-4 group-hover:bg-white/90 transition-colors duration-300">
                    <Image
                      src="/ideas.svg"
                      alt="Dejanos tus requisitos"
                      width={128}
                      height={128}
                      className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Dejanos tus requisitos</h4>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/20 hover:bg-white/10 transition-all duration-300 group relative">
                <div className="absolute -top-4 -left-4 bg-[#00E676] rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-2xl">3</span>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-lg p-4 group-hover:bg-white/90 transition-colors duration-300">
                    <Image
                      src="/happy.svg"
                      alt="Obten tu software"
                      width={128}
                      height={128}
                      className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Obten tu software en tiempo Record</h4>
                </CardContent>
              </Card>
            </div>
          </div>

          <Button asChild size="lg" className="bg-[#00E676] text-black hover:bg-[#00E676]/90 text-lg px-8 py-6">
            <a href="https://calendly.com/hola-appsmartt/30min" target="_blank" rel="noopener noreferrer">AGENDAR ASESORÍA</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿QUÉ DICEN DE APPSMARTT?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Bauti Moran", company: "Bagasy Studio", rating: 5 },
              { name: "Daniel", company: "CDF Motos", rating: 5 },
              { name: "Pablo Vega", company: "Promerma", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/20">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#00E676] text-[#00E676]" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    &ldquo;Excelente servicio y resultados increíbles. El equipo de Appsmartt superó todas nuestras expectativas.&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-[#00E676]">{testimonial.name}</p>
                    <p className="text-white/80">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">NUESTROS PROYECTOS</h2>
          <p className="text-center text-white/90 mb-12 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a startups y pymes a alcanzar el éxito con soluciones innovadoras y personalizadas. Desde plataformas web hasta aplicaciones móviles, nuestros proyectos son el reflejo de nuestra pasión por el desarrollo de software a medida.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "NEXCAY", "MangArt", "ProfeAI", "ESMERALDAS MUZO",
              "Saber Online", "Sergy Car", "COPPER APP", "cmcleaning",
              "goldlup", "bitparner", "Frush", "cdfmotos"
            ].map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00E676] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">{project.charAt(0)}</span>
                  </div>
                  <h4 className="font-bold text-white">{project}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "¿Cuál es su experiencia en el desarrollo de software?",
                answer: "Nuestra empresa de software cuenta con una trayectoria de más de 3 Años en el desarrollo de soluciones tecnológicas. Hemos completado numerosos proyectos en diversas industrias, lo que nos ha permitido acumular un amplio conocimiento y experiencia en la creación de software de alta calidad que cumple con los estándares más exigentes."
              },
              {
                question: "¿Cómo garantizan la seguridad de los datos y la protección de la propiedad intelectual?",
                answer: "La seguridad de los datos y la protección de la propiedad intelectual son fundamentales para nosotros. Utilizamos protocolos de encriptación avanzada y seguimos prácticas de seguridad rigurosas para proteger los datos confidenciales de nuestros clientes. Además, firmamos acuerdos de confidencialidad sólidos para garantizar la integridad de la propiedad intelectual de nuestros clientes."
              },
              {
                question: "¿Cuál es su enfoque en cuanto al soporte técnico y mantenimiento post-implementación?",
                answer: "Nuestro compromiso no se limita a la entrega del producto. Ofrecemos un servicio completo de soporte técnico y mantenimiento post-implementación. Esto incluye asistencia las 24 horas del día, los 7 días de la semana, para abordar cualquier problema de manera inmediata y mantenimiento regular para garantizar un rendimiento óptimo a lo largo del tiempo."
              },
              {
                question: "¿Qué metodología de desarrollo de software siguen en sus proyectos?",
                answer: "Seguimos una metodología ágil en nuestros proyectos de desarrollo de software. Esto incluye reuniones para conocernos y dialogar sobre el proyecto, cotización, firma de contratos, desarrollo iterativo, pruebas, reuniones semanales o mensuales, y entrega final del software."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                <AccordionTrigger className="text-left hover:text-[#00E676]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="block">Entonces es hora de comenzar a</span>
            <span className="block text-[#00E676]">crear tu software con Appsmartt</span>
          </h2>
          <Button asChild size="lg" className="bg-[#00E676] text-black hover:bg-[#00E676]/90 text-lg px-8 py-6">
            <a href="https://calendly.com/hola-appsmartt/30min" target="_blank" rel="noopener noreferrer">AGENDAR ASESORÍA</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/80">© 2025 Appsmartt, LLC</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://appsmartt.com/terminos-y-condiciones/" className="text-white/80 hover:text-[#00E676] transition-colors">
              Términos y Condiciones
            </a>
            <a href="https://appsmartt.com/politica-de-privacidad/" className="text-white/80 hover:text-[#00E676] transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-none">
        <Button asChild size="lg" className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg">
          <a
            href="https://wa.me/573212834621"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </Button>
      </div>
    </div>
  );
}
