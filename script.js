const translations = {
  en: {
    'nav.about':'About','nav.experience':'Experience','nav.work':'Selected Work','nav.contact':'Contact',
    'hero.eyebrow':'SOFTWARE ENGINEERING LEADER','hero.title1':'Engineer at heart.','hero.title2':'Leader by experience.','hero.description':'I build reliable software, scalable systems and high-performing engineering teams — combining hands-on engineering depth with technical leadership.','hero.cta':'Explore my experience','hero.contact':"Let's connect",'hero.scroll':'Scroll to explore',
    'metrics.tests':'E2E tests implemented','metrics.volume':'annual transaction volume','metrics.integrations':'API integrations','metrics.php':'PHP hands-on',
    'labels.about':'ABOUT','labels.experience':'EXPERIENCE','labels.work':'SELECTED WORK','labels.capabilities':'CAPABILITIES',
    'about.eyebrow':'THE ENGINEER BEHIND THE LEADER','about.title':'Technology is my craft.<br>Engineering is my mindset.','about.p1':'My career evolved from software development into QA, technical leadership and engineering management — while keeping a strong connection with code, architecture and engineering practices.','about.p2':'I work best where technology and people meet: turning complex problems into clear technical direction, improving engineering systems and helping teams deliver software that can be trusted.',
    'principles.arch':'Architecture','principles.archText':'Clean architecture, maintainability and APIs designed for change.','principles.quality':'Quality','principles.qualityText':'Automated testing, observability and reliability as engineering fundamentals.','principles.lead':'Leadership','principles.leadText':'Technical direction, mentoring and delivery without losing engineering depth.',
    'experience.eyebrow':'A CAREER BUILT THROUGH ENGINEERING','experience.title':'From code<br>to leadership.','timeline.present':'PRESENT','roles.manager':'Software Development Manager','roles.techlead':'Tech Lead · QA Engineer · Developer','roles.developer':'Software Developer',
    'jobs.aplis':'Leading software development for a pathology laboratory information system, combining engineering strategy, architecture, delivery and technical leadership.','jobs.rodo':'Worked across development, quality and technical leadership in fintech, including automated E2E testing and systems supporting high-volume financial operations.','jobs.bobby':'Migrated modules toward an API-first architecture and SPA model, including data import/export and integration with Brazilian education systems.',
    'work.featured':'FEATURED INTEGRATION','work.title':'Connecting digital pathology to AI.','work.description':'Led the LIS side of the first integration between Philips slide scanning technology and PathAI in Latin America, implemented at A.C.Camargo Cancer Center.','work.roleLabel':'ROLE','work.role':'LIS Technical Lead','work.domainLabel':'DOMAIN','work.domain':'Digital Pathology',
    'contact.eyebrow':"LET'S BUILD SOMETHING MEANINGFUL",'contact.title':'Good engineering<br>starts with a conversation.','contact.description':'Open to international opportunities, technical leadership conversations and ambitious engineering challenges.','contact.cta':'Start a conversation','footer.text':'Software Engineering · Leadership · Architecture'
  },
  pt: {
    'nav.about':'Sobre','nav.experience':'Experiência','nav.work':'Projetos','nav.contact':'Contato',
    'hero.eyebrow':'LÍDER DE ENGENHARIA DE SOFTWARE','hero.title1':'Engenheiro por essência.','hero.title2':'Líder por experiência.','hero.description':'Construo software confiável, sistemas escaláveis e times de engenharia de alta performance — combinando profundidade técnica com liderança.', 'hero.cta':'Explorar minha experiência','hero.contact':'Vamos conversar','hero.scroll':'Role para explorar',
    'metrics.tests':'testes E2E implementados','metrics.volume':'volume transacionado anual','metrics.integrations':'integrações de APIs','metrics.php':'experiência prática com PHP',
    'labels.about':'SOBRE','labels.experience':'EXPERIÊNCIA','labels.work':'PROJETOS SELECIONADOS','labels.capabilities':'COMPETÊNCIAS',
    'about.eyebrow':'O ENGENHEIRO POR TRÁS DO LÍDER','about.title':'Tecnologia é meu ofício.<br>Engenharia é minha mentalidade.','about.p1':'Minha carreira evoluiu de desenvolvimento de software para QA, liderança técnica e gestão de engenharia — mantendo uma forte conexão com código, arquitetura e boas práticas de engenharia.','about.p2':'Atuo melhor na interseção entre tecnologia e pessoas: transformando problemas complexos em direção técnica clara, evoluindo sistemas de engenharia e ajudando times a entregar software confiável.',
    'principles.arch':'Arquitetura','principles.archText':'Clean Architecture, manutenibilidade e APIs preparadas para evolução.','principles.quality':'Qualidade','principles.qualityText':'Testes automatizados, observabilidade e confiabilidade como fundamentos.','principles.lead':'Liderança','principles.leadText':'Direção técnica, mentoria e entrega sem perder profundidade de engenharia.',
    'experience.eyebrow':'UMA CARREIRA CONSTRUÍDA COM ENGENHARIA','experience.title':'Do código<br>à liderança.','timeline.present':'ATUAL','roles.manager':'Gerente de Desenvolvimento de Software','roles.techlead':'Tech Lead · Engenheiro de QA · Desenvolvedor','roles.developer':'Desenvolvedor de Software',
    'jobs.aplis':'Liderança do desenvolvimento de software de um sistema de informação laboratorial para anatomia patológica, combinando estratégia de engenharia, arquitetura, entrega e liderança técnica.','jobs.rodo':'Atuação em desenvolvimento, qualidade e liderança técnica em fintech, incluindo automação de testes E2E e sistemas que suportam operações financeiras de alto volume.','jobs.bobby':'Migração de módulos para uma arquitetura API-first e modelo SPA, incluindo importação/exportação de dados e integração com sistemas educacionais brasileiros.',
    'work.featured':'INTEGRAÇÃO EM DESTAQUE','work.title':'Conectando patologia digital à IA.','work.description':'Liderei a frente do LIS na primeira integração entre a tecnologia de escaneamento de lâminas da Philips e a PathAI na América Latina, implementada no A.C.Camargo Cancer Center.','work.roleLabel':'FUNÇÃO','work.role':'Líder Técnico do LIS','work.domainLabel':'DOMÍNIO','work.domain':'Patologia Digital',
    'contact.eyebrow':'VAMOS CONSTRUIR ALGO RELEVANTE','contact.title':'Boa engenharia<br>começa com uma conversa.','contact.description':'Aberto a oportunidades internacionais, conversas sobre liderança técnica e desafios ambiciosos de engenharia.','contact.cta':'Iniciar conversa','footer.text':'Engenharia de Software · Liderança · Arquitetura'
  }
};

let currentLang = localStorage.getItem('tb-lang') || 'en';
const toggle = document.getElementById('languageToggle');
const nav = document.querySelector('.nav');
const menuToggle = document.getElementById('menuToggle');

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value = translations[lang][el.dataset.i18n];
    if(value !== undefined) el.innerHTML = value;
  });
  toggle.innerHTML = `<span class="lang-active">${lang.toUpperCase()}</span><span>/</span><span>${lang === 'en' ? 'PT' : 'EN'}</span>`;
  localStorage.setItem('tb-lang', lang);
}

toggle.addEventListener('click',()=>applyLanguage(currentLang === 'en' ? 'pt' : 'en'));
menuToggle.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const header = document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      if(entry.target.classList.contains('metric')) animateMetric(entry.target);
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function animateMetric(el){
  const target = Number(el.dataset.count);
  const value = el.querySelector('[data-count]');
  if(!value || Number.isNaN(target)) return;
  const decimal = Number(el.dataset.decimal || 0);
  const duration = 1100; const start = performance.now();
  function frame(now){
    const p = Math.min((now-start)/duration,1); const eased = 1-Math.pow(1-p,3);
    value.textContent = (target*eased).toFixed(decimal);
    if(p<1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});

applyLanguage(currentLang);
