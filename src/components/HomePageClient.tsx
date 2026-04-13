'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  HoverGlow,
  ParallaxText,
  ParallaxScroll,
  FloatingElement,
  RotatingElement,
  TextReveal,
  AnimatedCounter,
  ImageReveal,
  MagneticHover,
  AnimatedGradientBg,
  ScrollProgressBar,
  ParticleField,
  MorphingBlob,
  AnimatedLine,
  PulseEffect,
  AnimatedDivider,
  AnimatedIcon,
} from '@/components/MotionWrapper';

/* ─── DATA ────────────────────────────────────────── */
const services = [
  { icon: 'fa-paint-brush', title: 'Web Design', href: '/services/web-design', desc: 'Create stunning, responsive websites that capture your brand essence and convert visitors into customers with modern design principles.', features: ['Responsive Design', 'User Experience Optimization', 'Brand Integration', 'Performance Optimization'] },
  { icon: 'fa-search', title: 'Search Engine Optimization', href: '/services/seo', desc: "Improve your website's visibility in search results and drive organic traffic through proven SEO strategies and techniques.", features: ['Keyword Research & Analysis', 'On-Page Optimization', 'Technical SEO Audits', 'Content Strategy'] },
  { icon: 'fa-server', title: 'Web Hosting', href: '/services/hosting', desc: 'Reliable, secure, and fast web hosting solutions that keep your website running smoothly 24/7 with professional support.', features: ['99.9% Uptime Guarantee', 'Daily Backups & Security', 'Scalable Plans', '24/7 Technical Support'] },
  { icon: 'fa-chart-line', title: 'Analytics & Reporting', href: '/services/analytics', desc: 'Data-driven marketing strategies with comprehensive reporting to track performance and optimize your digital presence.', features: ['Performance Analytics', 'ROI Tracking & Reporting', 'Funnel Insights', 'Competitive Analysis'] },
  { icon: 'fa-bullhorn', title: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Maximize your reach and ROI with targeted marketing campaigns across Google, Meta, and other major platforms.', features: ['Campaign Management', 'Audience Targeting', 'Conversion Optimization', 'A/B Testing & Analytics'] },
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

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
  { value: 5, suffix: '+', label: 'Years Experience' },
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
      <ScrollProgressBar />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="home" className="hero" style={{ position: 'relative' }}>
        {/* Animated background elements */}
        <ParticleField count={25} />
        <AnimatedGradientBg />

        {/* Floating decorative blobs */}
        <MorphingBlob
          className="hero-blob-1"
          color="rgba(37,99,235,0.07)"
          size={350}
        />
        <MorphingBlob
          className="hero-blob-2"
          color="rgba(6,182,212,0.05)"
          size={280}
        />

        {/* Floating geometric decorations */}
        <FloatingElement className="hero-deco hero-deco-1" duration={7} distance={15}>
          <RotatingElement duration={25}>
            <div className="deco-shape deco-diamond" />
          </RotatingElement>
        </FloatingElement>
        <FloatingElement className="hero-deco hero-deco-2" duration={5} distance={10} delay={1}>
          <div className="deco-shape deco-circle" />
        </FloatingElement>
        <FloatingElement className="hero-deco hero-deco-3" duration={8} distance={12} delay={2}>
          <RotatingElement duration={30}>
            <div className="deco-shape deco-cross" />
          </RotatingElement>
        </FloatingElement>
        <FloatingElement className="hero-deco hero-deco-4" duration={6} distance={8} delay={0.5}>
          <div className="deco-shape deco-ring" />
        </FloatingElement>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ParallaxText>
            <div className="hero-content">
              <motion.p
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
                <motion.span
                  className="gradient-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    backgroundSize: '200% 200%',
                    background: 'linear-gradient(135deg, var(--primary-light), var(--accent), var(--primary-light))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  grow your business
                </motion.span>
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
                <MagneticHover strength={0.15}>
                  <a className="btn btn-primary btn-large btn-shimmer" href="#contact">
                    Get Started
                    <span className="btn-shine" />
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <Link className="btn btn-outline btn-large" href="/services">Our Services</Link>
                </MagneticHover>
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

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down" />
          </div>
        </motion.div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="stats-bar">
        <div className="container">
          <StaggerContainer className="stats-grid" staggerDelay={0.15}>
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="stat-item">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="stat-number"
                    duration={2}
                  />
                  <span className="stat-label">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background deco */}
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.04)" size={300} />

        <div className="container">
          <FadeIn direction="up">
            <div className="process-header">
              <motion.p
                className="section-eyebrow"
                whileInView={{ letterSpacing: ['0.12em', '0.18em', '0.12em'] }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                Our Process
              </motion.p>
              <h2 className="section-title">From idea to launch in 3 simple steps</h2>
              <AnimatedLine />
            </div>
          </FadeIn>

          <StaggerContainer className="process-timeline" staggerDelay={0.2}>
            {[
              { num: '01', title: 'Discovery', desc: 'We learn your goals, audit competitors, and map out a strategy tailored to your business.', icon: 'fa-compass' },
              { num: '02', title: 'Design & Build', desc: 'High-converting layouts, fast hosting, and all tracking pixels ready from day one.', icon: 'fa-code' },
              { num: '03', title: 'Launch & Grow', desc: 'SEO, ads, and ongoing optimization with transparent monthly reports.', icon: 'fa-rocket' },
            ].map((step, i) => (
              <StaggerItem key={step.num}>
                <HoverGlow>
                  <div className="process-step">
                    <AnimatedIcon delay={i * 0.15}>
                      <div className="step-icon-circle">
                        <i className={`fas ${step.icon}`} />
                      </div>
                    </AnimatedIcon>
                    <div className="step-number">{step.num}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                    {/* Card shimmer line */}
                    <motion.div
                      className="card-shimmer"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </HoverGlow>
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
                {[0.3, 0.9, 1.5].map((d, i) => (
                  <motion.div
                    key={i}
                    className={`process-connector-dot dot-${['start', 'mid', 'end'][i]}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: d }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="digital-services" style={{ position: 'relative', overflow: 'hidden' }}>
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.04)" size={350} />

        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              We are committed to providing our customers with exceptional service.
            </p>
            <AnimatedDivider />
          </FadeIn>

          <StaggerContainer className="services-detailed-grid" staggerDelay={0.1}>
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <HoverGlow>
                  <div className="service-detailed-card">
                    <AnimatedIcon delay={i * 0.08}>
                      <div className="service-detailed-icon">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                    </AnimatedIcon>
                    <div className="service-detailed-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <ul>
                        {service.features.map((f, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * j + 0.3, duration: 0.3 }}
                          >
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                      <Link href={service.href} className="btn btn-outline" style={{ marginTop: 14, alignSelf: 'flex-start' }}>
                        Learn More
                      </Link>
                    </div>
                    <motion.div
                      className="card-shimmer"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </HoverGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ OUR WORK ═══ */}
      <section id="work" className="our-work" style={{ position: 'relative', overflow: 'hidden' }}>
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.03)" size={400} />

        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">Successful projects we&apos;ve delivered for our clients</p>
            <AnimatedDivider />
          </FadeIn>

          <StaggerContainer className="work-grid" staggerDelay={0.12}>
            {projects.map((project, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="work-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageReveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                    <div className="work-image">
                      <img
                        src={project.img}
                        alt={`${project.name} Website`}
                        className="project-screenshot"
                        onClick={() => openImageLightbox(project.img, `${project.name} Website`)}
                      />
                      <button
                        type="button"
                        className="work-overlay"
                        onClick={() => openImageLightbox(project.img, `${project.name} Website`)}
                        aria-label={`View ${project.name} project screenshot`}
                      >
                        <span className="work-overlay-content">
                          <i className="fas fa-eye"></i>
                          <span>View</span>
                        </span>
                      </button>
                    </div>
                  </ImageReveal>
                  <div className="work-content">
                    <div className="work-header">
                      <h3>{project.name}</h3>
                      <div className="work-tags">
                        {project.tags.map((tag, j) => (
                          <motion.span
                            key={j}
                            className="work-tag"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(37,99,235,0.2)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <p className="work-description">{project.desc}</p>
                    <div className="work-tech">
                      <div className="tech-stack">
                        {project.tech.map((t, j) => (
                          <motion.span
                            key={j}
                            className="tech-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.05 + 0.2 }}
                            whileHover={{ borderColor: 'var(--primary)', color: 'var(--primary-light)' }}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div className="work-actions">
                      <MagneticHover strength={0.2}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline work-btn">
                          <i className="fas fa-external-link-alt"></i> Visit Site
                        </a>
                      </MagneticHover>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Testimonials */}
          <div className="testimonials-section">
            <FadeIn direction="up">
              <h3 className="testimonials-title">What Our Clients Say</h3>
              <AnimatedDivider />
            </FadeIn>

            <StaggerContainer className="testimonials-grid" staggerDelay={0.1}>
              {testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <HoverGlow>
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="testimonial-stars">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <motion.i
                              key={j}
                              className={j < t.stars ? 'fas fa-star' : 'far fa-star'}
                              initial={{ opacity: 0, scale: 0, rotate: -180 }}
                              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: j * 0.08 + 0.2, type: 'spring', stiffness: 200 }}
                            />
                          ))}
                        </div>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-author">
                          <motion.div
                            className="author-avatar"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {t.name.charAt(0)}
                          </motion.div>
                          <div className="author-info">
                            <h4>{t.name}</h4>
                            <span className="author-title">{t.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverGlow>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScaleIn>
            <div className="work-cta">
              <ParallaxScroll speed={0.1}>
                <h3>Ready to Start Your Project?</h3>
                <p>Let&apos;s discuss how we can bring your vision to life with modern web solutions.</p>
                <MagneticHover strength={0.15}>
                  <PulseEffect>
                    <a href="#contact" className="btn btn-primary btn-large btn-shimmer">
                      Get Started Today
                      <span className="btn-shine" />
                    </a>
                  </PulseEffect>
                </MagneticHover>
              </ParallaxScroll>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleField count={15} />
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.04)" size={300} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn direction="up">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind? We&apos;d love to hear about it.</p>
            <AnimatedDivider />
          </FadeIn>

          <ScaleIn delay={0.15}>
            <div className="contact-content">
              <motion.form
                className="contact-form"
                action="https://formsubmit.co/khixarn@gmail.com"
                method="POST"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>Send Us a Message</h3>
                <input type="hidden" name="_subject" value="New Contact Form Submission from Senyo Solutions" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://senyosolutions.com/thank-you" />

                {[
                  { type: 'text', name: 'Company Name', placeholder: 'Company Name' },
                  { type: 'text', name: 'Contact Person', placeholder: 'Your Name' },
                  { type: 'email', name: 'email', placeholder: 'Email Address' },
                  { type: 'tel', name: 'Phone Number', placeholder: 'Phone Number' },
                ].map((field, i) => (
                  <motion.div
                    key={field.name}
                    className="form-group"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                  >
                    <input type={field.type} name={field.name} placeholder={field.placeholder} required className="form-input-animated" />
                  </motion.div>
                ))}

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <select id="serviceRequested" name="Service Requested" aria-label="Service Requested" required className="form-input-animated">
                    <option value="">Select a Service</option>
                    <option value="Website Creation">Website Creation</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Marketing Services">Marketing Services</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="All Services">All Services</option>
                  </select>
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <textarea name="Project Details" placeholder="Tell us about your project..." rows={5} required className="form-input-animated"></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <MagneticHover strength={0.1}>
                    <button type="submit" className="btn btn-primary btn-shimmer" style={{ width: '100%' }}>
                      <i className="fas fa-paper-plane"></i> Send Message
                      <span className="btn-shine" />
                    </button>
                  </MagneticHover>
                </motion.div>
              </motion.form>
            </div>
          </ScaleIn>
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