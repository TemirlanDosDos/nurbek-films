import { content } from './content.js';
import { t, language, initLanguage } from './i18n.js';
const $ = (selector) => document.querySelector(selector);
const safeUrl = (value) => {
  if (!value) return '';
  try { const url = new URL(value, document.baseURI); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
};
document.querySelectorAll('[data-brand]').forEach(el => el.textContent = content.name);
$('#year').textContent = new Date().getFullYear();
const local = ['localhost', '127.0.0.1', '::1'].includes(location.hostname);
document.querySelectorAll('.local-preview').forEach(el => el.hidden = !local);
const menu = $('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? t('Close menu','Закрыть меню') : t('Open menu','Открыть меню')); $('#mobile-nav').hidden = !open;
});
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', t('Open menu','Открыть меню')); $('#mobile-nav').hidden = true; };
$('#mobile-nav').querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const player = $('#film-player');
const filmDialog = $('#film-dialog');
let objectUrl = '';
let resumeAmbient = false;
const ambient = $('#hero-video');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
function showDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open'); }
function setPlayer(source) {
  player.pause(); player.removeAttribute('src'); player.load();
  player.hidden = !source; $('#film-empty').hidden = !!source; $('#video-error').hidden = true;
  if (source) { player.src = source; player.load(); player.play().catch(() => {}); }
}
function openFilm(project) {
  resumeAmbient = !ambient.paused; ambient.pause();
  $('#film-title').textContent = project.title;
  $('#film-description').textContent = project.note || '';
  showDialog(filmDialog); setPlayer(safeUrl(project.video));
}
player.addEventListener('error', () => { if (player.getAttribute('src')) $('#video-error').hidden = false; });
filmDialog.addEventListener('close', () => {
  player.pause(); player.removeAttribute('src'); player.load();
  if (objectUrl) { URL.revokeObjectURL(objectUrl); objectUrl = ''; }
  $('#local-video').value = '';
  if (resumeAmbient && !motionPreference.matches) ambient.play().catch(() => {});
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
});
$('#local-video').addEventListener('change', event => {
  const file = event.target.files[0]; if (!file) return;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file); $('#film-title').textContent = file.name;
  $('#film-description').textContent = t('Local preview — this video is not published.','Локальный просмотр — видео не опубликовано.'); setPlayer(objectUrl);
});
document.querySelector('[data-play="hero"]').addEventListener('click', () => openFilm({title:t('Showreel','Шоурил'),video:content.heroVideo}));
const englishProjects = [
  {title:'Architecture takes the lead', label:'Architecture', format:'Property film', note:'Volume, light and the character of a place.'},
  {title:'A space to call home', label:'Interiors', format:'A story of space', note:'The details that make a house feel like home.'},
  {title:'A different sense of scale', label:'Aerial', format:'A view from above', note:'A place in the context of its city and landscape.'}
];
function renderProjects(filter = 'all') {
  const container = $('#projects'); container.replaceChildren();
  content.projects.forEach((original, index) => {
    const project = language === 'en' ? {...original,...englishProjects[index]} : original;
    if (filter !== 'all' && project.category !== filter) return;
    const card = document.createElement('article'); card.className = 'project';
    const button = document.createElement('button'); button.className = 'project-media'; button.setAttribute('aria-label', `${t('Watch','Смотреть')}: ${project.title}`);
    const image = document.createElement('img'); image.src = safeUrl(project.poster); image.alt = project.title; image.loading = 'lazy'; image.decoding = 'async';
    const play = document.createElement('span'); play.className = 'project-play'; play.textContent = '▶'; play.setAttribute('aria-hidden','true');
    const label = document.createElement('span'); label.className = 'project-label'; label.textContent = project.video ? project.label.toUpperCase() : `${project.label.toUpperCase()} / ${t('MOOD REFERENCE','КОНЦЕПЦИЯ')}`;
    button.append(image, label, play); button.addEventListener('click', () => openFilm(project));
    const meta = document.createElement('div'); meta.className = 'project-meta';
    const titleWrap = document.createElement('div'); const title = document.createElement('h3'); title.textContent = project.title;
    const description = document.createElement('p'); description.textContent = project.format; titleWrap.append(title,description);
    const number = document.createElement('span'); number.className = 'project-number'; number.textContent = `${String(index+1).padStart(2,'0')} ↗`;
    meta.append(titleWrap, number); card.append(button,meta); container.append(card);
  });
  $('#work-count').textContent = `${String(container.children.length).padStart(2,'0')} / ${t('IN FOCUS','В ФОКУСЕ')}`;
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(el => { el.classList.toggle('active', el === button); el.setAttribute('aria-pressed', String(el === button)); });
  renderProjects(button.dataset.filter);
}));
function renderTeam() {
  $('#team-members').replaceChildren();
  if (content.team.length) {
  $('#team-placeholder').hidden = true;
  content.team.forEach(person => {
    const card = document.createElement('article'); card.className = 'member';
    if (safeUrl(person.photo)) { const photo = document.createElement('img'); photo.src = safeUrl(person.photo); photo.alt = person.name; photo.loading = 'lazy'; card.append(photo); }
    if (!person.photo) { const portrait = document.createElement('div'); portrait.className = 'member-monogram'; portrait.textContent = person.monogram; portrait.setAttribute('aria-hidden','true'); card.append(portrait); }
    const title = document.createElement('h3'); title.textContent = language === 'ru' ? person.ruName : person.name;
    const role = document.createElement('p'); role.textContent = language === 'ru' ? person.ruRole : person.role; card.append(title,role); $('#team-members').append(card);
  });
  }
}
$('#contact-button').addEventListener('click', () => {
  const message = t('Hello! I would like to discuss filming a real estate project.','Здравствуйте! Хочу обсудить видеосъёмку объекта недвижимости.');
  window.open(`https://wa.me/${content.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
if (content.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)) {
  $('.contact-dialog-body p').textContent = 'Расскажите об объекте, сроках и задаче. Обсудим идею и следующий шаг.';
  const email = $('#email-link'); email.hidden = false; email.href = `mailto:${content.email}?subject=${encodeURIComponent('Обсудить видеосъёмку объекта')}`;
}
if (safeUrl(content.heroVideo)) {
  ambient.src = safeUrl(content.heroVideo); ambient.hidden = false;
  const toggle = $('#ambient-toggle'); toggle.hidden = false;
  $('.reel-caption').textContent = 'ШОУРИЛ КОМАНДЫ';
  const updateAmbientButton = () => { toggle.textContent = ambient.paused ? '▶' : 'Ⅱ'; toggle.setAttribute('aria-label', ambient.paused ? 'Воспроизвести фоновое видео' : 'Приостановить фоновое видео'); };
  ambient.addEventListener('play',updateAmbientButton); ambient.addEventListener('pause',updateAmbientButton);
  toggle.addEventListener('click', () => ambient.paused ? ambient.play().catch(() => {}) : ambient.pause());
  if (!motionPreference.matches) ambient.play().catch(() => {}); updateAmbientButton();
  motionPreference.addEventListener('change', e => { if (e.matches) ambient.pause(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) ambient.pause(); });
}
initLanguage(() => { closeMenu(); renderProjects(document.querySelector('[data-filter].active')?.dataset.filter || 'all'); renderTeam(); });
