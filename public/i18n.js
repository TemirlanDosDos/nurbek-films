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
mainPackage:"ОСНОВНОЙ ПАКЕТ",
monthlyPrice:"AED / месяц",
package1Usd:"≈ 4 100 USD / месяц",
package2Usd:"≈ 5 500 USD / месяц",
package3Usd:"от ≈ 6 900 USD / месяц",
currencyNote:"Стоимость пакетов указана в AED. Эквивалент в USD — ориентировочный, по курсу 1 USD = 3,6725 AED с округлением вверх до сотен долларов.",
priceFrom:"от",
monthlyVideos:"готовых видео в месяц",
mainPackageCta:"Обсудить мой контент-план",
package1Title:"Контент на месяц",
package1Description:"Контент для вашего бизнеса на месяц. Одна команда ведёт весь процесс: от плана и сценариев до съёмки и монтажа.",
package1Days:"До 3 съёмочных дней в Дубае",
package1Item1:"Стартовая встреча: разбираем продукт, аудиторию и задачи контента.",
package1Item2:"Контент-план на месяц: 15 тем и календарь публикаций.",
package1Item3:"15 индивидуальных сценариев, согласованных до съёмки.",
package1Item4:"Организация съёмки и помощь спикерам в кадре.",
package1Item5:"Монтаж, цветокоррекция, звук и субтитры для всех 15 видео.",
package2Title:"Расширенный контент",
package2Description:"Больше контента для ваших объектов, продуктов и спикеров — с единым планом публикаций на месяц.",
package2Days:"До 4 съёмочных дней в Дубае",
package2Item1:"Стартовая встреча и контент-план на месяц: 20 тем и календарь публикаций.",
package2Item2:"20 индивидуальных сценариев по согласованным рубрикам.",
package2Item3:"Организация съёмок на ваших локациях и помощь спикерам в кадре.",
package2Item4:"Монтаж, цветокоррекция, звук и субтитры для всех 20 видео.",
package3Title:"Масштаб",
package3Description:"Большой объём контента для нескольких объектов, продуктов или рынков. Заграничные выезды рассчитываются отдельно.",
package3Days:"До 5 съёмочных дней в Дубае",
package3Item1:"Контент-стратегия с учётом аудитории и выбранных рынков.",
package3Item2:"План на месяц: 25 тем, индивидуальные сценарии и календарь публикаций.",
package3Item3:"Организация съёмок и помощь вашей команде и спикерам в кадре.",
package3Item4:"Монтаж, цветокоррекция, звук и субтитры для всех 25 видео.",
package3Item5:"Заграничные съёмки можно добавить по отдельно согласованной программе и смете.",
termsTitle:"Понятные условия для каждого пакета.",
videoTermTitle:"Что считается видео",
videoTermText:"Одно готовое видео — съёмка и монтаж по согласованному сценарию. Контент-план и сценарии входят в работу отдельно и не увеличивают количество видео.",
deliveryTermTitle:"Поэтапная выдача",
deliveryTermText:"Первые версии роликов с одного съёмочного дня — ориентировочно через 2–3 дня после съёмки. Финальная выдача учитывает согласование и правки.",
revisionsTermTitle:"До 3 раундов правок",
revisionsTermText:"На каждый ролик, единым списком комментариев в каждом раунде. Пересъёмки и изменения утверждённого сценария обсуждаются отдельно.",
shootTermTitle:"Согласованная съёмка",
shootTermText:"Длительность и сложность роликов, а также часы съёмочного дня согласуем заранее с учётом сценариев и объёма работы.",
travelTitle:"Заграничные выезды — отдельный расчёт",
travelText:"Заграничные выезды команды, перелёты, проживание и местный транспорт не включены в стоимость пакетов. Программу и бюджет поездки согласуем заранее.",
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

