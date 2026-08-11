// Legal documents, keyed by doc id (privacy / terms / refunds / csae).
// Each: { title, updated, sections: [{ h, ps: [paragraph strings] }] }.
// Content ported from the original policy decks, rebranded to Nuozen with boilerplate condensed.

const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'January 29, 2025',
    sections: [
      {
        h: 'Overview',
        ps: [
          'We at Nuozen Infotech Private Limited (“we”, “us”, “our”) are committed to protecting your privacy and ensuring transparency about how we collect, use, and share personal and device data when you use our website, our applications, and any services offered through them.',
          'This Privacy Policy applies to our online activities and is valid for visitors to our website and users of our apps with regard to the information they share and/or that we collect. It is not applicable to information collected offline or via channels other than our website and apps. By using our website and applications, you hereby consent to this Privacy Policy and agree to its terms.',
        ],
      },
      {
        h: 'Information we collect',
        ps: [
          'The personal information you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide it.',
          'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.',
          'We may also collect information automatically, including device type, OS version, unique device and advertising identifiers, IP address, browser/user-agent, time stamps, log files, and usage data such as which features you use, how you navigate the service, crash reports, and analytics.',
          'We avoid collecting sensitive data (for example health, biometric, or race/ethnicity data) unless required and with your explicit consent. If a service processes such sensitive data, we will obtain lawful consent and provide enhanced protections.',
        ],
      },
      {
        h: 'How we use your information',
        ps: [
          'We use the information we collect in various ways, including to: provide, operate, and maintain our website and services; improve, personalise, and expand them; understand and analyse how you use them; develop new products, services, features, and functionality; communicate with you — either directly or through one of our partners — for customer service, updates and other information relating to the service, and for marketing and promotional purposes; send you emails; and find and prevent fraud.',
        ],
      },
      {
        h: 'Log files',
        ps: [
          'Nuozen follows a standard procedure of using log files. These files log visitors when they visit websites — all hosting companies do this as part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.',
        ],
      },
      {
        h: 'Cookies and web beacons',
        ps: [
          'Like any other website, our site uses cookies. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimise the user experience by customising our web page content based on visitors’ browser type and/or other information.',
          'Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or web beacons in advertisements and links that appear on our site, which are sent directly to your browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalise the advertising content that you see. Nuozen has no access to or control over cookies used by third-party advertisers, and this Privacy Policy does not apply to other advertisers or websites — please consult their respective privacy policies.',
          'You can choose to disable cookies through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers’ respective websites.',
        ],
      },
      {
        h: 'Sharing and disclosure',
        ps: [
          'We may share your information in limited circumstances: with third-party service providers who assist us (hosting, analytics, payment processors) under confidentiality obligations; when required by law, legal process, or to protect rights, safety or property; in connection with a merger, acquisition or sale of assets (with notice); and with your consent.',
          'We will not sell your personal information without your permission, unless required by applicable law.',
        ],
      },
      {
        h: 'Data retention',
        ps: [
          'We retain personal data as long as necessary to fulfil the purposes described in this Policy, unless a longer retention is required by law. When no longer needed, we will securely delete or anonymise your data.',
        ],
      },
      {
        h: 'CCPA privacy rights (Do Not Sell My Personal Information)',
        ps: [
          'Under the CCPA, among other rights, California consumers have the right to: request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that the business has collected about consumers; request that a business delete any personal data about the consumer that it has collected; and request that a business that sells a consumer’s personal data not sell that data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.',
        ],
      },
      {
        h: 'GDPR data protection rights',
        ps: [
          'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: the right to access — you have the right to request copies of your personal data (we may charge a small fee for this service); the right to rectification — you have the right to request that we correct any information you believe is inaccurate, or complete information you believe is incomplete; the right to erasure — you have the right to request that we erase your personal data, under certain conditions; the right to restrict processing; the right to object to processing; and the right to data portability — you have the right to request that we transfer the data we have collected to another organisation, or directly to you, under certain conditions.',
          'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.',
        ],
      },
      {
        h: 'Children’s information',
        ps: [
          'Part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.',
          'Nuozen does not knowingly collect any personally identifiable information from children under the age of 13. Where a service is accessible to children under 13 (or the equivalent age in your region), parental consent is required before collecting personal data from children, a parent or guardian must review and approve any data collection from their child, and children’s personal data will be deleted when no longer required or upon request from a parent or guardian. If you think that your child provided this kind of information on our website or apps, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.',
        ],
      },
      {
        h: 'Security',
        ps: [
          'We implement reasonable technical and organisational measures to protect your data, including encryption, access controls, and secure servers. However, no system is 100% secure — we cannot guarantee absolute security of your data.',
        ],
      },
      {
        h: 'International transfers',
        ps: [
          'If we transfer your personal data to countries outside your region (including India or others), we will apply appropriate safeguards (such as standard contractual clauses) to ensure your data remains protected.',
        ],
      },
      {
        h: 'Updates to this policy',
        ps: [
          'We may update this Privacy Policy periodically. We will post the updated version on our website and in our apps and indicate the “Last updated” date. Your continued use after changes constitutes acceptance of the revised policy.',
        ],
      },
      {
        h: 'Contact us',
        ps: [
          'If you have any questions or concerns, or wish to exercise your rights regarding your personal data, you can contact us at Meet.Zaveri@nuozen.in, or write to: 1st Floor, Flat No. 105, Prathmesh View, Eden Park Road, Mira Bhayandar, Thane, Maharashtra 401105, India.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    updated: 'December 12, 2023',
    sections: [
      {
        h: 'Overview',
        ps: [
          'This website is operated by Nuozen Infotech Private Limited. Throughout the site, the terms “we”, “us” and “our” refer to Nuozen Infotech Private Limited. We offer this website, including all information, tools and services available from this site, to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.',
          'By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by these Terms of Service (“Terms”), including the additional terms, conditions and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the site, including without limitation browsers, vendors, customers, merchants, and contributors of content. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.',
          'Any new features or tools added to the current store shall also be subject to the Terms of Service. We reserve the right to update, change or replace any part of these Terms by posting updates to our website. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.',
        ],
      },
      {
        h: 'Online store terms',
        ps: [
          'By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority and have given us your consent to allow any of your minor dependents to use this site.',
          'You may not use our products for any illegal or unauthorised purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.',
        ],
      },
      {
        h: 'General conditions',
        ps: [
          'We reserve the right to refuse service to anyone for any reason at any time.',
          'You understand that your content (not including credit card information) may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.',
          'You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.',
        ],
      },
      {
        h: 'Accuracy, completeness and timeliness of information',
        ps: [
          'We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. This site may contain certain historical information, which is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.',
        ],
      },
      {
        h: 'Modifications to the service and prices',
        ps: [
          'Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice. We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.',
        ],
      },
      {
        h: 'Products, services, and billing accuracy',
        ps: [
          'Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Refund Policy. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction, and to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.',
          'We reserve the right to refuse any order you place with us, and may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store, and to promptly update your account information, including your email address and payment details, so that we can complete your transactions and contact you as needed.',
        ],
      },
      {
        h: 'Optional tools and third-party links',
        ps: [
          'We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools “as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. Any use by you of optional tools offered through the site is entirely at your own risk and discretion.',
          'Certain content, products and services available via our Service may include materials from third parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating their content or accuracy, and we will not have any liability for any third-party materials, websites, products, or services. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third party.',
        ],
      },
      {
        h: 'User comments, feedback and other submissions',
        ps: [
          'If you send us submissions or creative ideas, suggestions, proposals, plans, or other materials (collectively, “comments”), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are under no obligation to maintain any comments in confidence, to pay compensation for any comments, or to respond to any comments.',
          'You agree that your comments will not violate any right of any third party, including copyright, trademark, privacy, personality or other personal or proprietary right, and will not contain libellous or otherwise unlawful, abusive or obscene material, or any computer virus or other malware. You are solely responsible for any comments you make and their accuracy.',
        ],
      },
      {
        h: 'Personal information',
        ps: [
          'Your submission of personal information through the store is governed by our Privacy Policy.',
        ],
      },
      {
        h: 'Errors, inaccuracies and omissions',
        ps: [
          'Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions relating to product descriptions, pricing, promotions, offers, charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information is inaccurate, at any time without prior notice (including after you have submitted your order).',
        ],
      },
      {
        h: 'Prohibited uses',
        ps: [
          'In addition to other prohibitions set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or those of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.',
        ],
      },
      {
        h: 'Disclaimer of warranties; limitation of liability',
        ps: [
          'We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free, or that the results obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.',
          'You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided “as is” and “as available” for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.',
          'In no case shall Nuozen Infotech Private Limited, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind — including, without limitation, lost profits, lost revenue, lost savings, loss of data, or replacement costs — whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, even if advised of their possibility. In states or jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, our liability shall be limited to the maximum extent permitted by law.',
        ],
      },
      {
        h: 'Indemnification',
        ps: [
          'You agree to indemnify, defend and hold harmless Nuozen Infotech Private Limited and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third party.',
        ],
      },
      {
        h: 'Severability, termination and entire agreement',
        ps: [
          'In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed; such determination shall not affect the validity and enforceability of the remaining provisions.',
          'These Terms of Service are effective unless and until terminated by either you or us. You may terminate them at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. If in our sole judgment you fail to comply with any term or provision, we may terminate this agreement at any time without notice, and you will remain liable for all amounts due up to and including the date of termination. The obligations and liabilities of the parties incurred prior to the termination date shall survive termination for all purposes.',
          'These Terms of Service and any policies or operating rules posted by us constitute the entire agreement between you and us, superseding any prior agreements. The failure of us to exercise or enforce any right or provision shall not constitute a waiver of such right or provision. Any ambiguities in the interpretation of these Terms shall not be construed against the drafting party.',
        ],
      },
      {
        h: 'Governing law',
        ps: [
          'These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and the jurisdiction of Thane, Maharashtra.',
        ],
      },
      {
        h: 'Changes to Terms of Service and contact information',
        ps: [
          'You can review the most current version of the Terms of Service at any time on this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms by posting updates to our website. It is your responsibility to check this page periodically for changes.',
          'Questions about the Terms of Service should be sent to us at Meet.Zaveri@nuozen.in.',
        ],
      },
    ],
  },

  refunds: {
    title: 'Refund Policy',
    updated: 'December 12, 2023',
    sections: [
      {
        h: 'No refund policy for software downloads and virtual products',
        ps: [
          'Effective date: 12th December 2023.',
        ],
      },
      {
        h: 'Scope of policy',
        ps: [
          'This No Refund Policy applies to all software downloads and virtual products offered by Nuozen Infotech Private Limited (“Company”).',
        ],
      },
      {
        h: 'Digital products',
        ps: [
          'Our digital products, including software downloads and virtual items, are non-tangible, irrevocable goods delivered electronically. Due to the nature of these products, we do not issue refunds once the order is confirmed and the product is delivered.',
        ],
      },
      {
        h: 'Exceptional circumstances',
        ps: [
          'Refunds may be considered on a case-by-case basis in exceptional circumstances, such as proven non-delivery of the product, major defects that prevent proper usage, or as required by applicable laws.',
        ],
      },
      {
        h: 'Refund process',
        ps: [
          'To request a refund under exceptional circumstances, users must contact our customer support within 10 days of the purchase date, providing detailed information about the issue.',
        ],
      },
      {
        h: 'License agreement',
        ps: [
          'By purchasing and downloading our software, users acknowledge and agree to the terms of the accompanying End User License Agreement (EULA). Any violation of the EULA may result in the cancellation of support and warranty.',
        ],
      },
      {
        h: 'Contact information',
        ps: [
          'For any inquiries regarding our No Refund Policy, please contact us at Meet.Zaveri@nuozen.in.',
        ],
      },
    ],
  },

  csae: {
    title: 'Child Sexual Abuse and Exploitation (CSAE) Policy',
    updated: 'January 29, 2025',
    sections: [
      {
        h: 'Purpose',
        ps: [
          'This policy sets out Nuozen Infotech Private Limited’s firm commitment and operational approach to prevent, detect, respond to and report any form of child sexual abuse and exploitation in the course of our business. This applies to all employees, contractors, clients, partners and any users of our platforms or services.',
        ],
      },
      {
        h: 'Scope',
        ps: [
          'This policy applies to all personnel of Nuozen Infotech Private Limited and its subsidiaries or affiliates worldwide. It applies to all our digital platforms, mobile apps, websites, systems and services (including outsourcing and development engagements), and covers any content created, handled or distributed that involves minors, and any services we provide that may touch or impact minors.',
        ],
      },
      {
        h: 'Definitions',
        ps: [
          '“Child” means any person under the age of 18. “Child Sexual Abuse and Exploitation (CSAE)” includes any sexual activity with a child, acquiring or distributing child sexual abuse material, grooming, and sexual exploitation of children for commercial or any other purposes.',
        ],
      },
      {
        h: 'Principles and commitments',
        ps: [
          'Zero tolerance: we will not permit any form of CSAE in our operations, services or platforms.',
          'Prevention: we will implement training, awareness, controls and auditing to prevent CSAE. Protection: we will put in place safeguards for children’s safety in any context we operate, including the development and deployment of software solutions.',
          'Detection and reporting: we will monitor, detect, investigate and report suspected CSAE to appropriate law enforcement and regulatory authorities. Remediation: if any incident occurs, we will respond promptly, protect affected children, cooperate with authorities, and take remedial action. Transparency and accountability: we will maintain records, conduct audits and review the policy as needed.',
        ],
      },
      {
        h: 'Roles and responsibilities',
        ps: [
          'Leadership: the senior management of Nuozen is responsible for setting the tone, allocating resources and ensuring compliance with this policy.',
          'Compliance Officer: a designated officer shall oversee implementation, incident handling and liaison with authorities.',
          'Employees and contractors: must complete mandatory training, adhere to the policy, and immediately report any suspicion of CSAE. Third-party service providers and clients: must agree contractually to comply with this policy, provide assurance and enable audits where relevant.',
        ],
      },
      {
        h: 'Preventive measures',
        ps: [
          'We conduct background checks for employees and contractors who may have access to minors or children-related projects, and run a training program for all staff on child protection, identifying signs of grooming or abuse, and how to report.',
          'We follow safe design and development practices: minimising unnecessary collection of children’s data, ensuring strong access controls, and reviewing content and user-generated material for risk. We establish moderation, filtering and blocking mechanisms for user-generated content and communications that involve children, and perform vendor and partner due diligence to confirm their child-protection policies and practices.',
        ],
      },
      {
        h: 'Reporting and response',
        ps: [
          'If any employee, contractor or third party becomes aware of suspected CSAE, they must immediately report it to the Compliance Officer. The Compliance Officer will initiate an investigation, secure relevant evidence, suspend or restrict services if required, and escalate to law enforcement or child-protection agencies as per applicable laws.',
          'Affected children must be safeguarded and supported; data and privacy protection must be maintained throughout. Records of incidents, investigations and outcomes must be maintained securely.',
        ],
      },
      {
        h: 'Cooperation with law enforcement',
        ps: [
          'We will cooperate fully with law enforcement, regulatory bodies and child-protection agencies, and comply with legal obligations to report and provide data, subject to applicable privacy laws.',
        ],
      },
      {
        h: 'Review and audit',
        ps: [
          'This policy will be reviewed at least annually and updated as necessary to reflect legal, technological or business changes. Regular audits (internal or external) will assess compliance with the policy and the effectiveness of preventive controls.',
        ],
      },
      {
        h: 'Consequences of non-compliance',
        ps: [
          'Violation of this policy may result in disciplinary action, up to and including termination of employment or contract. Contracts with third parties may be terminated for breach of this policy. We may suspend or remove services or content associated with suspected CSAE.',
        ],
      },
      {
        h: 'Communication and contact',
        ps: [
          'This policy is publicly available on our website. All employees, contractors, clients and partners will be informed of this policy and required to acknowledge it.',
          'Contact: Compliance Officer, Nuozen Infotech Private Limited — Meet.Zaveri@nuozen.in.',
        ],
      },
    ],
  },
};

export default LEGAL;
