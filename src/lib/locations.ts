export interface LocationData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  districtState: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  responseTime: string;
  overview: string;
  industrialEstates: string[];
  keyIndustries: string[];
  topServices: {
    title: string;
    description: string;
    slug: string;
  }[];
  localCaseStudy: {
    title: string;
    clientType: string;
    scope: string;
    result: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: 'vapi',
    name: 'Vapi',
    fullName: 'Vapi GIDC Industrial Estate',
    tagline: 'Asia’s Premier Chemical & Industrial Hub — Mission-Critical IT & CCTV Infrastructure',
    districtState: 'Valsad District, Gujarat',
    pincode: '396195',
    coordinates: { lat: 20.3712, lng: 72.9106 },
    responseTime: '1 to 2 Hours (Local Engineering HQ Dispatch)',
    overview: 'As South Gujarat’s largest manufacturing hub with over 1,500 operational industrial units across 4 GIDC phases, Vapi factories demand zero network downtime, rugged CCTV surveillance, and enterprise data security. NextGen IT Solution maintains our central operations and engineering spares warehouse in Vapi, ensuring guaranteed rapid emergency onsite response.',
    industrialEstates: [
      'GIDC Phase 1 (Engineering & Plastics)',
      'GIDC Phase 2 (Chemicals, Dyes & Pigments)',
      'GIDC Phase 3 (Paper, Packaging & Textiles)',
      'GIDC Phase 4 (Pharmaceuticals & Special Chemicals)',
      'Morai Industrial Zone',
      'Koparli Road Industrial Belt',
      'Chanod Colony & Balitha'
    ],
    keyIndustries: ['Chemicals & Dyes', 'Pharmaceuticals & API', 'Packaging & Paper Mills', 'Textile Processing', 'Plastic Injection Molding'],
    topServices: [
      {
        title: 'Factory CCTV Camera Installation',
        description: 'High-definition 4MP/8MP IP surveillance, AI line crossing, yard perimeter detection, and central NVR storage compliant with plant safety audits.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'CAT6 / CAT6A Structured LAN Cabling',
        description: 'TIA/EIA compliant noise-shielded data cabling for heavy motor environments, clean server rack dressing, patch panels, and Fluke certification.',
        slug: 'networking-lan'
      },
      {
        title: 'Fiber Optic Splicing & Campus Backbone',
        description: 'Armored multi-building optical fiber backbone, precision fusion splicing, and OTDR insertion loss testing between plant sheds and admin offices.',
        slug: 'fiber-optic-networking'
      },
      {
        title: 'Industrial IT AMC & Onsite SLA Support',
        description: 'Comprehensive IT maintenance covering production line PCs, ERP servers, switches, and CCTV with 1-2 hour emergency onsite response in Vapi.',
        slug: 'amc-it-support'
      },
      {
        title: 'NextGen Firewall & Remote Office VPN',
        description: 'Sophos and Fortinet firewall configuration, ransomware protection, branch office VPN tunneling, and corporate internet bandwidth control.',
        slug: 'firewall-network-security'
      }
    ],
    localCaseStudy: {
      title: 'Turnkey 48-Point CAT6A Network & 32-Camera CCTV in Vapi GIDC Phase 2',
      clientType: 'Specialty Chemical Manufacturing Facility',
      scope: 'Dual-building armored fiber interconnect, 48 CAT6A shielded drops in high-EMI production floor, and 32 IP cameras with 60-day RAID storage.',
      result: '100% network uptime across production line and admin office with full ISO 27001 compliant port mapping documentation.'
    },
    faqs: [
      {
        question: 'How fast can an IT technician reach our factory in Vapi GIDC?',
        answer: 'Because NextGen IT Solution is headquartered in Vapi, our certified field engineers can be onsite at your factory in GIDC Phase 1, 2, 3, or 4 within 1 to 2 hours for critical emergencies.'
      },
      {
        question: 'Do you provide cable testing reports for ISO and GMP audits in Vapi?',
        answer: 'Yes. Every structured cabling and fiber optic project includes certified Fluke network testing reports, color-coded patch panel labeling, and complete network rack diagrams.'
      },
      {
        question: 'Can you supply standby loaner hardware during server or switch failures?',
        answer: 'Yes, our Vapi spares warehouse maintains standby gigabit switches, NVRs, and power supplies to keep your production operational while faulty units undergo warranty service.'
      }
    ]
  },
  {
    slug: 'silvassa',
    name: 'Silvassa',
    fullName: 'Silvassa & Dadra Industrial Corridor',
    tagline: 'Union Territory Manufacturing Capital — High-Speed Fiber, CCTV & Enterprise AMC',
    districtState: 'Dadra and Nagar Haveli, UT',
    pincode: '396230',
    coordinates: { lat: 20.2763, lng: 73.0083 },
    responseTime: '2 to 3 Hours Guaranteed SLA',
    overview: 'Silvassa hosts heavy industrial manufacturing, massive textile and yarn mills, consumer goods plants, and plastic manufacturing across sprawling multi-acre campuses. NextGen IT Solution provides high-capacity campus-wide fiber networks, long-range wireless links, PTZ yard cameras, and SLA-backed IT AMC support across Piparia, Masat, Sayli, and Amli.',
    industrialEstates: [
      'Piparia Industrial Estate',
      'Masat Industrial Area',
      'Sayli Industrial Zone',
      'Amli Industrial Area',
      'Kharadpada Industrial Corridor',
      'Rakholi Industrial Area',
      'Dadra Industrial Belt'
    ],
    keyIndustries: ['Textile & Synthetic Yarn', 'Consumer Goods (FMCG)', 'Heavy Engineering', 'Plastics & Polymers', 'Paper & Corrugated Packaging'],
    topServices: [
      {
        title: 'Industrial CCTV & Perimeter Security',
        description: 'Long-range optical PTZ cameras for multi-acre factory yards, automatic number plate recognition (ANPR) for dispatch gates, and mobile surveillance.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Multi-Acre Campus Fiber Optic Networks',
        description: 'Underground armored fiber trenching, multi-building gigabit rings, and laser fusion splicing connecting raw material sheds to main corporate offices.',
        slug: 'fiber-optic-networking'
      },
      {
        title: 'Enterprise Server & Data Storage (NAS)',
        description: 'Rackmount Dell and HPE servers for ERP (SAP, Tally), automated NAS backup routines, and server room environmental cooling setups.',
        slug: 'server-storage-solutions'
      },
      {
        title: 'Annual Maintenance Contracts (AMC) for Silvassa Plants',
        description: 'Scheduled monthly preventive maintenance visits and priority breakdown support for desktop computers, printers, and network switches.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Campus-Wide Armored Fiber Optic Backbone in Piparia, Silvassa',
      clientType: 'Large-Scale Textile & Yarn Spinning Plant (8-Acre Campus)',
      scope: '2.5 km underground 12-core single-mode armored fiber connecting 4 production sheds with gigabit core switches and redundant link failover.',
      result: 'Eliminated shop-floor ERP latency and provided flawless live video feeds from 64 IP cameras across all sheds.'
    },
    faqs: [
      {
        question: 'Do you service plants located in Piparia, Masat, and Sayli in Silvassa?',
        answer: 'Yes, our mobile service engineers cover all industrial clusters across Silvassa including Piparia, Masat, Sayli, Amli, Kharadpada, and Rakholi daily.'
      },
      {
        question: 'Can NextGen IT handle surveillance across massive 5-to-10 acre manufacturing plants?',
        answer: 'Yes. We specialize in large campuses using long-range optical zoom PTZ cameras, fiber optic backbones, and point-to-point wireless bridges for perimeter and gate monitoring.'
      },
      {
        question: 'Do you offer GST billing compliant with Dadra & Nagar Haveli regulations?',
        answer: 'Yes, we provide 100% formal GST invoices for all IT hardware, cables, and AMC support services with input tax credit eligibility.'
      }
    ]
  },
  {
    slug: 'daman',
    name: 'Daman',
    fullName: 'Daman Industrial Estates & Coastal Belt',
    tagline: 'Coastal Manufacturing Hub — Weatherproof CCTV, Robust LAN & Server Solutions',
    districtState: 'Daman and Diu, UT',
    pincode: '396210',
    coordinates: { lat: 20.3974, lng: 72.8328 },
    responseTime: '2 to 3 Hours Guaranteed SLA',
    overview: 'Daman’s coastal environment presents unique challenges for IT infrastructure: saline air and high humidity accelerate corrosion on unshielded electronic components and outdoor camera housings. NextGen IT Solution delivers corrosion-resistant weatherproof CCTV cameras, IP66-rated outdoor enclosures, armored fiber backbones, and enterprise LAN networks across Somnath, Kachigam, Dabhel, and Ringanwada.',
    industrialEstates: [
      'Somnath Industrial Area',
      'Kachigam Industrial Estate',
      'Dabhel Industrial Corridor',
      'Ringanwada Industrial Area',
      'Bhimpore Industrial Zone',
      'Kadaiya Manufacturing Belt'
    ],
    keyIndustries: ['Pharmaceuticals & Healthcare', 'Plastic Molding & Blow Molding', 'Electronics Manufacturing', 'Metal Fabrication', 'Beverages & Distilleries'],
    topServices: [
      {
        title: 'Weatherproof & Anti-Corrosion CCTV Systems',
        description: 'IP66/IP67 rated surveillance cameras with surge suppression and sealed enclosures built to resist Daman’s humid, saline coastal atmosphere.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Structured LAN Cabling & Rack Dressing',
        description: 'Flame-retardant LSZH CAT6/CAT6A copper cabling, dustproof wall-mount and floor-standing server racks with cable management.',
        slug: 'networking-lan'
      },
      {
        title: 'Next-Gen Firewall & Secure Remote Access',
        description: 'Enterprise gateway firewalls protecting corporate financial records, managing multi-WAN failover, and securing remote factory management.',
        slug: 'firewall-network-security'
      },
      {
        title: 'Factory IT AMC & SLA Support in Daman',
        description: 'Comprehensive hardware maintenance contracts covering computer workstations, barcode printers, CCTV NVRs, and network switches.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Pharma-Compliant Cleanroom LAN & CCTV in Somnath, Daman',
      clientType: 'Pharmaceutical Formulation & Packaging Unit',
      scope: 'Stainless steel flush-mount camera housings, zero-dust conduit cabling, and temperature-monitored server rack with ISO compliance documentation.',
      result: 'Passed US-FDA and WHO-GMP audit scrutiny with zero IT infrastructure observations.'
    },
    faqs: [
      {
        question: 'How do you prevent camera and cable corrosion in Daman’s coastal air?',
        answer: 'We utilize IP67 weatherproof cameras with powder-coated aluminum or stainless steel housings, UV-stabilized conduit, and gold-plated RJ45 connectors with anti-oxidation treatment.'
      },
      {
        question: 'How fast can an engineer reach Somnath or Kachigam in Daman?',
        answer: 'Our technicians reach Daman industrial areas (Somnath, Kachigam, Dabhel) within 2 to 3 hours from our Vapi dispatch center.'
      },
      {
        question: 'Do you provide AMC for existing CCTV and network equipment in Daman?',
        answer: 'Yes! We conduct a free preliminary site survey, document your existing hardware health, and onboard your facility into a customized Annual Maintenance Contract.'
      }
    ]
  },
  {
    slug: 'sarigam',
    name: 'Sarigam',
    fullName: 'Sarigam GIDC Industrial Estate',
    tagline: 'High-Growth Chemical & Manufacturing Belt — Heavy-Duty Cabling & Surveillance',
    districtState: 'Valsad District, Gujarat',
    pincode: '396155',
    coordinates: { lat: 20.2922, lng: 72.8423 },
    responseTime: '2 to 3 Hours Onsite SLA',
    overview: 'Sarigam GIDC is a rapidly expanding chemical, dye, paper, and heavy manufacturing zone situated right on the Gujarat-Maharashtra border. Industrial plants in Sarigam require explosion-proof and corrosion-resistant surveillance, high-speed fiber backbones, and reliable IT AMC support to eliminate production downtime.',
    industrialEstates: [
      'Sarigam GIDC Main Industrial Estate',
      'Sarigam Chemical Zone',
      'Fansa Road Industrial Belt',
      'Sarigam-Bhilad Link Road Corridor'
    ],
    keyIndustries: ['Specialty Chemicals', 'Dyes & Intermediates', 'Paper Products', 'Textiles', 'Metal Processing'],
    topServices: [
      {
        title: 'Harsh Environment CCTV Surveillance',
        description: 'Explosion-proof camera housings, chemical fume-resistant cabling, and perimeter AI detection for chemical factories and storage yards.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Armored Fiber Optic Splicing',
        description: 'Rodent-proof and chemical-resistant armored optical fiber cabling for inter-shed communication and high-speed plant telemetry.',
        slug: 'fiber-optic-networking'
      },
      {
        title: 'Industrial IT Maintenance Contracts (AMC)',
        description: 'Dedicated preventive visits and priority breakdown restoration for shop-floor PCs, weighing scale computers, and network switches in Sarigam.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Corrosion-Resistant Fiber Backbone for Chemical Plant in Sarigam GIDC',
      clientType: 'Dye & Intermediate Manufacturing Unit',
      scope: 'Underground conduit armored fiber link between QA laboratory, reactor building, and main gate with Fluke OTDR certification.',
      result: 'Zero network packet loss even during heavy production hours with complete immunity to plant electrical noise.'
    },
    faqs: [
      {
        question: 'Do you support factories located in Sarigam GIDC?',
        answer: 'Yes, Sarigam is one of our primary daily service corridors. Our technicians are stationed locally to handle both scheduled maintenance and emergency service calls.'
      },
      {
        question: 'Can you install CCTV cameras in hazardous or chemical fume zones?',
        answer: 'Yes, we supply specialized explosion-proof and ATEX-certified camera housings and flame-retardant LSZH cabling engineered for chemical manufacturing units.'
      }
    ]
  },
  {
    slug: 'umargam',
    name: 'Umargam',
    fullName: 'Umargam (Umbergaon) GIDC Industrial Estate',
    tagline: 'Border Industrial & Textile Corridor — Reliable Structured Cabling & IT Support',
    districtState: 'Valsad District, Gujarat',
    pincode: '396170',
    coordinates: { lat: 20.1887, lng: 72.7533 },
    responseTime: '2 to 3 Hours Onsite SLA',
    overview: 'Umbergaon (Umargam) GIDC is home to major textile mills, packaging units, and manufacturing plants located at the southern tip of Gujarat. NextGen IT Solution delivers enterprise IT infrastructure, structured LAN cabling, NVR surveillance, and responsive IT AMC support to ensure round-the-clock plant operations.',
    industrialEstates: [
      'Umargam GIDC Main Industrial Zone',
      'Solsumba Industrial Area',
      'Dehari Industrial Corridor',
      'Umbergaon Coastal Industrial Belt'
    ],
    keyIndustries: ['Textile & Garment Manufacturing', 'Plastic & Packaging', 'Marine Products', 'Engineering & Fabrication'],
    topServices: [
      {
        title: 'CAT6 / CAT6A Plant LAN Cabling',
        description: 'High-density structured cabling for shop-floor production lines, server racks, and admin offices with certified fluke testing.',
        slug: 'networking-lan'
      },
      {
        title: 'Factory CCTV Camera Installation',
        description: 'Perimeter protection, shop-floor worker monitoring, raw material storage surveillance, and remote mobile viewing.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'IT AMC & Workstation Maintenance',
        description: 'Comprehensive computer AMC including OS maintenance, virus protection, data backup, and rapid hardware replacement.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Complete Shop-Floor LAN & 24-Camera Surveillance in Umargam GIDC',
      clientType: 'Textile Weaving & Processing Plant',
      scope: 'Shielded CAT6 cabling across 2 manufacturing sheds, 24 full-HD IP cameras, and 9U server rack setup with online UPS backup.',
      result: 'Provided seamless connectivity for barcode tracking and real-time management visibility across all weaving looms.'
    },
    faqs: [
      {
        question: 'Do you provide onsite IT support in Umbergaon GIDC and Solsumba?',
        answer: 'Yes, our engineering team regularly services Umargam GIDC, Solsumba, and surrounding industrial belts with 2 to 3 hour onsite response.'
      },
      {
        question: 'Can you assist with setting up our new factory IT infrastructure in Umargam?',
        answer: 'Yes! We provide turnkey IT setup: from structured cabling and fiber optic laying to server rack installation, Wi-Fi access points, and CCTV cameras.'
      }
    ]
  },
  {
    slug: 'bhilad',
    name: 'Bhilad',
    fullName: 'Bhilad Industrial Area & Logistics Corridor',
    tagline: 'Strategic NH48 Logistics & Manufacturing Hub — High-Speed Networking & Security',
    districtState: 'Valsad District, Gujarat',
    pincode: '396105',
    coordinates: { lat: 20.2796, lng: 72.8797 },
    responseTime: '1 to 2 Hours Emergency Dispatch',
    overview: 'Bhilad sits prominently along National Highway 48, making it a critical junction for warehousing, transport logistics, paper mills, and manufacturing plants. NextGen IT Solution delivers warehouse-wide Wi-Fi, long-range yard surveillance, gate barcode integration, and rapid SLA-backed IT maintenance.',
    industrialEstates: [
      'Bhilad GIDC & Industrial Area',
      'NH48 Highway Logistics Hub',
      'Bhilad-Sarigam Crossroad Industrial Zone',
      'Dharampur Road Industrial Belt'
    ],
    keyIndustries: ['Warehousing & Logistics', 'Paper & Corrugated Boxes', 'Steel Fabrication', 'Chemicals & Allied Products'],
    topServices: [
      {
        title: 'Warehouse Wi-Fi & Handheld Barcode RF Coverage',
        description: 'High-gain industrial Wi-Fi 6 access points providing zero-dead-zone wireless coverage for handheld scanner terminals and mobile inventory carts.',
        slug: 'wifi-wireless-solutions'
      },
      {
        title: 'Yard & Gate CCTV with Automatic Number Plate Recognition',
        description: 'High-speed ANPR cameras capturing truck license plates at entry/exit gates, vehicle weighbridge camera synchronization, and 24/7 logging.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'High-Speed LAN & IT AMC Support',
        description: 'Reliable Cat6 cabling and regular computer maintenance contracts for logistics offices, transport dispatchers, and plant accountants.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Warehouse High-Density Wi-Fi & 16-Camera Gate Security in Bhilad',
      clientType: 'Logistics & FMCG Distribution Center (40,000 Sq Ft)',
      scope: 'Ceiling-mounted enterprise Wi-Fi APs with seamless roaming for barcode scanners, plus 16 IP cameras covering loading docks and weighbridge.',
      result: 'Zero barcode disconnects during inventory dispatch and 100% truck vehicle plate capture accuracy.'
    },
    faqs: [
      {
        question: 'How quickly can your engineers reach Bhilad in case of network breakdown?',
        answer: 'Located just minutes from our Vapi center along NH48, our technicians can reach Bhilad industrial units within 1 to 2 hours.'
      },
      {
        question: 'Can you integrate CCTV cameras with our warehouse weighbridge software?',
        answer: 'Yes, we set up IP cameras positioned at driver windows and truck beds that automatically snap photos synced with weighbridge gross and tare weight records.'
      }
    ]
  },
  {
    slug: 'valsad',
    name: 'Valsad',
    fullName: 'Valsad City & Gundlav GIDC Hub',
    tagline: 'District Headquarters & Manufacturing Estate — Turnkey Corporate IT Solutions',
    districtState: 'Valsad District, Gujarat',
    pincode: '396001',
    coordinates: { lat: 20.5992, lng: 72.9342 },
    responseTime: '2 to 4 Hours Guaranteed SLA',
    overview: 'Valsad is the administrative and commercial heart of the district, featuring the busy Gundlav GIDC, chemical processing plants in Atul, and numerous commercial corporate offices. NextGen IT Solution provides high-performance server solutions, multi-point CCTV monitoring, biometric time-attendance, and comprehensive IT AMC services.',
    industrialEstates: [
      'Gundlav GIDC Industrial Estate',
      'Atul Industrial Complex',
      'Dharampur Road Commercial Zone',
      'Abrama & Tithal Road Corporate Offices'
    ],
    keyIndustries: ['Chemicals & Agro-Chemicals', 'Engineering & Industrial Fabrication', 'Corporate & Banking Offices', 'Healthcare & Diagnostics'],
    topServices: [
      {
        title: 'Corporate Server & Tally/ERP Setup',
        description: 'Dedicated on-premise servers with automated RAID backup, multi-user Tally Prime acceleration, and secure remote VPN access.',
        slug: 'server-storage-solutions'
      },
      {
        title: 'Commercial & Factory CCTV Surveillance',
        description: 'Indoor dome cameras for offices and banks, weatherproof bullet cameras for factory perimeters, and cloud mobile viewing.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Biometric Attendance & Access Control Systems',
        description: 'Facial recognition and fingerprint terminals integrated with payroll software for industrial shift workers and corporate staff.',
        slug: 'biometric-access-control'
      },
      {
        title: 'Comprehensive IT AMC Support',
        description: 'End-to-end IT support for workstations, servers, firewall gateways, and network switches with scheduled preventive checkups.',
        slug: 'amc-it-support'
      }
    ],
    localCaseStudy: {
      title: 'Corporate Server Migration & 30-Node LAN in Gundlav GIDC, Valsad',
      clientType: 'Industrial Equipment Manufacturing Corporate Office',
      scope: 'Rackmount Dell PowerEdge server installation, Windows Server Active Directory setup, CAT6 network overhaul, and biometric attendance.',
      result: 'Enhanced file transfer speeds by 400% and centralized user permissions with automated daily cloud data backups.'
    },
    faqs: [
      {
        question: 'Do you service companies in Gundlav GIDC and Atul in Valsad?',
        answer: 'Yes! We have regular client contracts across Gundlav GIDC, Atul industrial corridor, and commercial establishments throughout Valsad city.'
      },
      {
        question: 'Can you configure multi-branch biometric attendance between Valsad and Vapi offices?',
        answer: 'Yes, we deploy cloud-synchronized biometric attendance terminals that allow HR to track employee punches across multiple branch locations on a single dashboard.'
      }
    ]
  }
];
