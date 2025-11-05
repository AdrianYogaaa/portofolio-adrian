// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sliders
    initializeSliders();
});

function initializeSliders() {
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(slider => {
        const slides = slider.querySelector('.slides');
        const slideCount = slider.querySelectorAll('.slide').length;
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        const dots = slider.querySelectorAll('.dot');
        
        let currentSlide = 0;
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        });
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        });
        
        // Dot click
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto slide (optional)
        let slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }, 5000);
        
        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            }, 5000);
        });
        
        function updateSlider() {
            // Update slide position
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Update slides
            const allSlides = slider.querySelectorAll('.slide');
            allSlides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Initialize slider
        updateSlider();
    });
}