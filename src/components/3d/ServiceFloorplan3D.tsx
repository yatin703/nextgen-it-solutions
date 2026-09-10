'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { 
  Camera, 
  Server, 
  Wifi, 
  Network, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Maximize2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export interface FloorplanZone {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  pos: [number, number, number]; // x, y, z
  size: [number, number, number]; // w, h, d
  color: string;
  glowColor: string;
  description: string;
  benefits: string[];
  equipment: string[];
  serviceSlug: string;
  quoteParam: string;
}

const ZONES: FloorplanZone[] = [
  {
    id: 'perimeter',
    name: 'Factory Perimeter & Gate',
    category: 'Perimeter Security',
    subtitle: 'AI CCTV, DarkFighter night vision & boundary tripwire',
    pos: [-7, 0, 4.5],
    size: [6, 1.4, 4.5],
    color: '#0284c7',
    glowColor: '#38bdf8',
    description: 'Autonomous 4K perimeter security with human and vehicle discrimination, automatic number plate recognition (ANPR) at weighbridges, and PTZ barrier patrol.',
    benefits: [
      '4K DarkFighter full-color night surveillance',
      'AI line-crossing & fence climb alerts to guard cabin',
      'Weighbridge & gate barrier NVR sync',
      'Weatherproof IP67 anti-corrosion housings'
    ],
    equipment: ['Hikvision 4K IP Dome', 'CP PLUS Matrix NVR', 'ANPR Gate Cameras', 'Industrial PoE Extenders'],
    serviceSlug: '/services/cctv-surveillance',
    quoteParam: 'Industrial CCTV Surveillance'
  },
  {
    id: 'server-room',
    name: 'Mission-Critical Datacenter',
    category: 'Compute & Storage',
    subtitle: 'Compute clusters, RAID arrays & automated NAS backup',
    pos: [-1.5, 0, -4.5],
    size: [4.5, 2.2, 4.5],
    color: '#6366f1',
    glowColor: '#818cf8',
    description: 'Temperature-monitored, vibration-isolated server room running Dell PowerEdge and HPE compute virtualization, automated Synology NAS backup, and redundant UPS power.',
    benefits: [
      'Automated 3-2-1 snapshot backup protecting against ransomware',
      'Hardware RAID 10 configuration with hot-swappable enterprise SAS SSDs',
      'Tally & ERP virtualization with 99.9% uptime architecture',
      'Cleanroom airflow & remote environmental temperature telemetry'
    ],
    equipment: ['Dell PowerEdge R750', 'Synology RS2423+ NAS', 'APC Online UPS', '42U Server Rack'],
    serviceSlug: '/services/server-storage',
    quoteParam: 'Server & Storage Solutions'
  },
  {
    id: 'office-area',
    name: 'Corporate & Engineering Floor',
    category: 'LAN & Wireless',
    subtitle: 'High-density Wi-Fi 6, noise-shielded CAT6A drops & workstations',
    pos: [6, 0, 4.5],
    size: [6.5, 1.6, 5],
    color: '#0d9488',
    glowColor: '#2dd4bf',
    description: 'Zero-interference corporate networking connecting CAD/CAM workstations, management offices, and boardroom video conferences with seamless Wi-Fi roaming.',
    benefits: [
      'TIA/EIA compliant CAT6A shielded cabling preventing machinery EMI',
      'Ceiling-mounted Wi-Fi 6 APs supporting 150+ concurrent corporate devices',
      'VLAN isolation separating guest visitors from production ERP networks',
      'Fluke DSX-8000 certified termination reports per data drop'
    ],
    equipment: ['Aruba / Ruijie Wi-Fi 6 APs', 'D-Link CAT6A Patch Panels', 'CAD Workstations', 'VoIP Phones'],
    serviceSlug: '/services/networking-lan',
    quoteParam: 'Corporate LAN & Wi-Fi'
  },
  {
    id: 'network-core',
    name: 'Central Network Distribution',
    category: 'Structured Infrastructure',
    subtitle: '42U Racks, L2/L3 managed PoE switches & fiber patch frames',
    pos: [1.5, 0, 0.5],
    size: [4, 2.0, 3.5],
    color: '#0284c7',
    glowColor: '#0ea5e9',
    description: 'The master distribution heart of the industrial facility. Houses core fiber optic breakout panels, gigabit PoE switch stacks, and neat cable management dressing.',
    benefits: [
      'Single-mode 12-core armored fiber interconnecting all factory sheds',
      'Layer 2/3 managed PoE+ switches powering all IP cameras and APs',
      'Dual power supply redundancy with zero-downtime failover',
      'Color-coded patch cord dressing with laser engraved port numbering'
    ],
    equipment: ['Cisco Catalyst 48P PoE', 'CommScope Fiber ODF', '42U Floor Standing Rack', 'Cable Organizers'],
    serviceSlug: '/services/fiber-optic-networking',
    quoteParam: 'Structured Cabling & Fiber'
  },
  {
    id: 'security-gateway',
    name: 'Cybersecurity & Border Firewall',
    category: 'Network Defense',
    subtitle: 'Sophos XGS, multi-WAN failover, IPS & site-to-site VPN',
    pos: [-6.5, 0, -1.5],
    size: [4.5, 1.8, 4],
    color: '#ea580c',
    glowColor: '#f97316',
    description: 'Dedicated perimeter cyber gateway inspecting all incoming and outgoing factory data packets, blocking malware and ransomware, and orchestrating multi-WAN failover.',
    benefits: [
      'Deep packet inspection (DPI) stopping remote intrusions and malware',
      'Automated multi-ISP link failover ensuring zero ERP disconnection',
      'IPsec Site-to-Site VPN connecting head office, branch plants, and warehouses',
      'Application filtering restricting bandwidth-hogging streaming on factory floor'
    ],
    equipment: ['Sophos XGS 2100 Firewall', 'Fortinet FortiGate 80F', 'Multi-WAN Router', 'SSL VPN Appliance'],
    serviceSlug: '/services/firewall-network-security',
    quoteParam: 'Firewall & Network Security'
  },
  {
    id: 'maintenance-depot',
    name: 'Industrial AMC & Spares Depot',
    category: 'Onsite Support SLA',
    subtitle: 'Local standby hardware, fiber splicers & 6-8 hr emergency SLA',
    pos: [6.5, 0, -3.5],
    size: [5.5, 1.6, 4.5],
    color: '#10b981',
    glowColor: '#34d399',
    description: 'Our rapid maintenance operations hub stationed directly in Vapi GIDC. Stores standby switches, optical fusion splicers, Fluke testers, and ready-to-dispatch engineers.',
    benefits: [
      'Guaranteed 6 to 8 hour emergency onsite arrival across Vapi, Silvassa, and Daman',
      'Standby loaner network switches and NVR storage during workshop repairs',
      'Monthly preventive dust blower cleaning and UPS battery health audits',
      'Quarterly asset log binder maintaining compliance with ISO audits'
    ],
    equipment: ['Fujikura Fusion Splicer', 'Fluke DSX-8000 Tester', 'Standby Spare Switches', 'Field Diagnostic Toolkits'],
    serviceSlug: '/amc',
    quoteParam: 'Comprehensive Industrial IT AMC'
  }
];

