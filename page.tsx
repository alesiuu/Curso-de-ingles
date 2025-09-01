import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Users, BookOpen, MessageCircle, Award, Star, Globe } from "lucide-react"

export default function EnglishCoursePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Curso de Inglés Profesional</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Domina el Inglés en Solo <span className="text-primary">3 Meses</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Programa intensivo y estructurado diseñado para hispanohablantes. Aprende con metodología comunicativa y
            práctica constante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Comenzar Mi Viaje
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Ver Programa Completo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">3 Meses</p>
                <p className="text-sm text-muted-foreground">Duración total</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">2-3 Clases</p>
                <p className="text-sm text-muted-foreground">Por semana</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">Certificado</p>
                <p className="text-sm text-muted-foreground">Al completar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Nuestro Programa es Diferente?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodología probada que combina teoría y práctica para resultados reales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Enfoque Comunicativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Priorizamos la comunicación oral desde el primer día</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Aprendizaje Progresivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cada lección construye sobre la anterior de forma estructurada</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Situaciones Reales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contextos prácticos y cotidianos para uso inmediato</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>4 Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Speaking, Listening, Reading y Writing integrados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estructura del Curso</h2>
            <p className="text-xl text-muted-foreground">12 semanas divididas en módulos progresivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Módulo 1</Badge>
                <CardTitle>Fundamentos</CardTitle>
                <CardDescription>Semanas 1-4</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Alfabeto y pronunciación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Vocabulario básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Presente simple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Conversaciones básicas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Módulo 2</Badge>
                <CardTitle>Intermedio</CardTitle>
                <CardDescription>Semanas 5-8</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tiempos verbales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Vocabulario profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comprensión auditiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Escritura formal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Módulo 3</Badge>
                <CardTitle>Avanzado</CardTitle>
                <CardDescription>Semanas 9-12</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Fluidez conversacional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Presentaciones orales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Inglés de negocios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Proyecto final</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Estudiantes</h2>
            <p className="text-xl text-muted-foreground">Historias reales de éxito</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">MC</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">María Carmen</CardTitle>
                    <CardDescription>Ingeniera de Software</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "En solo 3 meses pasé de nivel básico a poder mantener conversaciones fluidas en inglés. El método
                  realmente funciona."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">JR</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">José Rodríguez</CardTitle>
                    <CardDescription>Gerente de Ventas</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Conseguí el ascenso que quería gracias a mi nuevo nivel de inglés. La inversión valió completamente
                  la pena."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">AL</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Ana López</CardTitle>
                    <CardDescription>Estudiante Universitaria</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Los profesores son excelentes y el material está muy bien estructurado. Ahora puedo estudiar en
                  universidades internacionales."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-muted-foreground">Resolvemos tus dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué nivel de inglés necesito para empezar?</AccordionTrigger>
              <AccordionContent>
                Nuestro curso está diseñado para principiantes (A1-A2). No necesitas conocimientos previos de inglés,
                comenzamos desde lo más básico y avanzamos progresivamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>¿Las clases son en vivo o grabadas?</AccordionTrigger>
              <AccordionContent>
                Las clases son en vivo para maximizar la interacción y práctica oral. Sin embargo, todas las sesiones se
                graban para que puedas repasarlas cuando necesites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué pasa si no puedo asistir a una clase?</AccordionTrigger>
              <AccordionContent>
                No te preocupes. Todas las clases quedan grabadas y tendrás acceso a los materiales. Además, ofrecemos
                sesiones de recuperación semanales.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>¿Incluye certificado al finalizar?</AccordionTrigger>
              <AccordionContent>
                Sí, al completar satisfactoriamente el curso y aprobar la evaluación final, recibirás un certificado
                digital que acredita tu nivel de inglés alcanzado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>¿Qué recursos necesito para el curso?</AccordionTrigger>
              <AccordionContent>
                Solo necesitas una computadora o dispositivo móvil con conexión a internet. Todos los materiales
                digitales están incluidos en el curso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Transformar tu Futuro?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de estudiantes que ya han mejorado sus oportunidades profesionales dominando el inglés en
            solo 3 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Inscríbete Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Solicitar Información
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Garantía de satisfacción de 30 días • Soporte 24/7 • Acceso de por vida a materiales
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 English Master Course. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Términos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
