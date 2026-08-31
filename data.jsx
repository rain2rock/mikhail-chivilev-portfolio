/* Real portfolio content — extracted from Mikhail's source. EN + RU. */

const COPY = {
  en: {
    name: "Chivilev Mikhail",
    role: "Product Designer",
    nameLine: "Mikhail — Product Designer",
    status: "Open to senior / lead product design roles",
    roles: ["Product Designer", "Design Systems Lead", "B2B SaaS Specialist", "Platform Designer"],
    cvLink: "https://drive.google.com/uc?export=download&id=1uyaYVoX9uaeku04SQcvomC_j9bZgDWoP",
    summary: "Product designer with 10+ years of experience designing complex enterprise and B2B products, including fintech platforms and customer-facing B2C solutions. Focused on shaping scalable systems, analytics-heavy workflows, and shared design foundations. Hands-on IC with leadership experience, partnering closely with product and engineering to drive platform-level design decisions.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download CV",
    companies: ["InnoTech", "iDeals", "Sberbank", "Sovkombank", "BARS Group"],
    nav: { skills: "Skills", experience: "Experience", leadership: "Leadership", portfolio: "Portfolio", contact: "Contact" },
    impactLabel: "Impact",
    sections: {
      skillsK: "What I do", skillsT: "Core Skills",
      experienceK: "Experience", experienceT: "Professional Experience",
      leadershipK: "Leadership", leadershipT: "Leadership",
      leadershipSub: "Cases about building teams, processes, and design systems from scratch in challenging environments.",
      portfolioK: "Selected work", portfolioT: "Featured Projects",
      portfolioSub: "Here are some of my recent works that showcase my skills and experience.",
      contactK: "Let's Connect", contactT: "I'm always open to discussing new opportunities, collaborations, or just having a chat about design and product.",
    },
    stats: [
      { v: "10+",  l: "years in enterprise & B2B" },
      { v: "8",    l: "designers led at InnoTech" },
      { v: "200+", l: "enterprise licenses · iDeals" },
      { v: "150K", l: "MAU peak · Sberbank" },
    ],
    skills: [
      { k: "Product & UX", v: "Product discovery and validation, user interviews and usability testing, hypothesis-driven design, ownership of problem framing and solution definition, metrics-informed decisions, JTBD, user journeys and information architecture, complex workflows, dashboards, analytics-heavy and configuration-driven interfaces." },
      { k: "UI & Design Systems", v: "Design systems at scale, accessibility-aware design, interaction design, rapid prototyping, web and mobile interfaces, developer handoff and design-to-dev workflows." },
      { k: "Leadership & Collaboration", v: "Design leadership and design decision ownership, mentoring and coaching designers, hiring and onboarding, process ownership, cross-functional collaboration with product, engineering, and executive stakeholders." },
      { k: "Ways of Working", v: "Agile product teams, Kanban-based workflows, experience working in both highly structured and fast-changing environments, including legacy processes." },
    ],
  },
  ru: {
    name: "Чивилев Михаил",
    role: "Продуктовый дизайнер",
    nameLine: "Михаил — продуктовый дизайнер",
    status: "Открыт к senior / lead ролям в продуктовом дизайне",
    roles: ["Продуктовый дизайнер", "Лид дизайн-системы", "Специалист B2B SaaS", "Платформенный дизайнер"],
    cvLink: "https://drive.google.com/uc?export=download&id=1w0HsmoT9wNmmRgtQCPgZUjDL1b7T3zLd",
    summary: "Продуктовый дизайнер с 10+ годами опыта в сложных enterprise и B2B продуктах, включая финтех и внутренние платформы. Фокус — масштабируемые системы, data-heavy сценарии и единые дизайн-основания. Умею быть hands-on IC и вести дизайн на уровне платформы в плотной связке с продуктом и разработкой.",
    ctaPrimary: "Связаться",
    ctaSecondary: "Скачать резюме",
    companies: ["InnoTech", "iDeals", "Sberbank", "Sovkombank", "BARS Group"],
    nav: { skills: "Навыки", experience: "Опыт", leadership: "Лидерство", portfolio: "Портфолио", contact: "Контакты" },
    impactLabel: "Эффект",
    sections: {
      skillsK: "Чем занимаюсь", skillsT: "Ключевые навыки",
      experienceK: "Опыт", experienceT: "Опыт работы",
      leadershipK: "Лидерство", leadershipT: "Лидерство",
      leadershipSub: "Кейсы о построении команд, процессов и дизайн-систем с нуля в сложных условиях.",
      portfolioK: "Избранные работы", portfolioT: "Проекты",
      portfolioSub: "Несколько кейсов, которые лучше всего показывают мой опыт и сильные стороны.",
      contactK: "На связи", contactT: "Открыт к новым возможностям, интересным проектам и просто знакомству. Пиши — отвечу.",
    },
    stats: [
      { v: "10+",  l: "лет в enterprise и B2B" },
      { v: "8",    l: "дизайнеров в InnoTech" },
      { v: "200+", l: "enterprise-лицензий · iDeals" },
      { v: "150K", l: "MAU на пике · Sberbank" },
    ],
    skills: [
      { k: "Продукт и UX", v: "Discovery и валидация, интервью и юзабилити-тесты, гипотезы и экспериментирование, формулирование проблемы и решения, решения на основе метрик, JTBD, CJM и IA, сложные сценарии, дашборды, аналитика, конфигурационные интерфейсы." },
      { k: "UI и дизайн-системы", v: "Дизайн-системы в масштабе, доступность, интеракшн-дизайн, быстрое прототипирование, web и mobile интерфейсы, хенд-офф и дизайн-to-dev процессы." },
      { k: "Лидерство и коммуникация", v: "Лидерство в дизайне и ответственность за решения, менторинг, найм и онбординг, владение процессом, коммуникация с продактами, разработкой и топ-стейкхолдерами." },
      { k: "Способы работы", v: "Agile и Kanban, опыт в структурированных и быстро меняющихся средах, работа с легаси и сложными зависимостями." },
    ],
  },
};

