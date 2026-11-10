// ===== Welcome gallery (Figma "thanks": next/prev buttons + pics_amount dots) =====
const welcomePics = ['assets/welcome-bg.jpg', 'assets/hero-mid-top.png', 'assets/combo-photo.jpg'];
const welcomeBg = document.getElementById('welcomeBg');
const welcomeDots = [...document.querySelectorAll('#welcomeDots span')];
let pic = 0;
function showPic(i) {
  pic = (i + welcomePics.length) % welcomePics.length;
  welcomeBg.src = welcomePics[pic];
  welcomeDots.forEach((d, k) => d.classList.toggle('on', k === pic));
}
document.getElementById('welcomeNext').addEventListener('click', () => showPic(pic + 1));
document.getElementById('welcomePrev').addEventListener('click', () => showPic(pic - 1));

// ===== Category cards -> popup frames =====
// Figma: "danh mục sản phẩm khi click nến gốm" (128:53) / "...khi click tinh dầu" (114:416)
const modals = { gom: document.getElementById('modal-gom'), oil: document.getElementById('modal-oil') };
let lastFocus = null;
function openModal(key) {
  lastFocus = document.activeElement;
  modals[key].hidden = false;
  document.body.style.overflow = 'hidden';
  modals[key].querySelector('.modal-close').focus();
}
function closeModal(m) {
  m.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
document.querySelectorAll('[data-modal]').forEach(card =>
  card.addEventListener('click', () => openModal(card.dataset.modal)));
document.querySelectorAll('.modal-backdrop').forEach(b => {
  b.addEventListener('click', e => { if (e.target === b) closeModal(b); });
  b.querySelector('[data-close]').addEventListener('click', () => closeModal(b));
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-backdrop:not([hidden])').forEach(closeModal);
});

// ===== Capacity pills (single select; Figma selected state = inset top shadow) =====
document.querySelectorAll('.modal-pills').forEach(group =>
  group.addEventListener('click', e => {
    const pill = e.target.closest('.pill'); if (!pill) return;
    group.querySelectorAll('.pill').forEach(p => p.classList.remove('selected'));
    pill.classList.add('selected');
  }));

// ===== Popup thumbnail strip swaps the selected product photo =====
document.querySelectorAll('.modal-thumbs').forEach(strip => {
  const main = document.getElementById(strip.dataset.main);
  strip.addEventListener('click', e => {
    const img = e.target.closest('.thumb')?.querySelector('img');
    if (img && main) main.src = img.src;
  });
});
