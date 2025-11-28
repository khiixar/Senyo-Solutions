document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initSmoothScrolling();
    initAnimations();
    initContactForm();
    initTiltEffects();
    initDarkMode();
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

function initSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    setTimeout(() => {
        document.querySelectorAll('a[href="#contact"]').forEach(link => {
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            
            newLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                const target = document.querySelector('#contact');
                if (target) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 50;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    setTimeout(() => {
                        const firstInput = target.querySelector('input[name="Company Name"]');
                        if (firstInput) firstInput.focus();
                    }, 1000);
                }
            });
        });
    }, 100);
}

// 3D Elements Initialization
function init3DElements() {

}

// Interactive Sphere 
function createInteractiveSphere() {
    const sphereContainer = document.getElementById('interactiveSphere');
    if (!sphereContainer) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    sphereContainer.appendChild(renderer.domElement);

    // Create sphere geometry 
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x2563eb, 
        transparent: true, 
        opacity: 0.7,
        wireframe: true 
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add inner sphere
    const innerGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const innerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x7c3aed, 
        transparent: true, 
        opacity: 0.3 
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    camera.position.z = 5;

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Mouse move event listener
    sphereContainer.addEventListener('mousemove', function(event) {
        const rect = sphereContainer.getBoundingClientRect();
        mouseX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        mouseY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        
        targetRotationX = mouseY * 0.5;
        targetRotationY = mouseX * 0.5;
    });

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth rotation towards target
        sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.05;
        sphere.rotation.y += (targetRotationY - sphere.rotation.y) * 0.05;
        
        innerSphere.rotation.x -= 0.005;
        innerSphere.rotation.y += 0.01;
        
        // Subtle floating motion
        sphere.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        innerSphere.position.y = Math.cos(Date.now() * 0.0015) * 0.05;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Hero 3D Background
function createHero3DBackground() {
    const heroBackground = document.getElementById('hero3d');
    if (!heroBackground) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    heroBackground.appendChild(renderer.domElement);

    // Create floating particles
    const particleCount = 100;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    for (let i = 0; i < particleCount; i++) {
        positions.push(
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50
        );
        
        colors.push(
            Math.random(),
            Math.random() * 0.5 + 0.5,
            1
        );
    }

    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        
        particleSystem.rotation.y += 0.002;
        particleSystem.rotation.x += 0.001;
        
        renderer.render(scene, camera);
    }
    
    animate();

    // Handle resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Interactive Canvas Creation
function createInteractiveCanvas() {
    const canvasContainer = document.getElementById('interactiveCanvas');
    if (!canvasContainer) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    canvasContainer.appendChild(renderer.domElement);

    // Create interactive nodes that respond to mouse
    const nodes = [];
    const nodeCount = 5;
    
    for (let i = 0; i < nodeCount; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(i / nodeCount, 0.8, 0.6),
            transparent: true,
            opacity: 0.8
        });
        const node = new THREE.Mesh(geometry, material);
        
        // Random initial positions
        node.position.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2
        );
        
        node.userData = {
            originalPosition: node.position.clone(),
            targetPosition: node.position.clone()
        };
        
        nodes.push(node);
        scene.add(node);
    }

    camera.position.z = 8;

    // Mouse interaction
    let mouse = new THREE.Vector2();
    let raycaster = new THREE.Raycaster();

    canvasContainer.addEventListener('mousemove', function(event) {
        const rect = canvasContainer.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        
        nodes.forEach(node => {
            const distance = raycaster.ray.distanceToPoint(node.position);
            if (distance < 2) {
                const force = (2 - distance) / 2;
                const direction = new THREE.Vector3()
                    .subVectors(node.position, raycaster.ray.origin)
                    .normalize()
                    .multiplyScalar(force * 0.5);
                
                node.userData.targetPosition.copy(node.userData.originalPosition)
                    .add(direction);
            } else {
                node.userData.targetPosition.copy(node.userData.originalPosition);
            }
        });
    });

    function animate() {
        requestAnimationFrame(animate);
        
        nodes.forEach((node, index) => {
            // Smooth movement towards target
            node.position.lerp(node.userData.targetPosition, 0.1);
            
            // Gentle rotation
            node.rotation.x += 0.01;
            node.rotation.y += 0.015;
            
            // Connect nearby nodes with lines
            nodes.forEach((otherNode, otherIndex) => {
                if (index < otherIndex) {
                    const distance = node.position.distanceTo(otherNode.position);
                    if (distance < 3) {
                        const geometry = new THREE.BufferGeometry().setFromPoints([
                            node.position, otherNode.position
                        ]);
                        const material = new THREE.LineBasicMaterial({ 
                            color: 0x60a5fa,
                            transparent: true,
                            opacity: Math.max(0, 1 - distance / 3) * 0.3
                        });
                        const line = new THREE.Line(geometry, material);
                        scene.add(line);
                        
                        // Remove line after one frame to avoid memory leak
                        setTimeout(() => scene.remove(line), 16);
                    }
                }
            });
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Animation Initialization
function initAnimations() {
    // smooth scrolling 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target && targetId !== '#') {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 30;
                
                // Use requestAnimationFrame 
                requestAnimationFrame(() => {
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                });
                
                // handling for contact form
                if (targetId === '#contact') {
                    setTimeout(() => {
                        const firstInput = target.querySelector('input[type="text"]');
                        if (firstInput) {
                            firstInput.focus();
                        }
                    }, 1000);
                }
            }
        });
    });
    
    // ensure buttons without href work properly
    initCallToActionButtons();

    // Animated counters for statistics
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(counter => {
        observer.observe(counter);
    });

    // Scroll-triggered animations for homepage only
    const scrollElements = document.querySelectorAll('.service-card');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    };

    const hideScrollElement = (element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-in-out';
    };

    // Only hide elements if  on the homepage
    if (document.querySelector('.hero')) {
        scrollElements.forEach((el) => {
            hideScrollElement(el);
        });

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };

        window.addEventListener('scroll', handleScrollAnimation);
    } else {
        document.querySelectorAll('.service-detail-card').forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
}