export default function ServiceFloorplan3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedZone, setSelectedZone] = useState<FloorplanZone>(ZONES[0]);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);

  // References for Three.js animations
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 16, 17));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070b14');
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 18, 19);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambLight = new THREE.AmbientLight('#1e293b', 2.5);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight('#38bdf8', 2.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Blueprint grid floor
    const grid = new THREE.GridHelper(26, 26, '#0284c7', '#0e2439');
    scene.add(grid);

    // Group for floorplan
    const floorplanGroup = new THREE.Group();
    scene.add(floorplanGroup);

    // Build 3D Floorplan Zones
    const zoneMeshes: { [key: string]: { mesh: THREE.Mesh; outline: THREE.LineSegments } } = {};

    ZONES.forEach(zone => {
      const group = new THREE.Group();
      group.position.set(zone.pos[0], zone.pos[1], zone.pos[2]);

      // Semi-transparent zone room
      const geo = new THREE.BoxGeometry(zone.size[0], zone.size[1], zone.size[2]);
      const mat = new THREE.MeshStandardMaterial({
        color: zone.color,
        transparent: true,
        opacity: 0.35,
        roughness: 0.3,
        metalness: 0.7,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = zone.size[1] / 2;
      mesh.userData = { zoneId: zone.id };
      group.add(mesh);

      // Wireframe outline
      const edges = new THREE.EdgesGeometry(geo);
      const lineMat = new THREE.LineBasicMaterial({ color: zone.glowColor, linewidth: 2 });
      const outline = new THREE.LineSegments(edges, lineMat);
      outline.position.y = zone.size[1] / 2;
      group.add(outline);

      // Floor marker disc
      const discGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.05, 16);
      const discMat = new THREE.MeshBasicMaterial({ color: zone.glowColor });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.position.y = 0.03;
      group.add(disc);

      floorplanGroup.add(group);
      zoneMeshes[zone.id] = { mesh, outline };
    });

    // Connecting Fiber Conduit Lines between zones
    const linkPoints = [
      new THREE.Vector3(-7, 0.08, 4.5),
      new THREE.Vector3(1.5, 0.08, 0.5),
      new THREE.Vector3(-1.5, 0.08, -4.5),
      new THREE.Vector3(6.5, 0.08, -3.5),
      new THREE.Vector3(6, 0.08, 4.5),
      new THREE.Vector3(-6.5, 0.08, -1.5),
      new THREE.Vector3(1.5, 0.08, 0.5),
    ];
    const linkGeo = new THREE.BufferGeometry().setFromPoints(linkPoints);
    const linkMat = new THREE.LineDashedMaterial({
      color: '#38bdf8',
      dashSize: 0.4,
      gapSize: 0.2,
    });
    const linkLine = new THREE.Line(linkGeo, linkMat);
    linkLine.computeLineDistances();
    floorplanGroup.add(linkLine);

    // Raycaster for mouse clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const meshes = Object.values(zoneMeshes).map(z => z.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const id = hit.userData.zoneId;
        const target = ZONES.find(z => z.id === id);
        if (target) {
          setSelectedZone(target);
        }
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);

    // Animation loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Camera smooth glide towards target
      camera.position.lerp(targetCamPos.current, 0.05);
      currentLookAt.current.lerp(targetLookAt.current, 0.05);
      camera.lookAt(currentLookAt.current);

      // Highlight selected zone
      ZONES.forEach(z => {
        const item = zoneMeshes[z.id];
        if (!item) return;
        const isSelected = z.id === selectedZone.id;
        const mat = item.mesh.material as THREE.MeshStandardMaterial;
        mat.opacity = isSelected ? 0.65 : 0.25;
        (item.outline.material as THREE.LineBasicMaterial).color.set(
          isSelected ? '#ffffff' : z.glowColor
        );
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedZone.id]);

  // When selectedZone changes, update camera target
  useEffect(() => {
    if (!selectedZone) return;
    // Position camera dynamically slightly back and above the target zone
    targetCamPos.current.set(
      selectedZone.pos[0] * 0.45,
      13,
      selectedZone.pos[2] * 0.45 + 13
    );
    targetLookAt.current.set(
      selectedZone.pos[0] * 0.8,
      0.8,
      selectedZone.pos[2] * 0.8
    );
  }, [selectedZone]);

  return (
    <div className="space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive 3D Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industrial Facility 3D Service Floorplan
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Click any functional zone of the factory to inspect the dedicated cabling, surveillance, compute, cybersecurity, and SLA support systems we engineer.
          </p>
        </div>

        <Link
          href="/services"
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition shrink-0"
        >
          <span>View All 15 Specific Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Zone Quick-Selector Nav Pills */}
      <div className="flex flex-wrap gap-2">
        {ZONES.map((zone) => {
          const isSelected = zone.id === selectedZone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isSelected ? '#090d16' : zone.glowColor }} 
              />
              <span>{zone.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main 3D Floorplan & Zone Detail Flyout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: 3D Canvas Viewport (7 Cols) */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#070b14] shadow-2xl">
          <div ref={mountRef} className="w-full h-full cursor-pointer" />

          {/* Overlay Helper Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono">
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click any zone to inspect</span>
          </div>

          <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-slate-400 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800">
            Active: <strong className="text-white">{selectedZone.name}</strong>
          </div>
        </div>

        {/* Right: Interactive Zone Technical Drawer (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6 text-white">
          
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                {selectedZone.category}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                Zone Specs
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {selectedZone.name}
              </h3>
              <p className="text-xs text-cyan-300/90 font-medium mt-1">
                {selectedZone.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedZone.description}
            </p>

            {/* Key Benefits Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Engineered Capabilities:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedZone.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware Deployed */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Typical Enterprise Equipment:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedZone.equipment.map((eq, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 font-medium"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={`/quote?service=${encodeURIComponent(selectedZone.quoteParam)}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg transition text-xs uppercase tracking-wider text-center"
            >
              <span>Get Quote for this Zone</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              href={selectedZone.serviceSlug}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
            >
              <span>Explore Details</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
