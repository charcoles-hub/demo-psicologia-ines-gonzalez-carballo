const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.rv').forEach((el) => {
  if (reduce) { el.classList.add('in'); return; }
  io.observe(el);
});

const fmt = (v: number, dec: number) => v.toFixed(dec).replace('.', ',');
const co = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (!e.isIntersecting) return;
    co.unobserve(e.target);
    const el = e.target as HTMLElement;
    const end = parseFloat(el.dataset.count || '0');
    const dec = parseInt(el.dataset.dec || '0', 10);
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const k = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(end * k, dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });
if (!reduce) document.querySelectorAll('[data-count]').forEach((el) => co.observe(el));

const comp = document.getElementById('comp');
if (comp) {
  const r = comp.querySelector('input') as HTMLInputElement;
  const set = () => comp.style.setProperty('--pos', r.value + '%');
  r.addEventListener('input', set);
  set();
  if (!reduce) {
    const hint = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      hint.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const p = (t - t0) / 1800;
        if (p >= 1 || r.dataset.touched) return;
        r.value = String(50 + Math.sin(p * Math.PI * 2) * 18 * (1 - p));
        set();
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.7 });
    hint.observe(comp);
    ['pointerdown', 'keydown'].forEach((ev) => r.addEventListener(ev, () => { r.dataset.touched = '1'; }));
  }
}
