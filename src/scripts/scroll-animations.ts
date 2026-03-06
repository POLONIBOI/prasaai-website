const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  // Auto-trigger hero lines on load with stagger
  document.querySelectorAll('.hero-line').forEach((el, i) => {
    const delays = [200, 350, 500, 650];
    setTimeout(() => el.classList.add('is-visible'), delays[i] || 200 + i * 150);
  });

  // Animated stat counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const duration = 1500;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

  // Chat message reveal animation
  const chatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLElement;
          const messages = container.querySelectorAll('[data-chat-animate]');
          const typing = container.querySelector('.typing-indicator');

          // Step 1: Show typing indicator (300ms)
          setTimeout(() => {
            if (typing) typing.classList.add('is-active');
          }, 300);

          // Step 2: Hide typing, show user message (700ms)
          setTimeout(() => {
            if (typing) typing.classList.remove('is-active');
            if (messages[0]) messages[0].classList.add('chat-visible');
          }, 700);

          // Step 3: Show typing again (1100ms)
          setTimeout(() => {
            if (typing) typing.classList.add('is-active');
          }, 1100);

          // Step 4: Hide typing, show bot message (1600ms)
          setTimeout(() => {
            if (typing) typing.classList.remove('is-active');
            if (messages[1]) messages[1].classList.add('chat-visible');
          }, 1600);

          chatObserver.unobserve(container);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-animate-chat]').forEach((el) => chatObserver.observe(el));
} else {
  // Reduced motion: show everything immediately
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = (el as HTMLElement).dataset.count || '0';
    const prefix = (el as HTMLElement).dataset.prefix || '';
    const suffix = (el as HTMLElement).dataset.suffix || '';
    el.textContent = prefix + parseInt(target, 10).toLocaleString() + suffix;
  });

  document.querySelectorAll('[data-chat-animate]').forEach((el) => {
    el.classList.add('chat-visible');
  });
}
