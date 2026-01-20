"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
  ArrowRight,
  Sparkles,
  Menu,
  X,
  Star,
  Quote,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Activity,
  Award,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

// Hook para animaciones al hacer scroll
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// Componente para animar elementos al scroll
function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = ""
}: {
  children: ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number
  className?: string
}) {
  const { ref, isVisible } = useScrollAnimation()

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-left": "-translate-x-8 opacity-0",
    "fade-right": "translate-x-8 opacity-0",
    "scale": "scale-95 opacity-0",
    "fade": "opacity-0"
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : animations[animation]
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Componente para animar números
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""))
  const prefix = value.startsWith("-") ? "-" : value.startsWith("+") ? "+" : ""

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, numericValue])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function DentalTecPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Estados del formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoUsuario: 'Odontólogo',
    mensaje: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Estado para mostrar/ocultar el logo del header al pasar la primera sección
  const [showHeaderLogo, setShowHeaderLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      // Mostrar logo del header solo después de pasar la primera sección (aprox 100vh)
      setShowHeaderLogo(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handler para enviar el formulario a Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xjggyddg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          tipo_usuario: formData.tipoUsuario,
          mensaje: formData.mensaje
        })
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ nombre: '', email: '', telefono: '', tipoUsuario: 'Odontólogo', mensaje: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const videos = [
    {
      id: "PSChigEmZ8U",
      title: "Carga de Prácticas",
      description: "Aprende a cargar y validar prácticas en tiempo real desde el consultorio",
      icon: FileCheck,
    },
    {
      id: "3Y22c_MeUrE",
      title: "Uso del Odontograma",
      description: "Gestiona el odontograma digital y registra tratamientos de forma visual",
      icon: Database,
    },
    {
      id: "B7haNnzsR_E",
      title: "Envío de Facturación",
      description: "Procesa y envía la facturación de manera automática y sin errores",
      icon: FileText,
    },
  ]

  const features = [
    { icon: Network, title: "Red Conectada", desc: "Integración total entre odontólogos e instituciones", color: "blue" },
    { icon: Zap, title: "Validación Instantánea", desc: "Aprobación automática de prácticas en tiempo real", color: "amber" },
    { icon: BarChart3, title: "Estadísticas en Vivo", desc: "Dashboards y reportes actualizados al instante", color: "violet" },
    { icon: Shield, title: "Auditoría Completa", desc: "Trazabilidad total y seguridad de datos", color: "emerald" },
  ]

  const obrasSociales = [
    { name: "Jerárquicos", logo: "/jerarquicos-logo.svg" },
    { name: "OSDE", logo: "/osde-logo.webp" },
    { name: "OSP San Juan", logo: "/osp-logo.svg" },
    { name: "Sancor", logo: "/sancor-logo.svg" },
    { name: "Swiss Medical", logo: "/swiss-logo.svg" },
    { name: "OSSEG", logo: "/osseg-logo.png" },
    { name: "IOSEP", logo: "/iosep-logo.png" },
    { name: "Hamburgo", logo: "/hamburgo-logo.png" },
    { name: "OSM Santiago del Estero", logo: "/logo-osm.png" },
    { name: "Policía Federal", logo: "/logo-policia-federal.jpeg" },
    { name: "NOBIS", logo: "/nobis-logo.svg", comingSoon: true },
  ]

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#odontologos", label: "Odontólogos" },
    { href: "#instituciones", label: "Instituciones" },
    { href: "#obras-sociales", label: "Obras Sociales" },
    { href: "#contacto", label: "Contacto" },
  ]

  const colorClasses: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
    blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", shadow: "shadow-blue-500/20" },
    amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", shadow: "shadow-amber-500/20" },
    violet: { bg: "bg-violet-500", text: "text-violet-600", border: "border-violet-200", shadow: "shadow-violet-500/20" },
    emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200", shadow: "shadow-emerald-500/20" },
    cyan: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-200", shadow: "shadow-cyan-500/20" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200", shadow: "shadow-purple-500/20" },
    orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200", shadow: "shadow-orange-500/20" },
    teal: { bg: "bg-teal-500", text: "text-teal-600", border: "border-teal-200", shadow: "shadow-teal-500/20" },
    green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-200", shadow: "shadow-green-500/20" },
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-xl shadow-gray-900/[0.08] py-2 sm:py-2.5"
          : "bg-white/80 backdrop-blur-lg py-3 sm:py-4"
          }`}
      >
        {/* Gradient border bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section - solo visible al pasar la primera sección */}
            <Link
              href="#inicio"
              className={`flex items-center gap-3 group transition-all duration-500 ${showHeaderLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
              <div className="relative">
                <img
                  src="/dentaltec-logo.png"
                  alt="DentalTec Logo"
                  className="h-9 w-auto transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-px h-6 bg-gray-200" />
                <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">Gestión Odontológica</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {/* Nav Links */}
              <div className="flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-200 mx-2" />

              {/* CTA Button */}
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 font-medium px-5"
                asChild
              >
                <Link href="#contacto">
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200/80 transition-all duration-300 hover:scale-105"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-2xl shadow-gray-900/10 transition-all duration-300 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}>
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50/50 rounded-xl transition-all duration-300 group"
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button
                className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl h-12 shadow-lg shadow-blue-600/25 font-medium"
                asChild
              >
                <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.015]" viewBox="0 0 1440 900">
          <path d="M0,450 Q360,350 720,450 T1440,450" fill="none" stroke="#1976d2" strokeWidth="2" />
          <path d="M0,500 Q360,400 720,500 T1440,500" fill="none" stroke="#0891b2" strokeWidth="2" />
          <path d="M0,550 Q360,450 720,550 T1440,550" fill="none" stroke="#1976d2" strokeWidth="2" />
        </svg>

        {/* Gradient Orbs - Subtle */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Logo grande de DentalTec */}
              <div className="mb-6 md:mb-8 animate-fade-in-up">
                <img
                  src="/dentaltec-logo.png"
                  alt="DentalTec"
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                />
              </div>

              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium animate-fade-in-up" style={{ animationDelay: "50ms" }}>
                <Sparkles className="w-4 h-4" />
                La red que transforma la gestión odontológica
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                Conecta, Agiliza y{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Transforma
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-200 to-cyan-200 -z-0 rounded" />
                </span>
                {" "}tu Gestión
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                Moderniza completamente la gestión de tu institución odontológica.
                Reduce débitos, acelera la facturación y realiza auditorías en tiempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 group px-8 h-12"
                  asChild
                >
                  <Link href="#contacto">
                    Solicitar Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 group h-12"
                  asChild
                >
                  <a href="https://youtube.com/playlist?list=PL4MN1RxFkCQqzCEsz2TGIlTROOwmLFdBG" target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Ver Tutoriales
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-gray-100 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
                {[
                  { icon: CheckCircle2, text: "Sin instalación" },
                  { icon: CheckCircle2, text: "Soporte 24/7" },
                  { icon: CheckCircle2, text: "Actualizaciones automáticas" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Dashboard</h3>
                      <p className="text-xs text-gray-500">Tiempo real</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-600 font-medium">Activo</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-100">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700">Mejora</span>
                      </div>
                      <div className="text-3xl font-bold text-emerald-600">-64%</div>
                      <div className="text-xs text-gray-600 mt-1">Reducción de débitos</div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-200/50 rounded-full" />
                  </div>
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-100">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700">Eficiencia</span>
                      </div>
                      <div className="text-3xl font-bold text-blue-600">-75%</div>
                      <div className="text-xs text-gray-600 mt-1">Tiempo de gestión</div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-200/50 rounded-full" />
                  </div>
                </div>

                {/* Validated Practice */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Práctica Validada</p>
                      <p className="text-xs text-gray-500">Aprobada automáticamente</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-medium text-emerald-700">Validada</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Facturación del Mes</span>
                    <span className="text-sm font-bold text-blue-600">85%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000" />
                  </div>
                </div>
              </div>

              {/* Floating Cards - ocultas en móvil */}
              <div className="hidden md:block absolute -bottom-4 -left-4 lg:-left-8 bg-white p-4 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2000+</p>
                    <p className="text-xs text-gray-500">Profesionales activos</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-2 -right-2 lg:-right-6 bg-white p-3 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">30+</p>
                    <p className="text-xs text-gray-500">Instituciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trusted By Section */}
      <section className="py-8 md:py-12 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src="/jerarquicos-logo.svg" alt="Jerárquicos" className="h-6 sm:h-8 object-contain" />
              <img src="/osde-logo.webp" alt="OSDE" className="h-6 sm:h-8 object-contain" />
              <img src="/swiss-logo.svg" alt="Swiss Medical" className="h-6 sm:h-8 object-contain" />
              <img src="/sancor-logo.svg" alt="Sancor" className="h-6 sm:h-8 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Adaptable Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Sistema Adaptable</h2>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto">
              DentalTec se adapta completamente a las necesidades específicas de tu institución y tus odontólogos.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Settings, title: "Totalmente Configurable", desc: "Adaptamos cada módulo a tu forma de trabajar" },
                { icon: Database, title: "Tus Nomencladores", desc: "Integramos tus aranceles y obras sociales específicas" },
                { icon: Users, title: "Soporte Personalizado", desc: "Te acompañamos en cada paso de la implementación" },
              ].map((item, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <div className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Network className="w-4 h-4" />
              Plataforma Integral
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Una Red Inteligente para Toda la Gestión
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conectamos todos los actores del sistema odontológico en una plataforma única
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <Card className={`group h-full border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                  <CardContent className="p-6 text-center relative">
                    <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color].bg} flex items-center justify-center mx-auto mb-4 shadow-lg ${colorClasses[feature.color].shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Odontólogos Section */}
      <section id="odontologos" className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Para Odontólogos
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Enfócate en tus Pacientes,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  No en la Burocracia
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automatiza toda tu gestión administrativa y dedica más tiempo a lo que realmente importa: la atención de calidad.
              </p>

              <div className="space-y-3">
                {[
                  { icon: FileCheck, text: "Carga de prácticas y validación instantánea en consultorio", color: "blue" },
                  { icon: Shield, text: "Reducción de prácticas debitadas con validador automático", color: "emerald" },
                  { icon: Database, text: "Historia clínica digital y odontograma actualizado", color: "violet" },
                  { icon: Calendar, text: "Agenda odontológica integrada", color: "amber" },
                  { icon: BarChart3, text: "Acceso inmediato a estadísticas y liquidaciones", color: "teal" },
                  { icon: Zap, text: "Automatización que elimina retrabajos y errores", color: "cyan" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${colorClasses[item.color].bg} flex items-center justify-center shadow-lg ${colorClasses[item.color].shadow} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                    <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div className="relative mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50">
                  <img
                    src="/dentist-with-dentaltec-system.jpg"
                    alt="Odontólogo usando DentalTec"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stat Card - oculta en móvil */}
                <div className="hidden md:block absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">-80%</p>
                      <p className="text-xs text-gray-500">Tiempo administrativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Tutoriales Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <PlayCircle className="w-4 h-4" />
              Tutoriales para Odontólogos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aprende a Usar DentalTec
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Videos paso a paso para dominar todas las funcionalidades del sistema
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <Card
                  className="group border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <video.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 group px-8 h-12"
              asChild
            >
              <a
                href="https://youtube.com/playlist?list=PL4MN1RxFkCQqzCEsz2TGIlTROOwmLFdBG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="w-5 h-5 mr-2 text-blue-600" />
                Ver Todos los Tutoriales
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-bold">
              {videos.find((v) => v.id === selectedVideo)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full p-6 pt-4">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Instituciones Section */}
      <section id="instituciones" className="py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <AnimateOnScroll animation="fade-right" className="order-2 lg:order-1 mb-8 md:mb-0">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50">
                  <img
                    src="/dentaltec-statistics-dashboard.jpg"
                    alt="Panel de estadísticas y reportes DentalTec"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stat Card - oculta en móvil */}
                <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100%</p>
                      <p className="text-xs text-gray-500">Trazabilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Para Círculos e Instituciones
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Control Total y{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Gestión Centralizada
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Supervisa, factura y liquida con precisión. Todo en tiempo real, sin planillas dispersas ni errores manuales.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Clock, text: "Supervisión en tiempo real de todas las prácticas", color: "cyan" },
                  { icon: FileText, text: "Facturación automática y ágil integrada con ARCA", color: "blue" },
                  { icon: TrendingUp, text: "Liquidaciones a prestadores rápidas y sin errores", color: "emerald" },
                  { icon: Shield, text: "Registro completo con auditoría integrada", color: "violet" },
                  { icon: Database, text: "Gestión centralizada de obras sociales y aranceles", color: "amber" },
                  { icon: Users, text: "Panel administrativo para control de prestadores", color: "teal" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${colorClasses[item.color].bg} flex items-center justify-center shadow-lg ${colorClasses[item.color].shadow} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                    <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Obras Sociales Section */}
      <section id="obras-sociales" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Integración Completa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Obras Sociales Vinculadas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Validación automática de legibilidad de afiliados y prácticas en tiempo real a través de servicios web integrados
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {obrasSociales.map((obra, i) => (
              <AnimateOnScroll key={i} animation="scale" delay={i * 50}>
                <Card className="border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                    {/* Logo grande centrado */}
                    <div className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-center mb-4 md:mb-6">
                      <img
                        src={obra.logo}
                        alt={`Logo ${obra.name}`}
                        className="max-w-[120px] sm:max-w-[150px] md:max-w-[180px] max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain"
                      />
                    </div>
                    {/* Nombre y estado */}
                    <h3 className="font-semibold text-gray-900 text-base mb-2">{obra.name}</h3>
                    {obra.comingSoon ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        Próximamente
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-emerald-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Integrada
                      </span>
                    )}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={200} className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="font-semibold block">Validación en Tiempo Real</span>
                <span className="text-sm text-emerald-600">Servicios web seguros sin llamadas manuales</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Testimonios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instituciones líderes confían en DentalTec para transformar su gestión
            </p>
          </AnimateOnScroll>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
            <AnimateOnScroll animation="fade-right">
              <Card className="h-full border-0 shadow-xl shadow-gray-200/50 overflow-hidden">
                <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col relative">
                  <div className="absolute top-6 right-6 text-blue-100">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-white">ES</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Emanuel Santillán Doval</h3>
                      <p className="text-blue-600 text-sm font-medium">
                        Gerente - Círculo Odontológico de Santiago del Estero
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed flex-1">
                    "Con Tándem estamos reemplazando nuestro sistema anterior en el marco de un proceso sólido con un gran soporte.
                    Nuestros profesionales pueden registrar de manera confiable y segura las prestaciones, lo que les brinda seguridad
                    y tranquilidad de cobro preciso eliminando débitos por errores."
                  </p>

                  <div className="flex gap-1 mt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <Card className="h-full border-0 shadow-xl shadow-gray-200/50 overflow-hidden">
                <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col relative">
                  <div className="absolute top-6 right-6 text-cyan-100">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-white">GS</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Gabriel Saracco</h3>
                      <p className="text-cyan-600 text-sm font-medium">
                        Miembro de comisión directiva CORA
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed flex-1 text-lg">
                    "Un sistema de facturación digital de consultorio, fácil de usar, predictivo, y con el mejor
                    soporte técnico al cliente que conozco."
                  </p>

                  <div className="flex gap-1 mt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img
                src="/dentaltec-logo-white.png"
                alt="DentalTec Logo"
                className="h-14 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resultados que Hablan por Sí Solos
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Miles de profesionales e instituciones confían en DentalTec
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2000", suffix: "+", label: "Odontólogos Activos", icon: Users },
              { value: "30", suffix: "+", label: "Instituciones", icon: Building2 },
              { value: "-64", suffix: "%", label: "Reducción de débitos", icon: TrendingUp },
              { value: "-75", suffix: "%", label: "Tiempo de Gestión", icon: Clock },
            ].map((stat, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-up" className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Send className="w-4 h-4" />
                Contacto
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Listo para Comenzar?
              </h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y un especialista se pondrá en contacto contigo
              </p>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
              <AnimateOnScroll animation="fade-right" className="lg:col-span-2">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 sm:p-6 md:p-8 text-white h-full">
                  <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
                  <div className="space-y-5">
                    {/* Email */}
                    <a
                      href="mailto:soporte.dentaltec@tandemdigital.net"
                      className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-blue-200">Email</p>
                        <p className="font-medium text-[13px] leading-tight">soporte.dentaltec<wbr />@tandemdigital.net</p>
                      </div>
                    </a>

                    {/* Teléfono */}
                    <a
                      href="tel:+542645056518"
                      className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200">Teléfono</p>
                        <p className="font-medium">+54 264 505 6518</p>
                      </div>
                    </a>

                    {/* Ubicación */}
                    <a
                      href="https://maps.app.goo.gl/dgspRbBtCErLTWF88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-200">Ubicación</p>
                        <p className="font-medium">San Juan, Argentina</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  {/* Mini mapa preview */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href="https://maps.app.goo.gl/dgspRbBtCErLTWF88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl hover:ring-2 hover:ring-white/30 transition-all group"
                    >
                      <div className="relative">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8!2d-68.5364!3d-31.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzE1LjAiUyA2OMKwMzInMTEuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
                          className="w-full h-32 pointer-events-none"
                          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent flex items-end justify-center pb-3">
                          <span className="text-xs font-medium flex items-center gap-1 text-white/90 group-hover:text-white transition-colors">
                            <MapPin className="w-3 h-3" />
                            Ver en Google Maps
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="lg:col-span-3">
                <Card className="border-0 shadow-xl shadow-gray-200/50">
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    {formStatus === 'success' ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                        <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo pronto.</p>
                        <Button
                          variant="outline"
                          onClick={() => setFormStatus('idle')}
                          className="border-gray-200 hover:border-blue-300"
                        >
                          Enviar otro mensaje
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                            <input
                              type="text"
                              required
                              value={formData.nombre}
                              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                              placeholder="Tu nombre"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                              placeholder="tu@email.com"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                            <input
                              type="tel"
                              value={formData.telefono}
                              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                              placeholder="+54 264 505 6518"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Usuario</label>
                            <select
                              value={formData.tipoUsuario}
                              onChange={(e) => setFormData({ ...formData, tipoUsuario: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                            >
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
                            required
                            value={formData.mensaje}
                            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="Cuéntanos sobre tus necesidades..."
                          />
                        </div>

                        {formStatus === 'error' && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                          </div>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          disabled={formStatus === 'loading'}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all h-12 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {formStatus === 'loading' ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Mensaje
                              <Send className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <img
                src="/dentaltec-logo-white.png"
                alt="DentalTec Logo"
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                La red que conecta, agiliza y transforma la gestión odontológica en toda Argentina.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Producto</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Para Odontólogos", "Para Instituciones", "Precios", "Integraciones"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Recursos</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Documentación", "Tutoriales", "Blog", "Soporte"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Nosotros", "Contacto", "Privacidad", "Términos"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 DentalTec. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-sm">
              Hecho con <span className="text-red-500">♥</span> en Argentina
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