const EXPERIENCES = {
  en: [
    {
      company: "InnoTech", length: "2.5+ yrs", period: "May 2023 — Present", link: "sferaplatform.ru/zadachi",
      related: [{ label: "Sfera.Teams", id: "sfera-teams" }, { label: "Leadership case", id: "innotech-lead" }],
      role: "Lead Product Designer · B2B SaaS · Design Systems · UX Strategy",
      summary: "Large-scale B2B workflow platform (Jira-like), 25,000+ active users, 4–6 cross-functional product teams in my streams at any given time.",
      impact: "Built a team of 8 designers across 4 streams in 3–4 months. Migrated design system in 2 months (benchmark 6–18). Grew 5 designers in level. Reduced meeting load by 50%.",
      stats: [
        { v: "25K+", l: "active users" }, { v: "8", l: "designers led" },
        { v: "2 mo", l: "DS migration" }, { v: "−50%", l: "meeting load" },
      ],
      blocks: [
        { k: "Product & UX", items: [
          "Led design system migration from Admiral (internal design system of the parent company) to Ant Design — completed in 2 months vs. industry benchmark of 6–18 months, with no visible regression for users",
          "Redesigned platform navigation from an unscalable top menu to a persistent left-side nav with one-click context switching",
          "Established atomic component library covering ~90% of UI surface, reducing redundant work across streams",
          "Introduced CJM and information architecture as team standards — adopted beyond design into PM workflows",
        ]},
        { k: "Research", items: [
          "Conducted 300+ research activities — quantitative and qualitative surveys, A/B tests, satisfaction tracking — feeding directly into roadmap prioritization",
          "Initiated satisfaction rate widget and metrics integration, establishing a real-user feedback loop into the backlog",
        ]},
        { k: "Leadership", items: [
          "Built a team of 8 designers across 4 streams from scratch in 3–4 months (industry avg: 3–6 months)",
          "Restructured cross-reviews: each design reviewed by 2 peers before reaching me — achieving 100% engagement and shorter review calls",
          "Reduced team meeting load from 3–4h to 1–2h per day (~50%) by auditing and removing low-value calls",
          "Mentored 5 designers: 2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead",
          "Introduced 360 feedback, competency matrices, T-shape skill maps, and PDPs across the team",
          "Introduced team maturity framework across 3 levels — operational, tactical, strategic",
        ]},
      ],
    },
    {
      company: "iDeals", length: "2 yrs", period: "Jul 2021 — Jun 2023", link: "idealsboard.com",
      related: [{ label: "iDeals Board", id: "ideals-board" }, { label: "Leadership case", id: "ideals-board-lead" }],
      role: "Lead Product Designer · B2B SaaS · Governance Platforms · Design Systems",
      summary: "B2B SaaS governance platform built from scratch in a highly competitive enterprise market. Within two years after launch — 200+ enterprise licenses globally.",
      impact: "Owned product design from discovery to launch. Scaled team from 2 to 5 designers. Built design system from scratch. Standardized UX across Web, iOS, and Android.",
      stats: [
        { v: "200+", l: "enterprise licenses" }, { v: "2→5", l: "team scaled" },
        { v: "0→1", l: "design system" }, { v: "3", l: "platforms unified" },
      ],
      blocks: [
        { k: "Product & UX", items: [
          "Owned end-to-end product design from early discovery through product launch",
          "Defined UX differentiation strategy in a saturated enterprise governance market",
          "Redesigned key product modules, including PDF Viewer and Meeting Flow, simplifying complex document-centric workflows",
          "Designed secure collaboration flows for document-heavy environments, balancing usability with strict security and compliance requirements",
          "Standardized UX across Web, iOS, and Android platforms to ensure consistent cross-platform product experience",
        ]},
        { k: "Leadership", items: [
          "Scaled the design team from 2 to 5 designers and introduced structured design reviews and mentorship practices",
          "Built the design system from scratch, establishing governance, versioning, and component documentation",
          "Reduced design inconsistencies and improved cross-team collaboration through shared UX standards and reusable components",
          "Led design across 4 cross-functional product teams working on core platform capabilities",
          "Worked in product trios (Product Manager + Engineering + Design) from discovery to delivery",
          "Acted as a bridge between C-level stakeholders and product teams, clarifying scope and reducing ambiguity",
        ]},
      ],
    },
    {
      company: "Sberbank", length: "1.5 yrs", period: "Jan 2020 — Jul 2021", link: "",
      related: [{ label: "SberIdea", id: "sberidea" }],
      role: "Senior Product Designer · Fintech Platforms · B2B & B2C Products",
      summary: "Large-scale internal ecosystem built around a crowd feedback platform serving Sberbank employees and corporate clients.",
      impact: "Designed and shipped 5 new products within the crowd platform ecosystem. Grew platform audience from 25,000 to 150,000 MAU over 1.5 years.",
      stats: [ { v: "5", l: "products shipped 0→1" }, { v: "25K→150K", l: "MAU growth" } ],
      blocks: [
        { k: "Product & UX", items: [
          "Designed and shipped 5 new products within the crowd platform ecosystem: a website builder, a simple form and survey builder (Google Forms analogue), a complex survey builder (Typeform analogue), an events and lectures platform, and a live feedback tool for sessions (Survey.com analogue)",
          "Grew platform audience from 25,000 to 150,000 MAU over 1.5 years as a result of ecosystem expansion",
          "Designed each product end-to-end — from discovery and information architecture through delivery and iteration",
        ]},
        { k: "Collaboration", items: [
          "Maintained UX consistency across all ecosystem products, ensuring a coherent experience as users moved between tools",
          "Collaborated with Product and Engineering to clarify requirements before development, reducing ambiguity and rework",
        ]},
      ],
    },
    {
      company: "Sovkombank", length: "2 yrs", period: "Sep 2017 — Nov 2019", link: "",
      role: "Product UX/UI Designer · Fintech Systems · Web & Mobile",
      summary: "Internal fintech platform for monitoring and accounting of bookkeeping and bank bond operations.",
      impact: "Designed web and mobile interfaces for complex financial monitoring and reporting workflows.",
      stats: [],
      blocks: [
        { k: "Product & UX", items: [
          "Designed web and mobile interfaces for complex financial monitoring and reporting workflows",
          "Developed information architecture and interaction logic for internal banking systems",
          "Created user flows, CJM, and interactive prototypes to validate interface behavior and user scenarios",
          "Designed and maintained UI components to improve consistency across the platform",
        ]},
        { k: "Collaboration", items: [
          "Worked closely with stakeholders to clarify requirements and translate business needs into product solutions",
          "Participated in task planning, feature specification, and delivery coordination",
          "Conducted design validation, testing, and quality control during implementation",
        ]},
      ],
    },
    {
      company: "BARS Group", length: "4 yrs", period: "May 2013 — Sep 2017", link: "bars.group/en/directions/alpha-bi",
      role: "UX Designer · Enterprise Systems · Web & Mobile",
      summary: "Helped establish and develop UX practices within the company, introducing structured user experience design approaches for enterprise web systems, portals, and mobile applications.",
      impact: "Designed user experiences for mobile applications, web systems, and corporate portals. Developed information architecture, user flows, and interaction models.",
      stats: [],
      blocks: [
        { k: "Product & UX", items: [
          "Designed user experiences for mobile applications, web systems, and corporate portals",
          "Developed information architecture, user flows, and interaction models for complex digital products",
          "Created CJMs and interaction patterns to structure user journeys across systems",
        ]},
        { k: "Collaboration", items: [
          "Conducted UX research to better understand user needs and operational workflows",
          "Built interactive prototypes to validate interface concepts and product interactions",
          "Worked directly with stakeholders and clients to translate business requirements into UX solutions",
          "Contributed to building UX awareness within the company by introducing structured design approaches",
        ]},
      ],
    },
  ],
  ru: [
    {
      company: "InnoTech", length: "2.5+ года", period: "Май 2023 — настоящее время", link: "sferaplatform.ru/zadachi",
      related: [{ label: "Sfera.Teams", id: "sfera-teams" }, { label: "Кейс лидерства", id: "innotech-lead" }],
      role: "Lead Product Designer · B2B SaaS · Дизайн-системы · UX-стратегия",
      summary: "Крупная B2B платформа для управления рабочими процессами (аналог Jira), 25 000+ активных пользователей, 4–6 кросс-функциональных команд в моих стримах.",
      impact: "Собрал команду из 8 дизайнеров в 4 стримах за 3–4 месяца. Мигрировал дизайн-систему за 2 мес (бенчмарк 6–18 мес). Вырастил 5 дизайнеров в уровне. Сократил митинги на 50%.",
      stats: [
        { v: "25K+", l: "активных" }, { v: "8", l: "дизайнеров" },
        { v: "2 мес", l: "миграция DS" }, { v: "−50%", l: "митингов" },
      ],
      blocks: [
        { k: "Продукт и UX", items: [
          "Провёл миграцию дизайн-системы с Admiral (внутренняя ДС холдинга) на Ant Design — завершено за 2 месяца при бенчмарке индустрии 6–18 месяцев, без видимой регрессии для пользователей",
          "Переработал навигацию платформы: немасштабируемое верхнее меню → постоянная левая навигация с переключением контекста в один клик",
          "Выстроил атомарную библиотеку компонентов с покрытием ~90% UI, устранив дублирование работы между стримами",
          "Внедрил CJM и Information Architecture как стандарты команды — практика распространилась в рабочие процессы PM",
        ]},
        { k: "Исследования", items: [
          "Провёл 300+ исследовательских активностей — количественные и качественные опросы, A/B тесты, трекинг удовлетворённости — напрямую влияя на приоритизацию роадмапа",
          "Инициировал виджет satisfaction rate и интеграцию метрик, создав цикл обратной связи от реальных пользователей в беклог",
        ]},
        { k: "Лидерство", items: [
          "Собрал команду из 8 дизайнеров в 4 стримах с нуля за 3–4 месяца (среднее по индустрии: 3–6 месяцев)",
          "Реструктурировал кросс-ревью: каждый дизайн проверяется 2 коллегами до попадания ко мне — 100% вовлечённость и более короткие ревью-коллы",
          "Сократил митинговую нагрузку команды с 3–4ч до 1–2ч в день (~50%) за счёт аудита и удаления малоценных встреч",
          "Вырастил 5 дизайнеров: 2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead",
          "Внедрил 360-обратную связь, матрицы компетенций, T-shape карты навыков и ИПР для всей команды",
          "Внедрил фреймворк зрелости команды по 3 уровням — оперативный, тактический, стратегический",
        ]},
      ],
    },
    {
      company: "iDeals", length: "2 года", period: "Июль 2021 — Июнь 2023", link: "idealsboard.com",
      related: [{ label: "iDeals Board", id: "ideals-board" }, { label: "Кейс лидерства", id: "ideals-board-lead" }],
      role: "Lead Product Designer · B2B SaaS · Governance Platforms · Дизайн-системы",
      summary: "B2B SaaS платформа для управления советами директоров, запущена с нуля на высококонкурентном enterprise-рынке. За два года после запуска — 200+ enterprise-лицензий по всему миру.",
      impact: "Вёл продуктовый дизайн от discovery до запуска. Масштабировал команду с 2 до 5 дизайнеров. Построил дизайн-систему с нуля. Стандартизировал UX на Web, iOS и Android.",
      stats: [
        { v: "200+", l: "enterprise-лицензий" }, { v: "2→5", l: "команда" },
        { v: "0→1", l: "дизайн-система" }, { v: "3", l: "платформы" },
      ],
      blocks: [
        { k: "Продукт и UX", items: [
          "Владел продуктовым дизайном end-to-end — от ранней discovery до запуска продукта",
          "Определил стратегию UX-дифференциации на насыщенном enterprise governance-рынке",
          "Переработал ключевые модули продукта — PDF Viewer и Meeting Flow — упростив сложные документоориентированные сценарии",
          "Спроектировал защищённые сценарии совместной работы с документами, балансируя удобство и требования безопасности и compliance",
          "Стандартизировал UX на Web, iOS и Android для единого кросс-платформенного опыта",
        ]},
        { k: "Лидерство", items: [
          "Масштабировал дизайн-команду с 2 до 5 дизайнеров, внедрил структурированные ревью и менторинг",
          "Построил дизайн-систему с нуля: governance, версионирование, документация компонентов",
          "Снизил дизайн-несоответствия и улучшил кросс-командную коллаборацию через общие стандарты UX",
          "Руководил дизайном в 4 кросс-функциональных продуктовых командах",
          "Работал в продуктовых трио (PM + Engineering + Design) от discovery до delivery",
          "Выступал мостом между C-level стейкхолдерами и продуктовыми командами",
        ]},
      ],
    },
    {
      company: "Sberbank", length: "1.5 года", period: "Январь 2020 — Июль 2021", link: "",
      related: [{ label: "SberIdea", id: "sberidea" }],
      role: "Senior Product Designer · Финтех-платформы · B2B и B2C",
      summary: "Крупномасштабная внутренняя экосистема на базе краудсорсинговой платформы для сотрудников и корпоративных клиентов Сбербанка.",
      impact: "Спроектировал и запустил 5 новых продуктов внутри экосистемы. Вырастил аудиторию платформы с 25 000 до 150 000 MAU за 1.5 года.",
      stats: [ { v: "5", l: "продуктов 0→1" }, { v: "25K→150K", l: "рост MAU" } ],
      blocks: [
        { k: "Продукт и UX", items: [
          "Спроектировал и запустил 5 новых продуктов в рамках краудплатформы: конструктор сайтов, простой конструктор форм и опросов (аналог Google Forms), сложный конструктор опросов (аналог Typeform), платформа мероприятий и лекций, инструмент живой обратной связи (аналог Survey.com)",
          "Вырастил аудиторию платформы с 25 000 до 150 000 MAU за 1.5 года за счёт расширения экосистемы",
          "Проектировал каждый продукт end-to-end — от discovery и Information Architecture до delivery и итераций",
        ]},
        { k: "Коллаборация", items: [
          "Поддерживал UX-консистентность во всех продуктах экосистемы, обеспечивая связный опыт при переходе между инструментами",
          "Тесно сотрудничал с Product и Engineering для уточнения требований до начала разработки, снижая неопределённость и переработки",
        ]},
      ],
    },
    {
      company: "Sovkombank", length: "2 года", period: "Сентябрь 2017 — Ноябрь 2019", link: "",
      role: "Product UX/UI Designer · Финтех-системы · Web & Mobile",
      summary: "Внутренняя финтех-платформа для мониторинга и учёта бухгалтерских и банковских облигационных операций.",
      impact: "Проектировал web и mobile интерфейсы для сложных финансовых сценариев мониторинга и отчётности.",
      stats: [],
      blocks: [
        { k: "Продукт и UX", items: [
          "Проектировал web и mobile интерфейсы для сложных финансовых сценариев мониторинга и отчётности",
          "Разрабатывал Information Architecture и логику взаимодействия для внутренних банковских систем",
          "Создавал user flows, CJM и интерактивные прототипы для валидации поведения интерфейса",
          "Проектировал и поддерживал UI-компоненты для повышения консистентности платформы",
        ]},
        { k: "Коллаборация", items: [
          "Тесно работал со стейкхолдерами для уточнения требований и перевода бизнес-задач в продуктовые решения",
          "Участвовал в планировании задач, формировании спецификаций и координации delivery",
          "Проводил валидацию дизайна, тестирование и контроль качества в процессе внедрения",
        ]},
      ],
    },
    {
      company: "BARS Group", length: "4 года", period: "Май 2013 — Сентябрь 2017", link: "bars.group/en/directions/alpha-bi",
      role: "UX Designer · Enterprise-системы · Web & Mobile",
      summary: "Помогал выстраивать UX-практики внутри компании, внедряя структурированный подход к проектированию enterprise web-систем, порталов и мобильных приложений.",
      impact: "Проектировал UX для мобильных приложений, web-систем и корпоративных порталов. Разрабатывал IA, user flows и модели взаимодействия.",
      stats: [],
      blocks: [
        { k: "Продукт и UX", items: [
          "Проектировал UX для мобильных приложений, web-систем и корпоративных порталов",
          "Разрабатывал Information Architecture, user flows и модели взаимодействия для сложных цифровых продуктов",
          "Создавал CJM и паттерны взаимодействия для структурирования пользовательских сценариев",
        ]},
        { k: "Коллаборация", items: [
          "Проводил UX-исследования для понимания потребностей пользователей и рабочих процессов",
          "Строил интерактивные прототипы для валидации концепций интерфейса",
          "Работал напрямую со стейкхолдерами и клиентами для перевода бизнес-требований в UX-решения",
          "Вносил вклад в формирование UX-культуры внутри компании",
        ]},
      ],
    },
  ],
};

