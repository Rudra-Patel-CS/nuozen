// Data for the services index and /services/:slug detail pages.
// `icon` values must be keys that exist in src/components/Icons.jsx PATHS.
// `related` entries are slugs of other services in this module.

const SERVICES = {
  'web-application-development': {
    slug: 'web-application-development',
    title: 'Web Application Development',
    muteTail: '— built to perform.',
    badge: 'Application Development & Maintenance',
    icon: 'code',
    short:
      'Full-stack web applications using modern frameworks — React, Vue, Angular on the front end; Node.js, PHP, Python on the back end.',
    lede:
      'Web portals have grown from simple content sites into strategic end-user touch-points that drive engagement and revenue. We build secure, scalable web applications that unify information, people, and processes behind a single access point.',
    tags: ['React', 'Vue', 'Angular', 'Node.js', 'PHP', 'Python'],
    features: [
      {
        icon: 'browser',
        title: 'Custom web applications',
        desc: 'Customised web application design and development on modern stacks — React, Vue, or Angular in front of Node.js, PHP, or Python services.',
      },
      {
        icon: 'cart',
        title: 'E-commerce & portals',
        desc: 'B2B and B2C portal design and development, e-commerce solutions, and self-service portals your customers actually use.',
      },
      {
        icon: 'doc',
        title: 'CMS & community sites',
        desc: 'CMS website development plus interactive social networking and community portal builds, with editors kept firmly in control.',
      },
      {
        icon: 'gear',
        title: 'Re-engineering & migration',
        desc: 'Application re-engineering and enhancement, and product or platform integration and migration for homegrown legacy systems.',
      },
      {
        icon: 'lock',
        title: 'Secure unified access',
        desc: 'A presentation tier unified with personalisation, identity management, search, and collaboration — one secure access point across organisational boundaries.',
      },
      {
        icon: 'clock',
        title: 'Maintenance & support',
        desc: 'Website and portal maintenance and support from a team that has kept enterprise applications running since 2007.',
      },
    ],
    checks: [
      'Reduce operational expenses',
      'Add new value propositions',
      'Simplify access and maintenance',
      'Improve customer experience',
      'Increase revenue streams',
      'Improve collaboration across teams',
    ],
    related: ['static-website-development', 'mobile-application-development', 'integration-and-apis'],
    cta: {
      title: 'Tell us what your portal',
      muted: 'needs to do.',
      sub: 'Enterprise portal, e-commerce build, or a legacy system that needs a second life — we scope it in one call and send a written quote within two working days.',
    },
  },

  'static-website-development': {
    slug: 'static-website-development',
    title: 'Static Website Development',
    muteTail: '— fast and found.',
    badge: 'Application Development & Maintenance',
    icon: 'browser',
    short:
      'Fast, SEO-optimised static websites that load instantly and convert visitors into clients. Perfect for corporate and marketing sites.',
    lede:
      'Fast, SEO-optimised websites that load instantly and convert visitors into clients — perfect for corporate and marketing sites where speed, search ranking, and first impressions decide the outcome.',
    tags: ['WordPress', 'React', 'HTML & CSS', 'Core Web Vitals', 'SEO'],
    features: [
      {
        icon: 'bolt',
        title: 'Loads instantly',
        desc: 'No database round-trips and no bloated page builders — pages that render fast on any connection and stay fast under load.',
      },
      {
        icon: 'eye',
        title: 'SEO-first structure',
        desc: 'Semantic markup, clean metadata, and strong Core Web Vitals so search engines index every page and rank it where clients look.',
      },
      {
        icon: 'phone',
        title: 'Mobile-first design',
        desc: 'Designed for the phone screen first and scaled up — the layout holds from a five-inch display to a boardroom monitor.',
      },
      {
        icon: 'lock',
        title: 'Minimal attack surface',
        desc: 'No CMS to patch and no plugins to exploit on fully static builds — the cheapest security win in web publishing.',
      },
      {
        icon: 'gear',
        title: 'The stack that fits',
        desc: 'WordPress when editors need day-to-day control; React or hand-built static when speed and simplicity matter most.',
      },
      {
        icon: 'chart',
        title: 'Built to convert',
        desc: 'Clear calls to action, analytics wired in from day one, and page structure designed to turn visitors into enquiries.',
      },
    ],
    checks: [
      'Corporate and marketing websites',
      'Landing pages and campaign microsites',
      'Domain, hosting, and SSL handled end to end',
      'Content updates and maintenance plans',
      'Analytics and conversion tracking',
      'Redesigns of ageing WordPress sites',
    ],
    related: ['web-application-development', 'open-source-software', 'mobile-application-development'],
    cta: {
      title: 'Put a faster site',
      muted: 'in front of clients.',
      sub: 'Share your current site and what it should do better — we reply with a scope and a written quote within two working days.',
    },
  },

  'mobile-application-development': {
    slug: 'mobile-application-development',
    title: 'Mobile Application Development',
    muteTail: '— on every device.',
    badge: 'Application Development & Maintenance',
    icon: 'phone',
    short:
      'Native iOS and Android applications, or cross-platform apps using Flutter and React Native. Designed for performance and usability.',
    lede:
      'In a continuously evolving business environment, mobility is a decisive factor. We understand the market deeply and select the most optimal technology to deliver the mobile applications you envision — native iOS and Android, or cross-platform with Flutter and React Native.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
    features: [
      {
        icon: 'eye',
        title: 'Mobile strategy advisory',
        desc: 'The mobile space offers several platforms and technologies. We help you choose the strategy that best suits your business before a line of code is written.',
      },
      {
        icon: 'phone',
        title: 'Native iOS & Android',
        desc: 'Native applications designed for performance and usability, when the platform deserves first-class treatment.',
      },
      {
        icon: 'code',
        title: 'Cross-platform builds',
        desc: 'Flutter and React Native when one codebase should serve both app stores without doubling the budget.',
      },
      {
        icon: 'browser',
        title: 'Mobile-enable what you run',
        desc: 'Add a mobile-enabled interface to your current websites or software — we can intervene at any stage of development.',
      },
      {
        icon: 'check',
        title: 'Testing built in',
        desc: 'End-to-end support from development through testing, with near-zero defect leakage into production.',
      },
      {
        icon: 'team',
        title: 'Cross-vertical experience',
        desc: 'Financial services, e-retail, manufacturing, and healthcare — mobile strategies aligned with how each vertical actually works.',
      },
    ],
    checks: [
      'Native iOS and Android development',
      'Flutter and React Native cross-platform apps',
      'Mobile interfaces for existing websites and software',
      'Strong process frameworks for project delivery',
      'Delivery within deadline and budget',
      'App store submission and release support',
    ],
    steps: [
      {
        t: 'Strategy & platform choice',
        d: 'We map your users, vertical, and budget to the right platform — native, Flutter, or React Native — before committing the build.',
      },
      {
        t: 'Design & development',
        d: 'Robust, cross-functional builds with regular demos, so you watch the application take shape sprint by sprint.',
      },
      {
        t: 'Testing & hardening',
        d: 'Functional and device testing runs alongside development — our process frameworks keep defect leakage near zero.',
      },
      {
        t: 'Launch & maintenance',
        d: 'Store release, monitoring, and a maintenance plan, so version 1.1 ships as smoothly as version 1.0.',
      },
    ],
    related: ['web-application-development', 'static-website-development', 'test-engineering'],
    cta: {
      title: 'Put your business',
      muted: 'in their pocket.',
      sub: 'Tell us what the app must do and where it must run — we return a platform recommendation and a written quote within two working days.',
    },
  },

  'internet-of-things': {
    slug: 'internet-of-things',
    title: 'Internet of Things',
    muteTail: '— sensors to insight.',
    badge: 'Data & Intelligence',
    icon: 'wifi',
    short:
      'Connect physical devices to your digital infrastructure. IoT architectures for utilities, smart buildings, industrial automation, and more.',
    lede:
      'The Internet of Things is the rapidly growing network of connected objects that collect and exchange data through embedded sensors. We deliver the basic building blocks — hardware, software, and support — so applications can connect anything within scope, from smart buildings to utility networks.',
    tags: ['SCADA', 'AMR / AMI', 'Smart metering', 'Sensor networks'],
    features: [
      {
        icon: 'wifi',
        title: 'Connected devices',
        desc: 'Thermostats, meters, vehicles, lights, and industrial equipment — connected objects collecting and exchanging data through embedded sensors.',
      },
      {
        icon: 'server',
        title: 'Hardware, software, support',
        desc: 'The three building blocks of IoT delivered together, so your teams can deploy applications that connect anything within scope.',
      },
      {
        icon: 'db',
        title: 'Collection to analysis',
        desc: 'Customised solutions spanning secure data collection, storage, and analysis — sensor readings become operational insight.',
      },
      {
        icon: 'shield',
        title: 'Security first',
        desc: 'Device-to-platform security designed in from the start of the architecture, not patched on after the first incident.',
      },
      {
        icon: 'gauge',
        title: 'Real-time operations view',
        desc: 'Live dashboards and aggregation for operations teams monitoring fleets of devices across sites.',
      },
      {
        icon: 'bolt',
        title: 'Utility-grade heritage',
        desc: 'Our IoT practice grew out of SCADA, AMR/AMI, and metering systems built for electricity, water, and gas utilities.',
      },
    ],
    checks: [
      'Smart connected buildings and homes',
      'Industrial automation and monitoring',
      'Utilities — electricity, water, and natural gas',
      'Wearables and healthcare applications',
      'End-to-end sensor data pipelines',
      'Productivity and routine-task automation',
    ],
    related: ['big-data-analytics', 'data-analytics', 'integration-and-apis'],
    cta: {
      title: 'Connect the devices',
      muted: 'you already own.',
      sub: 'Looking to raise productivity with IoT? Tell us the problem — we map the sensors, platform, and analytics that get you there.',
    },
  },

  'integration-and-apis': {
    slug: 'integration-and-apis',
    title: 'Integration & APIs',
    muteTail: '— systems that talk.',
    badge: 'Connecting Systems',
    icon: 'network',
    short:
      'RESTful and GraphQL APIs, third-party integrations, ETL pipelines, and middleware layers that connect your ecosystem seamlessly.',
    lede:
      'We design and implement RESTful and GraphQL APIs, third-party integrations, ETL pipelines, and middleware layers that connect your ecosystem seamlessly — with deep experience across shipping, payment, travel, social media, and online advertising platforms.',
    tags: ['REST', 'GraphQL', 'ETL', 'Middleware', 'Third-party APIs'],
    features: [
      {
        icon: 'chart',
        title: 'Advertising platforms',
        desc: 'Demand-side platforms that integrate popular online advertising network APIs, including Google AdWords and Bing Ads.',
      },
      {
        icon: 'cloud',
        title: 'SaaS applications',
        desc: 'Online SaaS integrations such as Salesforce.com, wired into your existing systems and centralised dashboards.',
      },
      {
        icon: 'globe',
        title: 'Social & Google APIs',
        desc: 'Twitter, Facebook, and Google+ APIs; Facebook applications; and Google Maps, Analytics, YouTube, Charts, and Search.',
      },
      {
        icon: 'cart',
        title: 'Payments & shipping',
        desc: 'Payment gateways including PayPal, DirectDebit, and Authorize.net; shipping APIs for FedEx, UPS, and the US Postal Service.',
      },
      {
        icon: 'rocket',
        title: 'Travel APIs',
        desc: 'Travel platform integrations such as Expedia and Amadeus for booking flows and rate aggregation.',
      },
      {
        icon: 'mail',
        title: 'Messaging gateways',
        desc: 'SMS gateway integration for alerts, one-time passwords, and customer notifications at scale.',
      },
    ],
    checks: [
      'RESTful and GraphQL API design and implementation',
      'ETL pipelines and middleware layers',
      'Dashboards that centralise data from multiple sources',
      'Consuming data from a wide range of third-party sources',
      'Domain experience: shipping, payment, travel, social media, advertising',
      'Solutions designed around your business needs',
    ],
    related: ['open-source-software', 'web-application-development', 'data-analytics'],
    cta: {
      title: 'Make your systems',
      muted: 'talk to each other.',
      sub: 'Discuss your requirements with our team today — we design and deliver the integration approach that supports your business.',
    },
  },

  'test-engineering': {
    slug: 'test-engineering',
    title: 'Test Engineering',
    muteTail: '— quality, proven.',
    badge: 'Connecting Systems',
    icon: 'check',
    short:
      'Independent QA — functional, regression, performance, security, and UAT testing, integrated into your CI/CD pipeline and release process.',
    lede:
      'Only rigorous multi-stage testing, skilled testing resources, and robust automation tools ensure that your investment in application development gives sustained returns. Our independent QA services cover functional, regression, performance, security, and UAT testing — integrated into your CI/CD pipeline.',
    tags: ['Functional', 'Regression', 'Performance', 'Security', 'UAT', 'Automation'],
    features: [
      {
        icon: 'check',
        title: 'Functional & regression',
        desc: 'Rigorous multi-stage testing across the application lifecycle, so every release is measured against the last.',
      },
      {
        icon: 'gauge',
        title: 'Performance testing',
        desc: 'Load, stress, and endurance runs that find the ceiling of your application before your users do.',
      },
      {
        icon: 'lock',
        title: 'Security testing',
        desc: 'Security and reliability checks built into the same test cycle — not left to a separate annual audit.',
      },
      {
        icon: 'team',
        title: 'UAT & user centricity',
        desc: 'End-user scenarios are as complex as they are numerous — we test the way real users behave and support structured UAT.',
      },
      {
        icon: 'gear',
        title: 'Test automation',
        desc: 'We conceptualise, plan, execute, and continuously improve automated testing frameworks using industry-prevalent tools.',
      },
      {
        icon: 'rocket',
        title: 'CI/CD integration',
        desc: 'Integrating the testing lifecycle with the development lifecycle significantly reduces the effort, time, and cost of maintenance.',
      },
    ],
    checks: [
      'Independent QA — a separate team from the one that builds',
      'Functional, regression, performance, security, and UAT coverage',
      'High proficiency in generic and specialised automation tools',
      'Deep understanding of multiple domains',
      'Targeted interventions across all lifecycle stages',
      'Sustained returns with minimal incremental maintenance expense',
    ],
    steps: [
      {
        t: 'Assess',
        d: 'We review your application, release process, and current coverage to find where defects actually leak through.',
      },
      {
        t: 'Plan',
        d: 'A test strategy blending manual and automated coverage, mapped to your CI/CD pipeline and release calendar.',
      },
      {
        t: 'Execute',
        d: 'Skilled testing resources run multi-stage cycles — functional, regression, performance, security, and UAT.',
      },
      {
        t: 'Automate & improve',
        d: 'Frameworks are automated and continuously improved, so every release costs less to verify than the one before.',
      },
    ],
    related: ['web-application-development', 'mobile-application-development', 'integration-and-apis'],
    cta: {
      title: 'Ship releases',
      muted: 'you can trust.',
      sub: 'Tell us about your application and release cadence — we propose a QA plan wired into your pipeline, with a written quote in two working days.',
    },
  },

  'data-analytics': {
    slug: 'data-analytics',
    title: 'Data Analytics',
    muteTail: '— operations, understood.',
    badge: 'Data & Intelligence',
    icon: 'chart',
    short:
      'Transform raw operational data into actionable insights. Custom dashboards, KPI tracking, anomaly detection, and predictive analytics.',
    lede:
      'Data from smart sensors and networked devices arrives fast — storing and organising it is an operational challenge in itself. The Nuozen Data Platform is a scalable solution for data from many sources, with sophisticated tools to filter, drill down, and combine data to extract intelligence from machine-generated data.',
    tags: ['Time series', 'OLAP BI', 'Data lake', 'KPI dashboards'],
    features: [
      {
        icon: 'db',
        title: 'A platform built to scale',
        desc: 'The Nuozen Data Platform stores and organises fast, real-time data from smart sensors and networked devices — and analyses historical data alongside it.',
      },
      {
        icon: 'clock',
        title: 'Time-series analysis',
        desc: 'Sensor event data analysed over time reveals emerging patterns and seasonal trends — a different paradigm for viewing operational data.',
      },
      {
        icon: 'chart',
        title: 'Integrated OLAP BI',
        desc: 'A built-in business intelligence layer queries data quickly across sources — and connects to any existing BI visualisation tool you already use.',
      },
      {
        icon: 'gauge',
        title: 'Volume',
        desc: 'Huge data volumes analysed for deeper insight, with the data management and governance burden lifted off your team.',
      },
      {
        icon: 'bolt',
        title: 'Velocity',
        desc: 'Near real-time consumer data handled out of the box — no time or effort wasted managing the rate at which data flows in.',
      },
      {
        icon: 'network',
        title: 'Variety',
        desc: 'Data arrives in varying formats; the platform cleans, normalises, and processes it in one unified way.',
      },
    ],
    checks: [
      'Data lake storage for raw operational data',
      'Terabyte-scale slicing and dicing at very low latency',
      'Fully web-based — hundreds of users querying concurrently',
      'Filter, drill down, and combine data across sources',
      'Custom dashboards, KPI tracking, and anomaly detection',
      'Predictive analytics on operational data',
    ],
    related: ['big-data-analytics', 'internet-of-things', 'integration-and-apis'],
    cta: {
      title: 'See your operations',
      muted: 'in the data.',
      sub: 'Bring one operational question to the first call — we show you how the platform would answer it from your own data.',
    },
  },

  'big-data-analytics': {
    slug: 'big-data-analytics',
    title: 'Big Data Analytics',
    muteTail: '— signal from noise.',
    badge: 'Data & Intelligence',
    icon: 'db',
    short:
      'End-to-end big data pipelines — from ingestion and storage to processing, visualisation, and reporting, on proven open-source stacks.',
    lede:
      'Big data is massive, arrives at lightning pace, comes in different forms, and carries plenty of uncertainty — a different approach to analysis is mandated. We build end-to-end pipelines from ingestion and storage to processing, visualisation, and reporting, on proven open-source and cloud-native stacks.',
    tags: ['Hadoop', 'Data pipelines', 'Predictive analytics', 'Cloud-native'],
    features: [
      {
        icon: 'db',
        title: 'Structured data',
        desc: 'Survey data, syndicated data, and transactional data — analysed together instead of in disconnected silos.',
      },
      {
        icon: 'doc',
        title: 'Unstructured data',
        desc: 'Free-flowing text, voice recordings, email and chat, and social media — turned into signals you can act on.',
      },
      {
        icon: 'gear',
        title: 'Proven frameworks',
        desc: 'Next-generation analytics techniques and frameworks such as Hadoop, running on open-source and cloud-native stacks.',
      },
      {
        icon: 'rocket',
        title: 'Predictive & behavioural',
        desc: 'Real-time, predictive behavioural analytics that deliver powerful messages and personalisation to your customers.',
      },
      {
        icon: 'chart',
        title: 'Visualisation & reporting',
        desc: 'Results presented in a form that is appealing and comprehensible — dashboards and reports decision-makers actually read.',
      },
      {
        icon: 'team',
        title: 'Customer stickiness',
        desc: 'Insight-led personalisation that translates directly into higher customer loyalty and retention.',
      },
    ],
    checks: [
      'End-to-end pipelines: ingestion, storage, processing, visualisation, reporting',
      'Structured and unstructured sources in one analytics sequence',
      'Hadoop and cloud-native analytics stacks',
      'Analyse, augment, and segment your data',
      'Real-time predictive behavioural analytics',
      'Actionable insights that drive winning decisions',
    ],
    steps: [
      {
        t: 'Data extraction',
        d: 'Ingestion from a wide range of structured and unstructured sources into one pipeline.',
      },
      {
        t: 'Data segmentation',
        d: 'Segmentation techniques that separate signal from noise before any analysis begins.',
      },
      {
        t: 'Data management',
        d: 'Creation of master data, so every downstream model works from a single source of truth.',
      },
      {
        t: 'Data mining',
        d: 'Intuitive models applied to the prepared data to generate genuine business insights.',
      },
      {
        t: 'Data visualisation',
        d: 'Results presented in a way that is appealing and comprehensible — built for decisions, not decoration.',
      },
    ],
    related: ['data-analytics', 'internet-of-things', 'open-source-software'],
    cta: {
      title: 'Turn the flood',
      muted: 'into a signal.',
      sub: 'Tell us where your data lives and which decision it should inform — we design the pipeline end to end and quote it in writing.',
    },
  },

  'open-source-software': {
    slug: 'open-source-software',
    title: 'Open Source Software',
    muteTail: '— freedom from lock-in.',
    badge: 'Connecting Systems',
    icon: 'gear',
    short:
      'Evaluate, implement, and customise best-in-class open source platforms — from databases and CMS to monitoring stacks and ERP systems.',
    lede:
      'CIOs across the world are choosing open source to grow the business, optimise system performance, and reduce costs. Our open source expertise, combined with the cost efficiencies of a global delivery model, makes us the partner for the journey down the open source path.',
    tags: ['LAMP', 'J2EE', 'JBoss', 'Tomcat', 'WordPress', 'Drupal'],
    features: [
      {
        icon: 'gear',
        title: 'Take control of your software',
        desc: 'Custom-develop and modify code to suit your exact requirements — and control your budget while doing it.',
      },
      {
        icon: 'globe',
        title: 'Escape vendor lock-in',
        desc: 'Freedom to choose your preferred vendor at every layer of the stack, with no licence wall standing in the way.',
      },
      {
        icon: 'chart',
        title: 'Low cost of ownership',
        desc: 'Zero cost of scale — no additional licences as the installation grows, with support that reduces running costs by at least 80%.',
      },
      {
        icon: 'shield',
        title: 'Security in the open',
        desc: 'Developers worldwide contribute to and analyse the code, making it more secure and constantly raising its quality.',
      },
      {
        icon: 'team',
        title: 'Community continuity',
        desc: 'Open source is not dependent on a single entity — you gain the advantage of the community behind every platform.',
      },
      {
        icon: 'doc',
        title: 'CMS platforms',
        desc: 'Content management builds on WordPress, Drupal, and Joomla — evaluated, implemented, and customised for your team.',
      },
    ],
    checks: [
      'J2EE (JSP, servlets, EJB, JMS) applications on JBoss and Tomcat',
      'LAMP (Linux, Apache, MySQL, PHP) applications',
      'DHTML-, Python-, ZODB-, and Jabber-based information management tools',
      'Apache Xalan for XSLT-based front ends',
      'Apache Axis for web services implementation',
      'WordPress, Drupal, and Joomla content management systems',
    ],
    related: ['web-application-development', 'integration-and-apis', 'big-data-analytics'],
    cta: {
      title: 'Go open source',
      muted: 'with a partner.',
      sub: 'We evaluate, implement, and customise the open platforms that fit your objectives — with a single point of accountability.',
    },
  },
};

export default SERVICES;
