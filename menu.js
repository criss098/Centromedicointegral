 
// menu.js
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        // Smooth Scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Testimonial Slider
        const testimonials = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.testimonial-nav span');
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonials.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % testimonials.length;
            showSlide(nextSlide);
        }, 5000);
        
        // Form Submission
        const contactForm = document.getElementById('appointment-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            console.log({
                name,
                email,
                phone,
                service,
                message
            });
            
            // Show success message with Bootstrap-style alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'form-success';
            alertDiv.style.cssText = `
                background: var(--secondary);
                color: white;
                padding: 15px;
                border-radius: 5px;
                margin-bottom: 20px;
                text-align: center;
            `;
            alertDiv.innerHTML = `
                <p>¡Gracias ${name}!</p>
                <p>Tu solicitud para ${service} ha sido enviada.</p>
                <p>Nos comunicaremos contigo pronto.</p>
            `;
            contactForm.prepend(alertDiv);
            setTimeout(() => alertDiv.remove(), 5000);
            
            // Reset form
            contactForm.reset();
        });
        
        // Scroll Animation
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const windowHeight = window.innerHeight;
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                
                if(sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize sections to be animated
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease-out';
        });
        
        // Trigger first sections to appear
        setTimeout(() => {
            document.querySelector('.hero').style.opacity = '1';
            document.querySelector('.hero').style.transform = 'translateY(0)';
        }, 100);