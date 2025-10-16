"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  CheckCircle2,
  Network,
  Zap,
  BarChart3,
  Shield,
  Clock,
  FileCheck,
  Users,
  Building2,
  TrendingUp,
  Database,
  Calendar,
  FileText,
  PlayCircle,
  Settings,
  Sliders,
} from "lucide-react"
import Link from "next/link"

export default function DentalTecPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "PSChigEmZ8U",
      title: "Carga de Prácticas",
      description: "Aprende a cargar y validar prácticas en tiempo real desde el consultorio",
    },
    {
      id: "3Y22c_MeUrE",
      title: "Uso del Odontograma",
      description: "Gestiona el odontograma digital y registra tratamientos de forma visual",
    },
    {
      id: "B7haNnzsR_E",
      title: "Envío de Facturación",
      description: "Procesa y envía la facturación de manera automática y sin errores",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/dentaltec-logo.png"
              alt="DentalTec Logo"
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
              Beneficios
            </Link>
            <Link href="#odontologos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Odontólogos
            </Link>
            <Link href="#instituciones" className="text-gray-700 hover:text-blue-600 transition-colors">
              Instituciones
            </Link>
            <Link href="#obras-sociales" className="text-gray-700 hover:text-blue-600 transition-colors">
              Obras Sociales
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-start mb-8">
                <img
                  src="/dentaltec-logo.png"
                  alt="DentalTec Logo"
                  className="h-24 w-auto"
                />
              </div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                La red que transforma la gestión odontológica
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                DentalTec: Conecta, Agiliza y Transforma
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                DentalTec moderniza completamente la gestión de tu institución odontológica. Reduce débitos, acelera la
                facturación y realiza auditorías en tiempo real.
              </p>
              <div className="flex items-center gap-8 mt-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Sin instalación</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Actualizaciones automáticas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Práctica Validada</p>
                        <p className="text-xs text-gray-600">Aprobada automáticamente</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">-64%</p>
                      <p className="text-xs text-gray-600">Reducción de débitos</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-cyan-600">-75%</p>
                      <p className="text-xs text-gray-600">Tiempo de gestión</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <p className="text-sm font-semibold text-gray-900">Facturación Automática</p>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2000+</p>
                    <p className="text-sm text-gray-600">Profesionales activos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Sistema Adaptable</h2>
            </div>
            <p className="text-xl text-cyan-50 leading-relaxed mb-8">
              DentalTec se adapta completamente a las necesidades específicas de tu institución y tus odontólogos.
              Configuramos el sistema según tus flujos de trabajo, nomencladores y procesos administrativos únicos.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Settings className="w-8 h-8 text-cyan-200 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Totalmente Configurable</h3>
                <p className="text-cyan-100 text-sm">Adaptamos cada módulo a tu forma de trabajar</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Database className="w-8 h-8 text-cyan-200 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Tus Nomencladores</h3>
                <p className="text-cyan-100 text-sm">Integramos tus aranceles y obras sociales específicas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-8 h-8 text-cyan-200 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Soporte Personalizado</h3>
                <p className="text-cyan-100 text-sm">Te acompañamos en cada paso de la implementación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Una Red Inteligente para Toda la Gestión
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conectamos todos los actores del sistema odontológico en una plataforma única
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Network, title: "Red Conectada", desc: "Integración total entre odontólogos e instituciones" },
              { icon: Zap, title: "Validación Instantánea", desc: "Aprobación automática de prácticas en tiempo real" },
              {
                icon: BarChart3,
                title: "Estadísticas en Vivo",
                desc: "Dashboards y reportes actualizados al instante",
              },
              { icon: Shield, title: "Auditoría Completa", desc: "Trazabilidad total y seguridad de datos" },
            ].map((feature, i) => (
              <Card key={i} className="border-2 hover:border-blue-200 hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="odontologos" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                Para Odontólogos
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Enfócate en tus Pacientes, No en la Burocracia
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automatiza toda tu gestión administrativa y dedica más tiempo a lo que realmente importa: la atención de
                calidad.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FileCheck, text: "Carga de prácticas y validación instantánea en consultorio" },
                  { icon: Shield, text: "Reducción de prácticas debitadas con validador automático" },
                  { icon: Database, text: "Historia clínica digital y odontograma actualizado" },
                  { icon: Calendar, text: "Agenda odontológica integrada" },
                  { icon: BarChart3, text: "Acceso inmediato a estadísticas y liquidaciones" },
                  { icon: Zap, text: "Automatización que elimina retrabajos y errores" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/dentist-with-dentaltec-system.jpg"
                  alt="Odontólogo usando DentalTec"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">-80%</p>
                  <p className="text-xs text-gray-600">Tiempo administrativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Tutoriales para Odontólogos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Aprende a Usar DentalTec</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Videos paso a paso para dominar todas las funcionalidades del sistema
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, i) => (
              <Card
                key={i}
                className="border-2 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              asChild
            >
              <a
                href="https://youtube.com/playlist?list=PL4MN1RxFkCQqzCEsz2TGIlTROOwmLFdBG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Ver Todos los Tutoriales
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-6xl w-full p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold">
              {videos.find((v) => v.id === selectedVideo)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full px-6 pb-6">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <section id="instituciones" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/dentaltec-statistics-dashboard.jpg"
                  alt="Panel de estadísticas y reportes DentalTec"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-xs text-gray-600">Trazabilidad</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-semibold">
                Para Círculos e Instituciones
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Control Total y Gestión Centralizada
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Supervisa, factura y liquida con precisión. Todo en tiempo real, sin planillas dispersas ni errores
                manuales.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Supervisión en tiempo real de todas las prácticas" },
                  { icon: FileText, text: "Facturación automática y ágil integrada con ARCA" },
                  { icon: TrendingUp, text: "Liquidaciones a prestadores rápidas y sin errores" },
                  { icon: Shield, text: "Registro completo con auditoría integrada" },
                  { icon: Database, text: "Gestión centralizada de obras sociales y aranceles" },
                  { icon: Users, text: "Panel administrativo para control de prestadores" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="obras-sociales" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Integración Completa
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Obras Sociales Vinculadas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Validación automática de legibilidad de afiliados y prácticas en tiempo real a través de servicios web integrados
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { name: "Jerárquicos" },
               { name: "OSDE" },
               { name: "OSP San Juan" },
               { name: "Sancor" },
               { name: "Swiss Medical" },
               { name: "OSSEG" },
               { name: "IOSEP" },
               { name: "Hamburgo" },
               { name: "OSM Santiago del Estero" },
               { name: "Policía Federal" },
               { name: "NOBIS", comingSoon: true }
             ].map((obra, i) => (
              <Card key={i} className="border-2 hover:border-green-200 hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="text-center">
                     <div className={obra.name === "Jerárquicos" || obra.name === "OSDE" || obra.name === "OSP San Juan" || obra.name === "Sancor" || obra.name === "Swiss Medical" || obra.name === "OSSEG" || obra.name === "IOSEP" || obra.name === "Hamburgo" || obra.name === "OSM Santiago del Estero" || obra.name === "Policía Federal" || obra.name === "NOBIS" ? "w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform" : "w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300 group-hover:scale-105 transition-transform"}>
                       {obra.name === "Jerárquicos" ? (
                         <img
                           src="/jerarquicos-logo.svg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "OSDE" ? (
                         <img
                           src="/osde-logo.webp"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "OSP San Juan" ? (
                         <img
                           src="/osp-logo.svg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "Sancor" ? (
                         <img
                           src="/sancor-logo.svg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "Swiss Medical" ? (
                         <img
                           src="/swiss-logo.svg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "OSSEG" ? (
                         <img
                           src="/osseg-logo.png"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "IOSEP" ? (
                         <img
                           src="/iosep-logo.png"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain object-left"
                         />
                       ) : obra.name === "Hamburgo" ? (
                         <img
                           src="/hamburgo-logo.png"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "OSM Santiago del Estero" ? (
                         <img
                           src="/logo-osm.png"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "Policía Federal" ? (
                         <img
                           src="/logo-policia-federal.jpeg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : obra.name === "NOBIS" ? (
                         <img
                           src="/nobis-logo.svg"
                           alt={`Logo ${obra.name}`}
                           className="w-32 h-32 object-contain"
                         />
                       ) : (
                         <div className="text-center">
                           <div className="w-8 h-8 bg-gray-400 rounded-lg mx-auto mb-1"></div>
                           <p className="text-xs text-gray-500">Logo {obra.name}</p>
                         </div>
                       )}
                     </div>
                     <h3 className="font-bold text-xl text-gray-900">{obra.name}</h3>
                     {obra.comingSoon && (
                       <div className="mt-2 inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                         Próximamente
                       </div>
                     )}
                   </div>
                 </CardContent>
               </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Validación en Tiempo Real</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Todas las obras sociales están conectadas mediante servicios web seguros que permiten
              validación instantánea sin necesidad de llamadas telefónicas o consultas manuales.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instituciones líderes confían en DentalTec para transformar su gestión
            </p>
          </div>
          <TooltipProvider>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-shadow h-80">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">ES</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Emanuel Santillán Doval</h3>
                      <p className="text-blue-600 font-medium text-sm">
                        Gerente del Círculo Odontológico de Santiago del Estero
                      </p>
                    </div>
                  </div>
                  <div className="relative flex-1 overflow-hidden">
                    <svg
                      className="absolute -top-2 -left-6 w-16 h-16 text-blue-50 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <p className="text-gray-700 text-base leading-relaxed line-clamp-6 cursor-help">
                          Con Tándem estamos reemplazando nuestro sistema anterior en el marco de un proceso sólido con
                          un gran soporte que va resolviendo la complejidad de los problemas que se presentan. Nuestros
                          profesionales prestadores pueden registrar de manera confiable y segura las prestaciones de
                          las Obras Sociales/Convenios que hemos podido integrar hasta el momento, aplicando
                          correctamente sus normas de trabajo y valores de aranceles, lo que les brinda seguridad y
                          tranquilidad de cobro preciso de sus trabajos eliminando la posibilidad de débitos por errores
                          de afiliación o padrón. Por su parte, los pacientes afiliados reciben una atención ágil a sus
                          necesidades resolviendo todo en el consultorio. Estamos muy conformes y con altas expectativas
                          de continuar generando alto valor a nuestros socios con el desarrollo de esta alianza y la
                          plataforma de gestión Dentaltec.
                        </p>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-md p-4">
                        <p className="text-sm leading-relaxed">
                          Con Tándem estamos reemplazando nuestro sistema anterior en el marco de un proceso sólido con
                          un gran soporte que va resolviendo la complejidad de los problemas que se presentan. Nuestros
                          profesionales prestadores pueden registrar de manera confiable y segura las prestaciones de
                          las Obras Sociales/Convenios que hemos podido integrar hasta el momento, aplicando
                          correctamente sus normas de trabajo y valores de aranceles, lo que les brinda seguridad y
                          tranquilidad de cobro preciso de sus trabajos eliminando la posibilidad de débitos por errores
                          de afiliación o padrón. Por su parte, los pacientes afiliados reciben una atención ágil a sus
                          necesidades resolviendo todo en el consultorio. Estamos muy conformes y con altas expectativas
                          de continuar generando alto valor a nuestros socios con el desarrollo de esta alianza y la
                          plataforma de gestión Dentaltec.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-shadow h-80">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">GS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Gabriel Saracco</h3>
                      <p className="text-blue-600 font-medium text-sm">
                        Presidente de la Federación Odontológica de Mendoza y miembro de la Comisión Directiva de CORA
                      </p>
                    </div>
                  </div>
                  <div className="relative flex-1 overflow-hidden">
                    <svg
                      className="absolute -top-2 -left-6 w-16 h-16 text-blue-50 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <p className="text-gray-700 text-base leading-relaxed line-clamp-6 cursor-help">
                          Un sistema de facturación digital de consultorio, fácil de usar, predictivo, y con el mejor
                          soporte técnico al cliente que conozco.
                        </p>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-md p-4">
                        <p className="text-sm leading-relaxed">
                          Un sistema de facturación digital de consultorio, fácil de usar, predictivo, y con el mejor
                          soporte técnico al cliente que conozco.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TooltipProvider>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img
                src="/dentaltec-logo-white.png"
                alt="DentalTec Logo"
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados que Hablan por Sí Solos</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Miles de profesionales e instituciones confían en DentalTec
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Odontólogos Activos", icon: Users },
              { number: "30+", label: "Instituciones", icon: Building2 },
              { number: "-64%", label: "Reducción de débitos", icon: TrendingUp },
              { number: "-75%", label: "Tiempo de Gestión", icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-300" />
                </div>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Listo para Comenzar?</h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y un especialista se pondrá en contacto contigo
              </p>
            </div>
            <Card className="shadow-xl border-2">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Usuario</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none">
                        <option>Odontólogo</option>
                        <option>Círculo/Institución</option>
                        <option>Obra Social</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                      placeholder="Cuéntanos sobre tus necesidades..."
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/dentaltec-logo-white.png"
                  alt="DentalTec Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                La red que conecta, agiliza y transforma la gestión odontológica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Para Odontólogos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Para Instituciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 DentalTec. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
