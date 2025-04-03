document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке страницы
    animateElements();

    // Обработчики для навигации
    setupNavigation();

    // Обработчик для кнопки героя
    setupHeroButton();

    // Анимация карточек при скролле
    setupScrollAnimation();
});

function animateElements() {
    // Анимация появления элементов
    gsap.from('.header-title', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.nav-item', {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.hero-text, .hero-button', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Удаляем активный класс у всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));

            // Добавляем активный класс текущей ссылке
            this.classList.add('active');

            // Здесь можно добавить загрузку контента для вкладки
            console.log(`Переход на: ${this.textContent}`);
        });
    });
}

function setupHeroButton() {
    const heroButton = document.querySelector('.hero-button');

    if (heroButton) {
        heroButton.addEventListener('click', function() {
            // Плавная прокрутка к разделу с таймлайном
            document.querySelector('.timeline').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками и элементами таймлайна
    document.querySelectorAll('.feature-card, .timeline-item').forEach(card => {
        observer.observe(card);
    });
}

// Добавляем простую анимацию для карточек при появлении
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .feature-card, .timeline-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .feature-card.animated, .timeline-item.animated {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);

// Дополнительные анимации для социальных кнопок
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-button');

    socialButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.1,
                ease: 'power3.out'
            });
        });

        button.addEventListener('mouseout', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power3.out'
            });
        });
    });
});