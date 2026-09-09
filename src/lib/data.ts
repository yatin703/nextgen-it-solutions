import { ServiceItem, ProductItem, Lead, ThemeConfig, VisitingCardConfig } from './types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'networking-lan',
    title: 'Structured LAN & CAT6/CAT6A Cabling',
    category: 'Networking',
    shortDesc: 'End-to-end structured cabling, CAT6/CAT6A data network setup, server rack dressing, patch panels, and fluke cable testing for factories and corporate offices.',
    iconName: 'Network',
    overview: 'High-speed, reliable structured cabling forms the backbone of your factory and office operations. NextGen IT Solution delivers enterprise-grade networking solutions compliant with TIA/EIA standards, complete with cable certification, color-coded patch panels, and clean rack organization.',
    features: [
      'CAT6 and CAT6A high-performance copper cabling',
      'Server rack installation, dressing, and cable channel management',
      'Patch panel termination, labeling, and port mapping',
      'Fluke cable certification and network continuity testing',
      'VLAN segmentation for office, accounts, and factory floor',
      'Managed Gigabit and 10G switch integration'
    ],
    components: [
      'D-Link / Schneider CAT6/6A Cable Bundles',
      '24-Port & 48-Port Cat6 Patch Panels',
      'Netrack / Valrack 9U to 42U Server Racks',
      'L2/L3 Managed Network Switches'
    ],
    process: [
      'Physical site survey and cable path mapping',
      'BOQ preparation and material specification',
      'Structured cable laying and conduit routing',
      'Punching, testing, and rack dressing',
      'Final network throughput audit and handover'
    ],
    industries: ['Manufacturing & GIDC Units', 'Pharmaceutical Plants', 'Corporate Offices', 'Warehousing & Logistics'],
    faqs: [
      { question: 'What is the difference between CAT6 and CAT6A cabling?', answer: 'CAT6 supports speeds up to 1 Gbps at 100 meters and 10 Gbps up to 55 meters. CAT6A supports 10 Gbps at full 100-meter distances and provides superior shielding against industrial electromagnetic interference (EMI).' },
      { question: 'Do you provide cable testing reports for ISO audits?', answer: 'Yes, we provide certified testing and port-mapping documentation suitable for company audits and IT compliance.' }
    ]
  },
  {
    id: 'srv-2',
    slug: 'cctv-surveillance',
    title: 'CCTV & Video Surveillance Systems',
    category: 'Security',
    shortDesc: 'High-definition IP cameras, AI human/vehicle detection, NVR storage, perimeter security, and remote mobile monitoring for industrial plants and premises.',
    iconName: 'Camera',
    overview: 'Protect your enterprise with intelligent video surveillance. We design and install high-definition IP camera ecosystems tailored for factory perimeters, production lines, dispatch docks, server rooms, and corporate premises with 24/7 recording and remote smartphone access.',
    features: [
      'High-resolution 2MP, 4MP, 8MP (4K) IP Bullet & Dome cameras',
      'AI Smart Analytics: Line crossing, perimeter intrusion, vehicle number plate capture',
      'Long-distance optical zoom PTZ cameras for yard and gate surveillance',
      'High-capacity NVRs with RAID storage and automated backup',
      'PoE switch infrastructure with surge and lightning protection',
      'Secure live mobile viewing & remote multi-location playback'
    ],
    components: [
      'Hikvision / CP PLUS / Dahua / Honeywell IP Cameras',
      '16 / 32 / 64 Channel Network Video Recorders (NVR)',
      'Surveillance-grade Western Digital Purple / Seagate SkyHawk HDDs',
      'Industrial Gigabit PoE Switches'
    ],
    process: [
      'Perimeter security risk analysis and blind-spot survey',
      'Camera positioning, lens focal length, and storage calculation',
      'Outdoor/Indoor conduit cabling and weatherproof housing',
      'NVR configuration, AI rules setup, and cloud/mobile access',
      'Staff training and preventive maintenance contract'
    ],
    industries: ['Chemical & Industrial Plants', 'Textile & Paper Mills', 'Corporate Headquarters', 'Gated Societies & Warehouses'],
    faqs: [
      { question: 'How long will my CCTV footage be recorded and stored?', answer: 'Storage duration depends on camera count and HDD capacity. We calculate NVR storage based on your exact requirement—typically 30, 60, or 90 days retention using H.265+ smart compression.' },
      { question: 'Can I view live factory cameras from my home or smartphone while traveling?', answer: 'Yes, we configure secure P2P and DDNS cloud remote access with role-based permissions on mobile apps (iOS/Android) and desktop client software.' }
    ]
  },
  {
    id: 'srv-3',
    slug: 'fiber-optic-networking',
    title: 'Fiber Optic Networking & Splicing',
    category: 'Networking',
    shortDesc: 'Single-mode and multi-mode industrial optical fiber backbones, fusion splicing, OTDR testing, and campus-wide high-speed connectivity.',
    iconName: 'Zap',
    overview: 'For multi-building industrial campuses, manufacturing units, or distances exceeding 100 meters, fiber optic cabling is the premier solution. We deliver single-mode and multi-mode fiber laying, armored underground cabling, laser precision fusion splicing, and OTDR loss certification.',
    features: [
      'Single-Mode (OS2) and Multi-Mode (OM3/OM4) fiber cabling',
      'Armored fiber for harsh industrial and underground trenching',
      'Core alignment fusion splicing with minimal signal attenuation',
      'Fiber Optic Patch Panels (LIU) and SC/LC fiber pigtails',
      'Optical Time-Domain Reflectometer (OTDR) testing & reporting',
      'SFP/SFP+ transceiver modules and media converter setups'
    ],
    components: [
      '6-Core to 48-Core Armored Fiber Cables',
      'Rackmount LIU (Light Interface Unit) Enclosures',
      'Cisco / D-Link 10G SFP+ Optical Transceivers',
      'Fujikura Fusion Splicers & OTDR Analyzers'
    ],
    process: [
      'Campus distance calculation and route survey',
      'Conduit trenching and tension-controlled fiber pull',
      'Precision stripping, cleaving, and fusion splicing',
      'OTDR insertion loss testing and power meter certification',
      'Switch link aggregation and failover redundancy test'
    ],
    industries: ['Multi-block Industrial Facilities', 'Chemical Complexes', 'Warehousing Parks', 'Institutional Campuses'],
    faqs: [
      { question: 'Why choose fiber optics over copper cabling for our plant?', answer: 'Copper cables are restricted to 90-100 meters and suffer from electromagnetic noise generated by heavy industrial machinery. Fiber spans kilometers without interference, providing multi-gigabit speeds.' }
    ]
  },
  {
    id: 'srv-4',
    slug: 'firewall-network-security',
    title: 'Firewall & Network Security Solutions',
    category: 'Security',
    shortDesc: 'Next-Generation Firewalls (NGFW), Sophos & Fortinet appliances, site-to-site IPsec VPNs, endpoint protection, and gateway intrusion prevention.',
    iconName: 'ShieldCheck',
    overview: 'Safeguard your corporate data, ERP servers, and accounts systems against ransomware, phishing, and unauthorized intrusion. NextGen IT Solution deploys industry-leading Next-Generation Firewalls with content filtering, bandwidth shaping, and encrypted remote access.',
    features: [
      'Next-Gen Firewall (NGFW) deployment and policy hardening',
      'Sophos / Fortinet / SonicWall UTM appliances',
      'Site-to-Site IPsec VPN for multi-branch interconnections',
      'SSL VPN for secure remote work and ERP access',
      'Application control and web category filtering (block unwanted sites)',
      'Dual WAN link failover and automated load balancing'
    ],
    components: [
      'Sophos XGS Series Appliances',
      'Fortinet FortiGate Firewalls',
      'Centralized Endpoint Antivirus & EDR',
      'Hardware VPN Gateways'
    ],
    process: [
      'Vulnerability audit of current perimeter and open ports',
      'Firewall rule definition (Accounts, Management, Staff isolation)',
      'Gateway deployment with minimal network downtime',
      'VPN client provisioning and multi-factor authentication setup',
      'Continuous security log monitoring and firmware updates'
    ],
    industries: ['Banking & Finance', 'Pharma Research Labs', 'Manufacturing Head Offices', 'Export-Import Companies'],
    faqs: [
      { question: 'Can the firewall combine two internet connections (e.g. Jio + Airtel)?', answer: 'Yes, we configure multi-WAN load balancing and automated failover. If your primary ISP goes down, the firewall switches traffic to the backup ISP within seconds.' }
    ]
  },
  {
    id: 'srv-5',
    slug: 'server-storage-solutions',
    title: 'Server & Storage Solutions',
    category: 'Infrastructure',
    shortDesc: 'Windows & Linux server deployment, Network Attached Storage (NAS), SAN, RAID storage arrays, virtualization, and automated backup regimes.',
    iconName: 'Server',
    overview: 'From hosting mission-critical ERPs (Tally, SAP, customized ERP) to centralizing massive engineering drawings and corporate records, we supply, configure, and maintain high-availability server and storage architectures.',
    features: [
      'Dell PowerEdge & HPE ProLiant Rack and Tower Servers',
      'Synology & QNAP enterprise NAS storage deployment',
      'Hardware RAID (RAID 1, 5, 6, 10) for continuous data redundancy',
      'VMware ESXi and Microsoft Hyper-V virtualization',
      'Automated 3-2-1 backup strategy (Local NAS + Offsite Cloud)',
      'Active Directory Domain Services (AD DS) and centralized user rights'
    ],
    components: [
      'Dell PowerEdge Rack Servers (Xeon Processors, ECC DDR5 RAM)',
      'Synology 4-Bay to 16-Bay Rackmount NAS Systems',
      'Enterprise SAS and NVMe Solid State Drives',
      'Veeam / Acronis Automated Backup Software'
    ],
    process: [
      'Compute, memory, and IOPS requirement assessment',
      'Server configuration, RAID array setup, and OS hardening',
      'ERP migration, Active Directory configuration, and user permissions',
      'Automated scheduled backup verification and DR test'
    ],
    industries: ['Manufacturing ERP Units', 'Pharma Documentation Hubs', 'Finance & Accounting Firms', 'Architectural & Engineering Design Offices'],
    faqs: [
      { question: 'Can we run Tally ERP or Prime in multi-user mode seamlessly across offices?', answer: 'Yes, we deploy Windows Server with Remote Desktop Services (RDS) or dedicated virtualization so all branches can access Tally securely and with low latency.' }
    ]
  },
  {
    id: 'srv-6',
    slug: 'amc-it-support',
    title: 'Comprehensive & Non-Comprehensive IT AMC',
    category: 'Support',
    shortDesc: 'Annual Maintenance Contracts (AMC) with guaranteed response SLAs, scheduled preventive maintenance, onsite desktop & network support for industries.',
    iconName: 'Clock',
    overview: 'Downtime costs money. Our Annual Maintenance Contracts ensure your computers, printers, network switches, CCTV systems, and servers operate continuously at peak performance with guaranteed response times in Vapi, Silvassa, and Daman industrial corridors.',
    features: [
      'Guaranteed 6 to 8 hour onsite emergency response SLA',
      'Monthly scheduled preventive maintenance and dust cleaning',
      'Full hardware diagnostic and component replacement assistance',
      'Operating system, antivirus, and software patch management',
      'Dedicated phone, remote desktop, and onsite engineer support',
      'Comprehensive (parts included) and Non-Comprehensive options'
    ],
    components: [
      'Service Level Agreement (SLA) contract',
      'Quarterly IT Health & Performance Reports',
      'Standby hardware support during repairs',
      'Asset tracking and serial number inventory log'
    ],
    process: [
      'Free initial site inspection and IT equipment audit',
      'Customized AMC quotation based on asset count and SLA tier',
      'Contract signing and baseline health checkup',
      'Monthly routine service visits and on-demand ticket resolution'
    ],
    industries: ['All Manufacturing Units', 'Packaging & Paper Mills', 'Offices & Commercial Complexes', 'Logistics Warehouses'],
    faqs: [
      { question: 'What is the response time for a server or network failure?', answer: 'For critical enterprise clients in Vapi/Silvassa/Daman, our SLA provides emergency onsite engineer dispatch within 6 to 8 hours.' }
    ]
  },
  {
    id: 'srv-7',
    slug: 'computer-hardware-workstations',
    title: 'Computer & Hardware Solutions',
    category: 'Hardware',
    shortDesc: 'Commercial desktops, heavy-duty engineering CAD workstations, corporate laptops, mini PCs, monitors, and licensed accessories.',
    iconName: 'Laptop',
    overview: 'NextGen IT Solution supplies genuine, manufacturer-backed business desktops, laptops, and specialized CAD/3D workstations from premier global brands like Dell, HP, Lenovo, and Asus at competitive B2B rates.',
    features: [
      'Business Desktop Series (Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre)',
      'High-performance CAD/CAM workstations with NVIDIA Quadro GPUs',
      'Corporate business laptops with long battery life and durability',
      'Space-saving industrial Mini PCs for plant dispatch and QA desks',
      'Commercial monitors, wireless keyboards, mice, and docking stations',
      'RAM, NVMe SSD, and component upgrades for existing systems'
    ],
    components: [
      'Intel Core i3 / i5 / i7 / i9 & AMD Ryzen Workstations',
      'NVIDIA RTX Professional Workstation Graphics',
      'Kingston / Crucial Enterprise DDR4/DDR5 RAM',
      'High-speed PCIe Gen4 NVMe Solid State Drives'
    ],
    process: [
      'User workload evaluation (Accounts vs Engineering vs Admin)',
      'B2B competitive pricing quotation with warranty terms',
      'Pre-delivery OS installation, software provisioning, and testing',
      'Onsite unboxing, desk setup, and network domain join'
    ],
    industries: ['Design & Engineering Units', 'Factory Quality Assurance (QA)', 'Corporate Finance & Management', 'Educational & Research Labs'],
    faqs: [
      { question: 'Do you offer bulk enterprise pricing for new office setups?', answer: 'Yes! We provide special commercial project volume pricing for 5 to 50+ machines.' }
    ]
  },
  {
    id: 'srv-8',
    slug: 'wifi-wireless-solutions',
    title: 'Enterprise Wi-Fi & Long Range Wireless',
    category: 'Networking',
    shortDesc: 'High-density indoor/outdoor Wi-Fi, mesh access points, Point-to-Point (P2P) wireless bridges between distant factory buildings.',
    iconName: 'Wifi',
    overview: 'Eliminate dead zones and dropouts across your entire factory floor and warehouse. We deploy cloud-managed enterprise Wi-Fi 6 access points with seamless roaming and long-range Point-to-Point wireless links connecting distant units without trenching cables.',
    features: [
      'High-density Wi-Fi 6 (802.11ax) indoor and outdoor access points',
      'Seamless zero-handoff roaming for barcode scanners and tablets',
      'Point-to-Point (P2P) wireless bridge links spanning 1 km to 15 km',
      'Guest Wi-Fi captive portals with OTP verification and speed limits',
      'Isolated staff and IoT device wireless networks (VLAN isolation)',
      'Centralized cloud management dashboard (Ubiquiti UniFi, Aruba)'
    ],
    components: [
      'Ubiquiti UniFi / TP-Link Omada / Aruba Access Points',
      'Ubiquiti AirMax / Mikrotik Long-Range Wireless Dishes',
      'PoE Injectors and Outdoor Weatherproof Mounts'
    ],
    process: [
      'RF heat-map site survey and attenuation assessment',
      'Access point placement and frequency channel planning',
      'Outdoor line-of-sight alignment for P2P antennas',
      'SSID creation, bandwidth quotas, and security hardening'
    ],
    industries: ['Logistics Hubs & Warehouses', 'Sprawling Manufacturing Campuses', 'Corporate Offices', 'Hotels & Institutions'],
    faqs: [
      { question: 'Can you connect two factory buildings 2 kilometers apart without digging?', answer: 'Yes! We install outdoor Point-to-Point (P2P) wireless dishes with clear line-of-sight that transfer full gigabit data speeds across multiple kilometers.' }
    ]
  },
  {
    id: 'srv-9',
    slug: 'ups-power-backup',
    title: 'Industrial UPS & Power Backup Solutions',
    category: 'Infrastructure',
    shortDesc: 'Online double-conversion UPS systems, server room power backup, battery banks, and voltage surge protection for zero downtime.',
    iconName: 'BatteryCharging',
    overview: 'Power fluctuations, voltage sags, and sudden generator cutovers in industrial GIDC areas can destroy delicate IT infrastructure and corrupt ERP databases. We supply and install online double-conversion UPS systems designed for continuous operation.',
    features: [
      '1 kVA to 40 kVA Online Double Conversion UPS Systems',
      'Zero transfer time (0 ms) for servers, NVRs, and telecom gear',
      'Sealed Maintenance Free (SMF) and Tubular battery bank integration',
      'SNMP management card for remote email alerts and graceful shutdown',
      'Industrial electrical surge protection and isolation transformers',
      'Periodic battery impedance health checks and preventive servicing'
    ],
    components: [
      'APC by Schneider Electric / Eaton / Numeric Online UPS',
      'Exide / Amaron Quanta High-Discharge Batteries',
      'Heavy-duty rack enclosures and bypass panels'
    ],
    process: [
      'Total connected electrical load and backup runtime calculation',
      'UPS capacity selection with 30% future expansion buffer',
      'Electrical installation, MCB isolation, and earthing check',
      'Simulated mains blackout and generator transition testing'
    ],
    industries: ['Server Rooms & Data Centers', 'Continuous Process Manufacturing', 'CCTV Control Rooms', 'Diagnostic & Quality Control Labs'],
    faqs: [
      { question: 'What is the difference between an Offline UPS and an Online UPS?', answer: 'An offline UPS has a transfer delay of 5-10ms which can cause servers and sensitive networking switches to reboot. An Online UPS continuously converts AC to DC to AC with 0ms transfer time and clean sine wave output.' }
    ]
  },
  {
    id: 'srv-10',
    slug: 'cloud-backup-disaster-recovery',
    title: 'Cloud Backup & Disaster Recovery',
    category: 'Cloud',
    shortDesc: 'Automated offsite cloud backups, ransomware-proof immutable storage, hybrid cloud migration, and disaster recovery planning.',
    iconName: 'Cloud',
    overview: 'Ensure your business survives hardware failure, accidental deletion, fire, or ransomware attacks. NextGen IT Solution designs automated hybrid cloud backup strategies ensuring rapid Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).',
    features: [
      'Automated daily encrypted offsite cloud backup of Tally & ERP data',
      'Immutable backup storage that cannot be modified or encrypted by ransomware',
      'Microsoft 365 and Google Workspace email backup',
      'Bare-metal image backup for rapid full-server restoration',
      'Hybrid backup architecture: Fast local restore + disaster cloud copy'
    ],
    components: [
      'Veeam Cloud Connect / Acronis Cyber Protect',
      'AWS S3 / Wasabi S3-Compatible Encrypted Cloud Repositories',
      'Local On-Premises Backup Repositories'
    ],
    process: [
      'Data classification and critical asset identification',
      'Backup schedule setup (Incremental hourly, synthetic full weekly)',
      'AES-256 bit client-side encryption configuration',
      'Quarterly mock drill restore testing to confirm data integrity'
    ],
    industries: ['Pharma & Chemical Exporters', 'Manufacturing Corporate Offices', 'Legal & Financial Firms', 'Logistics Companies'],
    faqs: [
      { question: 'Is our data secure during cloud transfer and storage?', answer: 'Yes, all data is encrypted on your local premises using bank-grade AES-256 encryption before it leaves your network, and remains encrypted at rest in the cloud repository.' }
    ]
  },
  {
    id: 'srv-11',
    slug: 'printers-peripherals',
    title: 'Printers, Scanners & Peripheral Solutions',
    category: 'Hardware',
    shortDesc: 'Heavy-duty industrial barcode printers, barcode scanners, multi-function laser printers, high-speed document scanners, and original toner cartridges.',
    iconName: 'Printer',
    overview: 'Keep your dispatch, billing, and document archiving running smoothly. We supply and service industrial barcode printers, handheld 1D/2D wireless barcode scanners, and high-speed multi-function network laser printers.',
    features: [
      'Thermal Transfer Industrial Barcode Printers (Zebra, TSC, TVS)',
      'Wireless and handheld 1D/2D QR code and barcode scanners',
      'Heavy-duty network multi-function laser printers (HP, Canon, Brother)',
      'Automatic Document Feeder (ADF) high-speed duplex scanners',
      'Genuine OEM toner cartridges, thermal ribbons, and labels',
      'Preventive roller cleaning, fuser maintenance, and repair support'
    ],
    components: [
      'Zebra / TSC Industrial Label Printers',
      'Honeywell / Zebra 2D Barcode Scanners',
      'HP LaserJet Enterprise Network MFP Units'
    ],
    process: [
      'Duty cycle and monthly page volume analysis',
      'Hardware recommendation with lowest total cost of ownership (TCO)',
      'Network driver deployment across all office workstations',
      'Consumable supply agreement and regular servicing'
    ],
    industries: ['Warehouse Dispatch Docks', 'Packaging Plants', 'Retail Distribution', 'Corporate Billing Departments'],
    faqs: [
      { question: 'Do you provide barcode printers compatible with SAP and ERP systems?', answer: 'Yes, our Zebra and TSC barcode printers support ZPL/EPL emulation and integrate seamlessly with SAP, Tally, and custom warehouse management systems.' }
    ]
  },
  {
    id: 'srv-12',
    slug: 'industrial-it-infrastructure-projects',
    title: 'Turnkey Industrial IT Infrastructure Projects',
    category: 'Infrastructure',
    shortDesc: 'Turnkey IT setup for new factories, plant expansions, greenfield projects, server room builds, and industrial automation networking.',
    iconName: 'Factory',
    overview: 'Setting up a new factory in Vapi GIDC, Silvassa, or Daman? We handle the complete IT setup from bare civil walls to a fully commissioned enterprise infrastructure: server room, structured cabling, CCTV, access control, Wi-Fi, firewalls, and workstation deployment.',
    features: [
      'End-to-end turnkey project execution with a single point of contact',
      'Server room construction: Precision cooling, raised flooring, fire suppression',
      'Industrial grade DIN-rail switches for shop floor machinery',
      'Access control and biometric attendance system integration',
      'Full Bill of Quantities (BOQ) preparation and technical compliance',
      'Project milestone management and strict on-time delivery'
    ],
    components: [
      'Complete IT Bill of Quantities (BOQ)',
      'Server Room Infrastructure & Environment Monitoring',
      'Biometric Time & Attendance Terminals (eSSL / ZKTeco)',
      'Factory-wide IP Network & Security Backbone'
    ],
    process: [
      'Blueprint and architectural layout review',
      'Complete BOQ submission with OEM specification compliance',
      'Phase-wise cabling, conduit installation, and server room fitment',
      'Comprehensive integration testing and user acceptance sign-off'
    ],
    industries: ['New Greenfield Industrial Projects', 'Factory Modernization & Expansions', 'Pharma Cleanroom IT Setups', 'Logistics Mega-Warehouses'],
    faqs: [
      { question: 'Can we submit our architectural drawing or BOQ for a quote?', answer: 'Absolutely. You can upload your BOQ or blueprint through our Request a Quote form, and our engineering team will provide a comprehensive competitive proposal within 24 hours.' }
    ]
  },
  {
    id: 'srv-13',
    slug: 'biometric-access-control',
    title: 'Biometric Attendance & Access Control',
    category: 'Security',
    shortDesc: 'Fingerprint, face recognition, RFID card access control systems, turnstile gates, and centralized multi-branch payroll integration.',
    iconName: 'Fingerprint',
    overview: 'Control and monitor authorized access across your industrial plant, warehouse docks, and corporate administrative blocks. We deliver enterprise-grade biometric fingerprint and contactless face recognition systems integrated seamlessly with your HRMS and payroll software.',
    features: [
      'High-speed AI facial recognition & biometric fingerprint terminals',
      'Electromagnetic door locks, drop bolts, and emergency exit push buttons',
      'RFID proximity card and multi-factor authentication readers',
      'Tripod turnstile and flap barrier gates for plant entry points',
      'Centralized multi-location attendance sync with HRMS / ERP software',
      'Door tamper alarms, unauthorized entry logs, and visitor management'
    ],
    components: [
      'eSSL / ZKTeco / Matrix Comsec Biometric Terminals',
      'Heavy-Duty Electromagnetic Locks (600 lbs / 1200 lbs rating)',
      'Backup Power Supply Units with Battery Backup for Locks',
      'Automated Tripod Turnstiles & Swing Barriers'
    ],
    process: [
      'Door access requirement & high-security zone assessment',
      'Conduit cabling, power supply backup, and lock bracket mounting',
      'Biometric reader enrollment & admin privilege configuration',
      'Payroll & attendance software integration and HR team training'
    ],
    industries: ['Manufacturing & Packaging Units', 'Pharmaceutical Cleanrooms', 'Corporate Offices', 'Warehouses & Logistics Centers'],
    faqs: [
      { question: 'Can the attendance software connect multiple factory locations into one central HR system?', answer: 'Yes, our cloud and WAN-enabled biometric terminals push real-time punch data from all branches and factories into a single centralized database for payroll calculation.' },
      { question: 'What happens to the access control doors if factory power fails?', answer: 'All magnetic locks and biometric readers are connected to dedicated battery-backed power supplies ensuring continuous security, with fail-safe automatic release triggers for emergency fire compliance.' }
    ]
  },
  {
    id: 'srv-14',
    slug: 'epabx-voip-intercom',
    title: 'EPABX, Intercom & Industrial VoIP Systems',
    category: 'Networking',
    shortDesc: 'Digital & IP-PBX systems, VoIP inter-office intercoms, rugged industrial explosion-proof plant phones, and SIP trunking integration.',
    iconName: 'PhoneCall',
    overview: 'Ensure crystal-clear voice communication across sprawling factory floors, security gates, admin departments, and remote branch offices. We deploy scalable IP-PBX and VoIP solutions eliminating internal calling costs and providing rugged shop-floor telecommunication.',
    features: [
      'IP-PBX & Hybrid EPABX systems for office and plant telephony',
      'Rugged, weatherproof, and noise-cancelling industrial shop-floor phones',
      'Zero-cost intercom calling between distant branch units and factories',
      'Direct Inward Dialing (DID), auto-attendant IVR, and call recording',
      'SIP trunking and PRI line gateway integrations',
      'Integration with security guard cabins and entrance gates'
    ],
    components: [
      'Matrix Comsec / NEC / Panasonic IP-PBX Servers',
      'Grandstream / Fanvil HD IP Phones & Operator Consoles',
      'Weatherproof Heavy-Duty Outdoor Intercom Terminals',
      'Voice over IP (VoIP) FXS / FXO / PRI Gateways'
    ],
    process: [
      'Extension node mapping and telephone line cabling layout',
      'IP-PBX server installation and dial plan configuration',
      'Desk handset deployment, speed dials, and IVR menu setup',
      'Testing call handover, voice clarity, and multi-line trunking'
    ],
    industries: ['Multi-department Industrial Plants', 'Chemical & Hazardous Units', 'Corporate Head Offices', 'Hospitality & Commercial Hubs'],
    faqs: [
      { question: 'Can we place intercom extensions in noisy factory production areas?', answer: 'Yes, we supply rugged, high-decibel industrial telephone stations with noise-cancelling microphones and external acoustic flasher horns designed for heavy machinery environments.' }
    ]
  },
  {
    id: 'srv-15',
    slug: 'pa-sound-evacuation',
    title: 'Public Address (PA) & Plant Evacuation Systems',
    category: 'Security',
    shortDesc: 'Zone-based industrial public address systems, IP horn speakers, automated emergency evacuation announcements, and siren integration.',
    iconName: 'Volume2',
    overview: 'Broadcast clear shift announcements, paging messages, background audio, and emergency fire evacuation alerts across large industrial campuses. We install multi-zone IP and analog public address architectures engineered for high-noise manufacturing floors.',
    features: [
      'Multi-zone audio paging (selective broadcast to warehouse, plant, or office)',
      'High-decibel weatherproof horn speakers for outdoor yards and production bays',
      'Ceiling and wall-mount acoustic speakers for corporate offices and corridors',
      'Automated integration with fire alarm systems for emergency evacuation',
      'Centralized digital amplifier consoles with desktop gooseneck paging mics',
      'Scheduled bell and shift-change chime automation'
    ],
    components: [
      'Ahuja / Bosch / Honeywell Public Address Amplifiers',
      'High-Power Reflex Horn Speakers (30W / 50W / 100W)',
      'Multi-Zone Paging Selectors & Gooseneck Microphones',
      'Automated Pre-Recorded Evacuation Tone Generators'
    ],
    process: [
      'Acoustic noise level audit across factory bays and open yards',
      'Speaker layout and amplifier wattage load calculation',
      'Shielded audio cable routing in GI/PVC conduits',
      'Sound zoning, fire alarm interface connection, and audibility test'
    ],
    industries: ['Steel, Plastic & Chemical Factories', 'Textile Mills', 'Large Storage Warehouses', 'Educational Campuses'],
    faqs: [
      { question: 'Can the PA system automatically trigger an evacuation alarm during a fire?', answer: 'Yes, our PA systems interface directly with the factory fire alarm panel to instantly override all active music or paging and broadcast pre-recorded emergency evacuation directives.' }
    ]
  },
  {
    id: 'srv-geo-1',
    slug: 'cctv-installation-vapi',
    title: 'Industrial CCTV Camera Installation in Vapi GIDC',
    category: 'Security',
    shortDesc: 'Turnkey IP surveillance, 4K night vision cameras, explosion-proof housings, and plant perimeter monitoring across Vapi GIDC Phases 1 to 4 and Morai.',
    iconName: 'Camera',
    overview: 'Vapi GIDC manufacturing units, chemical plants, and pharma formulation facilities demand surveillance cameras that endure chemical fumes, moisture, and high operational dust. NextGen IT Solution delivers end-to-end IP CCTV design, NVR storage planning (30-90 days), and cleanroom-compliant installations with rapid 6 to 8 hour onsite SLA support.',
    features: [
      'High-definition 4MP, 6MP, and 4K IP Bullet & Dome cameras',
      'Corrosion-proof 304/316 stainless steel housings for chemical zones',
      'AI-powered intrusion detection, line crossing, and automatic ANPR vehicle logging',
      'High-endurance surveillance HDDs with RAID-5 storage redundancy',
      'Centralized multi-channel NVR with secure remote mobile and multi-screen monitoring',
      'Rapid 6 to 8 hour onsite engineering response for breakdowns in Vapi GIDC'
    ],
    components: [
      'Hikvision / CP PLUS / Dahua / Honeywell IP Surveillance Cameras',
      '16 / 32 / 64 Channel Network Video Recorders (NVR)',
      'Western Digital Purple / Seagate SkyHawk Surveillance HDDs',
      'Industrial Gigabit PoE Switches & Surge Protectors'
    ],
    process: [
      'Complimentary physical plant security assessment & blind-spot survey',
      'Optical coverage planning, lens focal length, and storage calculation',
      'Industrial GI/PVC conduit routing and weatherproof mounting',
      'NVR network configuration, AI alert parameters, and mobile sync',
      'Handover with certified layout documentation and user training'
    ],
    industries: ['Vapi GIDC Phase 1-4 Chemical Plants', 'Pharmaceutical Formulation & Cleanrooms', 'Packaging & Paper Units', 'Heavy Engineering & Warehousing'],
    faqs: [
      { question: 'How quickly can your technician attend to camera issues in Vapi GIDC?', answer: 'For active AMC clients and industrial installations in Vapi GIDC, we offer a dedicated 6 to 8 hour onsite engineer SLA response.' },
      { question: 'Can the cameras resist corrosion from acid fumes in chemical units?', answer: 'Yes, we supply specialized IP67 and IP68 rated stainless steel or powder-coated weatherproof housings engineered specifically to withstand corrosive chemical fumes and outdoor humidity.' }
    ]
  },
  {
    id: 'srv-geo-2',
    slug: 'cat6-cat6a-cabling-vapi',
    title: 'Industrial CAT6 / CAT6A Structured Cabling in Vapi',
    category: 'Networking',
    shortDesc: 'Heavy-duty copper network drops, server rack dressing, patch panel termination, and calibrated Fluke DSX-8000 certification for Vapi factories.',
    iconName: 'Network',
    overview: 'Reliable production, PLC machines, and ERP workflows in Vapi GIDC require robust structured cabling that rejects electromagnetic noise from heavy industrial drives. NextGen IT Solution delivers TIA/EIA compliant CAT6 and shielded CAT6A structured data networks, server rack dressing, and calibrated Fluke cable certification.',
    features: [
      'Shielded CAT6A (STP/FTP) data cabling immune to heavy motor and inverter EMI',
      'LSZH (Low Smoke Zero Halogen) fire-retardant cabling for audit compliance',
      'Wall-mount and floor-standing server rack assembly with clean dressing and labeling',
      '24/48-port modular patch panel termination with comprehensive port mapping',
      'Port-by-port Fluke DSX-8000 certification reports provided for ISO and safety audits',
      'Dedicated 6 to 8 hour onsite troubleshooting SLA across South Gujarat'
    ],
    components: [
      'D-Link / Schneider / CommScope CAT6 & CAT6A 10G Copper Bundles',
      'Cat6A Shielded RJ45 Keystones & Patch Panels',
      'Valrack / Netrack 9U to 42U Server Enclosures',
      'Manageable Gigabit L2/L3 Industrial Switches'
    ],
    process: [
      'Plant pathway assessment and cable run route blueprinting',
      'BOQ preparation matching exact industrial electrical standards',
      'Heavy-duty conduit laying, cable pulling, and strain relief',
      'Rack dressing, patch panel termination, and port indexing',
      'Calibrated Fluke testing with printed graph reports for plant auditors'
    ],
    industries: ['Vapi Phase 1-4 Manufacturing Plants', 'Pharma QC & Cleanrooms', 'Textile & Synthetic Yarn Mills', 'Packaging & Converting Facilities'],
    faqs: [
      { question: 'Do you provide formal Fluke test reports with cable installations in Vapi?', answer: 'Yes, every structured cabling project in Vapi is certified using a calibrated Fluke network analyzer, providing complete attenuation, return loss, and wiremap binders ready for statutory audits.' },
      { question: 'Why should we choose CAT6A over standard CAT6 for our factory?', answer: 'Heavy manufacturing plants in Vapi generate intense electromagnetic noise from motors and VFD drives. CAT6A features superior individual pair shielding and supports 10 Gbps speeds up to 100 meters without packet loss.' }
    ]
  },
  {
    id: 'srv-geo-3',
    slug: 'fiber-optic-splicing-vapi',
    title: 'Optical Fiber Splicing & OTDR Testing in Vapi GIDC',
    category: 'Networking',
    shortDesc: 'Single-mode armored fiber laying, precision fusion splicing, LIU termination, and OTDR loss certification for large Vapi industrial campuses.',
    iconName: 'Zap',
    overview: 'When campus buildings, administrative blocks, and distant warehouse sheds in Vapi exceed 100 meters, optical fiber is the only enterprise solution. NextGen IT Solution installs single-mode (OS2) and multi-mode (OM3/OM4) armored optical fiber backbones with core-alignment fusion splicing and OTDR db-loss verification.',
    features: [
      'Armored optical fiber for direct underground trenching and overhead tray routing',
      'Core-alignment precision fusion splicing with loss < 0.02 dB per joint',
      'Light Interface Units (LIU), fiber pigtails, and SC/LC coupler termination',
      'OTDR (Optical Time-Domain Reflectometer) certification and power meter audits',
      '10G SFP+ optical transceiver modules and industrial media converters',
      'Fast 6 to 8 hour emergency fiber cut restoration across Vapi GIDC'
    ],
    components: [
      '6-Core to 48-Core Outdoor Armored Single-Mode Fiber',
      'Rackmount LIU Enclosures & SC/LC Pigtails',
      'Fujikura Core-Alignment Fusion Splicers',
      'Optical Power Meters & Calibrated OTDR Testers'
    ],
    process: [
      'Campus distance calculation and trenching route planning',
      'Armored fiber pulling with strict tension control to avoid core bending',
      'Precision cleaving, jointing, and heat-shrink protective sleeve fusion',
      'Bi-directional OTDR insertion loss verification and trace recording',
      'Integration with core distribution switches and link aggregation testing'
    ],
    industries: ['Multi-Acre Chemical Complexes', 'Paper Mills & Paper Converting', 'Packaging & Corrugation Hubs', 'Steel & Metallurgy Units'],
    faqs: [
      { question: 'How do you locate broken or damaged fiber optic lines inside a plant?', answer: 'We use high-precision OTDR (Optical Time-Domain Reflectometer) analyzers that pinpoint the exact distance to the millimeter of any fiber break or micro-bend along the run.' }
    ]
  },
  {
    id: 'srv-geo-4',
    slug: 'firewall-security-vapi',
    title: 'Firewall & Industrial Network Security in Vapi',
    category: 'Security',
    shortDesc: 'Sophos & Fortinet Next-Gen Firewalls, IPsec VPN branch interconnects, ransomware shielding, and dual-ISP load balancing for Vapi enterprises.',
    iconName: 'ShieldCheck',
    overview: 'Industrial networks in Vapi are frequent targets for ransomware, malicious attachments, and data interception. NextGen IT Solution implements Next-Generation Firewalls (NGFW) with deep packet inspection, application filtering, secure inter-branch IPsec VPNs, and automated dual-WAN ISP failover.',
    features: [
      'Deployment of Sophos XGS and Fortinet FortiGate enterprise firewalls',
      'Site-to-Site IPsec VPN tunnels connecting Vapi factories to Mumbai/Surat HQs',
      'SSL-VPN for secure remote management, accounting, and ERP access',
      'Bandwidth shaping, streaming blocks, and unproductive web category filtering',
      'Dual-WAN load balancing with automated sub-second ISP failover',
      'Strict VLAN isolation keeping office accounting separate from factory IoT machines'
    ],
    components: [
      'Sophos XGS Series UTM Appliances',
      'Fortinet FortiGate Security Gateways',
      'Centralized Endpoint Antivirus & EDR Licences',
      'Hardware VPN Gateways'
    ],
    process: [
      'Network perimeter vulnerability audit and open port discovery',
      'Security policy definition segregating ERP, management, and guest traffic',
      'Zero-downtime firewall deployment and dual-ISP failover configuration',
      'VPN client rollout with Multi-Factor Authentication (MFA)',
      'Security posture monitoring and automated weekly executive reports'
    ],
    industries: ['Pharma & Chemical Exporters', 'Manufacturing Corporate HQs', 'Logistics & Warehousing Firms', 'Financial & Export Houses'],
    faqs: [
      { question: 'Can the firewall combine Jio and Airtel connections to stop internet drops in Vapi?', answer: 'Yes! We configure automated multi-WAN load balancing and failover. When one connection fluctuates or drops, traffic instantly switches to the secondary link without interrupting Tally or ERP sessions.' }
    ]
  },
  {
    id: 'srv-geo-5',
    slug: 'server-storage-vapi',
    title: 'Enterprise Server Deployment & NAS Storage in Vapi',
    category: 'Infrastructure',
    shortDesc: 'Dell & HPE rack servers, Synology NAS storage, RAID redundancy, Windows Server AD, and automated cloud backups for Vapi manufacturers.',
    iconName: 'Server',
    overview: 'Running multi-user Tally Prime, SAP Business One, or custom manufacturing ERP requires reliable server hardware and bulletproof data storage. NextGen IT Solution delivers enterprise Dell and HPE rackmount servers, Synology NAS data repositories, RAID-10 storage redundancy, and automated daily offsite cloud backups.',
    features: [
      'Dell PowerEdge and HPE ProLiant rackmount servers tailored for manufacturing ERP',
      'Synology and QNAP high-capacity NAS storage for centralized drawing and file archives',
      'Hardware RAID (RAID 1, 5, 10) configurations ensuring continuous operation during disk failures',
      'Windows Server Active Directory Domain Services (AD DS) and centralized group policies',
      'Automated 3-2-1 backup strategy protecting against cryptolocker ransomware',
      '6 to 8 hour onsite hardware diagnostics and support SLA in Vapi GIDC'
    ],
    components: [
      'Dell PowerEdge Rack Servers (Xeon, ECC DDR5 Memory, Hot-Plug PSUs)',
      'Synology 4-Bay to 12-Bay Rackmount NAS Systems',
      'Enterprise SAS and NVMe Solid State Drives',
      'Veeam Backup & Replication Integration'
    ],
    process: [
      'Current ERP transaction load and storage expansion analysis',
      'Hardware procurement matching OEM standards with 3-year warranty',
      'OS installation, RAID configuration, and Active Directory rights setup',
      'ERP database migration, client connection testing, and backup automation',
      'Quarterly mock restore drills to verify database integrity'
    ],
    industries: ['Continuous Process Manufacturing', 'Pharmaceutical QA/QC Labs', 'Textile Billing & Inventory Hubs', 'Engineering Fabrication Units'],
    faqs: [
      { question: 'How do you protect our Tally ERP database from corruption or hardware failure?', answer: 'We implement hardware RAID-10 disk mirroring for instant hardware fault tolerance, combined with automated daily encrypted snapshots mirrored to a local NAS and an immutable offsite cloud repository.' }
    ]
  },
  {
    id: 'srv-geo-6',
    slug: 'it-amc-vapi',
    title: 'Industrial IT AMC & Onsite Support Services in Vapi GIDC',
    category: 'Support',
    shortDesc: 'Comprehensive and non-comprehensive Annual Maintenance Contracts with guaranteed 6 to 8 hour onsite response SLA across Vapi industrial areas.',
    iconName: 'Wrench',
    overview: 'Factory IT downtime halts billing, stops dispatch docks, and stalls shop-floor production. NextGen IT Solution offers structured IT AMC (Annual Maintenance Contracts) designed for industrial plants across Vapi GIDC. We deliver scheduled preventive checkups, desktop & server maintenance, network optimization, and guaranteed 6 to 8 hour onsite emergency engineer dispatch.',
    features: [
      'Guaranteed 6 to 8 hour onsite engineer SLA response for industrial emergencies',
      'Monthly preventive maintenance checkups: Dust cleaning, thermal paste, and cable hygiene',
      'Routine operating system patch management, antivirus updates, and malware cleanup',
      'Server, firewall, NAS, and NVR health monitoring and routine data integrity audits',
      'Support covering workstations, laptops, network switches, Wi-Fi APs, and printers',
      'Transparent quarterly service delivery reports and IT asset tracking logs'
    ],
    components: [
      'Dedicated Field Engineers Stationed in Vapi',
      'Comprehensive and Non-Comprehensive AMC Agreements',
      'Standby Hardware & Replacement Parts Buffer',
      'Centralized Helpdesk Ticketing System'
    ],
    process: [
      'Full IT asset discovery and baseline infrastructure audit',
      'SLA agreement finalization and ticketing protocol orientation',
      'Monthly scheduled preventive maintenance and physical inspection visits',
      'Rapid breakdown resolution with guaranteed 6 to 8 hour onsite presence',
      'Quarterly review meeting with management and infrastructure health reports'
    ],
    industries: ['Vapi GIDC Phases 1, 2, 3, 4', 'Morai Industrial Area', 'Chanod & Dungra Manufacturing Units', 'Koparli & Salvav Industrial Hubs'],
    faqs: [
      { question: 'What is included in the 6 to 8 hour onsite SLA in Vapi?', answer: 'When an AMC client logs a high-priority incident (such as server failure, switch failure, or plant network outage), a trained hardware engineer reaches your Vapi plant within 6 to 8 hours to troubleshoot and restore connectivity.' },
      { question: 'Do you offer both Comprehensive and Non-Comprehensive IT AMC options?', answer: 'Yes. Comprehensive AMC includes labor plus replacement of damaged hardware components, while Non-Comprehensive AMC covers all routine maintenance and troubleshooting labor with parts billed at actual cost.' }
    ]
  },
  {
    id: 'srv-geo-7',
    slug: 'wifi-networking-vapi',
    title: 'High-Density Industrial Wi-Fi 6 & Long-Range Wireless in Vapi',
    category: 'Networking',
    shortDesc: 'Ubiquiti & Aruba Wi-Fi 6 access points, zero-handoff roaming for barcode scanners, and multi-kilometer Point-to-Point wireless links.',
    iconName: 'Wifi',
    overview: 'Sprawling manufacturing bays and warehouses in Vapi GIDC require robust Wi-Fi that penetrates thick concrete and metal sheds without dead zones. NextGen IT Solution engineers high-density Wi-Fi 6 indoor/outdoor networks with zero-handoff roaming for mobile barcode scanners, plus Point-to-Point (P2P) wireless bridges connecting separate plant sheds without trenching.',
    features: [
      'Wi-Fi 6 (802.11ax) enterprise indoor and outdoor weatherproof access points',
      'Seamless zero-handoff roaming for warehouse barcode handhelds and tablets',
      'Point-to-Point (P2P) wireless bridges linking separate factory sheds up to 5 km away',
      'Guest Wi-Fi captive portals with isolated bandwidth and mobile OTP verification',
      'Secure VLAN segmentation keeping guest Wi-Fi strictly isolated from internal ERP',
      'Centralized cloud management dashboard with real-time signal heat mapping'
    ],
    components: [
      'Ubiquiti UniFi / TP-Link Omada / Aruba Enterprise APs',
      'Ubiquiti AirMax Long-Range Wireless Dishes & Bridges',
      'Outdoor Weatherproof IP67 Enclosures & Surge Suppressors'
    ],
    process: [
      'RF site heat-map survey to identify physical signal reflection and dead zones',
      'AP placement planning ensuring high signal density for warehouse scanners',
      'Line-of-sight alignment for outdoor Point-to-Point wireless dishes',
      'SSID creation, WPA3 security hardening, and bandwidth quotas',
      'Walk-through signal testing across all factory sheds and dispatch bays'
    ],
    industries: ['Large Warehouses & Logistics Hubs', 'Multi-shed Manufacturing Campuses', 'Pharmaceutical Cleanrooms', 'Corporate Office Blocks'],
    faqs: [
      { question: 'Can handheld barcode scanners roam between factory sheds without disconnecting?', answer: 'Yes! We configure enterprise controller-managed access points with fast 802.11r/k/v roaming protocols, allowing handheld scanners to move freely across the shop floor with zero packet loss.' },
      { question: 'How do you connect two factory sheds across the road without physical cables?', answer: 'We deploy outdoor Point-to-Point (P2P) wireless bridge antennas that establish a secure, high-speed 1 Gbps wireless connection across distances of up to 5 km with clear line-of-sight.' }
    ]
  }
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Cisco CBS350-24P-4G Managed Gigabit PoE Switch',
    slug: 'cisco-cbs350-24p-4g',
    category: 'Switches',
    brand: 'Cisco',
    modelNumber: 'CBS350-24P-4G',
    shortDesc: '24-Port Gigabit Ethernet PoE+ Managed Switch with 4 x Gigabit SFP Uplinks. Ideal for enterprise CCTV and voice networks.',
    specs: {
      'Port Count': '24 x 10/100/1000 Gigabit PoE+ Ports',
      'Uplinks': '4 x 1G SFP Optical Ports',
      'PoE Power Budget': '195W / 370W option',
      'Switching Capacity': '56 Gbps',
      'Layer Support': 'Layer 3 static routing, VLAN, QoS, ACL',
      'Warranty': 'Cisco Limited Lifetime Warranty'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Hikvision 4MP AcuSense DarkFighter IP Bullet Camera',
    slug: 'hikvision-4mp-acusense-bullet',
    category: 'CCTV',
    brand: 'Hikvision',
    modelNumber: 'DS-2CD2046G2-IU',
    shortDesc: 'Smart 4MP IP camera with deep learning human/vehicle target classification, DarkFighter low-light color, and built-in mic.',
    specs: {
      'Resolution': '4 Megapixel (2688 × 1520 @ 30fps)',
      'Night Vision': 'DarkFighter Ultra-Low Light + 40m IR',
      'AI Analytics': 'False alarm reduction based on human & vehicle targets',
      'Housing': 'IP67 Weatherproof metal enclosure',
      'Audio': 'Built-in microphone with environmental noise filtering',
      'Interface': 'PoE (802.3af) / 12V DC'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Dell PowerEdge R450 1U Rack Server',
    slug: 'dell-poweredge-r450',
    category: 'Servers',
    brand: 'Dell Technologies',
    modelNumber: 'PowerEdge R450',
    shortDesc: 'Dual-socket 1U rack server delivering scalable compute and density for enterprise ERP, databases, and virtualization.',
    specs: {
      'Processor': 'Up to 2x 3rd Gen Intel Xeon Scalable Processors',
      'Memory': 'Up to 1TB DDR4 2933MT/s RDIMM (16 slots)',
      'Storage': 'Up to 8x 2.5-inch or 4x 3.5-inch Hot-Plug SAS/SATA/NVMe',
      'RAID Controller': 'PERC H755 / H355 hardware RAID controller',
      'Power Supply': 'Dual Redundant Hot-Plug Titanium 800W',
      'Management': 'iDRAC9 Enterprise with OpenManage'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-4',
    name: 'Sophos XGS 126 Next-Gen Firewall Appliance',
    slug: 'sophos-xgs-126',
    category: 'Firewalls',
    brand: 'Sophos',
    modelNumber: 'XGS 126 / 126w',
    shortDesc: 'High-speed dual-processor hardware firewall with dedicated Xstream Flow Processor for encrypted traffic and zero-day protection.',
    specs: {
      'Firewall Throughput': '10,500 Mbps',
      'Threat Protection': '900 Mbps NGFW + Antivirus + IPS',
      'VPN Throughput': '3,150 Mbps IPsec VPN',
      'Interfaces': '14x GbE Copper, 2x GbE SFP Fiber',
      'Security': 'Deep Packet Inspection, SSL/TLS decryption, Web filter',
      'Form Factor': 'Desktop / Rackmount kit included'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-5',
    name: 'APC Smart-UPS On-Line 6kVA / 6000VA 230V',
    slug: 'apc-smart-ups-online-6kva',
    category: 'UPS',
    brand: 'APC by Schneider',
    modelNumber: 'SRT6KXLI',
    shortDesc: 'High density, double-conversion online power protection with scalable runtime for server rooms, network racks, and lab gear.',
    specs: {
      'Power Capacity': '6000 Watts / 6000 VA',
      'Topology': 'Double Conversion Online (0ms transfer)',
      'Waveform Type': 'Pure Sine Wave',
      'Output Connections': 'Hardwire 3-wire, 6x IEC C13, 4x IEC C19',
      'Management': 'Pre-installed Network Management Card with SNMP',
      'Battery Type': 'Lead-acid with hot-swappable battery modules'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'prod-6',
    name: 'Lenovo ThinkCentre Neo 50s Gen 4 Small Form Factor Desktop',
    slug: 'lenovo-thinkcentre-neo-50s',
    category: 'Hardware',
    brand: 'Lenovo',
    modelNumber: 'Neo 50s SFF',
    shortDesc: 'Compact, powerful commercial business desktop engineered for high reliability, fast processing, and low power consumption.',
    specs: {
      'Processor': '13th Gen Intel Core i5-13400 (up to 4.6 GHz)',
      'Memory': '16GB DDR4 3200MHz (expandable to 64GB)',
      'Storage': '512GB M.2 NVMe PCIe SSD + 1TB HDD bay',
      'Operating System': 'Windows 11 Pro 64-bit pre-installed',
      'Connectivity': 'Gigabit LAN, Wi-Fi 6, USB 3.2 Gen 1, HDMI, DisplayPort',
      'Security': 'Hardware TPM 2.0, Kensington lock slot'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'prod-7',
    name: 'Ubiquiti UniFi U6 Pro Enterprise Wi-Fi 6 Access Point',
    slug: 'ubiquiti-unifi-u6-pro',
    category: 'Wireless',
    brand: 'Ubiquiti',
    modelNumber: 'U6-Pro',
    shortDesc: 'Dual-band Wi-Fi 6 access point delivering 5.3 Gbps aggregate throughput and 300+ concurrent clients for warehouses and offices.',
    specs: {
      'Wi-Fi Standard': 'Wi-Fi 6 (802.11ax)',
      'MIMO Architecture': '4x4 MU-MIMO & OFDMA',
      'Throughput Rate': '5.3 Gbps Aggregate Speed',
      'Coverage Area': '140 m² (1,500 ft²)',
      'Power Source': 'PoE+ (802.3at) compliant'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-8',
    name: 'eSSL SilkBio-101TC Visible Light Face & Fingerprint Terminal',
    slug: 'essl-silkbio-101tc',
    category: 'Biometrics',
    brand: 'eSSL',
    modelNumber: 'SilkBio-101TC',
    shortDesc: 'High-speed multi-biometric terminal with SilkID fingerprint scanner, face recognition, RFID card reader, and cloud payroll sync.',
    specs: {
      'Face Capacity': '2,000 Faces',
      'Fingerprint Capacity': '3,000 Fingerprints',
      'Card Capacity': '10,000 Cards',
      'Log Capacity': '100,000 Events',
      'Communication': 'TCP/IP, USB Host, Wi-Fi'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'prod-9',
    name: 'Fortinet FortiGate 60F Unified Threat Management Firewall',
    slug: 'fortinet-fortigate-60f',
    category: 'Firewalls',
    brand: 'Fortinet',
    modelNumber: 'FG-60F',
    shortDesc: 'Enterprise-grade desktop firewall with patented SOC4 processor delivering AI-powered security for distributed branches and plant networks.',
    specs: {
      'Firewall Throughput': '10 Gbps',
      'IPS Throughput': '1.4 Gbps',
      'NGFW Throughput': '1 Gbps',
      'Threat Protection': '700 Mbps',
      'Interfaces': '10x GE RJ45 Ports'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'prod-10',
    name: 'CP PLUS 4MP Pro Guard Network Dome Camera',
    slug: 'cp-plus-4mp-pro-guard-dome',
    category: 'CCTV',
    brand: 'CP PLUS',
    modelNumber: 'CP-UNC-DA41L3-MD',
    shortDesc: 'Vandal-resistant 4MP IP dome camera with 30m Smart IR night vision, IP67/IK10 rating, and built-in audio for cleanrooms and corridors.',
    specs: {
      'Resolution': '4MP (2560 × 1440 @ 25fps)',
      'Lens Type': '2.8mm / 3.6mm Fixed Lens',
      'Night Vision': '30m Smart IR with ICR',
      'Vandal Proof': 'IK10 Impact & IP67 Weatherproof',
      'Audio': 'Built-in Noise Filtering Microphone'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'prod-11',
    name: 'Honeywell Voyager 1400g 2D Handheld Industrial Barcode Scanner',
    slug: 'honeywell-voyager-1400g',
    category: 'Hardware',
    brand: 'Honeywell',
    modelNumber: 'Voyager 1400g',
    shortDesc: 'High-performance area-imaging scanner capable of reading 1D, PDF, and 2D barcodes on paper, curved bottles, and mobile screens.',
    specs: {
      'Scan Technology': 'Area Image (640 x 480 pixel array)',
      'Drop Resistance': 'Withstands 30 drops from 1.5m to concrete',
      'Interface Support': 'USB, Keyboard Wedge, RS232',
      'Environmental': 'IP42 Sealing rating'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'prod-12',
    name: 'D-Link DGS-1210-28P 24-Port Gigabit Smart Managed PoE+ Switch',
    slug: 'dlink-dgs-1210-28p',
    category: 'Switches',
    brand: 'D-Link',
    modelNumber: 'DGS-1210-28P',
    shortDesc: '24-Port 10/100/1000Base-T PoE+ with 4 Gigabit RJ45/SFP Combo Ports. Generous 193W PoE budget with surveillance VLAN support.',
    specs: {
      'PoE Ports': '24 x 802.3at/af PoE+ Ports',
      'PoE Budget': '193W Total Power',
      'Combo Uplinks': '4 x Combo RJ45/SFP Ports',
      'Switching Capacity': '56 Gbps',
      'Special Mode': 'Auto Surveillance VLAN'
    },
    isAvailable: true,
    featured: false
  }
];

export const INITIAL_THEME: ThemeConfig = {
  id: 'theme-main',
  themePreset: 'corporate-blue',
  primaryColor: '#2563EB',
  accentColor: '#0D9488',
  companyName: 'NextGen IT Solution',
  tagline: 'Complete IT Infrastructure & Security for Businesses',
  primaryPhone: '+91 99785 98817',
  whatsappNumber: '+91 99785 98817',
  email: 'nextgen.itsolution@zohomail.in',
  regionalCorridor: 'Vapi (GIDC) • Silvassa • Daman • Umbergaon • Sarigam',
  address: 'Shop No. 12, Commercial Complex, Near GIDC Char Rasta, Vapi - 396195',
  updatedAt: '2026-09-07T11:00:00.000Z'
};

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'LEAD-1001',
    name: 'Rajesh Mehta',
    company: 'Apex Packaging Industries Ltd.',
    phone: '+91 98251 12345',
    email: 'rajesh.mehta@apexpack.com',
    location: 'Vapi GIDC',
    service: 'Structured LAN & CAT6/CAT6A Cabling',
    requirement: 'New plant expansion in Phase 2. Need 120 nodes CAT6A structured cabling, 2 server racks, and 4 managed PoE switches.',
    attachmentUrl: '/uploads/sample_boq_apex_vapi.pdf',
    status: 'Quotation Sent',
    notes: 'Quotation #Q-2026-084 sent on 28th Aug. Client reviewing with management committee.',
    createdAt: '2026-08-27T10:15:00.000Z',
    updatedAt: '2026-08-28T14:30:00.000Z'
  },
  {
    id: 'LEAD-1002',
    name: 'Sanjay Sharma',
    company: 'Silvassa Synthetics Pvt. Ltd.',
    phone: '+91 98980 98765',
    email: 'ssharma@silvassasynthetics.in',
    location: 'Silvassa (Piparia)',
    service: 'CCTV & Video Surveillance Systems',
    requirement: 'Require 32-camera IP CCTV upgrade with AI perimeter line-crossing and 60 days NVR recording across manufacturing shop floor.',
    status: 'Contacted',
    notes: 'Site visit completed by team engineer. BOQ being formulated.',
    createdAt: '2026-09-01T11:20:00.000Z',
    updatedAt: '2026-09-02T09:00:00.000Z'
  },
  {
    id: 'LEAD-1003',
    name: 'Dr. Amit Trivedi',
    company: 'Sunline Pharma Formulations',
    phone: '+91 97277 45678',
    email: 'atrivedi@sunlinepharma.com',
    location: 'Daman (Kachigam)',
    service: 'Server & Storage Solutions',
    requirement: 'Require high-availability Dell PowerEdge server for SAP deployment with RAID 10 and Synology 8-bay backup NAS for FDA audit compliance.',
    status: 'New',
    notes: 'Urgent enquiry received via website form. Needs callback today.',
    createdAt: '2026-09-04T08:30:00.000Z',
    updatedAt: '2026-09-04T08:30:00.000Z'
  },
  {
    id: 'LEAD-1004',
    name: 'Vipul Patel',
    company: 'Prime Polychem Corp',
    phone: '+91 99099 33221',
    email: 'vipul@primepolychem.com',
    location: 'Vapi (Sarigam)',
    service: 'Comprehensive & Non-Comprehensive IT AMC',
    requirement: 'Annual Maintenance Contract for 45 desktops, 3 servers, 5 network switches, and 16 CCTV cameras with 6-8 hour SLA.',
    status: 'Won',
    notes: '1-Year AMC contract finalized and signed. Handover scheduled for next Monday.',
    createdAt: '2026-08-15T09:00:00.000Z',
    updatedAt: '2026-08-24T16:00:00.000Z'
  }
];

export const INITIAL_VISITING_CARD: VisitingCardConfig = {
  companyName: 'NextGen IT Solution',
  subtitle: 'Industrial IT Infrastructure & Security',
  tagline: 'Industrial IT Infrastructure, CCTV & Security Solutions',
  locationBadge: 'VAPI GIDC',
  primaryPhone: '+91 99785 98817',
  email: 'nextgen.itsolution@zohomail.in',
  website: 'nextgenitsolution.com',
  address: 'GIDC Industrial Estate, Char Rasta, Vapi, Gujarat - 396195',
  regionalHubs: 'Vapi • Silvassa • Daman • Sarigam',
  partners: [
    {
      name: 'Yatin Patel',
      designation: 'Director — Solutions Architecture',
      phone: '+91 99785 98817',
      email: 'nextgen.itsolution@zohomail.in'
    },
    {
      name: 'Bhavesh Patel',
      designation: 'Director — Operations & Projects',
      phone: '+91 99785 98817',
      email: 'nextgen.itsolution@zohomail.in'
    },
    {
      name: 'Pankaj Patel',
      designation: 'Director — Network & Security',
      phone: '+91 99785 98817',
      email: 'nextgen.itsolution@zohomail.in'
    }
  ],
  backCapabilitiesTitle: 'Core Industrial Capabilities',
  backSlaBadge: '6-8 Hr Onsite SLA',
  services: [
    'Industrial CCTV & Surveillance (4K / AI)',
    'CAT6 / CAT6A Structured LAN (Fluke Certified)',
    'Fiber Optic Splicing & OTDR Testing',
    'Sophos & Fortinet Next-Gen Firewalls',
    'Enterprise Server, NAS & Cloud Backup',
    'Factory IT Annual AMC Maintenance'
  ],
  qualityStamp: 'Fluke Calibrated Testing',
  printSpecGsm: '350 GSM or 400 GSM Art Card',
  printSpecFinish: 'Thermal Velvet Matte + Spot UV on Logo & Names',
  printSpecSize: '3.5 in × 2.0 in (89mm × 51mm) + 3mm Bleed'
};