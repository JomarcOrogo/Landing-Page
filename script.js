document.addEventListener('DOMContentLoaded', function() {
  
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.03)';
      this.style.boxShadow = '0 25px 50px rgba(66, 153, 225, 0.15)';
      
      const icon = this.querySelector('.feature-icon');
      if (icon) {
        icon.style.background = 'linear-gradient(135deg, #63b3ed, #4299e1)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
      
      const icon = this.querySelector('.feature-icon');
      if (icon) {
        icon.style.background = 'linear-gradient(135deg, #4299e1, #3182ce)';
      }
    });
  });
  
  function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
      greeting = "Good morning! Stay hydrated today!";
    } else if (hour < 18) {
      greeting = "Good afternoon! Time for a water break!";
    } else {
      greeting = "Good evening! Don't forget to hydrate!";
    }
    
    const greetingElement = document.getElementById('timeGreeting');
    if (greetingElement) {
      greetingElement.textContent = greeting;
    }
    
    const heroGreeting = document.getElementById('heroGreeting');
    if (heroGreeting) {
      heroGreeting.textContent = greeting.split('!')[0] + '!';
    }
  }
  
  updateGreeting();
  
  setInterval(updateGreeting, 60000);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
    
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
  
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
      
      if (this.classList.contains('pricing-btn')) {
        const planName = this.closest('.pricing-card').querySelector('h3').textContent;
        alert(`Thank you for selecting ${planName}! This is a demo site. In a real application, you would be redirected to checkout.`);
      }
      
      if (this.classList.contains('primary-btn') && this.textContent.includes('Buy Now')) {
        alert('Thank you for your interest in EcoBottle! This is a demo site. In a real application, you would be redirected to the product page.');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      navbar.style.padding = '20px 0';
    }
  });
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  setTimeout(animateOnScroll, 300);
  
  window.addEventListener('scroll', animateOnScroll);
  
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput.value && emailInput.value.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});