// Call-to-Action Button Smooth Scrolling
function initCallToActionButtons() {

    const ctaSelectors = [
        'a[href="#contact"]',
        '.btn[href="#contact"]',
        'button[data-scroll-to="contact"]'
    ];
    
    ctaSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                scrollToContact();
            });
        });
    });
}

// Smooth scroll to contact 
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 30;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            const firstInput = contactSection.querySelector('input[type="text"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 800);
    }
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Contact Form - Simple HTML 
function initContactForm() {
    console.log('Contact form initialized - using direct HTML submission to FormSubmit');
}

// Image Lightbox Functionality
let currentZoom = 1;
let isDragging = false;
let dragStartX, dragStartY, imageStartX, imageStartY;

function openImageLightbox(imageSrc, imageTitle) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    
    // Set image and title
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageTitle;
    lightboxTitle.textContent = imageTitle;
    
    // Reset zoom
    currentZoom = 1;
    lightboxImage.style.transform = 'scale(1)';
    updateZoomLevel();
    
    // Show lightbox
    lightbox.classList.add('show');
    lightbox.style.display = 'flex';
    
    // Add event listeners for dragging
    initImageDragging();
    
    // Add keyboard support
    document.addEventListener('keydown', handleLightboxKeys);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.classList.remove('show');
    
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
    
    // Remove event listeners
    document.removeEventListener('keydown', handleLightboxKeys);
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

function zoomIn() {
    if (currentZoom < 3) {
        currentZoom += 0.25;
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > 0.5) {
        currentZoom -= 0.25;
        applyZoom();
    }
}

function resetZoom() {
    currentZoom = 1;
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.transform = 'scale(1) translate(0px, 0px)';
    updateZoomLevel();
}

