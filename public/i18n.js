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
servicesLabel:'СТРАТЕГИЯ И ПАКЕТЫ',servicesCaption:'ОДНА КОМАНДА. ВЕСЬ ПРОЦЕСС.',servicesTitle:'Сначала план.<br><em>Затем контент.</em>',
servicesDescription:'Content Production &amp; Strategy<br>Dubai / RU / KZ',
planTitle:'Основа вашего контент-плана.',planIntro:'Согласуем темы, сценарии и календарь публикаций с учётом ваших предложений, аудитории и воронки продаж.',
pillar1Title:'Объекты и предложения',pillar1Text:'Обзоры объектов, условия покупки и преимущества, которые выделяют ваш проект.',
pillar2Title:'Вопросы инвестора',pillar2Text:'Ключевые цифры, сценарии сделки, сравнения и ответы на частые возражения.',
pillar3Title:'Люди и доверие',pillar3Text:'Экспертиза команды, интервью со спикерами и знакомство с вашим подходом к работе.',
pillar4Title:'Локации и рынки',pillar4Text:'Районы, инфраструктура и сообщения, адаптированные под ключевые регионы продаж.',
planFlow1:'Анализ',planFlow2:'Темы',planFlow3:'Сценарии',planFlow4:'Календарь публикаций',
pricingEyebrow:'ВЫБЕРИТЕ СВОЙ МАСШТАБ',pricingTitle:'Пакеты услуг',included:'Что входит',discussPackage:'Обсудить пакет',flagship:'ФЛАГМАН',
package1Title:'Старт / Точечный запуск',package1Description:'Идеально для запуска рекламной кампании одного объекта или тестирования гипотез.',package1Result:'готовых премиальных видео',
package1Item1:'Разработка продающих сценариев под ваши офферы.',package1Item2:'Продакшн силами нашей команды: съёмка на локациях в Дубае.',package1Item3:'Профессиональный монтаж, саунд-дизайн, трендовые субтитры.',
package2Title:'Системный трафик',package2Description:'Для брендов, которым нужен стабильный поток лидов и регулярное присутствие в соцсетях.',package2Result:'готовых видео в месяц',
package2Item1:'Контент-план на месяц с учётом воронки продаж.',package2Item2:'Сценарии с фокусом на инвесторские боли и цифры.',package2Item3:'Регулярный продакшн: до 4 съёмочных дней в месяц в Дубае.',package2Item4:'Полный цикл постпродакшна.',
package3Title:'Международный масштаб',package3Description:'Комплексное решение для застройщиков, работающих на нескольких рынках — ОАЭ и СНГ. Закрывает потребность в контенте сразу в нескольких локациях.',package3Result:'готовых видео в месяц для охвата аудитории в разных регионах',
package3Item1:'Глубокая контент-стратегия на основе анализа рынка и целевой аудитории.',package3Item2:'Утверждённый контент-план под ключевые регионы продаж.',package3Item3:'<strong>Дубай:</strong> до 4 выездов на объекты за месяц.',package3Item4:'<strong>Москва / СНГ:</strong> выезд съёмочной группы на 2–3 дня для работы с топ-менеджментом, спикерами, офисами продаж и мероприятиями.',package3Item5:'Премиальный монтаж, цветокоррекция, дизайн и адаптация под Reels, TikTok и Shorts.',
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

