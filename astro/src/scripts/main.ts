/**
 * All client-side behavior for the site (~2 KB):
 * sticky header, mobile nav toggle, scroll-reveal, lightbox.
 * Replaces lozad + FontFaceObserver + jQuery-era scripts from the Hugo site.
 */

/* ---------- Sticky header ---------- */
const header = document.getElementById('header');
if (header) {
  let ticking = false;
  const update = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 15);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

/* ---------- Mobile nav toggle ---------- */
const toggler = document.querySelector<HTMLButtonElement>('.nav-toggler');
const navMenu = document.getElementById('nav-menu');
if (toggler && navMenu) {
  toggler.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggler.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggler.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Scroll reveal ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealNodes = document.querySelectorAll<HTMLElement>('.reveal');
if (reduceMotion) {
  revealNodes.forEach((el) => el.classList.add('is-visible'));
} else if (revealNodes.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  revealNodes.forEach((el) => observer.observe(el));
}

/* ---------- Lightbox (portfolio images) ---------- */
const lightbox = document.getElementById('lightbox') as HTMLDialogElement | null;
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img')!;
  const closeBtn = lightbox.querySelector<HTMLButtonElement>('.lightbox-close')!;

  const open = (src: string, alt: string) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.showModal();
  };

  document.querySelectorAll<HTMLElement>('.img-zoom-wrapper').forEach((wrapper) => {
    const img = wrapper.querySelector('img');
    if (!img) return;
    const trigger = () => open(img.currentSrc || img.src, img.alt);
    wrapper.addEventListener('click', trigger);
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger();
      }
    });
  });

  closeBtn.addEventListener('click', () => lightbox.close());
  // Click on the backdrop (outside the image) closes the dialog
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImg.src = '';
  });
}

/* ---------- Expandable grid descriptions ---------- */
document.querySelectorAll<HTMLButtonElement>('.more-card__toggle').forEach((btn) => {
  const card = btn.closest('.more-card');
  const desc = card?.querySelector<HTMLElement>('.more-card__desc');
  if (!card || !desc) return;

  // Only surface the toggle when the clamped text is actually truncated.
  const overflows = desc.scrollHeight - desc.clientHeight > 2;
  if (!overflows) return;
  btn.classList.add('is-shown');

  btn.addEventListener('click', () => {
    const expanded = card.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
    btn.textContent = expanded ? (btn.dataset.less ?? 'Read less') : (btn.dataset.more ?? 'Read more');
  });
});
