'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }

    // Smooth scrolling for anchor links
    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          const target = document.querySelector(targetId);
          if (target) {
            const navbarHeight = document.querySelector('.navbar')?.clientHeight || 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 30;
            window.scrollTo({ top: Math.max(0, targetPosition), behavior: 'smooth' });
            if (targetId === '#contact') {
              setTimeout(() => {
                const firstInput = target.querySelector('input[type="text"]') as HTMLInputElement;
                if (firstInput) firstInput.focus();
              }, 1000);
            }
          }
        });
      });
    };

    // Tilt effects
    const initTiltEffects = () => {
      document.querySelectorAll('[data-tilt]').forEach(element => {
        const el = element as HTMLElement;
        el.addEventListener('mousemove', function (e: MouseEvent) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        el.addEventListener('mouseleave', function () {
          el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      });
    };

    // Hero content animation
    const heroContent = document.querySelector('.hero-content') as HTMLElement;
    if (heroContent) {
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(30px)';
      setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 100);
    }

    // Scroll-triggered animations for service cards
    const scrollElements = document.querySelectorAll('.service-card');
    scrollElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
      htmlEl.style.transition = 'all 0.6s ease-in-out';
    });

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (elementTop <= windowHeight / 1.25) {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    initSmoothScrolling();
    initTiltEffects();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">Web Design &amp; Digital Marketing</p>
            <h1 className="hero-title">
              We build websites that <span className="gradient-text">grow your business</span>
            </h1>
            <p className="hero-subtitle">
              Modern web design, reliable hosting, and data-driven marketing — all in one place.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-large" href="#contact">Get Started</a>
              <Link className="btn btn-outline btn-large" href="/services">Our Services</Link>
            </div>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Existing client?{' '}
              <Link href="/client-portal" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <p className="section-eyebrow">Our Process</p>
            <h2 className="section-title">From idea to launch in 3 simple steps</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery</h3>
                <p>We learn your goals, audit competitors, and map out a strategy tailored to your business.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design &amp; Build</h3>
                <p>High-converting layouts, fast hosting, and all tracking pixels ready from day one.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Launch &amp; Grow</h3>
                <p>SEO, ads, and ongoing optimization with transparent monthly reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Services */}
      <section className="digital-services">
        <div className="container">
          <h2 className="section-title">Our Digital Marketing Services</h2>
          <p className="section-subtitle">We are committed to providing our customers with exceptional service.</p>
          <div className="services-detailed-grid">
            {[
              { icon: 'fa-paint-brush', title: 'Web Design', desc: 'Create stunning, responsive websites that capture your brand essence and convert visitors into customers with modern design principles.', features: ['Responsive Design', 'User Experience Optimization', 'Brand Integration', 'Performance Optimization'] },
              { icon: 'fa-search', title: 'Search Engine Optimization', desc: "Improve your website's visibility in search results and drive organic traffic through proven SEO strategies and techniques.", features: ['Keyword Research & Analysis', 'On-Page Optimization', 'Technical SEO Audits', 'Content Strategy'] },
              { icon: 'fa-server', title: 'Web Hosting', desc: 'Reliable, secure, and fast web hosting solutions that keep your website running smoothly 24/7 with professional support.', features: ['99.9% Uptime Guarantee', 'Daily Backups & Security', 'Scalable Plans', '24/7 Technical Support'] },
              { icon: 'fa-chart-line', title: 'Strategy & Reporting', desc: 'Data-driven marketing strategies with comprehensive reporting to track performance and optimize your digital presence.', features: ['Marketing Strategy Development', 'Performance Analytics', 'ROI Tracking & Reporting', 'Competitive Analysis'] },
              { icon: 'fa-bullhorn', title: 'Digital Advertising', desc: 'Maximize your reach and ROI with targeted advertising campaigns across Google, Facebook, and other major platforms.', features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Campaign Optimization', 'A/B Testing & Analytics'] },
            ].map((service, i) => (
              <div key={i} className="service-detailed-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="our-work">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Successful projects we&apos;ve delivered for our clients</p>
          <div className="work-grid">
            {[
              { name: 'Janooon Cafe', img: '/images/Janoooncafe.png', tags: ['Restaurant', 'Web Design'], desc: 'A modern, elegant website for a South Asian cafe featuring authentic flavors and contemporary design. Built with responsive design and integrated menu system.', tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'], url: 'https://janoooncafe.com' },
              { name: 'RelianceRX', img: '/images/reliancerx.png', tags: ['Pharmaceutical', 'E-commerce'], desc: 'A comprehensive pharmaceutical solutions platform with product catalog, inventory management, and professional healthcare services integration.', tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Database Integration'], url: 'https://reliancerx.us' },
              { name: 'Blank Saga', img: '/images/Blank Saga.png', tags: ['Fashion', 'E-commerce'], desc: 'A contemporary fashion e-commerce platform showcasing minimalist street wear and modern clothing collections. Built with clean design aesthetics and seamless shopping experience.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Shopping Cart'], url: 'https://blanksaga.com/' },
              { name: 'JPRO Interiors', img: '/images/JPRO.png', tags: ['Construction', 'Interior Design'], desc: 'Professional construction and interior design company website featuring project galleries, service offerings, and client portfolio. Modern design reflecting quality craftsmanship.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Portfolio Gallery'], url: 'https://jprocorp.com/' },
              { name: 'Love Romani', img: '/images/Love Romani.png', tags: ['Fashion', 'Lifestyle'], desc: 'Elegant lifestyle and fashion brand website featuring curated collections, brand storytelling, and sophisticated user experience. Designed to reflect luxury and modern aesthetics.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Brand Showcase'], url: 'https://loveromani.com/' },
            ].map((project, i) => (
              <div key={i} className="work-card" data-tilt>
                <div className="work-image">
                  <img src={project.img} alt={`${project.name} Website`} className="project-screenshot" onClick={() => openImageLightbox(project.img, `${project.name} Website`)} />
                  <div className="work-overlay" onClick={() => openImageLightbox(project.img, `${project.name} Website`)}>
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
                      <i className="fas fa-external-link-alt"></i>
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="testimonials-section">
            <h3 className="testimonials-title">What Our Clients Say</h3>
            <div className="testimonials-grid">
              {[
                { stars: 5, text: '"Senyo Solutions created an absolutely stunning website for our restaurant. Their attention to detail and understanding of our brand was exceptional. The site is fast, beautiful, and has significantly increased our online orders."', name: 'Janooon Cafe', title: 'Restaurant & Catering', delay: 100 },
                { stars: 5, text: '"The team at Senyo Solutions delivered a comprehensive pharmaceutical platform that exceeded our expectations. Their technical expertise and reliable hosting services have been instrumental in our business growth."', name: 'RelianceRX', title: 'Pharmaceutical Solutions', delay: 200 },
                { stars: 4, text: '"Outstanding marketing services and SEO optimization! Our online visibility increased by 300% within just 3 months. The team\'s strategic approach and continuous support have been game-changing for our business."', name: 'Hot Pilates Secrets', title: 'Fitness Studio', delay: 300 },
                { stars: 5, text: '"Their web hosting service is incredibly reliable. We\'ve had 99.9% uptime and the migration process was seamless and professional."', name: 'JPro Interiors', title: 'Construction Company', delay: 400 },
                { stars: 4, text: '"Amazing web design work! They perfectly captured our brand aesthetic and created a stunning e-commerce site. Our sales have doubled since launching the new website. The design is modern, user-friendly, and mobile-optimized."', name: 'Blank Saga', title: 'Clothing Brand', delay: 500 },
                { stars: 5, text: '"Professional web design and reliable hosting all in one package. They built our fashion website from scratch and handle all the technical aspects. The site loads fast and looks incredible on all devices."', name: 'Love Romani', title: 'Clothing Brand', delay: 600 },
              ].map((testimonial, i) => (
                <div key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={testimonial.delay}>
                  <div className="testimonial-content">
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <i key={j} className={j < testimonial.stars ? 'fas fa-star' : 'far fa-star'}></i>
                      ))}
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span className="author-title">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="work-cta">
            <h3>Ready to Start Your Project?</h3>
            <p>Let&apos;s discuss how we can bring your vision to life with modern web solutions.</p>
            <a href="#contact" className="btn btn-primary btn-large">Get Started Today</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
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
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
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

// Lightbox functions - defined at module level for the client component
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

function zoomIn() {
  if (currentZoom < 3) { currentZoom += 0.25; applyZoom(); }
}

function zoomOut() {
  if (currentZoom > 0.5) { currentZoom -= 0.25; applyZoom(); }
}

function resetZoom() {
  currentZoom = 1;
  const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
  if (lightboxImage) lightboxImage.style.transform = 'scale(1) translate(0px, 0px)';
  updateZoomLevel();
}

function applyZoom() {
  const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
  if (lightboxImage) {
    const currentTransform = lightboxImage.style.transform || 'scale(1) translate(0px, 0px)';
    const translateMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
    const translateX = translateMatch ? translateMatch[1] : '0px';
    const translateY = translateMatch ? translateMatch[2] : '0px';
    lightboxImage.style.transform = `scale(${currentZoom}) translate(${translateX}, ${translateY})`;
  }
  updateZoomLevel();
}

function updateZoomLevel() {
  const zoomLevelElement = document.getElementById('zoomLevel');
  if (zoomLevelElement) zoomLevelElement.textContent = Math.round(currentZoom * 100) + '%';
}

function handleLightboxKeys(e: KeyboardEvent) {
  switch (e.key) {
    case 'Escape': closeLightbox(); break;
    case '+': case '=': zoomIn(); break;
    case '-': zoomOut(); break;
    case '0': resetZoom(); break;
  }
}
