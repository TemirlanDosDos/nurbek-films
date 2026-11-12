import { t, language, initLanguage } from './i18n.js';
const $ = (selector) => document.querySelector(selector);
let catalog=[], filter='all', limit=6, currentProject=null;
const hero=$('#hero-video'), player=$('#film-player'), dialog=$('#film-dialog');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let heroVisible=true, userPaused=false;
const time=seconds=>{const total=Math.round(seconds);return Math.floor(total/60)+':'+String(total%60).padStart(2,'0');};
const category=project=>project.category==='property'?t('Real estate','Недвижимость'):t('Content','Контент');
const title=project=>project.category==='hero'?t('CutMedia — Featured video','CutMedia — Главный ролик'):category(project)+' / '+String(project.number).padStart(2,'0');
function syncHero(){
 const shouldPlay=heroVisible&&!userPaused&&!reducedMotion.matches&&!document.hidden&&!dialog.open;
 if(shouldPlay) hero.play().catch(()=>{}); else hero.pause();
}
function syncPauseLabel(){
 $('.ambient-toggle').textContent=hero.paused?'▶':'Ⅱ';
 $('.ambient-toggle').setAttribute('aria-label',hero.paused?t('Play background video','Воспроизвести фоновое видео'):t('Pause background video','Приостановить фоновое видео'));
}
$('.ambient-toggle').addEventListener('click',()=>{
 userPaused=!hero.paused;
 if(!userPaused) hero.play().catch(()=>{}); else hero.pause();
});
hero.addEventListener('play',syncPauseLabel);hero.addEventListener('pause',syncPauseLabel);
hero.addEventListener('error',()=>{$('.ambient-toggle').hidden=true;});
new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;syncHero();},{threshold:.15}).observe(hero);
document.addEventListener('visibilitychange',syncHero);
reducedMotion.addEventListener('change',syncHero);
function openVideo(project){
 currentProject=project;
 $('#film-title').textContent=title(project);
 $('#film-category').textContent=project.category==='hero'?'CUTMEDIA':category(project);
 $('#film-duration').textContent=time(project.duration);
 $('#video-error').hidden=true;$('#video-direct').hidden=true;
 player.poster=project.poster;player.src=project.video;
 $('#video-direct').href=project.video;
 dialog.showModal();document.body.classList.add('modal-open');hero.pause();
 player.load();player.play().catch(()=>{});
}
$('[data-open-hero]').addEventListener('click',()=>openVideo(catalog.find(p=>p.category==='hero')||{category:'hero',video:'./media/videos/hero.mp4',poster:'./media/posters/hero.jpg',duration:18.51}));
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load();currentProject=null;document.body.classList.remove('modal-open');syncHero();});
dialog.addEventListener('click',event=>{
 if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();
 if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
});
player.addEventListener('error',()=>{if(player.getAttribute('src')){$('#video-error').hidden=false;$('#video-direct').hidden=false;}});
function renderProjects(){
 const list=catalog.filter(p=>p.category!=='hero'&&(filter==='all'||p.category===filter));
 const container=$('#projects');container.replaceChildren();
 for(const project of list.slice(0,limit)){
  const article=document.createElement('article');article.className='project';
  const button=document.createElement('button');button.className='project-media'+(project.landscape?' landscape':'');
  button.setAttribute('aria-label',t('Play: ','Смотреть: ')+title(project));
  const img=document.createElement('img');img.src=project.poster;img.alt=title(project);img.loading='lazy';img.decoding='async';
  const badge=document.createElement('span');badge.className='project-format';badge.textContent=project.landscape?'16:9':'9:16';
  const play=document.createElement('span');play.className='project-play';play.textContent='▶';play.setAttribute('aria-hidden','true');
  const duration=document.createElement('span');duration.className='project-duration';duration.textContent=time(project.duration);
  button.append(img,badge,play,duration);button.addEventListener('click',()=>openVideo(project));
  const meta=document.createElement('div');meta.className='project-meta';const h3=document.createElement('h3');h3.textContent=title(project);
  const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');meta.append(h3,arrow);article.append(button,meta);container.append(article);
 }
 $('#work-count').textContent=t('Showing ','Показано ')+Math.min(limit,list.length)+' / '+list.length;
 $('#show-more').hidden=limit>=list.length;
 document.querySelectorAll('[data-filter]').forEach(button=>{
  button.classList.toggle('active',button.dataset.filter===filter);
  button.setAttribute('aria-pressed',String(button.dataset.filter===filter));
  const count=catalog.filter(p=>p.category!=='hero'&&(button.dataset.filter==='all'||p.category===button.dataset.filter)).length;
  button.querySelector('b').textContent=String(count).padStart(2,'0');
 });
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;limit=6;renderProjects();}));
$('#show-more').addEventListener('click',()=>{limit+=6;renderProjects();});
const links=[...document.querySelectorAll('.navigation a')];
const sectionObserver=new IntersectionObserver(entries=>{
 for(const entry of entries){if(!entry.isIntersecting)continue;
 links.forEach(link=>{const active=link.dataset.section===entry.target.id;link.classList.toggle('current',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
 }
},{rootMargin:'-15% 0px -65% 0px',threshold:0});
document.querySelectorAll('.chapter').forEach(section=>sectionObserver.observe(section));
new IntersectionObserver(entries=>{if(entries[0].isIntersecting)links.forEach(link=>{link.classList.remove('current');link.removeAttribute('aria-current');});},{threshold:.4}).observe($('.hero'));
initLanguage(()=>{
 renderProjects();syncPauseLabel();
 if(currentProject){$('#film-title').textContent=title(currentProject);$('#film-category').textContent=currentProject.category==='hero'?'CUTMEDIA':category(currentProject);}
 const message=t('Hello CutMedia! I would like to discuss creating content.','Здравствуйте, CutMedia! Хочу обсудить создание контента.');
 $('#contact-link').href='https://wa.me/77054996852?text='+encodeURIComponent(message);
 const packages={start:t('Monthly content — 15 videos — 15,000 AED/month','Контент на месяц — 15 видео — 15 000 AED/месяц'),growth:t('Extended content — 20 videos — 20,000 AED/month','Расширенный контент — 20 видео — 20 000 AED/месяц'),scale:t('Scale — 25 videos — from 25,000 AED/month; international shoots quoted separately','Масштаб — 25 видео — от 25 000 AED/месяц; заграничные выезды рассчитываются отдельно')};
 document.querySelectorAll('[data-package]').forEach(link=>{link.href='https://wa.me/77054996852?text='+encodeURIComponent(t('Hello CutMedia! I would like to discuss the package: ','Здравствуйте, CutMedia! Хочу обсудить пакет: ')+packages[link.dataset.package]);});
});
try{
 const response=await fetch('./projects.json');
 if(!response.ok)throw new Error('catalog');
 catalog=await response.json();
 catalog.sort((a,b)=>(a.category==='property'?0:a.category==='content'?1:2)-(b.category==='property'?0:b.category==='content'?1:2)||a.number-b.number);
 renderProjects();
}catch{const status=$('#gallery-status');status.hidden=false;status.textContent=t('The portfolio could not load. Please refresh the page.','Не удалось загрузить портфолио. Обновите страницу.');}
syncHero();

