// Industry solutions data — drives /industries/:slug (IndustryDetail.jsx) and the
// related-industry cards. Copy adapted from the legacy utility decks, branded Nuozen.
// icon keys must exist in src/components/Icons.jsx PATHS.

const INDUSTRIES = [
  {
    slug: 'electricity',
    title: 'Electricity Distribution',
    muteTail: 'from feeder to bill.',
    icon: 'bolt',
    badge: 'Power distribution solutions since 2007',
    blurb:
      'SCADA, AMR/AMI, network data acquisition, substation monitoring, meter data management, and consumer billing.',
    lede:
      'A pioneer in electricity management — from monitoring substations and feeders to HV/LV consumer systems. Nuozen provides advanced SCADA platforms and real-time metering that help utilities manage critical power infrastructure with precision.',
    stats: [
      { n: '6', label: 'Grid solutions, one platform' },
      { n: '24/7', label: 'Real-time SCADA monitoring' },
      { n: 'IEC', label: '61850 / 104 open protocols' },
      { n: '2007', label: 'Serving utilities since' },
    ],
    solutions: [
      {
        icon: 'gauge',
        title: 'SCADA Systems',
        desc:
          'Nuozen SCADA ranges from simple to city-scale configurations. Our human–machine interface (HMI) connects to feeders, relays, substations and more, receiving information from PLCs and RTUs so operators collect, analyse and monitor the whole distribution network in real time — and control it at the click of a button. In an outage, SCADA detects the exact fault location and alarms operators without waiting for customer calls, while isolator switches and circuit breakers respond automatically to parameter violations. We deploy IoT and smart-grid devices on your existing substations and feeders, bringing older-generation infrastructure to IEC standards cost-effectively.',
        points: [
          'Improve power system efficiency by keeping power factor in an acceptable range',
          'Limit peak power demand across the network',
          'Continuous monitoring and control of electrical parameters in normal and abnormal conditions',
          'Trending and alarming that point operators straight to the problem spot',
          'Historian data, viewable from remote locations',
          'Quick response to customer service interruptions',
        ],
      },
      {
        icon: 'network',
        title: 'Network Data Acquisition',
        desc:
          'Mounting AT&C losses in distribution remain a worldwide challenge, driven by gaps in energy accounting and manual interventions in billing. Nuozen closes that gap with industrial-grade PLCs fitted to feeders, substations and transformers, transmitting data wirelessly to the Nuozen cloud where it is formatted and prepared for analysis. The energy management console tracks energy at every level of the grid and answers hierarchy queries — every house on a transformer, every transformer on a substation, every substation on a feeder — so you know exactly which locality a maintenance window will impact.',
        points: [
          'Industrial-grade PLC telemetry from feeders, substations and transformers',
          'RF and GPRS field network with data concentrator units (DCUs) and meter interface units (MIUs)',
          'Intelligent modems at each DTR meter pushing data to the central server at predefined intervals',
          'Hierarchical grid queries — feeder to substation to transformer to consumer',
          'Proper energy accounting that attacks AT&C losses at the source',
        ],
      },
      {
        icon: 'wifi',
        title: 'AMR, AMI & Billing',
        desc:
          'Automatic meter reading collects consumption, diagnostic and status data from energy meters and transfers it to a central database for billing, troubleshooting and analysis — no more periodic trips to read each meter, and billing based on near real-time consumption instead of estimates. Nuozen AMR spans handheld, mobile and network technologies built on IoT and RF, retrofitting to your existing metering infrastructure over RS232, optical reader, IR and LPRF — including remote reading of traditional electro-mechanical meters. Nuozen CloudAMI streams meter data live so the utility and the consumer can both analyse, visualise and act on the demand side.',
        points: [
          'Accurate meter reading — no more estimates',
          'Improved billing with true costs applied to accurate profile classes',
          'Improved security and tamper detection for equipment',
          'Energy management through profile data graphs',
          'Transparency of cost-to-read metering and de-risked procurement',
          'Supply management and allocation during shortages',
        ],
      },
      {
        icon: 'server',
        title: 'Substation Monitoring System',
        desc:
          'Integrates protection relays, IEDs and meters from any vendor that supports standard protocols — IEC 61850, IEC 60870-5-103, DNP3, MODBUS — to provide additional protection data and powerful fault analysis. A common open protocol (IEC 61850 or IEC-104) forms a single data bus that seamlessly joins these components into one distributed monitoring and control system, driven by an extremely user-friendly HMI configured straight from the substation single-line diagram.',
        points: [
          'Vendor-neutral integration of protection relays, IEDs and meters',
          'IEC 61850, IEC 60870-5-103, DNP3 and MODBUS protocol support',
          'HMI configured and controlled from the single-line diagram',
          'RS485, copper, fibre-optic or Ethernet communication media',
          'Forward all parameters to central control or a separate system like GIS',
        ],
      },
      {
        icon: 'db',
        title: 'Meter Data Management & Billing',
        desc:
          'Utility billing software designed, written and supported with small to mid-sized utilities in mind — eliminating manual operations and errors, processing in real time, and presenting information in visually appealing displays. Integrated with the Meter Data Management System (MDMS), Nuozen Billing gives distribution companies end-to-end automation of billing and payment collection, with bills generated automatically from configurable price slabs and every parameter adjustable from the administrator interface.',
        points: [
          'End-to-end automated billing and payment collection via MDMS',
          'Spot billing device support for field data collection',
          'Configurable price slabs, conditions and billing parameters',
          'Consumer module — view bills, pay online, drill into consumption data',
        ],
      },
      {
        icon: 'team',
        title: 'Consumer Relations (CGRS)',
        desc:
          'Grievance redressal handled through letters and complaint forms rarely reflects the real state of customer satisfaction. Nuozen CGRS consolidates support requests from the website, mobile application, email, SMS and Telegram into a single queue, and integrates with the MDMS so support staff see the consumer’s location, network connection and outage context with every ticket. Consumers track their complaints live; the utility runs multiple logins to check and update status — eliminating long waits and cutting turnaround times.',
        points: [
          'Multi-channel intake — website, mobile app, email, SMS, Telegram',
          'MDMS integration puts network and outage context on every complaint',
          'Live complaint tracking for the consumer',
          'Multiple utility logins to check and update ticket status',
        ],
      },
    ],
    process: [
      ['System architecture', 'Preparation of system architecture, the IO list and design documents against your distribution network.'],
      ['HMI & SCADA database', 'Development of HMI screens and the SCADA database, configured from your single-line diagrams.'],
      ['Configuration & engineering', 'SCADA configuration and engineering across substations, feeders and field devices.'],
      ['Integration & testing', 'Integration, testing and validation with your protection relays, IEDs and meters.'],
      ['Commissioning', 'Staging, commissioning and user acceptance tests before the network goes live.'],
    ],
    quote: {
      text:
        'In the event of an outage, SCADA detects the exact location of the fault and alarms the operator — without waiting for calls from customers.',
      by: 'Why utilities move from manual operations to Nuozen SCADA',
    },
    related: ['water', 'natural-gas'],
    cta: {
      title: 'Modernise your grid',
      muted: 'without a rebuild.',
      sub: 'Nuozen deploys IoT and smart-grid devices on the substations and feeders you already own — bringing legacy distribution infrastructure to IEC standards, cost-effectively.',
    },
  },

  {
    slug: 'water',
    title: 'Water Distribution',
    muteTail: 'from source to tap.',
    icon: 'drop',
    badge: 'Water utility solutions since 2007',
    blurb:
      'Pipeline SCADA, smart water metering and billing, consumer relations portals, and leak detection analytics.',
    lede:
      'Intelligent water management covering the full lifecycle — from source monitoring and pipeline SCADA through smart metering and consumer billing. Nuozen helps water utilities modernise their infrastructure and reduce losses.',
    solutions: [
      {
        icon: 'gauge',
        title: 'Water SCADA',
        desc:
          'Monitor water distribution pipelines, pumping stations and reservoirs in real time on an open integration platform — application development and operations stay independent of the specific PLCs and RTUs in the field, and multiple SCADA systems unify into one organised view. A powerful HMI provides graphic visualisation, real-time situational awareness and alarm management wherever you need to be: a central or remote control room, or a tablet or smartphone in the field.',
        points: [
          'Open platform — no lock-in to specific PLCs and RTUs',
          'Real-time historian database integrated with site controls',
          'Automated reporting for chemical usage, energy consumption, water quality, discharge and alarm events',
          'Remote alerting for alarms and abnormal situations, straight to phones and tablets',
          'Alarm management, notification and optimisation to cut unnecessary alarms',
        ],
      },
      {
        icon: 'chart',
        title: 'Smart Water Meter & Billing',
        desc:
          'Deploy smart meters across your distribution network and connect them to an integrated billing, payment and consumer self-service portal. Accurate, continuous consumption data replaces estimated reads — and becomes the planning input for the whole network, from capital allocation to pressure management.',
        points: [
          'Strategic prioritisation and allocation of capital expenditure',
          'Improved leakage and pressure management',
          'Streamlined network operations and maintenance',
          'Streamlined water quality monitoring',
        ],
      },
      {
        icon: 'team',
        title: 'Consumer Relations',
        desc:
          'Online bill viewing and payment, grievance management, and consumer communication systems tailored for water utility organisations. The same multi-channel CGRS platform we run for electricity utilities — website, mobile app, email and SMS intake with live complaint tracking — configured for water networks and their consumers.',
        points: [
          'Online bill viewing and payment for consumers',
          'Multi-channel grievance intake with live complaint tracking',
          'Consumer communication and outage notification',
        ],
      },
      {
        icon: 'eye',
        title: 'Leak Analytics',
        desc:
          'Detect leaks, track pressure and automate valve control remotely. Continuous telemetry from pipelines and pumping stations feeds analytics that flag abnormal flow patterns early — so leaks are found before they surface, non-revenue water falls, and crews are dispatched to the right stretch of pipe the first time.',
        points: [
          'Pressure and flow telemetry across pipelines and pumping stations',
          'Early detection of abnormal flow patterns and suspected leaks',
          'Remote, automated valve control',
          'Reduced losses and non-revenue water across the network',
        ],
      },
    ],
    quote: {
      text:
        'Graphic visualisation, real-time situational awareness and alarm management — in the control room, or on a tablet in the field.',
      by: 'The Nuozen water SCADA operating view',
    },
    related: ['electricity', 'natural-gas'],
    cta: {
      title: 'Modernise your water network',
      muted: 'and cut the losses.',
      sub: 'From pipeline SCADA and smart metering to consumer billing and leak analytics — we scope your water modernisation in one call and send a written proposal within two working days.',
    },
  },

  {
    slug: 'natural-gas',
    title: 'Natural Gas & Oil',
    muteTail: 'built safety-first.',
    icon: 'flame',
    badge: 'Gas network automation since 2007',
    blurb:
      'Pipeline SCADA, safety monitoring, automated billing, and consumer management built to regulatory standards.',
    lede:
      'Safety-first technology for natural gas distribution networks. Our SCADA and billing platforms are built to regulatory standards and designed for zero-downtime operation in mission-critical gas infrastructure environments.',
    solutions: [
      {
        icon: 'gauge',
        title: 'Gas Network SCADA',
        desc:
          'Dependency on natural gas grows year on year, and gas companies rely on SCADA for the data crucial to operations — whether monitoring substations or commissioning new lines. Nuozen delivers a sophisticated graphical interface accessible over the web and 3G/4G networks, keeping field operators informed and able to act immediately. The platform provides a single operating view of safety, operations and reliability, with Honeywell Profit Loop controllers and distributed control systems natively integrated alongside non-Honeywell devices — sector-specific configurations built on the Nuozen Enterprise Operations Platform.',
        points: [
          'Decreased implementation time — pre-tested software and standardised SCADA configurations',
          'Reduced risk of adoption — teams stay self-reliant instead of dependent on consultants',
          'Lower total cost of ownership — a platform that stays flexible and adaptable over decades',
          'Web and 3G/4G access for operators in the field',
        ],
      },
      {
        icon: 'chart',
        title: 'Gas Billing Systems',
        desc:
          'Integrated metering, billing and payment collection systems for gas distribution. Real-time usage data feeds automated invoice generation and consumer self-service portals — so consumers pay for exactly what they use, and the utility bills without manual reads or estimation errors.',
        points: [
          'Increased efficiency on gas usage',
          'Real-time usage monitoring',
          'Less error-prone and highly accurate billing',
          'Pay-as-you-use pricing for consumers',
        ],
      },
      {
        icon: 'shield',
        title: 'Safety Monitoring',
        desc:
          'Today’s pipelines require rigorous application of safety and control systems. Nuozen implements pressure monitoring, flow measurement and automated valve control with safety interlock systems, plus safety shutdown systems at key locations across the network — engineered to regulatory standards for zero-downtime operation.',
        points: [
          'Continuous pressure monitoring and flow measurement',
          'Automated valve control with safety interlock systems',
          'Safety shutdown systems at key network locations',
          'Zero-downtime design built to regulatory standards',
        ],
      },
    ],
    quote: {
      text:
        'Today’s pipelines require rigorous application of safety and control systems — ours are built to regulatory standards and designed for zero-downtime operation.',
      by: 'Safety-first by design',
    },
    related: ['electricity', 'water'],
    cta: {
      title: 'Automate your gas network,',
      muted: 'safety first.',
      sub: 'Pre-tested SCADA configurations, safety interlocks and integrated billing — deployed with an accelerated methodology that shortens time to value without cutting corners.',
    },
  },
];

export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export default INDUSTRIES;
