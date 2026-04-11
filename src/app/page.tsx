'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollaborativeCursors from '@/components/CollaborativeCursors';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ParallaxText,
} from '@/components/MotionWrapper';

/* ─── DATA ────────────────────────────────────────── */
const services = [
  { icon: 'fa-paint-brush', title: 'Web Design', desc: 'Create stunning, responsive websites that capture your brand essence and convert visitors into customers with modern design principles.', features: ['Responsive Design', 'User Experience Optimization', 'Brand Integration', 'Performance Optimization'] },
  { icon: 'fa-search', title: 'Search Engine Optimization', desc: "Improve your website's visibility in search results and drive organic traffic through proven SEO strategies and techniques.", features: ['Keyword Research & Analysis', 'On-Page Optimization', 'Technical SEO Audits', 'Content Strategy'] },
  { icon: 'fa-server', title: 'Web Hosting', desc: 'Reliable, secure, and fast web hosting solutions that keep your website running smoothly 24/7 with professional support.', features: ['99.9% Uptime Guarantee', 'Daily Backups & Security', 'Scalable Plans', '24/7 Technical Support'] },
  { icon: 'fa-chart-line', title: 'Strategy & Reporting', desc: 'Data-driven marketing strategies with comprehensive reporting to track performance and optimize your digital presence.', features: ['Marketing Strategy Development', 'Performance Analytics', 'ROI Tracking & Reporting', 'Competitive Analysis'] },
  { icon: 'fa-bullhorn', title: 'Digital Advertising', desc: 'Maximize your reach and ROI with targeted advertising campaigns across Google, Facebook, and other major platforms.', features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Campaign Optimization', 'A/B Testing & Analytics'] },
];

const projects = [
  { name: 'Janooon Cafe', img: '/images/Janoooncafe.png', tags: ['Restaurant', 'Web Design'], desc: 'A modern, elegant website for a South Asian cafe featuring authentic flavors and contemporary design. Built with responsive design and integrated menu system.', tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'], url: 'https://janoooncafe.com' },
  { name: 'RelianceRX', img: '/images/reliancerx.png', tags: ['Pharmaceutical', 'E-commerce'], desc: 'A comprehensive pharmaceutical solutions platform with product catalog, inventory management, and professional healthcare services integration.', tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Database Integration'], url: 'https://reliancerx.us' },
  { name: 'Blank Saga', img: '/images/Blank Saga.png', tags: ['Fashion', 'E-commerce'], desc: 'A contemporary fashion e-commerce platform showcasing minimalist street wear and modern clothing collections. Built with clean design aesthetics and seamless shopping experience.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Shopping Cart'], url: 'https://blanksaga.com/' },
  { name: 'JPRO Interiors', img: '/images/JPRO.png', tags: ['Construction', 'Interior Design'], desc: 'Professional construction and interior design company website featuring project galleries, service offerings, and client portfolio. Modern design reflecting quality craftsmanship.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Portfolio Gallery'], url: 'https://jprocorp.com/' },
  { name: 'Love Romani', img: '/images/Love Romani.png', tags: ['Fashion', 'Lifestyle'], desc: 'Elegant lifestyle and fashion brand website featuring curated collections, brand storytelling, and sophisticated user experience.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Brand Showcase'], url: 'https://loveromani.com/' },
];

const testimonials = [
  { stars: 5, text: '"Senyo Solutions created an absolutely stunning website for our restaurant. Their attention to detail and understanding of our brand was exceptional. The site is fast, beautiful, and has significantly increased our online orders."', name: 'Janooon Cafe', title: 'Restaurant & Catering' },
  { stars: 5, text: '"The team at Senyo Solutions delivered a comprehensive pharmaceutical platform that exceeded our expectations. Their technical expertise and reliable hosting services have been instrumental in our business growth."', name: 'RelianceRX', title: 'Pharmaceutical Solutions' },
  { stars: 4, text: '"Outstanding marketing services and SEO optimization! Our online visibility increased by 300% within just 3 months. The team\'s strategic approach and continuous support have been game-changing for our business."', name: 'Hot Pilates Secrets', title: 'Fitness Studio' },
  { stars: 5, text: '"Their web hosting service is incredibly reliable. We\'ve had 99.9% uptime and the migration process was seamless and professional."', name: 'JPro Interiors', title: 'Construction Company' },
  { stars: 4, text: '"Amazing web design work! They perfectly captured our brand aesthetic and created a stunning e-commerce site. Our sales have doubled since launching the new website."', name: 'Blank Saga', title: 'Clothing Brand' },
  { stars: 5, text: '"Professional web design and reliable hosting all in one package. They built our fashion website from scratch and handle all the technical aspects. The site loads fast and looks incredible on all devices."', name: 'Love Romani', title: 'Clothing Brand' },
];

