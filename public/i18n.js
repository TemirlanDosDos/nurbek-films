export let language = 'en';
try { language = localStorage.getItem('portfolio-language') === 'ru' ? 'ru' : 'en'; } catch {}
export const t = (en, ru) => language === 'en' ? en : ru;
const ru = {
skip:'К содержимому',navWork:'Работы',navServices:'Услуги',navTeam:'Команда',navContact:'Связаться',
heroEyebrow:'ИДЕЯ. СЪЁМКА. КОНТЕНТ.',heroTitle:'Контент,<br>с которым вас<br><em>замечают.</em>',
heroDescription:'Превращаем то, что вы делаете, в контент, который хочется смотреть. От первой идеи до готового ролика.',
viewWork:'Смотреть работы',startProject:'Обсудить проект ↗',based:'БАЗА — АСТАНА',locations:'Казахстан · Россия · Дубай',
featured:'В ЦЕНТРЕ ВНИМАНИЯ',watchSound:'Смотреть со звуком',realWork:'НАШ КОНТЕНТ. НАШ ПОДХОД.',discover:'ПОСМОТРИТЕ, ЧТО МЫ СОЗДАЁМ',
workLabel:'НАШИ РАБОТЫ',workCaption:'МЕНЬШЕ СЛОВ. БОЛЬШЕ КОНТЕНТА.',workTitle:'Результат<br><em>в кадре.</em>',
workDescription:'Недвижимость, бренды и контент для соцсетей.<br>Найдите формат для вашего следующего проекта.',
all:'Все работы',property:'Недвижимость',content:'Контент',showMore:'Показать ещё',
servicesLabel:'ЧТО МЫ ДЕЛАЕМ',servicesCaption:'ОДНА КОМАНДА. ВЕСЬ ПРОЦЕСС.',servicesTitle:'Ваше дело.<br><em>Наш контент.</em>',
servicesDescription:'Вы занимаетесь своим бизнесом.<br>Мы берём на себя идею, съёмку и монтаж.',
service1Title:'Контент с задачей',service1Text:'Определяем, что сказать, кому и в каком формате. Собираем из этого понятную концепцию и план съёмки.',service1Tag:'ИДЕЯ · СЦЕНАРИЙ · ПЛАН',
service2Title:'Ваш лучший ракурс',service2Text:'Снимаем продукт, пространство или людей. Работаем со светом, композицией и деталями, которые важны для вашей аудитории.',service2Tag:'ЛЮДИ · БРЕНДЫ · НЕДВИЖИМОСТЬ',
service3Title:'Готово к публикации',service3Text:'Монтаж, цвет, звук и титры собирают материал в готовый контент. Адаптируем его под ваши площадки.',service3Tag:'МОНТАЖ · ЗВУК · ФОРМАТЫ',
teamLabel:'КОМАНДА',teamCaption:'ТРИ ЧЕЛОВЕКА. ОБЩИЙ ПОДХОД.',teamTitle:'Ваша команда<br><em>по контенту.</em>',
teamDescription:'Каждый отвечает за своё дело.<br>Вместе ведём контент от идеи до публикации.',
name1:'Нурбек',name2:'Малик-Ибн-Анас',name3:'Ислам',role1:'Контент-продюсер',role2:'Оператор',role3:'Монтажёр',
task1:'Концепция, планирование и организация.',task2:'Камера, свет и композиция.',task3:'Монтаж, ритм и финальный результат.',
contactLabel:'НАЧНЁМ С РАЗГОВОРА',contactTitle:'Начнём<br><em>с вашей идеи.</em>',
contactDescription:'Объект, продукт или новый запуск?<br>Расскажите о задаче. Начнём с идеи.',whatsapp:'Написать в WhatsApp',
footerLine:'КОНТЕНТ СО СМЫСЛОМ.',backTop:'Наверх ↑',videoError:'Не удалось загрузить видео. Попробуйте ещё раз.',openVideo:'Открыть видео напрямую ↗'
};
const english = new Map();
export function initLanguage(onChange) {
 document.querySelectorAll('[data-i18n]').forEach(el=>english.set(el,el.innerHTML));
 const button=document.querySelector('.language-toggle');
 function apply(){
  document.documentElement.lang=language;
  for(const [el,text] of english) el.innerHTML=language==='ru'?(ru[el.dataset.i18n]||text):text;
  button.innerHTML=language==='en'?'EN <span>/ RU</span>':'RU <span>/ EN</span>';
  button.setAttribute('aria-label',t('Switch to Russian','Переключить на английский'));
  document.querySelector('.close-dialog').setAttribute('aria-label',t('Close video','Закрыть видео'));
  document.querySelector('.navigation').setAttribute('aria-label',t('Sections','Разделы сайта'));
  document.querySelector('.filters').setAttribute('aria-label',t('Portfolio categories','Категории работ'));
  document.querySelector('#hero-video').setAttribute('aria-label',t('Featured CutMedia video','Главный ролик CutMedia'));
  document.title=t('CutMedia — Content that gets you noticed','CutMedia — контент, с которым вас замечают');
  document.querySelector('meta[name=description]').content=t('CutMedia creates content for brands, real estate and social media. Astana · Kazakhstan · Russia · Dubai.','CutMedia — контент для бизнеса, недвижимости и соцсетей. Астана · Казахстан · Россия · Дубай.');
  onChange();
 }
 button.addEventListener('click',()=>{language=language==='en'?'ru':'en';try{localStorage.setItem('portfolio-language',language);}catch{}apply();});
 apply();
}