const PROJECTS = {
  en: [
    { id: "sfera-teams", art: "sfera", title: "Sfera.Teams", sub: "HR Platform · 2024", tags: ["Product Design", "UX Research", "Design System"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/sfera-teams_cover_01.webp",
      desc: "HR system for recruitment and resource planning. Redesigned fragmented interfaces and navigation for multiple user roles from employees to executives." },
    { id: "ideals-board", art: "ideals", title: "iDeals Board", sub: "Governance · 2023", tags: ["Mobile Design", "Web Design", "Design System"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/ideals-board_cover_01.webp",
      desc: "Board management tool for seamless collaboration. Led complete design system transformation across iOS, Android, and web platforms." },
    { id: "repository", art: "repo", title: "Repository", sub: "Enterprise · 2022", tags: ["Enterprise UX", "Workflow Design", "Analytics"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/repository_cover_01.webp",
      desc: "Document management and collaboration platform. Enterprise-level document storage and sharing solution with advanced workflow capabilities." },
    { id: "sberidea", art: "sber", title: "SberIdea", sub: "Innovation · 2021", tags: ["Product Design", "User Research", "Prototyping"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/sberidea_cover_01.webp",
      desc: "Innovation and idea management platform. Internal platform for collecting, evaluating, and implementing employee ideas at scale." },
  ],
  ru: [
    { id: "sfera-teams", art: "sfera", title: "Sfera.Teams", sub: "HR-платформа · 2024", tags: ["Продукт", "Исследования", "Дизайн-система"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/sfera-teams_cover_01.webp",
      desc: "HR-система для подбора и планирования ресурсов. Пересобрал навигацию и фрагментированные интерфейсы для множества ролей — от сотрудников до топ-менеджмента." },
    { id: "ideals-board", art: "ideals", title: "iDeals Board", sub: "Governance · 2023", tags: ["Mobile", "Web", "Дизайн-система"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/ideals-board_cover_01.webp",
      desc: "Инструмент для работы советов директоров. Вёл трансформацию дизайн-системы и унификацию интерфейсов на iOS, Android и Web." },
    { id: "repository", art: "repo", title: "Repository", sub: "Enterprise · 2022", tags: ["Enterprise UX", "Workflow", "Аналитика"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/repository_cover_01.webp",
      desc: "Платформа управления документами и совместной работы. Enterprise-хранилище с версиями, доступами и продвинутыми сценариями." },
    { id: "sberidea", art: "sber", title: "SberIdea", sub: "Innovation · 2021", tags: ["Продукт", "Исследования", "Прототипы"],
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/sberidea_cover_01.webp",
      desc: "Платформа для сбора и внедрения инициатив сотрудников. Проектировал ключевые сценарии, улучшал путь от идеи до реализации." },
  ],
};

const LEADERSHIP = {
  en: [
    { id: "innotech-lead", art: "innotech", title: "InnoTech", sub: "Built design practice from scratch",
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/logo_innoteh_1.png",
      tags: ["Leadership", "User Research", "Culture Change"],
      bullets: ["Built design practice from scratch in an engineering-driven company.",
                "Introduced user research, established processes, and shifted culture to product-first.",
                "Migrated the design system in 2 months — vs. an industry benchmark of 6–18."] },
    { id: "ideals-board-lead", art: "ideals", title: "iDeals Board · Leadership", sub: "Rebuilt design function from zero",
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/ideals-board_cover_01.webp",
      tags: ["Leadership", "Design System", "Team Building"],
      bullets: ["Rebuilt design function from zero. Scaled team to 5 designers.",
                "Created a design system from scratch, standardized UX across three platforms.",
                "Accelerated delivery by clearing scope ambiguity at the C-level."] },
  ],
  ru: [
    { id: "innotech-lead", art: "innotech", title: "InnoTech", sub: "Построил дизайн-практику с нуля",
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/logo_innoteh_1.png",
      tags: ["Лидерство", "Исследования", "Культура"],
      bullets: ["Построение дизайн-практики с нуля в инженерной компании.",
                "Внедрил исследования, выстроил процессы и сместил культуру на product-first.",
                "Миграция дизайн-системы за 2 месяца — против бенчмарка 6–18."] },
    { id: "ideals-board-lead", art: "ideals", title: "iDeals Board · Лидерство", sub: "Перезапуск дизайн-функции с нуля",
      image: "https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio/ideals-board_cover_01.webp",
      tags: ["Лидерство", "Дизайн-система", "Команда"],
      bullets: ["Перезапуск дизайн-функции с нуля. Собрал команду из 5 дизайнеров.",
                "Создал дизайн-систему с нуля, стандартизировал UX на трёх платформах.",
                "Ускорил delivery за счёт устранения неоднозначности на C-level."] },
  ],
};

/* Project artwork placeholders — abstract geometric SVGs in our palette. */
function ArtworkPlaceholder({ id, label, aspect = '16 / 10' }) {
  const palettes = {
    sfera:  { bg: '#1A1713', a: '#C8553D', b: '#F2E2BC', c: '#FBF7EF' },
    ideals: { bg: '#FBF7EF', a: '#1A1713', b: '#C8553D', c: '#E0D8C6' },
    repo:   { bg: '#EBE4D2', a: '#1A1713', b: '#D89A2A', c: '#FBF7EF' },
    sber:   { bg: '#C8553D', a: '#1A1713', b: '#FBF7EF', c: '#F2E2BC' },
    innotech:{bg: '#2E2823', a: '#D89A2A', b: '#FBF7EF', c: '#C8553D' },
  };
  const p = palettes[id] || palettes.repo;

  const variants = {
    sfera: (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <rect width="800" height="500" fill={p.bg}/>
        <g opacity="0.9">
          <rect x="60" y="60" width="320" height="80" rx="10" fill={p.c}/>
          <rect x="60" y="160" width="240" height="14" rx="3" fill={p.c} opacity="0.4"/>
          <rect x="60" y="184" width="180" height="14" rx="3" fill={p.c} opacity="0.25"/>
          <rect x="60" y="230" width="320" height="200" rx="14" fill="none" stroke={p.c} strokeOpacity="0.25"/>
          <circle cx="120" cy="290" r="22" fill={p.a}/>
          <circle cx="170" cy="290" r="22" fill={p.b}/>
          <circle cx="220" cy="290" r="22" fill={p.c} opacity="0.5"/>
          <rect x="100" y="340" width="240" height="10" rx="2" fill={p.c} opacity="0.3"/>
          <rect x="100" y="360" width="160" height="10" rx="2" fill={p.c} opacity="0.2"/>
        </g>
        <g>
          <rect x="440" y="60" width="300" height="370" rx="14" fill={p.a}/>
          <text x="460" y="120" fontFamily="Manrope" fontSize="14" fontWeight="600" fill={p.c} opacity="0.75" letterSpacing="2">SFERA · TEAMS</text>
          <text x="460" y="220" fontFamily="Manrope" fontSize="84" fontWeight="800" fill={p.c} letterSpacing="-3">1,248</text>
          <text x="460" y="250" fontFamily="Manrope" fontSize="14" fill={p.c} opacity="0.7">Active roles · this quarter</text>
          <g transform="translate(460,300)">
            <rect width="260" height="6" rx="3" fill={p.c} opacity="0.2"/>
            <rect width="180" height="6" rx="3" fill={p.b}/>
          </g>
          <g transform="translate(460,330)">
            <rect width="260" height="6" rx="3" fill={p.c} opacity="0.2"/>
            <rect width="120" height="6" rx="3" fill={p.c} opacity="0.7"/>
          </g>
          <g transform="translate(460,360)">
            <rect width="260" height="6" rx="3" fill={p.c} opacity="0.2"/>
            <rect width="220" height="6" rx="3" fill={p.b} opacity="0.7"/>
          </g>
        </g>
      </svg>
    ),
    ideals: (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <rect width="800" height="500" fill={p.bg}/>
        {/* Doc stack */}
        <g transform="translate(100,80)">
          <rect width="340" height="380" rx="12" fill={p.c} stroke={p.a} strokeOpacity="0.1"/>
          <rect x="-20" y="-12" width="340" height="380" rx="12" fill={p.c} stroke={p.a} strokeOpacity="0.15"/>
          <rect x="-40" y="-24" width="340" height="380" rx="12" fill="#fff" stroke={p.a} strokeOpacity="0.2"/>
          <rect x="-22" y="0" width="200" height="14" rx="3" fill={p.a} opacity="0.85"/>
          <rect x="-22" y="24" width="280" height="8" rx="2" fill={p.a} opacity="0.25"/>
          <rect x="-22" y="40" width="260" height="8" rx="2" fill={p.a} opacity="0.2"/>
          <rect x="-22" y="56" width="220" height="8" rx="2" fill={p.a} opacity="0.18"/>
          <rect x="-22" y="90" width="300" height="120" rx="6" fill={p.b} opacity="0.6"/>
          <rect x="-22" y="225" width="180" height="10" rx="2" fill={p.a} opacity="0.6"/>
          <rect x="-22" y="245" width="240" height="8" rx="2" fill={p.a} opacity="0.2"/>
          <rect x="-22" y="261" width="200" height="8" rx="2" fill={p.a} opacity="0.18"/>
        </g>
        {/* Mobile preview */}
        <g transform="translate(500,80)">
          <rect width="220" height="400" rx="28" fill={p.a} opacity="0.06"/>
          <rect x="10" y="10" width="200" height="380" rx="22" fill={p.c}/>
          <rect x="24" y="34" width="120" height="10" rx="2" fill={p.a} opacity="0.85"/>
          <rect x="24" y="50" width="160" height="6" rx="2" fill={p.a} opacity="0.25"/>
          <rect x="24" y="80" width="172" height="80" rx="8" fill={p.b} opacity="0.5"/>
          <rect x="24" y="170" width="80" height="50" rx="6" fill={p.a} opacity="0.85"/>
          <rect x="112" y="170" width="80" height="50" rx="6" fill={p.b} opacity="0.6"/>
          <rect x="24" y="230" width="172" height="10" rx="2" fill={p.a} opacity="0.45"/>
          <rect x="24" y="246" width="120" height="8" rx="2" fill={p.a} opacity="0.2"/>
        </g>
      </svg>
    ),
    repo: (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <rect width="800" height="500" fill={p.bg}/>
        {/* sidebar */}
        <rect x="0" y="0" width="200" height="500" fill={p.c}/>
        <rect x="20" y="40" width="160" height="10" rx="2" fill={p.a} opacity="0.7"/>
        <rect x="20" y="56" width="120" height="6" rx="2" fill={p.a} opacity="0.2"/>
        {[0,1,2,3,4].map(i => (
          <g key={i} transform={`translate(20, ${100 + i*46})`}>
            <rect width="14" height="14" rx="3" fill={p.b}/>
            <rect x="22" y="2" width="120" height="8" rx="2" fill={p.a} opacity="0.55"/>
            <rect x="22" y="14" width="60" height="6" rx="2" fill={p.a} opacity="0.2"/>
          </g>
        ))}
        {/* table */}
        <g transform="translate(230,60)">
          <text x="0" y="0" fontFamily="Manrope" fontSize="22" fontWeight="700" fill={p.a}>All documents</text>
          <text x="0" y="22" fontFamily="Manrope" fontSize="12" fill={p.a} opacity="0.5">1,284 files · last 30 days</text>
          {[0,1,2,3,4,5].map(i => (
            <g key={i} transform={`translate(0, ${60 + i*48})`}>
              <rect width="540" height="40" rx="6" fill={p.c}/>
              <rect x="14" y="12" width="16" height="16" rx="3" fill={p.b} opacity="0.8"/>
              <rect x="42" y="10" width="200" height="8" rx="2" fill={p.a} opacity="0.7"/>
              <rect x="42" y="24" width="140" height="6" rx="2" fill={p.a} opacity="0.25"/>
              <rect x="320" y="14" width="40" height="12" rx="6" fill={p.b}/>
              <rect x="400" y="14" width="60" height="12" rx="2" fill={p.a} opacity="0.15"/>
              <circle cx="500" cy="20" r="3" fill={p.a} opacity="0.3"/>
              <circle cx="510" cy="20" r="3" fill={p.a} opacity="0.3"/>
              <circle cx="520" cy="20" r="3" fill={p.a} opacity="0.3"/>
            </g>
          ))}
        </g>
      </svg>
    ),
    sber: (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <rect width="800" height="500" fill={p.bg}/>
        <text x="50" y="100" fontFamily="Manrope" fontSize="13" fontWeight="700" fill={p.c} opacity="0.7" letterSpacing="3">SBERIDEA · 2021</text>
        <text x="50" y="220" fontFamily="Manrope" fontSize="120" fontWeight="800" fill={p.c} letterSpacing="-6">150K</text>
        <text x="50" y="260" fontFamily="Manrope" fontSize="15" fill={p.c} opacity="0.85">monthly active users at peak</text>
        <g transform="translate(50,310)">
          <rect width="350" height="56" rx="10" fill={p.b} opacity="0.95"/>
          <text x="20" y="34" fontFamily="Manrope" fontSize="14" fontWeight="600" fill={p.a}>+ Submit an idea</text>
          <text x="320" y="34" fontFamily="Manrope" fontSize="14" fontWeight="600" fill={p.a} textAnchor="end">→</text>
        </g>
        <g transform="translate(500,80)">
          <circle cx="120" cy="120" r="120" fill={p.b}/>
          <circle cx="120" cy="120" r="80" fill="none" stroke={p.c} strokeWidth="2" opacity="0.6"/>
          <circle cx="120" cy="120" r="40" fill={p.a}/>
          <text x="120" y="320" fontFamily="Manrope" fontSize="13" fontWeight="600" fill={p.c} opacity="0.7" textAnchor="middle" letterSpacing="2">5 PRODUCTS · 1 ECOSYSTEM</text>
        </g>
      </svg>
    ),
    innotech: (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <rect width="800" height="500" fill={p.bg}/>
        <g transform="translate(50,60)">
          <text fontFamily="Manrope" fontSize="13" fontWeight="700" fill={p.b} letterSpacing="3">DESIGN PRACTICE · 0→1</text>
          <text y="80" fontFamily="Manrope" fontSize="64" fontWeight="800" fill={p.b} letterSpacing="-2">8</text>
          <text x="84" y="80" fontFamily="Manrope" fontSize="18" fill={p.b} opacity="0.65">designers</text>
          <text x="84" y="106" fontFamily="Manrope" fontSize="14" fill={p.b} opacity="0.45">across 4 streams · 3–4 months</text>

          <g transform="translate(0,180)">
            {[
              {label: "Trainee → Middle", w: 220, color: p.b, count: "2"},
              {label: "Middle → Senior",  w: 260, color: p.c, count: "2"},
              {label: "Senior → Lead",    w: 180, color: p.a, count: "1"},
            ].map((row, i) => (
              <g key={i} transform={`translate(0, ${i*52})`}>
                <text fontFamily="Manrope" fontSize="11" fill={p.b} opacity="0.55" letterSpacing="1.5">{row.label.toUpperCase()}</text>
                <rect y="14" width={row.w} height="22" rx="4" fill={row.color}/>
                <text x={row.w + 12} y="30" fontFamily="Manrope" fontSize="14" fontWeight="700" fill={p.b}>{row.count}</text>
              </g>
            ))}
          </g>
        </g>
      </svg>
    ),
  };

  const art = variants[id] || variants.repo;
  return (
    <div style={{
      width: '100%',
      aspectRatio: aspect,
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      background: p.bg,
      position: 'relative',
    }}>
      {art}
      {label && (
        <div style={{
          position: 'absolute', left: 14, bottom: 12,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          padding: '4px 8px', borderRadius: 4,
          background: 'rgba(0,0,0,0.45)', color: p.c, letterSpacing: '0.06em',
        }}>{label}</div>
      )}
    </div>
  );
}

/* Tiny inline icons */
const Icon = {
  arrow: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>),
  arrowUpRight: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>),
  download: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>),
  mail:     () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  linkedin: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V9.83H5.67v8.51zM7 8.66a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.68V13.7c0-2.55-1.36-3.74-3.18-3.74a2.74 2.74 0 0 0-2.49 1.37V9.83h-2.66c.04.74 0 8.51 0 8.51h2.66V13.6a1.81 1.81 0 0 1 .09-.65 1.46 1.46 0 0 1 1.36-.97c.96 0 1.34.73 1.34 1.8v4.56z"/></svg>),
  send:     () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>),
  plus:     () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>),
  dot:      () => (<svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor"/></svg>),
};

/* SmartImage — probes the real screenshot URL off-screen; shows the on-brand
   ArtworkPlaceholder (or a neutral block) until a successful load is confirmed,
   and keeps it if the URL errors or times out. No broken-image flashes. */
function SmartImage({ src, fallbackId, alt = '', aspect = '16 / 10', fit = 'cover', position = 'center top', radius = 'var(--r-lg)', onZoom = null }) {
  const [status, setStatus] = React.useState(src ? 'loading' : 'error');
  React.useEffect(() => {
    if (!src) { setStatus('error'); return; }
    setStatus('loading');
    let done = false;
    const im = new Image();
    const to = setTimeout(() => { if (!done) { done = true; setStatus('error'); } }, 9000);
    im.onload = () => { if (!done) { done = true; clearTimeout(to); setStatus(im.naturalWidth > 0 ? 'ok' : 'error'); } };
    im.onerror = () => { if (!done) { done = true; clearTimeout(to); setStatus('error'); } };
    im.src = src;
    return () => { done = true; clearTimeout(to); };
  }, [src]);

  if (status !== 'ok') {
    if (fallbackId) return <ArtworkPlaceholder id={fallbackId} aspect={aspect} />;
    return (
      <div style={{ width: '100%', aspectRatio: aspect, borderRadius: radius,
        background: 'var(--bone-2)', border: '1px solid var(--line)' }} />
    );
  }
  const clickable = typeof onZoom === 'function';
  return (
    <div
      onClick={clickable ? () => onZoom(src, alt) : undefined}
      style={{ width: '100%', aspectRatio: aspect, borderRadius: radius, overflow: 'hidden',
        background: 'var(--bone-2)', cursor: clickable ? 'zoom-in' : 'default' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: fit, objectPosition: position, display: 'block' }} />
    </div>
  );
}

window.PortfolioData = { COPY, EXPERIENCES, PROJECTS, LEADERSHIP, ArtworkPlaceholder, SmartImage, Icon };

/* Shared language state, persisted across pages via localStorage. */
function usePortfolioLang() {
  const [lang, setLangState] = React.useState(() => {
    try {
      const saved = localStorage.getItem('pf-lang');
      if (saved === 'ru' || saved === 'en') return saved;
      // No saved preference — guess from the visitor's locale / timezone.
      const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
      const langs = (navigator.languages || []).join(',').toLowerCase();
      const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '');
      const ruTz = /Moscow|Kaliningrad|Samara|Yekaterinburg|Volgograd|Saratov|Astrakhan|Ulyanovsk|Kirov|Omsk|Novosibirsk|Barnaul|Tomsk|Krasnoyarsk|Novokuznetsk|Irkutsk|Chita|Yakutsk|Khandyga|Vladivostok|Ust-Nera|Magadan|Sakhalin|Srednekolymsk|Kamchatka|Anadyr/i.test(tz);
      return (nav.startsWith('ru') || langs.includes('ru') || ruTz) ? 'ru' : 'en';
    } catch (e) { return 'en'; }
  });
  const setLang = React.useCallback((L) => {
    setLangState(L);
    try { localStorage.setItem('pf-lang', L); } catch (e) {}
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}
window.usePortfolioLang = usePortfolioLang;
