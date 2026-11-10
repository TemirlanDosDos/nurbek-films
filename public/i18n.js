export let language = 'en';
try { language = localStorage.getItem('portfolio-language') === 'ru' ? 'ru' : 'en'; } catch {}
export const t = (en, ru) => language === 'en' ? en : ru;
const translations = {
  '.skip-link': 'Skip to content',
  '.desktop-nav a:nth-child(1)': 'Selected work',
  '.desktop-nav a:nth-child(2)': 'Approach',
  '.desktop-nav a:nth-child(3)': 'The team',
  '.header-cta': 'Let’s talk <span>↗</span>',
  '#mobile-nav a:nth-child(1)': 'Selected work',
  '#mobile-nav a:nth-child(2)': 'Approach',
  '#mobile-nav a:nth-child(3)': 'The team',
  '#mobile-nav a:nth-child(4)': 'Let’s talk ↗',
  '.hero .eyebrow': '<span class="status-dot"></span> INDEPENDENT FILMMAKING TEAM <span class="hero-edition">KAZAKHSTAN · RUSSIA · DUBAI</span>',
  'h1': 'Every place<br>has a <span class="serif">story.</span><br><span class="muted">We bring it to life.</span>',
  '.hero-bottom p': 'Films that reveal the feeling of a place.<br class="desktop-break"> For real estate that deserves to be seen.',
  '.hero-bottom .pill': 'Explore our work <span>↗</span>',
  '.reel-bottom h2': 'More than a place.<br><em>A feeling.</em>',
  '.reel-caption': 'VISUAL DIRECTION<br>SHOWREEL COMING SOON',
  '.reel-foot span:first-child': 'FROM A FIRST IMPRESSION TO A LASTING CONNECTION',
  '#work .section-heading h2': 'Space. With a <span class="serif">story.</span>',
  '#work .section-heading p': 'A new perspective on every place.<br>A different rhythm for every story.',
  '[data-filter="all"]': 'All work',
  '[data-filter="architecture"]': 'Architecture',
  '[data-filter="interiors"]': 'Interiors',
  '[data-filter="aerial"]': 'Aerial',
  '.draft-note': 'A preview of our visual direction. Portfolio films are being curated; images below are mood references.',
  '.approach h2': 'You create places.<br><span class="muted">We create</span><br><span class="serif">a feeling.</span>',
  '.approach-intro': 'A building can be shown. Or its story can be told. We believe in films that make people see the possibility of a place.',
  '.steps article:nth-child(1) h3': 'Start with meaning',
  '.steps article:nth-child(1) p': 'The vision, the audience, the character of the property. The story begins long before the first frame.',
  '.steps article:nth-child(2) h3': 'Find the perspective',
  '.steps article:nth-child(2) p': 'Light, movement and composition reveal architectural scale and the smallest considered details.',
  '.steps article:nth-child(3) h3': 'Make it felt',
  '.steps article:nth-child(3) p': 'Editing, colour and sound bring individual moments together into a film worth watching to the end.',
  '#team .section-heading h2': 'Different minds.<br>One <span class="serif">vision.</span>',
  '#team .section-heading p': 'Based in Astana. Working across<br>Kazakhstan, Russia and Dubai.',
  '.contact h2': 'The next story<br>could be <span class="serif">yours.</span>',
  '.contact-bottom p': 'Tell us about your property.<br>Let’s find the story that sets it apart.',
  '#contact-button': 'Let’s talk on WhatsApp <span>↗</span>',
  '.footer>span:nth-child(3)': '© 2026 · CutMedia',
  '.footer>a:last-child': 'Back to top ↑',
  '.film-empty h3': 'A story is on its way.',
  '.film-empty>p:first-of-type': 'This film has not been added yet. You are exploring the portfolio preview.',
  '.local-hint': 'Local preview only. Your video stays on this computer and is not published.',
  '#work .eyebrow': '01 / SELECTED WORK',
  '#approach .eyebrow': '02 / THE APPROACH',
  '#team .eyebrow': '03 / PEOPLE BEHIND THE FRAME',
  '.reel-top': 'THE ART OF SEEING DIFFERENTLY',
  '.reel-bottom .small-label': 'A DIFFERENT PERSPECTIVE',
  '.reel-foot span:last-child': 'SCROLL TO EXPLORE ↓',
  '.contact .eyebrow': '<span class="status-dot"></span> LET’S MAKE SOMETHING MEANINGFUL',
  '.footer>span:nth-child(2)': 'REAL ESTATE. REAL STORIES.',
  '#video-error': 'This video could not be played. Try an H.264 MP4 or WebM file.'
};
const originals = new Map();
export function initLanguage(onChange) {
  for (const selector of Object.keys(translations)) {
    const el = document.querySelector(selector); if (el) originals.set(selector, el.innerHTML);
  }
  const button = document.querySelector('.language-toggle');
  const apply = () => {
    document.documentElement.lang = language;
    for (const [selector, english] of Object.entries(translations)) {
      const el = document.querySelector(selector); if (el) el.innerHTML = language === 'en' ? english : originals.get(selector);
    }
    button.innerHTML = language === 'en' ? 'EN <span>/ RU</span>' : 'RU <span>/ EN</span>';
    button.setAttribute('aria-label', t('Switch to Russian', 'Переключить на английский'));
    document.querySelector('.menu-toggle').setAttribute('aria-label', t('Open menu','Открыть меню'));
    document.querySelector('.brand').setAttribute('aria-label', t('Home','На главную'));
    document.querySelector('.showreel').setAttribute('aria-label', t('Featured film','Главный фильм'));
    document.querySelector('.filters').setAttribute('aria-label', t('Filter projects','Фильтр работ'));
    document.querySelector('[data-play="hero"]').setAttribute('aria-label', t('Open showreel','Открыть шоурил'));
    document.querySelector('.reel-poster').alt = t('Architecture mood reference','Архитектура — референс настроения');
    document.querySelectorAll('.close-dialog').forEach(el => el.setAttribute('aria-label',t('Close dialog','Закрыть окно')));
    const label = document.querySelector('label.local-preview');
    label.childNodes[0].textContent = t('Preview your own video','Посмотреть своё видео');
    if (language === 'ru') {
      const russianLabels = {'#work .eyebrow':'01 / ИЗБРАННЫЕ РАБОТЫ','#approach .eyebrow':'02 / НАШ ПОДХОД','#team .eyebrow':'03 / ЛЮДИ ЗА КАДРОМ','.reel-top':'ИСКУССТВО ВИДЕТЬ ИНАЧЕ','.reel-bottom .small-label':'НОВЫЙ ВЗГЛЯД','.reel-foot span:last-child':'ЛИСТАЙТЕ ДАЛЬШЕ ↓','.footer>span:nth-child(2)':'МЕСТА. ЛЮДИ. ИСТОРИИ.'};
      for (const [selector,text] of Object.entries(russianLabels)) document.querySelector(selector).textContent = text;
      document.querySelector('.contact .eyebrow').innerHTML = '<span class="status-dot"></span> СОЗДАДИМ ИСТОРИЮ СО СМЫСЛОМ';
      document.querySelector('.hero .eyebrow').innerHTML = '<span class="status-dot"></span> НЕЗАВИСИМАЯ КИНОКОМАНДА <span class="hero-edition">КАЗАХСТАН · РОССИЯ · ДУБАЙ</span>';
      document.querySelector('#team .section-heading p').innerHTML = 'База — Астана. Работаем в Казахстане,<br>России и Дубае.';
      document.querySelector('#contact-button').innerHTML = 'Обсудить в WhatsApp <span>↗</span>';
      document.querySelector('.footer>span:nth-child(3)').textContent = '© 2026 · CutMedia';
    }
    document.title = t('CutMedia — Real Estate Films','CutMedia — фильмы о недвижимости');
    document.querySelector('meta[name="description"]').content = t('Real estate films by CutMedia. Based in Astana. Available in Kazakhstan, Russia and Dubai.','Фильмы о недвижимости от CutMedia. Астана, Казахстан, Россия и Дубай.');
    onChange();
  };
  button.addEventListener('click', () => { language = language === 'en' ? 'ru' : 'en'; try { localStorage.setItem('portfolio-language',language); } catch {} apply(); });
  apply();
}
