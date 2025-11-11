import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#showcase', label: 'Aperçu' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 shadow-inner" />
              <span className="text-lg font-semibold tracking-tight">Note3D</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-800 hover:text-gray-950">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
                Demo interactive
              </a>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 px-4 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-gray-800">
                    {l.label}
                  </a>
                ))}
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow">
                  Demo interactive
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs font-medium text-rose-700 backdrop-blur">Nouveau • Note 3D interactive</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Prenez des notes dans un monde 3D interactif
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            Manipulez un globe futuriste, épinglez vos idées dans l’espace, et partagez des parcours pédagogiques immersifs. Inspiré par les codes d’un site corporate moderne, réinventé pour l’éducation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">Essayer la démo</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">Voir les fonctionnalités</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white grid place-items-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative isolate bg-gradient-to-b from-white to-rose-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conçu pour l’apprentissage visuel</h2>
          <p className="mt-3 text-gray-600">Créez des notes ancrées sur des objets 3D, collaborez en temps réel et exportez en un clic.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Épingles 3D" desc="Placez des marqueurs interactifs directement sur le globe ou vos scènes." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 0v9m-7 0h14' /></svg>} />
          <Feature title="Parcours guidés" desc="Racontez une histoire: étapes, hotspots, zooms et transitions fluides." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7' /></svg>} />
          <Feature title="Collaboration" desc="Travaillez à plusieurs avec des commentaires et réactions en direct." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0m10 0a4 4 0 11-8 0 4 4 0 018 0' /></svg>} />
          <Feature title="Templates" desc="Démarrez vite avec des scènes prêtes pour cours, pitchs, ou onboarding." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' /></svg>} />
          <Feature title="Export & Partage" desc="Intégrez vos notes 3D sur le web, LMS ou réseaux sociaux." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M4 4v6h6M20 20v-6h-6M4 10l6-6M20 14l-6 6' /></svg>} />
          <Feature title="Performances" desc="Optimisé pour le navigateur: rapide, fluide, et responsive." icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z' /></svg>} />
        </div>
      </div>
    </section>
  )
}

function Showcase() {
  const cards = [
    {
      title: 'Cours de géographie',
      desc: 'Placez des notes sur les régions, créez un quiz et enregistrez la session.',
    },
    {
      title: 'Pitch produit',
      desc: 'Mettez en scène votre roadmap avec des étapes immersives et interactives.',
    },
    {
      title: 'Formation interne',
      desc: 'Standardisez les parcours d’onboarding avec des modèles réutilisables.',
    },
  ]
  return (
    <section id="showcase" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ce que vous pouvez créer</h2>
          <p className="mt-3 text-gray-600">Des exemples concrets pour démarrer rapidement.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="h-40 bg-gradient-to-br from-rose-100 to-rose-200" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-rose-600">Voir un exemple <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' /></svg></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="demo" className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-rose-50 to-white" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">Prêt à prendre des notes différemment ?</h3>
        <p className="mt-3 text-gray-600">Essayez la démo, épinglez quelques idées sur le globe, et partagez le résultat.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#hero" className="rounded-lg bg-gradient-to-r from-red-600 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">Lancer la scène 3D</a>
          <a href="/test" className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">Tester la connexion</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-red-600" />
            <span className="text-sm font-semibold">Note3D</span>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Note3D. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