/* ─── COMPONENT ───────────────────────────────────── */
export default function HomePage() {
  /* Smooth scrolling for anchor links */
  useEffect(() => {
    const handleAnchor = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        const navH = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleAnchor);
    return () => document.removeEventListener('click', handleAnchor);
  }, []);

  return (
    <>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="home" className="hero">
        <div className="container">
          <ParallaxText>
            <div className="hero-content">
              <motion.p
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Web Design &amp; Digital Marketing
              </motion.p>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                We build websites that{' '}
                <span className="gradient-text">grow your business</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Modern web design, reliable hosting, and data-driven marketing — all in one place.
              </motion.p>

              <motion.div
                className="hero-ctas"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <a className="btn btn-primary btn-large" href="#contact">Get Started</a>
                <Link className="btn btn-outline btn-large" href="/services">Our Services</Link>
              </motion.div>

              <motion.p
                style={{ marginTop: 24, fontSize: '0.88rem', color: 'var(--text-muted)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Existing client?{' '}
                <Link href="/client-portal" style={{ color: 'var(--primary-light)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Click here
                </Link>
              </motion.p>
            </div>
          </ParallaxText>
        </div>

        {/* Decorative blurred orbs */}
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(50px)' }} />
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process-section">
        <div className="container">
          <FadeIn direction="up">
            <div className="process-header">
              <p className="section-eyebrow">Our Process</p>
              <h2 className="section-title">From idea to launch in 3 simple steps</h2>
            </div>
          </FadeIn>

          <StaggerContainer className="process-timeline" staggerDelay={0.15}>
            {[
              { num: '01', title: 'Discovery', desc: 'We learn your goals, audit competitors, and map out a strategy tailored to your business.' },
              { num: '02', title: 'Design & Build', desc: 'High-converting layouts, fast hosting, and all tracking pixels ready from day one.' },
              { num: '03', title: 'Launch & Grow', desc: 'SEO, ads, and ongoing optimization with transparent monthly reports.' },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <HoverScale>
                  <div className="process-step">
                    <div className="step-number">{step.num}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Animated connector between process steps */}
          <FadeIn direction="up" delay={0.5}>
            <div className="process-connector-wrap">
              <div className="process-connector">
                <motion.div
                  className="process-connector-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                />
                <motion.div
                  className="process-connector-dot dot-start"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                />
                <motion.div
                  className="process-connector-dot dot-mid"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                />
                <motion.div
                  className="process-connector-dot dot-end"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="digital-services">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              We are committed to providing our customers with exceptional service.
            </p>
          </FadeIn>

          <StaggerContainer className="services-detailed-grid" staggerDelay={0.1}>
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <HoverScale>
                  <div className="service-detailed-card">
                    <div className="service-detailed-icon">
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <div className="service-detailed-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <ul>
                        {service.features.map((f, j) => <li key={j}>{f}</li>)}
                      </ul>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ OUR WORK ═══ */}
      <section id="work" className="our-work">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">Successful projects we&apos;ve delivered for our clients</p>
          </FadeIn>

          <StaggerContainer className="work-grid" staggerDelay={0.12}>
            {projects.map((project, i) => (
              <StaggerItem key={i}>
                <div className="work-card">
                  <div className="work-image">
                    <img
                      src={project.img}
                      alt={`${project.name} Website`}
                      className="project-screenshot"
                      onClick={() => openImageLightbox(project.img, `${project.name} Website`)}
                    />
                    <div
                      className="work-overlay"
                      onClick={() => openImageLightbox(project.img, `${project.name} Website`)}
                    >
                      <div className="work-overlay-content">
                        <i className="fas fa-eye"></i>
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-content">
                    <div className="work-header">
                      <h3>{project.name}</h3>
                      <div className="work-tags">
                        {project.tags.map((tag, j) => <span key={j} className="work-tag">{tag}</span>)}
                      </div>
                    </div>
                    <p className="work-description">{project.desc}</p>
                    <div className="work-tech">
                      <div className="tech-stack">
                        {project.tech.map((t, j) => <span key={j} className="tech-item">{t}</span>)}
                      </div>
                    </div>
                    <div className="work-actions">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline work-btn">
                        <i className="fas fa-external-link-alt"></i> Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Testimonials */}
          <div className="testimonials-section">
            <FadeIn direction="up">
              <h3 className="testimonials-title">What Our Clients Say</h3>
            </FadeIn>

            <StaggerContainer className="testimonials-grid" staggerDelay={0.1}>
              {testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <HoverScale scale={1.02}>
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="testimonial-stars">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <i key={j} className={j < t.stars ? 'fas fa-star' : 'far fa-star'}></i>
                          ))}
                        </div>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-author">
                          <div className="author-info">
                            <h4>{t.name}</h4>
                            <span className="author-title">{t.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn direction="up">
            <div className="work-cta">
              <h3>Ready to Start Your Project?</h3>
              <p>Let&apos;s discuss how we can bring your vision to life with modern web solutions.</p>
              <a href="#contact" className="btn btn-primary btn-large">Get Started Today</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="contact">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind? We&apos;d love to hear about it.</p>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="contact-content">
              <form className="contact-form" action="https://formsubmit.co/khixarn@gmail.com" method="POST">
                <h3>Send Us a Message</h3>
                <input type="hidden" name="_subject" value="New Contact Form Submission from Senyo Solutions" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://senyosolutions.com/thank-you" />
                <div className="form-group">
                  <input type="text" name="Company Name" placeholder="Company Name" required />
                </div>
                <div className="form-group">
                  <input type="text" name="Contact Person" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="Phone Number" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select id="serviceRequested" name="Service Requested" aria-label="Service Requested" required>
                    <option value="">Select a Service</option>
                    <option value="Website Creation">Website Creation</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Marketing Services">Marketing Services</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="All Services">All Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="Project Details" placeholder="Tell us about your project..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      <div id="imageLightbox" className="lightbox-modal">
        <div className="lightbox-content">
          <div className="lightbox-header">
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
            <h3 id="lightboxTitle">Project Screenshot</h3>
            <div className="lightbox-controls">
              <button className="zoom-btn" onClick={zoomIn} title="Zoom In">
                <i className="fas fa-search-plus"></i>
              </button>
              <button className="zoom-btn" onClick={zoomOut} title="Zoom Out">
                <i className="fas fa-search-minus"></i>
              </button>
              <button className="zoom-btn" onClick={resetZoom} title="Reset Zoom">
                <i className="fas fa-expand-arrows-alt"></i>
              </button>
            </div>
          </div>
          <div className="lightbox-image-container">
            <img id="lightboxImage" src="" alt="" className="lightbox-image" />
            <div className="zoom-info">
              <span id="zoomLevel">100%</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CollaborativeCursors />
    </>
  );
}

/* ─── LIGHTBOX FUNCTIONS ────────────────────────────── */
let currentZoom = 1;

function openImageLightbox(imageSrc: string, imageTitle: string) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
  const lightboxTitle = document.getElementById('lightboxTitle');
  if (!lightbox || !lightboxImage || !lightboxTitle) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageTitle;
  lightboxTitle.textContent = imageTitle;
  currentZoom = 1;
  lightboxImage.style.transform = 'scale(1)';
  updateZoomLevel();
  lightbox.classList.add('show');
  lightbox.style.display = 'flex';
  document.addEventListener('keydown', handleLightboxKeys);
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  if (!lightbox) return;
  lightbox.classList.remove('show');
  setTimeout(() => { lightbox.style.display = 'none'; }, 300);
  document.removeEventListener('keydown', handleLightboxKeys);
  document.body.style.overflow = 'auto';
}

function zoomIn() { if (currentZoom < 3) { currentZoom += 0.25; applyZoom(); } }
function zoomOut() { if (currentZoom > 0.5) { currentZoom -= 0.25; applyZoom(); } }
function resetZoom() {
  currentZoom = 1;
  const img = document.getElementById('lightboxImage') as HTMLImageElement;
  if (img) img.style.transform = 'scale(1) translate(0px, 0px)';
  updateZoomLevel();
}

function applyZoom() {
  const img = document.getElementById('lightboxImage') as HTMLImageElement;
  if (img) {
    const cur = img.style.transform || '';
    const m = cur.match(/translate\(([^,]+),\s*([^)]+)\)/);
    const tx = m ? m[1] : '0px';
    const ty = m ? m[2] : '0px';
    img.style.transform = `scale(${currentZoom}) translate(${tx}, ${ty})`;
  }
  updateZoomLevel();
}

function updateZoomLevel() {
  const el = document.getElementById('zoomLevel');
  if (el) el.textContent = Math.round(currentZoom * 100) + '%';
}

function handleLightboxKeys(e: KeyboardEvent) {
  switch (e.key) {
    case 'Escape': closeLightbox(); break;
    case '+': case '=': zoomIn(); break;
    case '-': zoomOut(); break;
    case '0': resetZoom(); break;
  }
}
