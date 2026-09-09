export interface IndustryData {
  slug: string;
  name: string;
  heroTitle: string;
  tagline: string;
  icon: string;
  overview: string;
  criticalChallenges: {
    title: string;
    description: string;
  }[];
  tailoredSolutions: {
    title: string;
    description: string;
    specs: string[];
  }[];
  complianceAndAudits: string[];
  recommendedServices: {
    title: string;
    description: string;
    slug: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    slug: 'pharmaceutical',
    name: 'Pharmaceuticals & Life Sciences',
    heroTitle: 'Audit-Ready IT Infrastructure & Surveillance for Pharma Plants',
    tagline: 'US-FDA, WHO-GMP & 21 CFR Part 11 Compliant IT Networking & Cleanroom Surveillance',
    icon: 'Pill',
    overview: 'Pharmaceutical and API formulation plants in Vapi GIDC Phase 4, Daman Somnath, and Sarigam operate under stringent regulatory audits. IT systems cannot simply be functional—they must strictly comply with cleanroom particulate standards, tamper-proof surveillance archiving, and validated data backup policies.',
    criticalChallenges: [
      {
        title: 'Cleanroom Particulate & Ingress Restrictions',
        description: 'Standard ceiling or wall penetrations can compromise sterile cleanroom positive pressure. Cables and camera mounts must have flush stainless-steel finishes with zero particle generation.'
      },
      {
        title: '21 CFR Part 11 & Data Integrity Audits',
        description: 'Quality control laboratories and formulation machines generate critical batch records. Any unencrypted network drop or unlogged server access can lead to major audit warning letters.'
      },
      {
        title: 'Tamper-Proof Video Storage Retention',
        description: 'Pharma security audits require continuous, unedited high-definition video archives covering sterile airlocks, weighing booths, and packaging lines with 60 to 90 days retention.'
      }
    ],
    tailoredSolutions: [
      {
        title: 'Cleanroom Flush-Mount CCTV & Airlock Surveillance',
        description: 'Medical-grade stainless steel flush-mount dome cameras with IP66 sealed housings that withstand daily chemical sanitization and isopropyl alcohol (IPA) wiping.',
        specs: ['304/316 Stainless Steel Housing', 'Flush Ceiling Mount with Food-Grade Silicone Gasket', 'IK10 Vandal-Proof Rating', 'Watermarked Tamper-Proof Footage']
      },
      {
        title: 'Zero-Dust LSZH Cleanroom Structured Cabling',
        description: 'Low-Smoke Zero-Halogen (LSZH) CAT6A copper cabling routed inside sealed PVC/stainless conduit with airtight cable glands to preserve cleanroom pressure.',
        specs: ['LSZH Flame-Retardant Jacket', 'Certified TIA/EIA Cleanroom Routing', 'Fluke DSX-8000 Calibrated Testing Reports', 'Hermetically Sealed Wall Faceplates']
      },
      {
        title: 'QC Lab Server Racks with Environmental Monitoring',
        description: 'Sealed server enclosures with automated temperature, humidity, and smoke sensors alerting IT managers via SMS before hardware throttles or data degrades.',
        specs: ['IP55 Dust-Proof Server Cabinets', 'Automated Daily RAID-10 NAS Backup', 'Scheduled Off-Site Cloud Mirroring', 'Multi-User Tally & ERP Acceleration']
      }
    ],
    complianceAndAudits: [
      'US-FDA & WHO-GMP Audit Compliant',
      '21 CFR Part 11 Digital Video & Log Retention',
      'ISO 27001 Certified Network Port Mapping',
      'Calibrated Fluke Cable Attenuation Documentation'
    ],
    recommendedServices: [
      {
        title: 'High-Definition CCTV Surveillance',
        description: 'Cleanroom and packaging line video monitoring with 90-day RAID storage.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Structured CAT6A LAN Cabling',
        description: 'Noise-immune, certified copper network drops for QA laboratories.',
        slug: 'networking-lan'
      },
      {
        title: 'Enterprise Server & Storage Solutions',
        description: 'Secure rackmount servers with automated backup routines for ERP batch data.',
        slug: 'server-storage-solutions'
      }
    ],
    faqs: [
      {
        question: 'Can your cameras withstand regular chemical sanitization in pharma cleanrooms?',
        answer: 'Yes. We supply pharma-grade 304 and 316 stainless-steel camera enclosures sealed with chemical-resistant gaskets designed specifically to withstand daily spray and wipe cleaning with isopropyl alcohol and sanitizers.'
      },
      {
        question: 'Do you provide cable testing documentation for our regulatory audits?',
        answer: 'Yes! Every network drop is tested using calibrated Fluke network analyzers. We supply a formal binder containing port-by-port attenuation graphs, length verification, and rack diagrams ready for your auditor.'
      }
    ]
  },
  {
    slug: 'chemical',
    name: 'Chemicals, Dyes & Pigments',
    heroTitle: 'Explosion-Proof & Corrosion-Resistant IT Solutions for Chemical Plants',
    tagline: 'Ruggedized Surveillance, Armored Optical Fiber & Flame-Retardant Industrial Networking',
    icon: 'FlaskConical',
    overview: 'Vapi GIDC Phase 1 and 2, Sarigam GIDC, and Atul are home to hundreds of specialty chemical, dye, and resin plants. Harsh acid fumes, solvent vapors, high moisture, and severe electrical noise from large agitator motors require ruggedized, explosion-proof, and anti-corrosive technology infrastructure.',
    criticalChallenges: [
      {
        title: 'Corrosive Acid & Chemical Fume Degradation',
        description: 'Airborne sulfur, chlorine, and acid vapors rapidly corrode copper contacts, oxidize camera circuitry, and degrade standard PVC cable sheaths within months.'
      },
      {
        title: 'Hazardous Vapor & Explosion Risks (ATEX Zones)',
        description: 'Reactor areas, solvent storage yards, and distillation columns require ATEX and PESO certified explosion-proof equipment that cannot emit electrical sparks.'
      },
      {
        title: 'Heavy Motor Electromagnetic Interference (EMI)',
        description: 'High-power reactor drives, chillers, and induction motors generate strong electromagnetic fields that corrupt signals in standard copper cables.'
      }
    ],
    tailoredSolutions: [
      {
        title: 'ATEX & Flameproof Industrial CCTV Cameras',
        description: 'Certified explosion-proof stainless steel camera housings engineered to operate safely in Zone 1 and Zone 2 hazardous gas and chemical solvent environments.',
        specs: ['ATEX / IECEx Certified Enclosures', 'High-Pressure Die-Cast Stainless Steel', 'Integrated Wiper for Vapor Condensation', 'Optical Zoom for Safe Distant Inspection']
      },
      {
        title: 'Immune Armored Optical Fiber Plant Backbone',
        description: 'Single-mode armored optical fiber that transmits light pulses rather than electricity, making it 100% immune to plant electrical noise and incapable of sparking.',
        specs: ['Corrugated Steel Armor (Rodent & Chemical Proof)', 'Water-Blocking Gel Barrier', 'Core-Alignment Fusion Splicing (<0.02 dB Loss)', 'Zero Sparking / Zero Ground Loops']
      },
      {
        title: 'Anti-Corrosion Sealed Server & Switch Racks',
        description: 'IP65/IP66 rated outdoor and plant floor enclosures with chemical-resistant powder coating and filtered positive-pressure cooling to block acid fumes.',
        specs: ['Acid-Resistant Powder Coated Enclosures', 'Gasketed Cable Entry Glands', 'Conformal-Coated Network Switches', 'Surge & Lightning Protection Arrestors']
      }
    ],
    complianceAndAudits: [
      'ATEX & PESO Hazardous Zone Certified Surveillance',
      'Factory Inspectorate & Safety Audit Compliant',
      'Corrosion-Resistant TIA/EIA Cabling Architecture',
      'GIDC Environmental & Fire Safety Compliant'
    ],
    recommendedServices: [
      {
        title: 'Fiber Optic Networking & Splicing',
        description: 'Spark-free, noise-immune campus fiber connecting reactor sheds to admin blocks.',
        slug: 'fiber-optic-networking'
      },
      {
        title: 'Hazardous Environment CCTV',
        description: 'Explosion-proof cameras covering solvent storage yards and distillation areas.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Industrial IT AMC Maintenance',
        description: 'Routine chemical dust cleaning and component health checks with 6-8 hr SLA.',
        slug: 'amc-it-support'
      }
    ],
    faqs: [
      {
        question: 'Why does optical fiber perform better than CAT6 in chemical plants?',
        answer: 'Optical fiber transmits light through glass cores instead of electricity through copper. It is 100% immune to motor electromagnetic noise (EMI), completely spark-free (safe in explosive solvent atmospheres), and cannot conduct lightning surges.'
      },
      {
        question: 'How do you protect server racks from corrosive chemical vapors?',
        answer: 'We deploy IP55/IP65 sealed industrial cabinets equipped with closed-loop air conditioners or chemical filtration units that prevent ambient acid fumes from contacting sensitive server motherboards.'
      }
    ]
  },
  {
    slug: 'textile',
    name: 'Textiles, Yarn & Garments',
    heroTitle: 'Lint-Proof IT Infrastructure & Shop-Floor LAN for Textile Plants',
    tagline: 'High-Density Wi-Fi, Anti-Static Cabling & Long-Range Perimeter Security for Mills',
    icon: 'Layers',
    overview: 'From massive synthetic yarn spinning campuses in Silvassa (Piparia, Masat) to weaving and packaging mills in Umargam and Vapi, textile facilities feature high suspended lint, sprawling multi-acre sheds, and high-temperature loom floors that choke standard office hardware.',
    criticalChallenges: [
      {
        title: 'Airborne Textile Lint & Fiber Clogging',
        description: 'Microscopic cotton and synthetic lint fibers enter desktop PC fans, power supplies, and network switches, creating thermal heat blankets that cause premature equipment failure.'
      },
      {
        title: 'Sprawling Shed Connectivity (100m+ Distances)',
        description: 'Spinning and texturizing sheds often span hundreds of meters, far exceeding the 100-meter physical transmission limit of standard copper networking cables.'
      },
      {
        title: 'Static Electricity & Looms Shop-Floor Noise',
        description: 'High-speed synthetic yarn winding generates significant electrostatic discharge (ESD) that can damage sensitive network interface cards and drop sensor links.'
      }
    ],
    tailoredSolutions: [
      {
        title: 'Filtered Positive-Pressure Server Enclosures',
        description: 'Industrial server cabinets with washable high-density micron filters and exhaust fans that prevent airborne textile lint from settling on server heatsinks.',
        specs: ['Dual-Fan Micron Air Filtration', 'Anti-Static Grounding Busbars', 'Dustproof Rack Gland Plates', 'Automated Thermal Alarm Sensors']
      },
      {
        title: 'Armored Fiber Backbone Across Production Sheds',
        description: 'Single-mode fiber optic cable linking texturizing sheds, raw material stores, packing bays, and administrative offices with gigabit transmission speeds.',
        specs: ['12-Core Heavy Armored Single-Mode Fiber', 'OTDR Loss Testing Certification', 'Industrial Gigabit Switch Integration', 'Zero Distance Degradation']
      },
      {
        title: 'Long-Range Yard & Dispatch Dock CCTV',
        description: 'High-definition 4MP IP cameras and optical zoom PTZ cameras monitoring raw cotton bale yards, yarn dispatch docks, and vehicle weighbridges 24/7.',
        specs: ['High-Power Smart IR (100m+ Night Vision)', 'Dust-Proof Glass Coating', 'ANPR Vehicle License Plate Capture', 'Multi-Screen Security Gate Integration']
      }
    ],
    complianceAndAudits: [
      'ISO 9001 Quality Management IT Documentation',
      'Factory Inspectorate Safety Compliance',
      'ESD Static Discharge Protected Wiring',
      'Zero-Loss Loom Automation Connectivity'
    ],
    recommendedServices: [
      {
        title: 'Fiber Optic Campus Backbone',
        description: 'Interconnect sprawling textile sheds over multi-acre campuses.',
        slug: 'fiber-optic-networking'
      },
      {
        title: 'Industrial Wi-Fi 6 Networks',
        description: 'Warehouse-wide handheld barcode scanner connectivity for yarn bobbin tracking.',
        slug: 'wifi-wireless-solutions'
      },
      {
        title: 'Textile Plant IT AMC Support',
        description: 'Scheduled monthly lint blowout, fan servicing, and 6-8 hr emergency support.',
        slug: 'amc-it-support'
      }
    ],
    faqs: [
      {
        question: 'How do you prevent textile lint from burning out production floor computers?',
        answer: 'We supply industrial fanless PCs with sealed aluminum heatsinks for the shop floor, and install dust-filtered positive-pressure enclosures for admin workstations and network racks with scheduled monthly cleaning.'
      },
      {
        question: 'Can you cover our entire 5-acre textile mill with wireless barcode scanning?',
        answer: 'Yes! We install enterprise industrial Wi-Fi access points with high-gain directional antennas, providing seamless roaming so forklift operators scan yarn bobbins without dropping connection.'
      }
    ]
  },
  {
    slug: 'packaging',
    name: 'Paper, Corrugated Boxes & Packaging',
    heroTitle: 'High-Density Barcode Networks & CCTV for Packaging Plants',
    tagline: 'Paper Dust Resistant IT Systems, Warehouse Wi-Fi & Dispatch Gate Surveillance',
    icon: 'Package',
    overview: 'Paper mills, corrugated box factories, and flexible packaging converters across Vapi GIDC Phase 3, Bhilad, and Daman operate high-speed printing, corrugating, and converting machinery. Fast dispatch cycles require dependable barcode scanner Wi-Fi, weighbridge cameras, and rugged shop-floor LAN.',
    criticalChallenges: [
      {
        title: 'Abrasive Paper Dust & Slitter Debris',
        description: 'Paper cutting and slitting machines generate fine, abrasive cellulose dust that infiltrates printer mechanisms, computer cooling fans, and camera lenses.'
      },
      {
        title: 'High-Turnover Fast Dispatch Docks',
        description: 'Packaging plants ship dozens of truckloads daily. Any delay in barcode printing, ERP invoicing, or truck weighbridge logging creates immediate logistics bottlenecks.'
      },
      {
        title: 'Multi-Building Paper Reel Storage Warehouses',
        description: 'Dense stacks of paper reels create massive RF signal absorption, causing dead zones for handheld barcode scanners and inventory tablets.'
      }
    ],
    tailoredSolutions: [
      {
        title: 'Warehouse RF-Engineered Industrial Wi-Fi 6',
        description: 'Access points positioned strategically to penetrate dense paper roll stacks, ensuring zero disconnects for forklift barcode scanners during inventory movement.',
        specs: ['Wi-Fi 6 (802.11ax) High Client Capacity', 'Seamless L2/L3 Fast Roaming (<30ms)', 'Industrial IP55 Ceiling & Column Mounts', 'Central Cloud Access Point Controller']
      },
      {
        title: 'Weighbridge & Gate CCTV with License Plate Logging',
        description: 'Synchronized IP camera systems capturing truck license plates, driver faces, and tare/gross weight receipts to prevent dispatch pilferage.',
        specs: ['ANPR Automatic License Plate Recognition', 'WDR Glare Reduction for Headlights', 'Weighbridge Software Snapshot Sync', 'High-Capacity Multi-Month NVR Storage']
      },
      {
        title: 'Heavy-Duty Corrugation Plant LAN Cabling',
        description: 'Shielded CAT6 cabling routed in rigid steel conduit over high-temperature corrugator lines to ensure continuous data transmission to plant ERP.',
        specs: ['High-Temp Resistant Cabling', 'Rigid Galvanized Steel Conduit', 'Fluke Tested for 1 Gbps Reliability', 'Color-Coded Patch Panels']
      }
    ],
    complianceAndAudits: [
      'ISO 9001 & FSC Chain-of-Custody IT Logging',
      'Logistics & Dispatch Audit Verification',
      'Warehouse Safety & Loss Prevention Standards',
      'Zero-Downtime Dispatch Invoicing Support'
    ],
    recommendedServices: [
      {
        title: 'Warehouse Industrial Wi-Fi Networks',
        description: 'High-density wireless coverage for barcode scanners and logistics tablets.',
        slug: 'wifi-wireless-solutions'
      },
      {
        title: 'Gate & Yard CCTV Systems',
        description: 'ANPR vehicle tracking and dispatch dock surveillance cameras.',
        slug: 'cctv-surveillance'
      },
      {
        title: 'Industrial IT AMC Maintenance',
        description: 'Preventive paper dust cleaning, barcode printer repair, and 6-8 hr SLA.',
        slug: 'amc-it-support'
      }
    ],
    faqs: [
      {
        question: 'How do you solve Wi-Fi dead zones caused by stacked paper roll piles?',
        answer: 'Paper rolls have high moisture content that absorbs 2.4GHz and 5GHz radio signals. We conduct on-site predictive RF heatmapping and place directional high-gain Wi-Fi 6 access points directly down aisle corridors to eliminate dead spots.'
      },
      {
        question: 'Can your CCTV system take a photo of every truck weighing at our weighbridge?',
        answer: 'Yes! We configure cameras at driver eye level and above the truck bed that trigger an automatic snapshot whenever the gross or tare weight is logged in your weighbridge software.'
      }
    ]
  },
  {
    slug: 'manufacturing',
    name: 'General Manufacturing & Engineering',
    heroTitle: 'Turnkey IT Infrastructure & Surveillance for Manufacturing Plants',
    tagline: 'CNC Machine Networking, Centralized Tally/ERP Servers & SLA-Backed Plant IT AMC',
    icon: 'Cpu',
    overview: 'From metal fabrication, plastic molding, and toolrooms to industrial equipment manufacturing in Vapi, Silvassa, and Gundlav GIDC Valsad, modern engineering plants rely on interconnected CAD workstations, CNC machine DNC networks, ERP servers, and security cameras.',
    criticalChallenges: [
      {
        title: 'CNC Machine Floor Electrical Noise',
        description: 'Heavy servo motors, EDM machines, and welding equipment induce electrical noise on network lines, causing corrupted program uploads to CNC controllers.'
      },
      {
        title: 'Central ERP & Design File Protection',
        description: 'Unprotected central servers risk catastrophic data loss from power surges, hard drive crashes, or ransomware, stopping invoicing and production.'
      },
      {
        title: 'Lack of Dedicated In-House IT Staff',
        description: 'Small and medium manufacturing plants often lack full-time IT administrators, leading to neglected backups, outdated antivirus, and slow breakdown response.'
      }
    ],
    tailoredSolutions: [
      {
        title: 'Turnkey Shop-Floor CAT6A & Fiber Architecture',
        description: 'Noise-shielded data drops connected directly to CNC machine controllers, robotic cells, and operator terminals for seamless CAD/CAM program transfer.',
        specs: ['Shielded F/UTP CAT6A Copper Drops', 'VFD Noise Immunity', 'Dressed Wall-Mount Server Racks', 'Color-Coded Patch Panel Labeling']
      },
      {
        title: 'Enterprise On-Premise ERP & Tally Servers',
        description: 'High-performance rackmount servers configured with RAID-10 storage, dual redundant power supplies, and automated daily backup routines.',
        specs: ['Dell PowerEdge / HPE ProLiant Servers', 'Hardware RAID-10 with Standby Spares', 'Automated Daily On-Site & Cloud Backup', 'Secure Multi-Branch Remote VPN']
      },
      {
        title: 'Comprehensive SLA-Backed IT AMC Contract',
        description: 'NextGen IT Solution acts as your complete outsourced IT department, handling workstation maintenance, server monitoring, and emergency breakdown calls with 6-8 hr SLA.',
        specs: ['Monthly Scheduled Preventive Maintenance', 'Unlimited Remote Desktop Support', 'Guaranteed 6 to 8 Hour Onsite Arrival', 'Standby Loaner Hardware Inventory']
      }
    ],
    complianceAndAudits: [
      'ISO 9001 & ISO 27001 Network Security Compliance',
      'Automated Disaster Recovery Backup Auditing',
      'Standardized TIA/EIA Structured Cabling',
      'Legal GST Invoice Documentation'
    ],
    recommendedServices: [
      {
        title: 'Structured LAN Cabling & Racks',
        description: 'High-performance copper and fiber cabling for shop-floor machines and offices.',
        slug: 'networking-lan'
      },
      {
        title: 'Servers & Centralized Storage',
        description: 'Reliable RAID servers for Tally Prime, SAP, and engineering CAD designs.',
        slug: 'server-storage-solutions'
      },
      {
        title: 'Annual IT Maintenance Contract (AMC)',
        description: 'Complete outsourced plant IT management with 6-8 hr onsite response SLA.',
        slug: 'amc-it-support'
      }
    ],
    faqs: [
      {
        question: 'Why should our manufacturing plant choose an IT AMC instead of hiring an in-house engineer?',
        answer: 'An in-house engineer involves monthly salary, PF, and leaves, and often lacks multi-domain expertise across fiber, firewalls, and server RAID. With NextGen IT Solution, you get a full team of specialists, standby loaner hardware, and 6-8 hr onsite commitment at a fraction of the cost.'
      },
      {
        question: 'Can you connect our CNC machines to the main engineering CAD server?',
        answer: 'Yes! We deploy industrial shielded cabling or serial-to-Ethernet converters to connect CNC machines directly to your CAD/CAM server for instant G-code program loading.'
      }
    ]
  }
];