function applyZoom() {
    const lightboxImage = document.getElementById('lightboxImage');
    const currentTransform = lightboxImage.style.transform || 'scale(1) translate(0px, 0px)';
    const translateMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
    const translateX = translateMatch ? translateMatch[1] : '0px';
    const translateY = translateMatch ? translateMatch[2] : '0px';
    
    lightboxImage.style.transform = `scale(${currentZoom}) translate(${translateX}, ${translateY})`;
    updateZoomLevel();
}

function updateZoomLevel() {
    const zoomLevelElement = document.getElementById('zoomLevel');
    zoomLevelElement.textContent = Math.round(currentZoom * 100) + '%';
}

// Image dragging functionality
function initImageDragging() {
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    
    // Touch events for mobile
    lightboxImage.addEventListener('touchstart', startDragging);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDragging);
}

function startDragging(e) {
    if (currentZoom <= 1) return; // Only allow dragging when zoomed in
    
    isDragging = true;
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.cursor = 'grabbing';
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    dragStartX = clientX;
    dragStartY = clientY;
    
    // Get current translate values
    const currentTransform = lightboxImage.style.transform || 'scale(1) translate(0px, 0px)';
    const translateMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
    imageStartX = translateMatch ? parseFloat(translateMatch[1]) : 0;
    imageStartY = translateMatch ? parseFloat(translateMatch[2]) : 0;
    
    e.preventDefault();
}

function drag(e) {
    if (!isDragging || currentZoom <= 1) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const deltaX = (clientX - dragStartX) / currentZoom;
    const deltaY = (clientY - dragStartY) / currentZoom;
    
    const newX = imageStartX + deltaX;
    const newY = imageStartY + deltaY;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.transform = `scale(${currentZoom}) translate(${newX}px, ${newY}px)`;
    
    e.preventDefault();
}

function stopDragging() {
    isDragging = false;
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.cursor = 'grab';
}

// Keyboard support
function handleLightboxKeys(e) {
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case '+':
        case '=':
            zoomIn();
            break;
        case '-':
            zoomOut();
            break;
        case '0':
            resetZoom();
            break;
    }
}

// Close lightbox when clicking outside the image
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    
    if (e.target === lightbox && !lightboxContent.contains(e.target)) {
        closeLightbox();
    }
});

function showFormSuccess() {
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        ">
            <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
            <h3 style="margin-bottom: 10px;">Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon!</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 10px 20px;
                border-radius: 6px;
                margin-top: 15px;
                cursor: pointer;
            ">Close</button>
        </div>
    `;

    // Add animation keyframes if not already present
    if (!document.querySelector('#success-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'success-animation-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(successMessage);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (successMessage.parentElement) {
            successMessage.remove();
        }
    }, 5000);
}

function showFormError() {
    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        ">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
            <h3 style="margin-bottom: 10px;">Oops!</h3>
            <p>There was an error sending your message. Please try again or contact us directly at khizar.naeem27@gmail.com</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 10px 20px;
                border-radius: 6px;
                margin-top: 15px;
                cursor: pointer;
            ">Close</button>
        </div>
    `;

    document.body.appendChild(errorMessage);

    // Auto-remove after 7 seconds (longer for error)
    setTimeout(() => {
        if (errorMessage.parentElement) {
            errorMessage.remove();
        }
    }, 7000);
}

// Tilt Effects
function initTiltEffects() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transformStyle = 'preserve-3d';
        });

        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on page load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Dark Mode Functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference or default to light mode
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            const isDarkMode = body.classList.contains('dark-mode');
            
            // Save preference to localStorage
            if (isDarkMode) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
            
            updateToggleIcon(isDarkMode);
            
            // Add smooth transition effect
            body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                body.style.transition = '';
            }, 300);
        });
    }
}

function updateToggleIcon(isDarkMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    
    if (isDarkMode) {
        icon.className = 'fas fa-sun';
        darkModeToggle.title = 'Switch to Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        darkModeToggle.title = 'Switch to Dark Mode';
    }
}
