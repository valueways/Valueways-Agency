import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Globe, 
  Smartphone, 
  Zap, 
  MessageCircle, 
  Mail, 
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'portfolio' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-xl font-bold tracking-tight text-zinc-900"
        >
          VALUEWAYS<span className="text-zinc-400 font-light">AGENCY</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-[13px] font-medium tracking-wide transition-colors hover:text-zinc-900 ${currentPage === link.id ? 'text-zinc-900' : 'text-zinc-500'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-[13px] font-medium hover:bg-zinc-800 transition-all active:scale-95"
          >
            Free Mockup
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium text-left ${currentPage === link.id ? 'text-blue-600' : 'text-zinc-900'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-medium"
              >
                Get a Free Mockup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-white py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-zinc-900">VALUEWAYS<span className="text-zinc-400 font-light">AGENCY</span></h3>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-light">
              We help local businesses in the US & UK get more customers with conversion-focused websites.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Navigation</h4>
            <ul className="space-y-4 text-[13px] text-zinc-500 font-medium">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-zinc-900 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-zinc-900 transition-colors">Portfolio</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-zinc-900 transition-colors">About</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-zinc-900 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Connect</h4>
            <ul className="space-y-4 text-[13px] text-zinc-500 font-medium">
              <li><a href="https://wa.me/8137761339" className="hover:text-zinc-900 transition-colors">WhatsApp</a></li>
              <li><a href="mailto:hello@valueways.agency" className="hover:text-zinc-900 transition-colors">Email</a></li>
              <li><span className="text-zinc-400 font-light">Columbus, Ohio</span></li>
            </ul>
          </div>
        </div>
        
        <div className="text-zinc-400 text-[11px] font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Valueways Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Sections ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="pt-48 pb-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tight text-zinc-900 leading-[1.05]">
            Websites that <br /> get customers.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We build high-converting websites for local businesses in the US & UK. Minimal design, maximum results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCtaClick}
              className="bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all active:scale-95"
            >
              Get Started
            </button>
            <button 
              onClick={onCtaClick}
              className="text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:text-zinc-500 transition-all"
            >
              Request Free Mockup
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="apple-shadow rounded-[40px] overflow-hidden bg-zinc-100 aspect-[16/10]">
            <img 
              src="https://picsum.photos/seed/minimal-web/1920/1200" 
              alt="Premium Design Preview" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-20 grayscale">
          {['Home Services', 'Med Spa', 'Real Estate', 'Law Firm', 'Dental'].map((logo) => (
            <span key={logo} className="text-lg font-bold tracking-tighter text-zinc-900">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Website Design',
      desc: 'Conversion-focused layouts designed to turn visitors into leads. Mobile-first approach.',
      icon: <Globe strokeWidth={1.5} size={24} />
    },
    {
      title: 'Website Redesign',
      desc: 'Transform your outdated website into a modern asset that builds trust instantly.',
      icon: <Zap strokeWidth={1.5} size={24} />
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting pages specifically built for your ad campaigns and ROI.',
      icon: <Smartphone strokeWidth={1.5} size={24} />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((s, i) => (
            <div key={i} className="group">
              <div className="mb-8 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-900">{s.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const projects = [
    {
      title: 'Elite Roofing Co.',
      location: 'Columbus, Ohio',
      image: 'https://picsum.photos/seed/roofing/1200/900',
      tag: 'Home Services'
    },
    {
      title: 'Lumina Med Spa',
      location: 'London, UK',
      image: 'https://picsum.photos/seed/spa/1200/900',
      tag: 'Med Spa'
    },
    {
      title: 'Vanguard Realty',
      location: 'Manchester, UK',
      image: 'https://picsum.photos/seed/realestate/1200/900',
      tag: 'Real Estate'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Selected Works</h2>
          <p className="text-zinc-500 font-light">A glimpse into the high-converting assets we build.</p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="apple-shadow rounded-3xl overflow-hidden mb-10 aspect-[16/9] border border-zinc-100/50">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">{p.tag}</p>
                  <h3 className="text-3xl font-semibold text-zinc-900">{p.title}</h3>
                </div>
                <p className="text-zinc-500 font-light">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const benefits = [
    {
      title: 'Conversion First',
      desc: 'Our designs are psychological blueprints that guide users toward the contact button.'
    },
    {
      title: 'Instant Trust',
      desc: 'A premium website signals authority. We make sure you look like the #1 choice.'
    },
    {
      title: 'Zero Friction',
      desc: 'One-click calling and simple forms. We make it easy for clients to reach you.'
    }
  ];

  return (
    <section className="py-40 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-zinc-900 tracking-tight">Outcomes, <br />not just features.</h2>
            <div className="space-y-12">
              {benefits.map((b, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-900">{b.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="apple-shadow bg-white rounded-[40px] p-12 border border-zinc-100/50">
              <p className="text-2xl font-light leading-relaxed mb-10 text-zinc-600 italic">
                "Valueways didn't just give us a website; they gave us a growth engine. Our monthly inquiries doubled within weeks of launching."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                <div>
                  <p className="font-semibold text-zinc-900">James Wilson</p>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">Owner, Wilson Home Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeOffer = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-40 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-10 text-zinc-900 tracking-tight">Free Website Mockup.</h2>
          <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-light">
            We’ll design a free homepage for your business so you can see exactly how your new website will look—no obligation.
          </p>
          <button 
            onClick={onCtaClick}
            className="bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all active:scale-95"
          >
            Request Free Mockup
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Manchester Real Estate',
      text: 'The conversion focus is real. We used to get 5 leads a week, now we get 20+. The design is just the cherry on top.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Radiant Med Spa',
      text: 'Valueways Agency understood our premium positioning perfectly. The booking flow is seamless and our clients love it.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {reviews.map((r, i) => (
            <div key={i}>
              <p className="text-xl text-zinc-500 mb-8 leading-relaxed font-light italic">"{r.text}"</p>
              <div>
                <p className="font-semibold text-zinc-900">{r.name}</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCta = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-40 bg-zinc-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-zinc-900 tracking-tight">Ready to grow?</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={onCtaClick}
            className="bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all active:scale-95"
          >
            Get Started
          </button>
          <button 
            onClick={onCtaClick}
            className="text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:text-zinc-500 transition-all"
          >
            Request Free Mockup
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <main>
      <Hero onCtaClick={() => setCurrentPage('contact')} />
      <SocialProof />
      <Services />
      <Portfolio onCtaClick={() => setCurrentPage('portfolio')} />
      <Results />
      <FreeOffer onCtaClick={() => setCurrentPage('contact')} />
      <Testimonials />
      <FinalCta onCtaClick={() => setCurrentPage('contact')} />
    </main>
  );
};

const AboutPage = () => {
  return (
    <main className="pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-8xl font-bold mb-16 tracking-tight text-zinc-900 leading-[1.1]">We grow businesses through design.</h1>
        <div className="space-y-12 text-zinc-500 max-w-2xl">
          <p className="text-2xl leading-relaxed font-light">
            At Valueways Agency, we believe a website should be more than just a digital business card. It should be your hardest-working employee.
          </p>
          <p className="text-lg leading-relaxed font-light">
            Based in Columbus, Ohio, we've dedicated ourselves to helping local businesses in the US and UK bridge the gap between "having a website" and "getting customers." We specialize in home services, med spas, and real estate because we understand the unique challenges of these industries.
          </p>
          <p className="text-lg leading-relaxed font-light">
            Our approach is simple: we combine premium, high-end aesthetics with conversion-focused strategy. We don't use fluff or jargon. We focus on results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-24 border-t border-zinc-100 mt-24">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-6">Our Mission</h3>
            <p className="text-zinc-500 font-light leading-relaxed">To empower local businesses with world-class digital tools that drive real growth and build lasting trust.</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-6">Our Vision</h3>
            <p className="text-zinc-500 font-light leading-relaxed">To be the go-to partner for businesses that value quality, transparency, and measurable outcomes.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

const PortfolioPage = () => {
  const projects = [
    { title: 'Elite Roofing Co.', tag: 'Home Services', location: 'Columbus, OH', image: 'https://picsum.photos/seed/roof1/1200/800' },
    { title: 'Lumina Med Spa', tag: 'Med Spa', location: 'London, UK', image: 'https://picsum.photos/seed/spa1/1200/800' },
    { title: 'Vanguard Realty', tag: 'Real Estate', location: 'Miami, FL', image: 'https://picsum.photos/seed/real1/1200/800' },
    { title: 'Apex Law Group', tag: 'Professional Services', location: 'Chicago, IL', image: 'https://picsum.photos/seed/law/1200/800' },
    { title: 'Green Leaf Landscaping', tag: 'Home Services', location: 'Austin, TX', image: 'https://picsum.photos/seed/garden/1200/800' },
    { title: 'Smile Dental Clinic', tag: 'Healthcare', location: 'Manchester, UK', image: 'https://picsum.photos/seed/dental/1200/800' },
  ];

  return (
    <main className="pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-32">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight text-zinc-900 leading-[1.1]">Selected Works</h1>
          <p className="text-2xl text-zinc-500 max-w-2xl font-light leading-relaxed">A collection of high-converting websites we've built for businesses across the globe.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[16/10] apple-shadow bg-zinc-100">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-1">{p.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium">{p.tag} — {p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <main className="pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight text-zinc-900 leading-[1.1]">Let's talk growth.</h1>
            <p className="text-2xl text-zinc-500 mb-20 leading-relaxed font-light">
              Ready to transform your online presence? Fill out the form to request your free mockup or just say hello.
            </p>
            
            <div className="space-y-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Call or Text</p>
                <p className="text-2xl font-light text-zinc-500">8137761339</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Email Us</p>
                <p className="text-2xl font-light text-zinc-500">hello@valueways.agency</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Visit Us</p>
                <p className="text-2xl font-light text-zinc-500">342 Old House Drive, Columbus, Ohio</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-12 rounded-[40px]">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                <p className="text-zinc-500 font-light">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:ring-2 focus:ring-zinc-200 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:ring-2 focus:ring-zinc-200 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:ring-2 focus:ring-zinc-200 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all disabled:opacity-50 active:scale-[0.98]"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'portfolio' && <PortfolioPage />}
          {currentPage === 'contact' && <ContactPage />}
        </motion.div>
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
