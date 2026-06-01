/* Real case-study content — extracted from Mikhail's source pages. EN + RU.
   Generic section model rendered by case-page.jsx.
   Section types: prose | cards | images | beforeafter */

const SUPA = 'https://xwdpennwlwpgyznarwfx.supabase.co/storage/v1/object/public/Data%20for%20portfolio';

const CASES = {
  /* ============================= SFERA.TEAMS ============================= */
  "sfera-teams": {
    art: "sfera", group: "project",
    intro: "https://www.notion.so/image/attachment%3A4e294acb-0922-466e-990d-d2acec3724b9%3Aimage.png?table=block&id=2e9cc0bc-95f6-80a5-aec7-d7834690026c&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
    en: {
      kicker: "HR Platform · 2024", title: "Sfera.Teams",
      about: "HR system for recruitment and resource planning.",
      website: "https://www.sferaplatform.ru/komanda",
      sections: [
        { type: "prose", title: "Project Overview", text: "The HR platform was developed to address critical challenges in recruitment, time tracking, resource allocation, budget planning, employee development, and performance tracking. It served multiple user roles with varying levels of access: from employees with limited functionality to HR managers, project managers, and top executives." },
        { type: "cards", title: "Challenges Identified", items: [
          { k: "Fragmented Interfaces", v: "Existing interfaces were outdated and non-intuitive, leading to inefficiencies.\n\nNavigation was confusing and time-consuming.\n\nThe product needed to adhere to an existing design system to ensure consistency with other products in terms of design and logic." },
          { k: "Process Gaps", v: "Lack of analytics and standardized design processes.\n\nAbsence of clear specifications and requirements hindered development." },
          { k: "Cultural Barriers", v: "Resistance from Product Owner towards trusting designers." },
        ]},
        { type: "cards", title: "Research and Analysis", items: [
          { k: "Interviews and Feedback", v: "Conducted user interviews and gathered feedback via CSAT surveys to identify pain points and needs.\n\nEngaged in field research to observe real-world interactions with the system." },
          { k: "Competitive Analysis", v: "Benchmarked against industry standards to identify improvement opportunities." },
          { k: "CJM and Information Architecture", v: "Developed detailed Customer Journey Maps to clarify user flows and highlight key pain points.\n\nRedesigned the platform's information architecture, simplifying access to critical functions." },
        ]},
        { type: "images", title: null, cols: 3, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff744133d-a89d-4d26-b7e7-1e17e1bca077%2Fimage.png?table=block&id=141cc0bc-95f6-8053-9946-cddafe0f73b6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F3d935984-5d52-4ff4-9422-5ad046aa40e8%2Fimage.png?table=block&id=141cc0bc-95f6-805e-adcd-e44223694270&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fcc43b709-f244-4e1f-ad15-7d4c534c0b83%2Fimage.png?table=block&id=141cc0bc-95f6-8076-b0df-f8f838e86c9f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Testing hypotheses through user research", "Competitor Analysis", "CJM"] },
        { type: "cards", title: "Proposed Solutions", items: [
          { k: "Process Optimization", v: "Introduced a structured double-diamond workflow, enabling iterative discovery and delivery.\n\nEstablished scalable design processes to reduce friction between teams and align priorities." },
          { k: "Redesigned Interface", v: "Implemented a universal navigation menu for seamless access across modules.\n\nRevamped company structure visualization, making it intuitive and scalable for various organizational layouts (functional, service, project)." },
          { k: "Visual and Functional Enhancements", v: "Simplified interactions with company structures, reducing time from 10-15 minutes to 1-2 minutes.\n\nImproved usability through consistent design patterns and feedback loops." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd35feee6-0992-4f46-81ba-da0dc7339e6c%2Fimage.png?table=block&id=141cc0bc-95f6-806e-80e9-fb6328a7c128&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd00c3bba-8ae2-4b1b-9d26-fbe7549168ae%2Fimage.png?table=block&id=141cc0bc-95f6-803f-baf6-c1bfe9c30d6e&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F294eadd3-249b-4aa1-93b3-633a2bd76cd8%2Fimage.png?table=block&id=141cc0bc-95f6-80d0-a581-e3c9a7f2be1d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F1e848636-f293-4ef0-9000-663cd0a6b096%2Fimage.png?table=block&id=141cc0bc-95f6-8064-b85f-d3efd7b618e8&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Collaboration between product owner, designer and engineering lead", "Before", "After", "We also saved and improved the table view"] },
        { type: "cards", title: "Results Achieved", items: [
          { k: "Enhanced User Satisfaction", v: "Positive feedback on new design, particularly on visualizing company structures and streamlined navigation." },
          { k: "Efficiency Gains", v: "Significant reduction in time required to access and work with structural data." },
          { k: "Process Optimization", v: "Established a scalable design process, reducing friction between teams." },
        ]},
        { type: "cards", title: "Key Contributions", items: [
          { k: "Research and Analysis", v: "Conducted extensive user research, field observations, and CSAT surveys, to identify critical pain points in navigating company structures and accessing resources.\n\nAnalyzed competitive HR platforms to benchmark features and uncover opportunities for differentiation." },
          { k: "Concept Development", v: "Designed the initial concept for the platform's universal navigation menu and visualization of company structures.\n\nProposed a modular approach to represent functional, service, and project-based structures." },
          { k: "Stakeholder Collaboration", v: "Presented research findings and design concepts to Product Owners and senior stakeholders.\n\nAddressed concerns and built trust by aligning design solutions with business objectives and user needs." },
          { k: "Design Leadership", v: "Led the redesign of critical interfaces, including the employee timesheet, resource management dashboard, and company structure visualization.\n\nIntroduced and implemented the double-diamond workflow." },
          { k: "Implementation Support", v: "Synchronized with developers to refine and customize the Ant Design system, replacing tokens and colors to align with the platform's visual identity.\n\nProvided ongoing feedback during development." },
        ]},
        { type: "images", title: "Visuals", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F88d1b4df-1895-49f8-b96c-327cf13ec01b%2Fimage.png?table=block&id=141cc0bc-95f6-80cc-9618-c76724f67e56&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fb782997f-8c80-4317-8aaf-9fb2c7d164c3%2Fimage.png?table=block&id=141cc0bc-95f6-80e8-a8a7-fe170749d5a6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F48550a5c-57b1-4013-b7e3-691eb0613422%2Fimage.png?table=block&id=141cc0bc-95f6-80b0-b1f3-f5ab530d0efb&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F98cee4f7-beb6-4951-af17-d2cf88df3667%2Fimage.png?table=block&id=141cc0bc-95f6-803d-b84c-e864a1e88052&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Employee timesheet", "Employee page", "Team resources", "Extended data set on cards"] },
      ],
    },
    ru: {
      kicker: "HR-платформа · 2024", title: "Sfera.Teams",
      about: "HR-система для найма и планирования ресурсов.",
      website: "https://www.sferaplatform.ru/komanda",
      sections: [
        { type: "prose", title: "Обзор проекта", text: "Платформа закрывала ключевые задачи HR и руководителей: найм, учет времени, распределение ресурсов, планирование бюджета, развитие сотрудников и контроль эффективности. Система была роль-ориентированной: от сотрудников с ограниченным набором действий до HR-менеджеров, руководителей проектов и топ-менеджмента." },
        { type: "cards", title: "Что было не так", items: [
          { k: "Разрозненные интерфейсы", v: "Часть экранов была устаревшей и неинтуитивной, из-за чего пользователи тратили лишнее время.\n\nНавигация путала и заставляла делать лишние переходы.\n\nНужно было попасть в рамки существующей дизайн-системы, чтобы сохранить единый подход по визуалу и логике с другими продуктами." },
          { k: "Пробелы в процессе", v: "Не хватало аналитики и единых правил проектирования.\n\nОтсутствие понятных требований и спецификаций тормозило разработку." },
          { k: "Коммуникационные барьеры", v: "Сопротивление со стороны Product Owner — доверие к дизайну нужно было выстраивать." },
        ]},
        { type: "cards", title: "Исследование и анализ", items: [
          { k: "Интервью и обратная связь", v: "Провел интервью и собрал сигналы через CSAT, чтобы понять боли и ожидания.\n\nДелал полевые наблюдения: как люди реально работают с системой в «боевых» условиях." },
          { k: "Анализ аналогов", v: "Сравнил с рынком и внутренними стандартами, чтобы найти точки улучшения." },
          { k: "CJM и структура продукта", v: "Собрал CJM, чтобы выровнять понимание сценариев и точек боли.\n\nПересобрал информационную архитектуру, чтобы нужные функции находились быстрее и предсказуемее." },
        ]},
        { type: "images", title: null, cols: 3, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff744133d-a89d-4d26-b7e7-1e17e1bca077%2Fimage.png?table=block&id=141cc0bc-95f6-8053-9946-cddafe0f73b6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F3d935984-5d52-4ff4-9422-5ad046aa40e8%2Fimage.png?table=block&id=141cc0bc-95f6-805e-adcd-e44223694270&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fcc43b709-f244-4e1f-ad15-7d4c534c0b83%2Fimage.png?table=block&id=141cc0bc-95f6-8076-b0df-f8f838e86c9f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Проверка гипотез через исследование", "Анализ конкурентов", "CJM"] },
        { type: "cards", title: "Что сделали", items: [
          { k: "Привели процесс в порядок", v: "Внедрил двухконтурный подход (double-diamond): discovery и delivery.\n\nНастроил масштабируемые дизайн-практики, чтобы снизить трение между командами и синхронизировать приоритеты." },
          { k: "Переосмыслили интерфейс", v: "Сделали универсальное меню, чтобы пользователь одинаково попадал в нужные модули.\n\nПереработали визуализацию структуры компании так, чтобы она масштабировалась под разные модели: функциональная, сервисная, проектная." },
          { k: "Упростили ключевые действия", v: "Сократили время работы со структурой компании примерно с 10-15 минут до 1-2 минут.\n\nПодняли удобство за счет единых паттернов и регулярных циклов обратной связи." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd35feee6-0992-4f46-81ba-da0dc7339e6c%2Fimage.png?table=block&id=141cc0bc-95f6-806e-80e9-fb6328a7c128&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd00c3bba-8ae2-4b1b-9d26-fbe7549168ae%2Fimage.png?table=block&id=141cc0bc-95f6-803f-baf6-c1bfe9c30d6e&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F294eadd3-249b-4aa1-93b3-633a2bd76cd8%2Fimage.png?table=block&id=141cc0bc-95f6-80d0-a581-e3c9a7f2be1d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F1e848636-f293-4ef0-9000-663cd0a6b096%2Fimage.png?table=block&id=141cc0bc-95f6-8064-b85f-d3efd7b618e8&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Совместная работа: Product Owner, дизайнер и тимлид разработки", "До", "После", "Сохранили табличный режим и сделали его удобнее"] },
        { type: "cards", title: "Результаты", items: [
          { k: "Лучше воспринимается пользователями", v: "Позитивная обратная связь по редизайну, особенно по структуре компании и навигации." },
          { k: "Экономия времени", v: "Заметно сократилось время доступа к данным и работы со структурой." },
          { k: "Масштабируемый подход", v: "Появился устойчивый процесс, который снижает трение между командами и ускоряет развитие." },
        ]},
        { type: "cards", title: "Мой вклад", items: [
          { k: "Исследование и аналитика", v: "Провел интервью, полевые наблюдения и CSAT, чтобы зафиксировать ключевые боли: навигация, поиск данных, работа со структурой компании.\n\nСравнил с конкурентами и другими HR-платформами." },
          { k: "Концепции и архитектура решения", v: "Спроектировал основу универсального меню и концепт визуализации структуры компании.\n\nПредложил модульный подход под разные типы оргструктур." },
          { k: "Работа со стейкхолдерами", v: "Презентовал инсайты и концепции Product Owner и руководителям, показывая влияние на эффективность и качество UX.\n\nСнимал риски и возражения, связывая дизайн с бизнес-целями." },
          { k: "Лидирование дизайна", v: "Вел редизайн ключевых зон: табель сотрудника, дашборд ресурсов, визуализация структуры компании.\n\nВнедрил double-diamond как повторяемую схему работы." },
          { k: "Сопровождение внедрения", v: "Работал вместе с разработкой над адаптацией Ant Design: токены, цвета, настройки.\n\nДавал регулярную обратную связь по реализации." },
        ]},
        { type: "images", title: "Экраны", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F88d1b4df-1895-49f8-b96c-327cf13ec01b%2Fimage.png?table=block&id=141cc0bc-95f6-80cc-9618-c76724f67e56&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fb782997f-8c80-4317-8aaf-9fb2c7d164c3%2Fimage.png?table=block&id=141cc0bc-95f6-80e8-a8a7-fe170749d5a6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F48550a5c-57b1-4013-b7e3-691eb0613422%2Fimage.png?table=block&id=141cc0bc-95f6-80b0-b1f3-f5ab530d0efb&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F98cee4f7-beb6-4951-af17-d2cf88df3667%2Fimage.png?table=block&id=141cc0bc-95f6-803d-b84c-e864a1e88052&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Табель сотрудника", "Карточка сотрудника", "Ресурсы команды", "Расширенный набор данных на карточках"] },
      ],
    },
  },

  /* ============================= IDEALS BOARD ============================= */
  "ideals-board": {
    art: "ideals", group: "project",
    intro: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2feddba0-93cc-45d3-b98a-b9aefb5f2ccf%2FUntitled.png?table=block&id=cb73ef37-7b0f-4e1a-a660-dc37739db275&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
    en: {
      kicker: "Governance · 2023", title: "iDeals Board",
      about: "Board management tool for seamless collaboration.",
      website: "https://idealsboard.com/",
      sections: [
        { type: "prose", title: "Product", text: "iDeals Board automates and streamlines meeting preparation and management, giving complete control and saving time and money." },
        { type: "cards", title: "Challenges Identified", items: [
          { k: "Inconsistent Design", v: "The application lacked a cohesive visual identity, leading to confusion among users." },
          { k: "Platform Disparity", v: "Features behaved differently across iOS, Android, and web versions, reducing trust in the platform." },
          { k: "Lack of Design Systems", v: "Absence of reusable components increased development time and effort." },
          { k: "Inefficient Processes", v: "Prolonged implementation cycles for new features due to misalignment between design and development teams." },
        ]},
        { type: "cards", title: "Research and Analysis", items: [
          { k: "UX Audit", v: "Conducted a thorough audit of all existing interfaces to identify inconsistencies and usability issues.\n\nCollaborated with cross-functional teams to map out technical and functional gaps." },
          { k: "User Research", v: "Conducted 30+ user interviews with board members and administrators to understand pain points.\n\nUsed the JTBD framework to map primary use cases and uncover user priorities." },
          { k: "Competitive Analysis", v: "Benchmarked against leading solutions in the market to identify opportunities for differentiation and improvement." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b710a92-0adf-4024-b255-44f88fdf5ccf%2FUntitled.png?table=block&id=c60dcc7e-169d-4481-ac31-56a0f4186a58&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F656d03e0-d775-4492-b3e8-cf6e58fa257f%2FUntitled.png?table=block&id=784f35b4-04c2-42b4-8bfc-af5421b08c24&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
        ], captions: ["UX audit & issues mapping", "Flows, patterns & mapping"] },
        { type: "cards", title: "Proposed Solutions", items: [
          { k: "Unified Design System", v: "Developed an atomic design library for all platforms, ensuring consistency and scalability.\n\nImplemented token-based design components to streamline updates across platforms." },
          { k: "Process Optimization", v: "Introduced templates for non-designers to create tasks, enabling faster iterations.\n\nAligned design tokens with developers' codebase to reduce friction in implementation.\n\nTransitioned to Jira for task tracking, enhancing transparency and collaboration." },
          { k: "Platform Redesign", v: "Reimagined the user flow to simplify navigation and improve usability.\n\nIntroduced prototypes validated through user feedback before development." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0c86b69e-27e1-45a3-9a07-6a2985df2e6b%2FShot-1.jpg?table=block&id=30f1dc10-cd44-44bf-b615-3b2bdfd54634&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c41a313-42f5-4544-a7cc-d26333d87853%2FShot_01.png?table=block&id=3ae3317a-f159-4039-a8a8-d8d516381c38&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f079fcb-4fe5-42b4-8636-94311e4f00e8%2FShot-4.jpg?table=block&id=2207941d-c404-4051-9ef8-6ba41d37efa2&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdd76ea19-8913-44d5-938d-fc1f44cf7b61%2FMobile_Mockup_40.png?table=block&id=f20b9019-6b7f-4bf5-87f7-872890b721de&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
        ], captions: [] },
        { type: "cards", title: "Results Achieved", items: [
          { k: "Time Efficiency", v: "Reduced feature implementation cycles by 30%." },
          { k: "User Engagement", v: "Improved user satisfaction scores through consistent design and intuitive interactions." },
          { k: "Scalability", v: "New design system supported the rapid development of additional features and ensured visual cohesion." },
          { k: "Adoption Rates", v: "Increased user retention by addressing pain points and delivering seamless experiences across platforms." },
        ]},
        { type: "prose", title: "Conclusion", text: "This project showcased my ability to lead design transformations across the product and the company, significantly improving collaboration and product quality." },
        { type: "images", title: "More visuals", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd54a1453-b5a0-44d2-a70f-e66ee954d10f%2Fimage.png?table=block&id=140cc0bc-95f6-80d1-897d-f59e78fab94e&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F5322e49d-f8da-46f6-99c0-790aac1f3a4d%2Fimage.png?table=block&id=140cc0bc-95f6-8060-bc47-ccef1c5ca1d7&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fbcf1d777-2091-47ed-a717-6b05eee7345d%2Fimage.png?table=block&id=140cc0bc-95f6-808f-89b4-c9000363eaf4&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F7d15c92b-48c4-4e31-ab88-bbaca26c313c%2Fimage.png?table=block&id=140cc0bc-95f6-8018-a21f-c9e93e936afe&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F38374c1a-d891-4737-8194-6779a4a9c0c4%2Fimage.png?table=block&id=140cc0bc-95f6-802c-af1d-fbe0affe722a&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fbe9ca7a3-18d0-41b6-a60e-b8b6f5b00799%2Fimage.png?table=block&id=140cc0bc-95f6-8074-91ee-c74c2077cdab&width=1420&cache=v2",
        ], captions: [] },
      ],
    },
    ru: {
      kicker: "Governance · 2023", title: "iDeals Board",
      about: "Платформа для управления работой совета директоров и совместной подготовки заседаний.",
      website: "https://idealsboard.com/",
      sections: [
        { type: "prose", title: "Продукт", text: "iDeals Board помогает командам совета директоров быстрее готовить заседания: собирать материалы, согласовывать повестку, работать с документами и управлять доступами. Фокус — на контроле, предсказуемости и экономии времени на подготовке." },
        { type: "cards", title: "Проблемы", items: [
          { k: "Разрозненный интерфейс", v: "В продукте не было единого визуального языка, из-за чего пользователям было сложнее ориентироваться и доверять интерфейсу." },
          { k: "Разный опыт на платформах", v: "Одинаковые функции в iOS, Android и web работали по-разному. Это создавало ощущение «трех разных продуктов»." },
          { k: "Нет дизайн-системы", v: "Отсутствие переиспользуемых компонентов и правил усложняло поддержку и замедляло разработку." },
          { k: "Длинные циклы внедрения", v: "Новые фичи внедрялись медленно из-за разрыва между дизайном и разработкой и отсутствия общих артефактов." },
        ]},
        { type: "cards", title: "Исследования", items: [
          { k: "UX-аудит", v: "Провел аудит экранов и сценариев, чтобы найти несостыковки, дубли и проблемные места.\n\nПараллельно синхронизировался с командами, чтобы зафиксировать функциональные и технические ограничения." },
          { k: "Исследования пользователей", v: "Провел 30+ интервью с членами совета и администраторами, чтобы понять реальные боли и контекст.\n\nИспользовал JTBD, чтобы собрать ключевые задачи и приоритеты пользователей." },
          { k: "Анализ конкурентов", v: "Сравнил продукт с лидерами рынка, чтобы найти точки роста и понятные пользователям паттерны." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b710a92-0adf-4024-b255-44f88fdf5ccf%2FUntitled.png?table=block&id=c60dcc7e-169d-4481-ac31-56a0f4186a58&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F656d03e0-d775-4492-b3e8-cf6e58fa257f%2FUntitled.png?table=block&id=784f35b4-04c2-42b4-8bfc-af5421b08c24&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
        ], captions: ["UX-аудит и карта проблем", "Флоу, паттерны и маппинг"] },
        { type: "cards", title: "Решения", items: [
          { k: "Единая дизайн-система", v: "Собрал атомарную библиотеку компонентов для всех платформ, чтобы добиться консистентности и масштабируемости.\n\nВнедрил токены (цвет, типографика, отступы) для синхронизации изменений между платформами." },
          { k: "Оптимизация процессов", v: "Сделал шаблоны для не-дизайнеров (в т.ч. для постановки задач), чтобы ускорить итерации.\n\nСинхронизировал дизайн-токены с кодовой базой.\n\nПеревел трекинг задач в Jira, чтобы повысить прозрачность." },
          { k: "Редизайн ключевых сценариев", v: "Пересобрал пользовательские потоки, чтобы упростить навигацию и повысить понятность.\n\nПрототипы проверялись через фидбек пользователей до передачи в разработку." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0c86b69e-27e1-45a3-9a07-6a2985df2e6b%2FShot-1.jpg?table=block&id=30f1dc10-cd44-44bf-b615-3b2bdfd54634&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c41a313-42f5-4544-a7cc-d26333d87853%2FShot_01.png?table=block&id=3ae3317a-f159-4039-a8a8-d8d516381c38&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f079fcb-4fe5-42b4-8636-94311e4f00e8%2FShot-4.jpg?table=block&id=2207941d-c404-4051-9ef8-6ba41d37efa2&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdd76ea19-8913-44d5-938d-fc1f44cf7b61%2FMobile_Mockup_40.png?table=block&id=f20b9019-6b7f-4bf5-87f7-872890b721de&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
        ], captions: [] },
        { type: "cards", title: "Результаты", items: [
          { k: "Скорость поставки", v: "Сократил цикл внедрения фич примерно на 30%." },
          { k: "Качество UX", v: "Улучшилась оценка опыта за счет предсказуемых паттернов и единого визуального языка." },
          { k: "Масштабирование", v: "Дизайн-система упростила развитие продукта и помогла удерживать консистентность при росте функциональности." },
          { k: "Удержание", v: "Улучшения закрыли ключевые боли и дали более «бесшовный» опыт на платформах." },
        ]},
        { type: "prose", title: "Вывод", text: "Проект показал мой опыт в трансформации дизайна на уровне продукта и процессов: от аудита и исследований до внедрения дизайн-системы и синхронизации с разработкой. Итог — выше скорость поставки и более цельный пользовательский опыт." },
        { type: "images", title: "Ещё примеры экранов", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd54a1453-b5a0-44d2-a70f-e66ee954d10f%2Fimage.png?table=block&id=140cc0bc-95f6-80d1-897d-f59e78fab94e&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F5322e49d-f8da-46f6-99c0-790aac1f3a4d%2Fimage.png?table=block&id=140cc0bc-95f6-8060-bc47-ccef1c5ca1d7&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fbcf1d777-2091-47ed-a717-6b05eee7345d%2Fimage.png?table=block&id=140cc0bc-95f6-808f-89b4-c9000363eaf4&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F7d15c92b-48c4-4e31-ab88-bbaca26c313c%2Fimage.png?table=block&id=140cc0bc-95f6-8018-a21f-c9e93e936afe&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F38374c1a-d891-4737-8194-6779a4a9c0c4%2Fimage.png?table=block&id=140cc0bc-95f6-802c-af1d-fbe0affe722a&width=1420&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fbe9ca7a3-18d0-41b6-a60e-b8b6f5b00799%2Fimage.png?table=block&id=140cc0bc-95f6-8074-91ee-c74c2077cdab&width=1420&cache=v2",
        ], captions: [] },
      ],
    },
  },
  /* ============================= REPOSITORY ============================= */
  "repository": {
    art: "repo", group: "project",
    intro: "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F35251593-208a-4fd0-9ede-dbb82e4e3100%2Fimage.png?table=block&id=141cc0bc-95f6-8011-b34c-dfa6596108a2&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
    en: {
      kicker: "Enterprise · 2022", title: "Repository",
      about: "Enterprise document management and collaboration platform with workflows, access control, and search.",
      website: "",
      sections: [
        { type: "prose", title: "Project Overview", text: "Repository is an internal platform used to store, organize, and share documents across teams. The product supports multiple roles, strict access control, and workflow-driven operations (approval, review, publishing)." },
        { type: "cards", title: "Challenges Identified", items: [
          { k: "Complex permissions", v: "Different roles needed different views and actions.\n\nAny ambiguity in access logic caused trust and compliance issues." },
          { k: "Heavy data and navigation", v: "Users worked with large trees, folders, and long lists.\n\nFinding the right document had to be fast and predictable." },
          { k: "Workflow clarity", v: "Approval and status states had to be visible at a glance.\n\nUsers needed to understand 'what happens next' and who owns the next step." },
          { k: "Consistency across modules", v: "Different screens evolved separately and started to diverge.\n\nThe product needed consistent patterns and reusable UI." },
        ]},
        { type: "cards", title: "Research and Analysis", items: [
          { k: "UX audit", v: "Reviewed key flows: search, upload, sharing, approvals, and permission checks.\n\nCollected friction points and inconsistencies." },
          { k: "Role mapping", v: "Mapped roles to actions and visibility rules.\n\nClarified edge cases and risky states early." },
          { k: "Information architecture", v: "Worked on structure, hierarchy, and navigation patterns.\n\nDefined how users move between folders, docs, and workflow steps." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F94c7e829-37aa-4de7-a240-d9672e60e5b1%2Fimage.png?table=block&id=141cc0bc-95f6-80b4-a324-e538cd505c36&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd632c441-71af-4efb-bb9b-ef70b8e0781b%2Fimage.png?table=block&id=141cc0bc-95f6-8022-ba5d-cdf5391b17a8&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F547b13ea-d109-4188-b636-1d2d5fb78904%2Fimage.png?table=block&id=141cc0bc-95f6-8071-800c-e4634c66e0f9&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff20ab4e7-a544-4247-aa50-9a40125301ad%2Fimage.png?table=block&id=141cc0bc-95f6-8057-89fd-c911f7df6c37&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F03b62156-0b4b-479d-8f69-83737385e270%2Fimage.png?table=block&id=141cc0bc-95f6-80ab-82f0-f59a25f41587&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fe6134270-2b06-4d9a-9ff9-190bd33aff15%2Fimage.png?table=block&id=141cc0bc-95f6-80d1-bbe9-e6598779648b&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fa8bf5e3b-a183-459d-81dd-b74799ee393c%2Fimage.png?table=block&id=141cc0bc-95f6-804d-b612-fa3a1393390d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["UX audit", "Issues mapping", "IA draft", "Workflow states", "Search / filters", "Sharing", "Permissions"] },
        { type: "cards", title: "Proposed Solutions", items: [
          { k: "Cleaner navigation and structure", v: "Made hierarchy and location clearer.\n\nReduced cognitive load when working with deep trees and long lists." },
          { k: "Workflow visibility", v: "Improved status indicators and 'next step' clarity.\n\nHelped users understand progress without opening multiple screens." },
          { k: "Reusable UI patterns", v: "Unified key components and states.\n\nAligned patterns across lists, details, and editing screens." },
          { k: "Better search and filters", v: "Made discovery faster with clearer filter logic and feedback.\n\nReduced time-to-find for common tasks." },
        ]},
        { type: "cards", title: "Results Achieved", items: [
          { k: "Lower friction in daily work", v: "Users could move through the system faster with fewer mistakes." },
          { k: "Clearer ownership", v: "Workflow states and ownership became more transparent." },
          { k: "More consistent UI", v: "Reduced divergence between screens by aligning patterns and components." },
        ]},
        { type: "cards", title: "Key Contributions", items: [
          { k: "System UX", v: "Worked with role-based logic, complex states, and dense data.\n\nDesigned for predictability and scale." },
          { k: "Process + UI alignment", v: "Mapped workflows to screens and components.\n\nEnsured UI reflects the real process, not just 'pretty screens'." },
          { k: "Collaboration with engineering", v: "Validated feasibility early.\n\nSupported implementation with specs, states, and reviews." },
        ]},
        { type: "images", title: "Visuals", cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F0ebc8fc3-0226-4ce2-b07a-99a87ba1127c%2Fimage.png?table=block&id=141cc0bc-95f6-80dc-b0d1-d4152b8e4795&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F955954ff-549c-4384-94bf-1ec87d7fb849%2Fimage.png?table=block&id=141cc0bc-95f6-804b-b15f-c87a997869c3&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F5d6d7d3c-3403-4dd7-9d14-006009ce1825%2Fimage.png?table=block&id=141cc0bc-95f6-80d0-82a6-ef9da5ae895e&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff3c73848-7396-44c4-9e01-0d1cec4e89c4%2Fimage.png?table=block&id=141cc0bc-95f6-8080-85df-db8d56fc6cf7&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Visual 1", "Visual 2", "Visual 3", "Visual 4"] },
        { type: "images", title: "Early concepts", cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F451b3383-88e6-401d-8e96-9e66089f69d3%2Fimage.png?table=block&id=141cc0bc-95f6-8036-ba44-e6c766e82297&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fecee0c99-c147-4bee-9428-3666b6b9640f%2Fimage.png?table=block&id=141cc0bc-95f6-806e-82a3-f8b1a43582c1&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fab36a384-0748-4814-a7e3-f1d4b5d78345%2Fimage.png?table=block&id=141cc0bc-95f6-80c8-8724-fb2d8cc1aabb&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F91cb3600-7ff2-4afc-9e22-656d20f6b876%2Fimage.png?table=block&id=141cc0bc-95f6-802e-adcf-de32cf5e805d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F342cee19-8e49-423e-b161-45ef621cb182%2Fimage.png?table=block&id=141cc0bc-95f6-80bd-8f9c-e323a31d04b6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Early concept 1", "Early concept 2", "Early concept 3", "Early concept 4", "Early concept 5"] },
      ],
    },
    ru: {
      kicker: "Enterprise · 2022", title: "Repository",
      about: "Корпоративная платформа для хранения документов и совместной работы: процессы согласования, права доступа, поиск и контроль версий.",
      website: "",
      sections: [
        { type: "prose", title: "Коротко о проекте", text: "Repository — внутренняя платформа для хранения, структурирования и совместной работы с документами. Продукт поддерживает разные роли, строгие права доступа и сценарии, завязанные на процесс (согласование, ревью, публикация)." },
        { type: "cards", title: "Проблемы и ограничения", items: [
          { k: "Сложные права доступа", v: "Разные роли требовали разных действий и представлений.\n\nЛюбая неоднозначность в логике доступа била по доверию и комплаенсу." },
          { k: "Тяжелые данные и навигация", v: "Пользователи работают с большими деревьями/папками и длинными списками.\n\nДокумент нужно находить быстро и без сюрпризов." },
          { k: "Понятность процессов", v: "Статусы и этапы согласования должны читаться с первого взгляда.\n\nВажно понимать «что дальше» и кто следующий ответственный." },
          { k: "Единые паттерны", v: "Разные экраны развивались отдельно и начали расходиться.\n\nНужны единые паттерны и переиспользуемый UI." },
        ]},
        { type: "cards", title: "Исследование и анализ", items: [
          { k: "UX-аудит", v: "Разобрал ключевые сценарии: поиск, загрузка, шаринг, согласование и проверки прав.\n\nСобрал точки трения и несостыковки." },
          { k: "Карта ролей", v: "Сопоставил роли с действиями и правилами видимости.\n\nЗаранее прояснил пограничные и рискованные состояния." },
          { k: "Информационная архитектура", v: "Проработал структуру, иерархию и паттерны навигации.\n\nОпределил, как пользователь перемещается между папками, документами и этапами процесса." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F94c7e829-37aa-4de7-a240-d9672e60e5b1%2Fimage.png?table=block&id=141cc0bc-95f6-80b4-a324-e538cd505c36&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fd632c441-71af-4efb-bb9b-ef70b8e0781b%2Fimage.png?table=block&id=141cc0bc-95f6-8022-ba5d-cdf5391b17a8&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F547b13ea-d109-4188-b636-1d2d5fb78904%2Fimage.png?table=block&id=141cc0bc-95f6-8071-800c-e4634c66e0f9&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff20ab4e7-a544-4247-aa50-9a40125301ad%2Fimage.png?table=block&id=141cc0bc-95f6-8057-89fd-c911f7df6c37&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F03b62156-0b4b-479d-8f69-83737385e270%2Fimage.png?table=block&id=141cc0bc-95f6-80ab-82f0-f59a25f41587&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fe6134270-2b06-4d9a-9ff9-190bd33aff15%2Fimage.png?table=block&id=141cc0bc-95f6-80d1-bbe9-e6598779648b&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fa8bf5e3b-a183-459d-81dd-b74799ee393c%2Fimage.png?table=block&id=141cc0bc-95f6-804d-b612-fa3a1393390d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["UX-аудит", "Карта проблем", "Черновик структуры", "Состояния процесса", "Поиск и фильтры", "Шаринг", "Права доступа"] },
        { type: "cards", title: "Что сделали", items: [
          { k: "Чище навигация и структура", v: "Сделал иерархию и «где я нахожусь» более очевидными.\n\nСнизил когнитивную нагрузку при работе с глубокими деревьями и длинными списками." },
          { k: "Видимость процесса", v: "Улучшил индикаторы статусов и понимание «следующего шага».\n\nПользователь видит прогресс без прыжков по экранам." },
          { k: "Переиспользуемые паттерны", v: "Унифицировал ключевые компоненты и состояния.\n\nВыровнял паттерны между списками, карточками и экранами редактирования." },
          { k: "Поиск и фильтры", v: "Ускорил нахождение документов: логика фильтров стала понятнее, обратная связь — заметнее.\n\nСократил время на типовые задачи." },
        ]},
        { type: "cards", title: "Результаты", items: [
          { k: "Меньше трения в ежедневной работе", v: "Пользователи быстрее выполняют задачи и реже ошибаются." },
          { k: "Понятнее ответственность", v: "Статусы и ответственность в согласовании стали прозрачнее." },
          { k: "Более единый интерфейс", v: "Снизил «разъезд» между экранами, выровняв паттерны и компоненты." },
        ]},
        { type: "cards", title: "Мой вклад", items: [
          { k: "Системный UX", v: "Работал с ролевой логикой, сложными состояниями и плотными данными.\n\nДелал интерфейс предсказуемым и масштабируемым." },
          { k: "Связка «процесс — интерфейс»", v: "Сопоставил процессы с экранами и компонентами.\n\nСледил, чтобы UI отражал реальный процесс, а не просто «красивые экраны»." },
          { k: "Работа с разработкой", v: "Проверял реализуемость заранее.\n\nПоддерживал внедрение через спецификации, состояния и ревью." },
        ]},
        { type: "images", title: "Визуальные примеры", cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F0ebc8fc3-0226-4ce2-b07a-99a87ba1127c%2Fimage.png?table=block&id=141cc0bc-95f6-80dc-b0d1-d4152b8e4795&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F955954ff-549c-4384-94bf-1ec87d7fb849%2Fimage.png?table=block&id=141cc0bc-95f6-804b-b15f-c87a997869c3&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F5d6d7d3c-3403-4dd7-9d14-006009ce1825%2Fimage.png?table=block&id=141cc0bc-95f6-80d0-82a6-ef9da5ae895e&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Ff3c73848-7396-44c4-9e01-0d1cec4e89c4%2Fimage.png?table=block&id=141cc0bc-95f6-8080-85df-db8d56fc6cf7&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Пример 1", "Пример 2", "Пример 3", "Пример 4"] },
        { type: "images", title: "Ранние концепты", cols: 2, images: [
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F451b3383-88e6-401d-8e96-9e66089f69d3%2Fimage.png?table=block&id=141cc0bc-95f6-8036-ba44-e6c766e82297&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fecee0c99-c147-4bee-9428-3666b6b9640f%2Fimage.png?table=block&id=141cc0bc-95f6-806e-82a3-f8b1a43582c1&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2Fab36a384-0748-4814-a7e3-f1d4b5d78345%2Fimage.png?table=block&id=141cc0bc-95f6-80c8-8724-fb2d8cc1aabb&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F91cb3600-7ff2-4afc-9e22-656d20f6b876%2Fimage.png?table=block&id=141cc0bc-95f6-802e-adcf-de32cf5e805d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://rainrock.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5dc86187-d621-4985-bd4f-aa480cbb1434%2F342cee19-8e49-423e-b161-45ef621cb182%2Fimage.png?table=block&id=141cc0bc-95f6-80bd-8f9c-e323a31d04b6&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Ранний концепт 1", "Ранний концепт 2", "Ранний концепт 3", "Ранний концепт 4", "Ранний концепт 5"] },
      ],
    },
  },

  /* ============================= SBERIDEA ============================= */
  "sberidea": {
    art: "sber", group: "project",
    intro: "https://www.notion.so/image/attachment%3A71e01039-eb8a-4933-bf0e-1608bf2c4cb9%3Aimage.png?table=block&id=2e9cc0bc-95f6-80bd-9996-f0d3e43abac7&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
    en: {
      kicker: "Innovation · 2021", title: "SberIdea",
      about: "Innovation and idea management platform for collecting, evaluating, and implementing employee ideas at scale.",
      website: "https://www.sberbank.ru/",
      sections: [
        { type: "prose", title: "Project Overview", text: "SberIdea is an internal product that helps employees submit ideas, route them through review, and track progress from proposal to implementation. The platform supports multiple roles (authors, moderators, experts, decision makers) and requires transparent status tracking, clear event communication, and robust content structure." },
        { type: "cards", title: "Challenges Identified", items: [
          { k: "Complex roles and flows", v: "Different user groups required different permissions and interfaces.\n\nThe same entity (idea) had to behave differently depending on the stage and role." },
          { k: "Transparency and trust", v: "Users needed to understand where their idea is, who owns the next step, and what happens next.\n\nLack of clarity reduced engagement." },
          { k: "Heavy content and governance", v: "Events, announcements, and statistics required consistent structure and navigation.\n\nThe platform needed to scale without turning into a mess." },
          { k: "Editing and communication", v: "Creating and updating content had to be fast and predictable.\n\nEmail and notifications were part of the product experience, not an afterthought." },
        ]},
        { type: "cards", title: "Research and Analysis", items: [
          { k: "Flow review", v: "Mapped the end-to-end lifecycle of an idea and key role transitions.\n\nIdentified bottlenecks in moderation, expert review, and decision stages." },
          { k: "Information architecture", v: "Structured key sections (ideas, events, stats, knowledge) into a predictable navigation model.\n\nDefined how content scales and stays searchable." },
          { k: "UX iterations", v: "Iterated on screens and states with quick prototypes.\n\nAligned UI decisions with internal standards and implementation constraints." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed83dd53-8744-47f6-8438-4adfda9723b0%2FUntitled.png?table=block&id=a12590eb-b258-436e-9311-071f4fd7663f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6799b3ba-e823-4320-ab2d-2a164d193d07%2FUntitled.png?table=block&id=3d9940c1-f334-406e-95ef-d55df6af702f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3973e063-bb26-4d7a-b87e-b0675fe8111e%2FUntitled.png?table=block&id=30667966-4c7b-4150-878e-88a42061c40d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3cbaab62-fdd4-4ea1-a228-afb06dcaaa38%2FUntitled.png?table=block&id=8ccc0625-8d42-4dbf-b71d-e657fa0d5629&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Flow draft 1", "Flow draft 2", "IA / mapping", "States and structure"] },
        { type: "cards", title: "Proposed Solutions", items: [
          { k: "Events and announcements", v: "Made event content easier to scan with clearer hierarchy and templates.\n\nReduced ambiguity in what matters and what to do next." },
          { k: "Site structure and statistics", v: "Improved site layout logic and navigation.\n\nDesigned statistics views that support exploration and reporting." },
          { k: "Editor experience", v: "Enhanced the editor for creating surveys and content.\n\nFocused on predictable controls and fewer errors in publishing." },
          { k: "Communication layer", v: "Designed email/notification patterns to keep users informed without overload.\n\nMaintained consistent tone and structure." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdef33439-ff7e-4bbe-8530-68e9d0e6ea6f%2FEvents.png?table=block&id=140cc0bc-95f6-80e7-a332-e32351382039&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc6480c0f-ffc7-4fd3-8bdd-6f8036abfc79%2FEvent.png?table=block&id=140cc0bc-95f6-80b6-99f5-ee2045ad06f3&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa3eb93bd-d778-458b-81fa-9802b4a51bc1%2FSite_constr.png?table=block&id=140cc0bc-95f6-80e7-a1b4-eec7711900e4&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c4d9fbd-671b-46fb-9666-62d015a2806c%2FSite_stat.png?table=block&id=140cc0bc-95f6-8010-9ece-c21a73b724c7&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Events list", "Event page", "Site structure", "Statistics view"] },
        { type: "cards", title: "Results Achieved", items: [
          { k: "Clarity of statuses", v: "Users could better understand progress and ownership across stages." },
          { k: "Faster content work", v: "Improved editor and templates reduced time to publish updates." },
          { k: "Scalable structure", v: "Navigation and page structure were prepared for growth of sections and content." },
        ]},
        { type: "cards", title: "Key Contributions", items: [
          { k: "End-to-end UX", v: "Owned key scenarios from problem framing to UI states.\n\nKept alignment between roles, permissions, and interface behavior." },
          { k: "System thinking", v: "Built repeatable patterns for content and communications.\n\nWorked with templates and scalable structures." },
          { k: "Collaboration", v: "Worked closely with product and engineering, validating feasibility early.\n\nSupported implementation with clear specs and reviews." },
        ]},
        { type: "images", title: "Visuals", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6e03fee-464f-499c-a2f6-bbfa9b40034a%2FSurv_editor_lrg.png?table=block&id=140cc0bc-95f6-803f-815b-eef290e508bd&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F571054c5-e8f7-4ad6-bf96-ee676c88c83f%2FSurv_editor.png?table=block&id=140cc0bc-95f6-8006-97fa-d78bd70fa143&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0daf6a0c-1111-4d15-ab01-0b1ff4b8596b%2Fmail.png?table=block&id=140cc0bc-95f6-808b-83e3-cd39aadda151&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7cafb0f-1dfe-4483-a172-75a0cd030888%2FSurvey.png?table=block&id=140cc0bc-95f6-80fc-aada-c3a3f183bf51&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b28cb80-7762-4f07-b24f-55bcfaf61aae%2FSurvey2.png?table=block&id=140cc0bc-95f6-807a-ba6e-de8e6c9630c2&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe39037c7-f892-458d-a706-beeed15a6e28%2FSurv_completed.png?table=block&id=140cc0bc-95f6-80ff-a998-c9f5e7102e68&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b6dc347-4b37-488f-b22f-2e87fdbf4c0b%2FQuestions_rooms.png?table=block&id=140cc0bc-95f6-80cd-b4b8-f3edec3ab047&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Survey editor (extended)", "Survey editor", "Email template", "Survey — draft", "Survey — step 2", "Survey — completed", "Questions and rooms"] },
      ],
    },
    ru: {
      kicker: "Innovation · 2021", title: "SberIdea",
      about: "Внутренняя платформа для сбора, оценки и внедрения инициатив сотрудников в масштабе большой организации.",
      website: "https://www.sberbank.ru/",
      sections: [
        { type: "prose", title: "Коротко о проекте", text: "SberIdea — внутренний продукт для работы с инициативами: сотрудник предлагает идею, дальше она проходит модерацию, экспертизу и решение, а прогресс прозрачно отслеживается до внедрения. Внутри много ролей (авторы, модераторы, эксперты, руководители), поэтому критичны понятные статусы, коммуникации и структурированная подача контента." },
        { type: "cards", title: "Проблемы и ограничения", items: [
          { k: "Сложные роли и сценарии", v: "Разные группы пользователей требовали разных прав и интерфейсов.\n\nОдна и та же сущность (идея) должна была вести себя по-разному в зависимости от стадии и роли." },
          { k: "Прозрачность и доверие", v: "Пользователю важно понимать, где сейчас идея, кто следующий ответственный и что будет дальше.\n\nКогда этого нет, вовлеченность падает." },
          { k: "Много контента и регламента", v: "События, анонсы и статистика требовали единой структуры и навигации.\n\nНужно было масштабироваться без превращения продукта в хаос." },
          { k: "Редактор и коммуникации", v: "Создание и обновление контента должно быть быстрым и предсказуемым.\n\nПисьма и уведомления — это часть UX, а не «доп. опция»." },
        ]},
        { type: "cards", title: "Исследование и анализ", items: [
          { k: "Разбор текущих сценариев", v: "Разложил по шагам полный жизненный цикл идеи и переходы между ролями.\n\nНашел узкие места в модерации, экспертизе и принятии решений." },
          { k: "Информационная архитектура", v: "Собрал структуру ключевых разделов (идеи, события, статистика, база знаний) в предсказуемую модель навигации.\n\nПродумал, как контент масштабируется и остается находимым." },
          { k: "Итерации UX", v: "Быстро прогонял изменения через прототипы и состояния.\n\nСверял UI-решения с внутренними стандартами и ограничениями реализации." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed83dd53-8744-47f6-8438-4adfda9723b0%2FUntitled.png?table=block&id=a12590eb-b258-436e-9311-071f4fd7663f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6799b3ba-e823-4320-ab2d-2a164d193d07%2FUntitled.png?table=block&id=3d9940c1-f334-406e-95ef-d55df6af702f&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3973e063-bb26-4d7a-b87e-b0675fe8111e%2FUntitled.png?table=block&id=30667966-4c7b-4150-878e-88a42061c40d&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3cbaab62-fdd4-4ea1-a228-afb06dcaaa38%2FUntitled.png?table=block&id=8ccc0625-8d42-4dbf-b71d-e657fa0d5629&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Черновик сценариев 1", "Черновик сценариев 2", "Карта/структура", "Состояния и структура"] },
        { type: "cards", title: "Что сделали", items: [
          { k: "События и анонсы", v: "Сделал «события» проще для сканирования: иерархия, шаблоны, акценты.\n\nУбрал двусмысленность: что важно и какое действие ожидается." },
          { k: "Структура и статистика", v: "Улучшил логику структуры и навигации.\n\nСпроектировал представления статистики под исследование и отчетность." },
          { k: "Опыт редактора", v: "Доработал редактор для создания опросов и контента.\n\nФокус — предсказуемые контролы и меньше ошибок при публикации." },
          { k: "Коммуникации", v: "Спроектировал паттерны писем/уведомлений, чтобы держать пользователя в курсе без перегруза.\n\nЕдиный тон и структура сообщений." },
        ]},
        { type: "images", title: null, cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdef33439-ff7e-4bbe-8530-68e9d0e6ea6f%2FEvents.png?table=block&id=140cc0bc-95f6-80e7-a332-e32351382039&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc6480c0f-ffc7-4fd3-8bdd-6f8036abfc79%2FEvent.png?table=block&id=140cc0bc-95f6-80b6-99f5-ee2045ad06f3&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa3eb93bd-d778-458b-81fa-9802b4a51bc1%2FSite_constr.png?table=block&id=140cc0bc-95f6-80e7-a1b4-eec7711900e4&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c4d9fbd-671b-46fb-9666-62d015a2806c%2FSite_stat.png?table=block&id=140cc0bc-95f6-8010-9ece-c21a73b724c7&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Список событий", "Страница события", "Структура сайта", "Экран статистики"] },
        { type: "cards", title: "Результаты", items: [
          { k: "Понятные статусы", v: "Пользователям стало проще понимать прогресс и ответственность на каждом этапе." },
          { k: "Быстрее работа с контентом", v: "Редактор и шаблоны сократили время на публикации и обновления." },
          { k: "Масштабируемая структура", v: "Навигация и структура страниц готовы к росту разделов и объема данных." },
        ]},
        { type: "cards", title: "Мой вклад", items: [
          { k: "Сквозной UX", v: "Вел ключевые сценарии от формулировки проблемы до UI-состояний.\n\nДержал связку «роль — права — поведение интерфейса»." },
          { k: "Системное мышление", v: "Собирал повторяемые паттерны для контента и коммуникаций.\n\nРаботал через шаблоны и масштабируемые структуры." },
          { k: "Совместная работа", v: "Плотно работал с продуктом и разработкой, проверяя реализуемость заранее.\n\nПоддерживал внедрение через спецификации и ревью." },
        ]},
        { type: "images", title: "Визуальные примеры", cols: 2, images: [
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6e03fee-464f-499c-a2f6-bbfa9b40034a%2FSurv_editor_lrg.png?table=block&id=140cc0bc-95f6-803f-815b-eef290e508bd&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F571054c5-e8f7-4ad6-bf96-ee676c88c83f%2FSurv_editor.png?table=block&id=140cc0bc-95f6-8006-97fa-d78bd70fa143&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0daf6a0c-1111-4d15-ab01-0b1ff4b8596b%2Fmail.png?table=block&id=140cc0bc-95f6-808b-83e3-cd39aadda151&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7cafb0f-1dfe-4483-a172-75a0cd030888%2FSurvey.png?table=block&id=140cc0bc-95f6-80fc-aada-c3a3f183bf51&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b28cb80-7762-4f07-b24f-55bcfaf61aae%2FSurvey2.png?table=block&id=140cc0bc-95f6-807a-ba6e-de8e6c9630c2&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe39037c7-f892-458d-a706-beeed15a6e28%2FSurv_completed.png?table=block&id=140cc0bc-95f6-80ff-a998-c9f5e7102e68&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
          "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b6dc347-4b37-488f-b22f-2e87fdbf4c0b%2FQuestions_rooms.png?table=block&id=140cc0bc-95f6-80cd-b4b8-f3edec3ab047&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&userId=&cache=v2",
        ], captions: ["Редактор опроса (расширенный)", "Редактор опроса", "Шаблон письма", "Опрос — черновик", "Опрос — шаг 2", "Опрос — завершение", "Вопросы и комнаты"] },
      ],
    },
  },
  /* ============================= INNOTECH (LEADERSHIP) ============================= */
  "innotech-lead": {
    art: "innotech", group: "leadership", intro: "",
    en: {
      kicker: "Leadership Case · InnoTech", title: "Building Design Practice from Scratch",
      about: "Large-scale B2B workflow platform (Jira-like) in enterprise fintech. 25,000+ active users, ~50 cross-functional product teams.",
      website: "https://sferaplatform.ru/zadachi",
      sections: [
        { type: "prose", title: "Starting Point", text: "I joined a stream where design as a function did not exist. The team was still being hired, there were no processes at all — no grooming, no retros, no 1:1s. Design was lagging behind development with no buffer between handoff and the start of coding.\n\nTwo teams could simultaneously design the same input field. The product looked inconsistent. The navigation model did not allow the product to scale organically.\n\nNobody knew how to work with designers or what to expect from them. Mandate from CPO: build a design process and get it running." },
        { type: "cards", title: "Team & People", items: [
          { k: "Building the team from zero", v: "8 designers across 4 streams. No processes, no structure, no onboarding.\n\nStable result achieved in 3–4 months (market benchmark: 3–6 months)." },
          { k: "Mentoring and growth", v: "Grew 5 designers in level: 2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead. Tools: individual development plans, skill maps, 1:1s, growth tracks." },
          { k: "Competency matrix", v: "A transparency tool: who is where, where they are heading, what needs to develop. Includes a designer competency matrix, team maturity map, T-shape skills matrix, and an IDP for each designer." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/matrix.png", SUPA + "/survey.png"], captions: ["Competency matrix", "360 evaluation form"] },
        { type: "cards", title: "Processes & Quality", items: [
          { k: "Design process from scratch", v: "Built the full cycle from Discovery to Delivery: 1:1s, retrospectives, pre-grooming, grooming, post-release quality check. Delivery became regular, review iterations shortened, onboarding accelerated." },
          { k: "Meeting optimization", v: "Main complaint at the start: 3–4 hours of calls per day. Audited the value of every meeting and removed those where designers were not needed. 3–4h → 1–2h per day. ~50% reduction." },
          { k: "Cross-review", v: "Before: one general call where half the team was idle. After: every mockup goes through 2 reviewers from other teams before reaching me. 100% involvement, shorter review calls, distributed accountability." },
          { k: "RICE prioritization", v: "Design bugs kept falling out of the backlog. Developed and introduced RICE methodology for the entire team backlog. Adopted as a standard — design and product backlogs merged, design bugs stopped being left out." },
          { k: "Transparent retrospectives", v: "Each retro starts by revisiting previous issues: resolved / in progress / carried over. Unresolved ones go into the next cycle. Effect: a culture of accountability for agreements." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/rice.png", SUPA + "/retro.png"], captions: ["RICE prioritization", "Transparent retrospectives"] },
        { type: "cards", title: "Infrastructure", items: [
          { k: "Design system migration", v: "Old DS: Admiral — a styled VTB design system; every new component required long approval. Helped the PO choose Ant Design, organized and led the migration, visually indistinguishable. Design migrated in 2 months; full team 4–6 months. Industry benchmark: 6–18 months." },
          { k: "Navigation redesign", v: "The top menu was not scalable — unclear which company or team you were in. Solution: left-side navigation with persistent context and one-click switching. The product can now grow organically without UX dead ends." },
          { k: "CJM and IA culture", v: "Before: CJMs and IA were not practiced; PMs and designers got confused about their own features. Introduced as a working standard — the pattern spread beyond design." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/comparison.png", SUPA + "/ds_table.png", SUPA + "/nav_doc.png", SUPA + "/cjm.png"], captions: ["Ant Design vs Admiral", "Migration tracking", "Navigation redesign", "CJM and IA"] },
        { type: "cards", title: "Metrics & Team Health", items: [
          { k: "Team health", v: "'Five dysfunctions of a team' framework. 4 of 5 indicators improved. The team learned to give and receive direct feedback without fear." },
          { k: "Team growth over 6 months", v: "Three maturity levels. Operational: 67→70 (target reached). Tactical: 55→67 (+12, fastest growth). Strategic: 33→36 (+3, next cycle focus)." },
          { k: "360 evaluation", v: "Introduced 360 evaluation — did not exist before. Extended it to managers and POs. Formed individual reports, discussed in 1:1. Skill maps and competency matrix built on top." },
          { k: "Product metrics", v: "Initiated Yandex Metrica for the cloud part and a satisfaction-rate widget. MVP: text feedback → numerical ratings + text, used in backlog work." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/trust_before.png", SUPA + "/trust_after.png", SUPA + "/growth_table.png", SUPA + "/report_360.png", SUPA + "/metrika.png"], captions: ["Team health — before", "Team health — after", "Team growth over 6 months", "360 report", "Yandex Metrica"] },
        { type: "cards", title: "What changed — in 2 years", items: [
          { k: "Team", v: "5 designers grew in level (2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead). 8 designers across 4 streams — result in 3–4 months. Toxic dynamics eliminated: trust, accountability, open feedback." },
          { k: "Processes", v: "Design is ~6 months ahead of development. −50% meeting time (3–4h → 1–2h). 100% cross-review involvement with distributed accountability. RICE as standard — design in a shared backlog with product." },
          { k: "Infrastructure", v: "Design system migrated in 2 months (benchmark 6–18). ~90% of UI covered by atomic components. Navigation rebuilt — the product scales organically." },
          { k: "Metrics", v: "4/5 team-health indicators improved. +12 tactical maturity in 6 months. 360, satisfaction rate, Yandex Metrica, retros, 1:1s, IDPs — all built from scratch." },
        ]},
      ],
    },
    ru: {
      kicker: "Менеджерский кейс · InnoTech", title: "Построение дизайн-практики с нуля",
      about: "Крупная B2B платформа для управления рабочими процессами (аналог Jira) в enterprise fintech. 25 000+ активных пользователей, ~50 кросс-функциональных команд.",
      website: "https://sferaplatform.ru/zadachi",
      sections: [
        { type: "prose", title: "С чего всё началось", text: "Пришёл в стрим, где дизайна как функции не существовало. Команда только набиралась, процессов не было вообще — ни груминга, ни ретро, ни 1:1. Дизайн отставал от разработки, не было запаса между передачей макетов и началом кодинга.\n\nДве команды могли одновременно делать одно и то же поле ввода. Продукт выглядел непоследовательно. Модель навигации не позволяла продукту масштабироваться органично.\n\nНикто не знал, как работать с дизайнерами и чего от них ожидать. Задача от CPO: выстроить дизайн-процесс и запустить его в работу." },
        { type: "cards", title: "Команда и люди", items: [
          { k: "Сборка команды с нуля", v: "8 дизайнеров по 4 стримам. Не было ни процессов, ни структуры, ни онбординга.\n\nУстойчивый результат за 3–4 месяца (бенчмарк рынка: 3–6 месяцев)." },
          { k: "Менторинг и рост", v: "Вырастил 5 дизайнеров в уровне: 2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead. Инструменты: ИПР, карта навыков, 1:1, треки развития." },
          { k: "Матрица компетенций", v: "Инструмент прозрачности: кто где находится, куда растёт, что нужно развивать. Включает матрицу компетенций, карту зрелости команды, T-shape матрицу навыков и ИПР для каждого." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/matrix.png", SUPA + "/survey.png"], captions: ["Матрица компетенций", "Форма 360-оценки"] },
        { type: "cards", title: "Процессы и качество", items: [
          { k: "Дизайн-процесс с нуля", v: "Выстроил полный цикл от Discovery до Delivery: 1:1, ретроспективы, прегруминг, груминг, пост-релизная проверка качества. Деливери стал регулярным, итерации ревью сократились, онбординг ускорился." },
          { k: "Оптимизация звонков", v: "Основная жалоба на старте: 3–4 часа звонков в день. Провёл аудит ценности каждой встречи, убрал встречи без дизайнеров. 3–4ч → 1–2ч в день. Снижение ~50%." },
          { k: "Кросс-ревью", v: "Было: общий звонок, половина бездействует. Стало: каждый макет проходит 2 рецензентов из других команд до попадания ко мне. 100% вовлечённость, короче звонки, accountability распределена." },
          { k: "RICE-приоритизация", v: "Дизайн-баги постоянно выпадали из беклога. Разработал и внедрил RICE для всего беклога команды. Подход принят как стандарт — дизайн и продукт в едином беклоге." },
          { k: "Прозрачные ретро", v: "Каждое ретро начинается с возврата к прошлым проблемам: решено / в работе / перенесено. Нерешённые — в следующий цикл. Эффект: культура ответственности за договорённости." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/rice.png", SUPA + "/retro.png"], captions: ["RICE-приоритизация", "Прозрачные ретро"] },
        { type: "cards", title: "Инфраструктура", items: [
          { k: "Миграция дизайн-системы", v: "Старая ДС: Admiral — стилизованная ДС ВТБ; любой новый компонент требовал долгого согласования. Помог ПО выбрать Ant Design, организовал и лидировал миграцию, визуально неотличимо. Дизайн за 2 месяца; вся команда 4–6 месяцев. Бенчмарк: 6–18 месяцев." },
          { k: "Редизайн навигации", v: "Верхнее меню немасштабируемо — непонятно, в какой компании/команде находишься. Решение: левая навигация с постоянным контекстом и переключением в один клик. Продукт растёт органично без UX-тупиков." },
          { k: "Культура CJM и IA", v: "До меня CJM и IA не практиковались; ПМ и дизайнеры путались в собственных фичах. Ввёл как стандарт работы — паттерн распространился за пределы дизайна." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/comparison.png", SUPA + "/ds_table.png", SUPA + "/nav_doc.png", SUPA + "/cjm.png"], captions: ["Ant Design vs Admiral", "Трекинг миграции", "Редизайн навигации", "CJM и IA"] },
        { type: "cards", title: "Метрики и здоровье команды", items: [
          { k: "Здоровье команды", v: "Фреймворк «Пять пороков команды». 4 из 5 показателей выросли. Команда научилась давать и получать прямую обратную связь без страха." },
          { k: "Рост команды за полгода", v: "Три уровня зрелости. Оперативный: 67→70 (цель достигнута). Тактический: 55→67 (+12, самый быстрый рост). Стратегический: 33→36 (+3, фокус следующего цикла)." },
          { k: "Оценка 360", v: "Ввёл 360-оценку — до меня не было. Распространил на менеджеров и ПО. Формировал отчёт и обсуждал на 1:1. На основе 360 — карта навыков и матрица компетенций." },
          { k: "Продуктовые метрики", v: "Инициировал Яндекс Метрику для облачной части и виджет satisfaction rate. MVP: текстовый фидбек → числовые оценки + текст, используется в работе с беклогом." },
        ]},
        { type: "images", title: null, cols: 2, images: [SUPA + "/trust_before.png", SUPA + "/trust_after.png", SUPA + "/growth_table.png", SUPA + "/report_360.png", SUPA + "/metrika.png"], captions: ["Здоровье команды — было", "Здоровье команды — стало", "Рост команды за полгода", "Отчёт 360", "Яндекс Метрика"] },
        { type: "cards", title: "Что изменилось — за 2 года", items: [
          { k: "Команда", v: "5 дизайнеров выросли в уровне (2 Trainee→Middle, 2 Middle→Senior, 1 Senior→Lead). 8 дизайнеров в 4 стримах — результат за 3–4 мес. Токсичная динамика устранена: доверие, ответственность, открытая критика." },
          { k: "Процессы", v: "Дизайн опережает разработку на ~6 месяцев. −50% времени на звонки (3–4ч → 1–2ч). 100% вовлечённость в кросс-ревью. RICE как стандарт — дизайн в едином беклоге с продуктом." },
          { k: "Инфраструктура", v: "Миграция дизайн-системы за 2 месяца (бенчмарк 6–18). ~90% UI покрыто атомарными компонентами. Навигация пересобрана — продукт масштабируется органично." },
          { k: "Метрики", v: "4/5 показателей здоровья команды выросли. +12 тактический уровень зрелости за полгода. 360, satisfaction rate, Яндекс Метрика, ретро, 1:1, ИПР — выстроено с нуля." },
        ]},
      ],
    },
  },

  /* ============================= IDEALS BOARD (LEADERSHIP) ============================= */
  "ideals-board-lead": {
    art: "ideals", group: "leadership",
    intro: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2feddba0-93cc-45d3-b98a-b9aefb5f2ccf%2FUntitled.png?table=block&id=cb73ef37-7b0f-4e1a-a660-dc37739db275&spaceId=5dc86187-d621-4985-bd4f-aa480cbb1434&width=1420&cache=v2",
    en: {
      kicker: "Leadership Case · iDeals Board", title: "Rebuilding Design from Zero and Launching an Enterprise Product",
      about: "How I rebuilt the design function, assembled a team, created a design system from scratch, and shipped a B2B enterprise product in a competitive market.",
      website: "https://idealsboard.com/",
      sections: [
        { type: "prose", title: "Overview", text: "I joined iDeals as Lead Designer when the design function had effectively ceased to exist — the team was disbanded, the design was outdated, and Web, iOS, and Android were inconsistent with each other.\n\nMy job: assemble a team, build processes, standardize design, and accelerate product delivery.\n\nOutcome: team grew from 2 to 5 designers, product teams scaled from 1 to 4 full-feature teams, design system built from zero, UX predictability improved, and release speed increased." },
        { type: "cards", title: "Challenge", items: [
          { k: "No Design System", v: "Every screen was drawn from scratch. Changes and updates were slow and painful." },
          { k: "Platform Inconsistency", v: "Web, iOS, and Android had different UX patterns and functionality — bugs and unpredictability were the norm." },
          { k: "No Processes", v: "Slow time-to-market, no structure for task management, no mentorship framework." },
          { k: "C-level Alignment", v: "Scope creep, shifting requirements mid-development, and complex features (e.g. PDF Viewer, meeting creation flow) required constant negotiation at the top." },
        ]},
        { type: "cards", title: "Team & Mentorship", items: [
          { k: "Growing the Team", v: "Scaled the design team from 2 to 5 designers. Introduced regular 1-1s, retrospectives, and a structured review process." },
          { k: "Mentorship", v: "Grew one trainee to Junior (later officially hired). Supported Junior → Middle and Middle → Senior progressions." },
          { k: "Hard Decisions", v: "Initiated a formal improvement track for an underperforming team member. Documented, aligned on a plan, tracked progress. Made the call to part ways when there was no improvement." },
        ]},
        { type: "cards", title: "Design System", items: [
          { k: "Built from Zero", v: "No existing system to build on. Designed the architecture using Shopify Polaris as a reference for principles and structure." },
          { k: "Governance & Versioning", v: "Implemented Storybook, component versioning, a governance model, and an approval process for all DS changes." },
          { k: "Cross-platform Impact", v: "The system standardized UX and UI across Web, iOS, and Android — and influenced products of the parent company." },
        ]},
        { type: "cards", title: "Delivery & Process", items: [
          { k: "Product Trio", v: "Embedded in the product trio (PM, engineer, designer) from early discovery. Helped hedge risks and aligned design with delivery from day one." },
          { k: "User Research", v: "Ran interviews with users of competing tools, users solving problems manually, and sales reps. Conducted competitive analysis and usability tests on interactive prototypes." },
          { k: "Design / Management Split", v: "Balanced time ~50/50 between hands-on design work and team management. Stayed close to the craft while leading the team." },
        ]},
        { type: "beforeafter", title: "Impact",
          before: { title: "Before", items: ["2 designers", "1 product team", "No design system", "Platforms out of sync", "Slow, unpredictable delivery"] },
          after: { title: "After", items: ["5 designers — hired, mentored, grown", "4 full-feature product teams", "Design system built, adopted, versioned", "Web, iOS, Android aligned", "Fast, predictable design delivery"] } },
        { type: "cards", title: null, items: [
          { k: "Faster Time-to-Market", v: "Component reuse multiplied development and change speed. What once took weeks started taking days." },
          { k: "Near-Zero UI Bugs", v: "A unified DS and Storybook brought interface inconsistencies and errors to near zero." },
          { k: "UX Predictability", v: "Core patterns standardized (search, dropdowns, inputs). Unique edge cases adapted for real user needs." },
          { k: "Fewer Conflicts", v: "Internal design conflicts and stakeholder disagreements dropped significantly. Shared language, shared standards." },
        ]},
        { type: "cards", title: "Illustrative Cases", items: [
          { k: "PDF Viewer", v: "Redesigned a core feature critical to C-level users. Improved usability for the most demanding segment of the product audience." },
          { k: "Meeting Creation Flow", v: "After CEO feedback, ran additional research, confirmed the simplification hypothesis, reduced fields, added autofill. Decision made on data, not hierarchy." },
        ]},
        { type: "cards", title: "Takeaways", items: [
          { k: "Team Building", v: "Built and mentored a design team from near-zero. Established growth paths, regular rituals, and a culture of feedback." },
          { k: "Design System Ownership", v: "Created, implemented, and governed a design system — including versioning, Storybook, and a structured approval process." },
          { k: "Cross-platform Influence", v: "Standardized interfaces across three platforms. Impact extended beyond the product to the parent company." },
          { k: "C-level & Product Collaboration", v: "Worked in product trio from discovery. Navigated shifting requirements and C-level feedback while keeping delivery on track." },
        ]},
      ],
    },
    ru: {
      kicker: "Менеджерский кейс · iDeals Board", title: "Перезапуск дизайна с нуля и запуск enterprise-продукта",
      about: "Как я восстановил дизайн-функцию, собрал команду, создал дизайн-систему с нуля и вывел B2B enterprise-продукт на конкурентный рынок.",
      website: "https://idealsboard.com/",
      sections: [
        { type: "prose", title: "Контекст", text: "Я пришёл в iDeals как Lead Designer в момент, когда дизайн-функция фактически перестала существовать — команда была расформирована, дизайн устарел, а Web, iOS и Android отличались друг от друга.\n\nМоя задача: собрать команду, выстроить процессы, стандартизировать дизайн и ускорить delivery продукта.\n\nИтог: команда выросла с 2 до 5 дизайнеров, продуктные команды — с 1 до 4 full-feature команд, дизайн-система создана с нуля, UX-предсказуемость выросла, скорость релизов увеличилась." },
        { type: "cards", title: "Проблемы", items: [
          { k: "Нет дизайн-системы", v: "Каждый экран рисовался с нуля. Изменения и обновления были медленными и болезненными." },
          { k: "Несогласованность платформ", v: "Web, iOS и Android имели разные UX-паттерны и функциональность — баги и непредсказуемость были нормой." },
          { k: "Нет процессов", v: "Медленный time-to-market, отсутствие структуры для управления задачами и менторинга." },
          { k: "Согласование с C-level", v: "Scope creep, меняющиеся требования по ходу разработки и сложные фичи (PDF Viewer, флоу создания митинга) требовали постоянных согласований на верхнем уровне." },
        ]},
        { type: "cards", title: "Команда и менторинг", items: [
          { k: "Рост команды", v: "Расширил команду с 2 до 5 дизайнеров. Внедрил регулярные 1-1, ретроспективы и структурированный процесс ревью." },
          { k: "Менторинг", v: "Вырастил одного trainee до Junior (позже официально нанят). Сопровождал рост Junior → Middle и Middle → Senior." },
          { k: "Сложные решения", v: "Запустил formal improvement-трек для неэффективного члена команды. Зафиксировал проблемы, согласовал план, отслеживал прогресс. После отсутствия динамики — принял решение о расставании." },
        ]},
        { type: "cards", title: "Дизайн-система", items: [
          { k: "С нуля", v: "Не было ничего — ни сломанной системы, ни частичной. Архитектуру проектировал сам, ориентируясь на принципы Shopify Polaris." },
          { k: "Governance и версионирование", v: "Внедрил Storybook, версионирование компонентов, governance-модель и процесс апрува всех изменений в DS." },
          { k: "Кросс-платформенное влияние", v: "Система стандартизировала UX и UI между Web, iOS и Android — и повлияла на продукты материнской компании." },
        ]},
        { type: "cards", title: "Delivery и процессы", items: [
          { k: "Product Trio", v: "Участвовал в product trio (PM, разработчик, дизайнер) с самого начала discovery. Помогал хеджировать риски и выстраивать дизайн в связке с delivery." },
          { k: "Пользовательский research", v: "Проводил интервью с пользователями конкурентов, с теми, кто решает задачи вручную, и с сейлзами. Конкурентный анализ и юзабилити-тесты прототипов." },
          { k: "Дизайн и менеджмент 50/50", v: "Делил время примерно поровну между хэндс-он дизайном и управлением командой. Оставался близко к продукту, не теряя менеджерской роли." },
        ]},
        { type: "beforeafter", title: "Результаты",
          before: { title: "До", items: ["2 дизайнера", "1 продуктовая команда", "Нет дизайн-системы", "Платформы рассинхронизированы", "Медленный, непредсказуемый delivery"] },
          after: { title: "После", items: ["5 дизайнеров — наняты, выращены, развиваются", "4 full-feature продуктовые команды", "Дизайн-система создана, внедрена, версионируется", "Web, iOS, Android выровнены", "Быстрый, предсказуемый дизайн-delivery"] } },
        { type: "cards", title: null, items: [
          { k: "Ускорение time-to-market", v: "Переиспользование компонентов кратно увеличило скорость разработки и внесения изменений." },
          { k: "Почти ноль UI-багов", v: "Единая DS и Storybook снизили несогласованность интерфейсов и количество ошибок практически до нуля." },
          { k: "UX-предсказуемость", v: "Базовые паттерны стандартизированы (поиск, дропдауны, поля ввода). Уникальные сценарии адаптированы под реальных пользователей." },
          { k: "Меньше конфликтов", v: "Внутренние дизайн-конфликты и разногласия со стейкхолдерами резко сократились. Общий язык, общие стандарты." },
        ]},
        { type: "cards", title: "Примеры", items: [
          { k: "PDF Viewer", v: "Переработка core-фичи, критически важной для C-level пользователей. Улучшение UX для самой требовательной аудитории продукта." },
          { k: "Флоу создания митинга", v: "После фидбека CEO провели дополнительный research, подтвердили гипотезу об упрощении, сократили поля, добавили автозаполнение. Решение на данных, а не на иерархии." },
        ]},
        { type: "cards", title: "Выводы", items: [
          { k: "Построение команды", v: "Собрал и вырастил дизайн-команду почти с нуля. Выстроил пути роста, регулярные ритуалы и культуру обратной связи." },
          { k: "Владение дизайн-системой", v: "Создал, внедрил и управлял дизайн-системой — включая версионирование, Storybook и процесс апрува изменений." },
          { k: "Кросс-платформенное влияние", v: "Стандартизировал интерфейсы на трёх платформах. Влияние распространилось за пределы продукта — на материнскую компанию." },
          { k: "Работа с C-level и продуктом", v: "Участвовал в discovery с самого начала. Навигировал меняющиеся требования и фидбек CEO, не теряя темп delivery." },
        ]},
      ],
    },
  },
};

const CASE_ORDER = ["sfera-teams", "ideals-board", "repository", "sberidea"];
const LEAD_ORDER = ["innotech-lead", "ideals-board-lead"];

window.CaseData = { CASES, SUPA, CASE_ORDER, LEAD_ORDER };
