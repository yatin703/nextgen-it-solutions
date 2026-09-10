'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ShieldCheck, Sparkles, Cpu, Activity } from 'lucide-react';

interface IndustrialCityCanvasProps {
  onNodeSelect?: (nodeName: string) => void;
}

export default function IndustrialCityCanvas({ onNodeSelect }: IndustrialCityCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSubsystem, setActiveSubsystem] = useState<string>('Fiber Backbone & Core');
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070b14');
    scene.fog = new THREE.FogExp2('#070b14', 0.035);

    // 2. Camera setup - Isometric perspective
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(16, 14, 18);
    camera.lookAt(0, 1.5, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lighting - Industrial Blue, Electric Cyan, Safety Orange
    const ambientLight = new THREE.AmbientLight('#0f172a', 2.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#38bdf8', 2.8);
    dirLight.position.set(12, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Safety orange spotlight near the firewall
    const orangeLight = new THREE.PointLight('#ea580c', 4, 14);
    orangeLight.position.set(-4, 3, 4);
    scene.add(orangeLight);

    // Electric cyan point light near the server datacenter
    const cyanLight = new THREE.PointLight('#06b6d4', 5, 16);
    cyanLight.position.set(3, 4, -2);
    scene.add(cyanLight);

    // 5. Technical Blueprint Grid Floor
    const gridHelper = new THREE.GridHelper(36, 36, '#0284c7', '#0f2744');
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Floor plane with slight metallic reflection
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({
      color: '#070b14',
      roughness: 0.85,
      metalness: 0.3,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // 6. PROCEDURAL INDUSTRIAL STRUCTURES

    // Group for all models
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Materials
    const metalWallMat = new THREE.MeshStandardMaterial({
      color: '#1e293b',
      roughness: 0.4,
      metalness: 0.8,
    });
    const darkRoofMat = new THREE.MeshStandardMaterial({
      color: '#0f172a',
      roughness: 0.6,
      metalness: 0.9,
    });
    const glowingCyanMat = new THREE.MeshBasicMaterial({ color: '#22d3ee' });
    const glowingOrangeMat = new THREE.MeshBasicMaterial({ color: '#f97316' });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#0284c7',
      transmission: 0.7,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.2,
    });

    // Helper: Create Factory Shed
    const createFactoryShed = (x: number, z: number, w: number, d: number, h: number) => {
      const shedGroup = new THREE.Group();
      shedGroup.position.set(x, 0, z);

      // Base building
      const baseGeo = new THREE.BoxGeometry(w, h, d);
      const baseMesh = new THREE.Mesh(baseGeo, metalWallMat);
      baseMesh.position.y = h / 2;
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      shedGroup.add(baseMesh);

      // Corrugated Gable Roof
      const roofGeo = new THREE.ConeGeometry(Math.max(w, d) * 0.72, h * 0.4, 4);
      const roofMesh = new THREE.Mesh(roofGeo, darkRoofMat);
      roofMesh.position.y = h + h * 0.2;
      roofMesh.rotation.y = Math.PI / 4;
      roofMesh.castShadow = true;
      shedGroup.add(roofMesh);

      // Glowing Cyan Inspection Window Slits
      const windowGeo = new THREE.BoxGeometry(w * 0.85, 0.25, 0.05);
      const windowMesh = new THREE.Mesh(windowGeo, glowingCyanMat);
      windowMesh.position.set(0, h * 0.65, d / 2 + 0.03);
      shedGroup.add(windowMesh);

      // Technical edge lines
      const edges = new THREE.EdgesGeometry(baseGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: '#0284c7', linewidth: 1 });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      wireframe.position.y = h / 2;
      shedGroup.add(wireframe);

      return shedGroup;
    };

    // Add Factory Units
    const plant1 = createFactoryShed(-5, -4, 4.5, 6, 3.2); // Main Manufacturing Plant
    const plant2 = createFactoryShed(-6, 3, 4, 5, 2.8);   // Chemical / Pharma Clean Unit
    const warehouse = createFactoryShed(4, 5, 5.5, 4.5, 2.5); // Packaging & Logistics Bay
    cityGroup.add(plant1, plant2, warehouse);

    // 7. SERVER ROOM & DATACENTER (Center Glass Cube with Glowing Server Racks)
    const serverRoomGroup = new THREE.Group();
    serverRoomGroup.position.set(2, 0, -2);

    const glassRoomGeo = new THREE.BoxGeometry(3.6, 2.6, 3.6);
    const glassRoom = new THREE.Mesh(glassRoomGeo, glassMat);
    glassRoom.position.y = 1.3;
    glassRoom.castShadow = true;
    serverRoomGroup.add(glassRoom);

    // Server Racks inside
    const rackGeo = new THREE.BoxGeometry(0.7, 1.8, 0.8);
    const rackMat = new THREE.MeshStandardMaterial({ color: '#020617', roughness: 0.3, metalness: 0.9 });

    for (let i = -1; i <= 1; i++) {
      const rack = new THREE.Mesh(rackGeo, rackMat);
      rack.position.set(i * 0.95, 0.9, 0);
      serverRoomGroup.add(rack);

      // Flashing Server LEDs
      const ledStrips = 5;
      for (let j = 0; j < ledStrips; j++) {
        const ledGeo = new THREE.BoxGeometry(0.55, 0.04, 0.02);
        const ledMat = new THREE.MeshBasicMaterial({
          color: j % 2 === 0 ? '#06b6d4' : '#10b981',
        });
        const ledMesh = new THREE.Mesh(ledGeo, ledMat);
        ledMesh.position.set(i * 0.95, 0.4 + j * 0.28, 0.42);
        serverRoomGroup.add(ledMesh);
      }
    }
    cityGroup.add(serverRoomGroup);

    // 8. SCANNING CCTV SECURITY TOWERS
    const cctvPoles: { pole: THREE.Group; cone: THREE.Mesh; baseAngle: number }[] = [];

    const createCctvTower = (x: number, z: number, angle: number) => {
      const poleGroup = new THREE.Group();
      poleGroup.position.set(x, 0, z);

      // Pole Mast
      const poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 4, 8);
      const poleMesh = new THREE.Mesh(poleGeo, metalWallMat);
      poleMesh.position.y = 2;
      poleGroup.add(poleMesh);

      // Camera Head
      const camHead = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.4), metalWallMat);
      camHead.position.set(0, 3.9, 0.15);
      poleGroup.add(camHead);

      // Cyan Scanning Vision Cone
      const coneGeo = new THREE.ConeGeometry(1.6, 4.5, 16, 1, true);
      const coneMat = new THREE.MeshBasicMaterial({
        color: '#06b6d4',
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const coneMesh = new THREE.Mesh(coneGeo, coneMat);
      coneMesh.position.set(0, 1.8, 1.8);
      coneMesh.rotation.x = Math.PI / 3;
      poleGroup.add(coneMesh);

      cityGroup.add(poleGroup);
      return { pole: poleGroup, cone: coneMesh, baseAngle: angle };
    };

    cctvPoles.push(createCctvTower(-2, 6, 0));
    cctvPoles.push(createCctvTower(-8, -1, Math.PI / 2));
    cctvPoles.push(createCctvTower(6, -5, -Math.PI / 3));

    // 9. CYBERSECURITY FIREWALL DIGITAL BORDER (Orange Shield Arch)
    const firewallGroup = new THREE.Group();
    firewallGroup.position.set(-1, 0, 3);

    // Arch pillars
    const archPillarGeo = new THREE.CylinderGeometry(0.12, 0.15, 2.6, 8);
    const p1 = new THREE.Mesh(archPillarGeo, metalWallMat);
    p1.position.set(-1.8, 1.3, 0);
    const p2 = new THREE.Mesh(archPillarGeo, metalWallMat);
    p2.position.set(1.8, 1.3, 0);
    firewallGroup.add(p1, p2);

    // Orange Shield Beam Wall
    const shieldGeo = new THREE.PlaneGeometry(3.6, 2.2);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: '#f97316',
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldMesh.position.set(0, 1.3, 0);
    firewallGroup.add(shieldMesh);

    // Glowing firewall badge
    const badgeGeo = new THREE.BoxGeometry(0.6, 0.6, 0.1);
    const badgeMesh = new THREE.Mesh(badgeGeo, glowingOrangeMat);
    badgeMesh.position.set(0, 2.4, 0);
    firewallGroup.add(badgeMesh);

    cityGroup.add(firewallGroup);

    // 10. ANIMATED DATA STREAM PARTICLES (Fiber conduits)
    const curvePoints = [
      new THREE.Vector3(-5, 0.1, -4),   // Plant 1
      new THREE.Vector3(-2, 0.1, -2),
      new THREE.Vector3(2, 0.1, -2),    // Server Room
      new THREE.Vector3(2, 0.1, 1),
      new THREE.Vector3(-1, 0.1, 3),    // Firewall Gateway
      new THREE.Vector3(4, 0.1, 5),     // Warehouse
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);

    // Draw glowing tube for conduit
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: '#0369a1', transparent: true, opacity: 0.45 });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    cityGroup.add(tubeMesh);

    // Data pulse particles traveling on the curve
    const particleCount = 28;
    const particleGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: '#38bdf8' });
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < particleCount; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      particles.push(p);
      cityGroup.add(p);
    }

    // Threat packet blocked at firewall
    const threatGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const threatMat = new THREE.MeshBasicMaterial({ color: '#ef4444' });
    const threat = new THREE.Mesh(threatGeo, threatMat);
    threat.position.set(-1, 1.3, 4.5);
    cityGroup.add(threat);

    // 11. Mouse Parallax and Smooth Rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 16;
    let targetCameraY = 14;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = nx * 2.5;
      mouseY = ny * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 12. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      targetCameraX = 16 + mouseX;
      targetCameraY = 14 + mouseY;
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 1.5, 0);

      // Rotate city slowly
      cityGroup.rotation.y = elapsed * 0.04;

      // Animate CCTV scanner cones
      cctvPoles.forEach((cctv, idx) => {
        const sweep = Math.sin(elapsed * 1.4 + idx) * 0.65;
        cctv.cone.rotation.z = sweep;
      });

      // Animate data stream particles along curve
      particles.forEach((p, idx) => {
        const t = ((elapsed * 0.22 + idx / particleCount) % 1);
        const pt = curve.getPoint(t);
        p.position.set(pt.x, pt.y + 0.08, pt.z);
      });

      // Animate firewall shield pulsing
      shieldMat.opacity = 0.22 + Math.sin(elapsed * 4) * 0.12;

      // Threat bounces off orange shield
      threat.position.z = 4.2 - Math.abs(Math.sin(elapsed * 2.5)) * 1.2;

      // Update active subsystem indicator periodically
      const cycle = Math.floor(elapsed / 4) % 4;
      if (cycle === 0) setActiveSubsystem('High-Speed Armored Fiber Backbone');
      else if (cycle === 1) setActiveSubsystem('Server Cluster & Automated RAID NAS');
      else if (cycle === 2) setActiveSubsystem('AI CCTV Perimeter Tripwire Active');
      else setActiveSubsystem('Next-Gen Firewall Threat Inspection');

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Resize Handler
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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#070b14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
      
      {/* 3D WebGL Canvas Mount */}
      {webglSupported ? (
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        /* WebGL Fallback: High-Tech Blueprint Diagram */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 blueprint-dark-grid">
          <div className="w-20 h-20 rounded-2xl bg-cyan-950/80 border border-cyan-400 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
            <Cpu className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white">NextGen Connected Industrial Facility</h3>
          <p className="text-xs text-cyan-200/70 text-center max-w-md mt-2">
            Fiber backbone, server virtualization, perimeter AI CCTV, and Sophos/Fortinet cybersecurity architecture.
          </p>
        </div>
      )}

      {/* Blueprint Grid Overlay Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold uppercase tracking-wider">3D Live Industrial Site</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">60 FPS WebGL</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-orange-500/40 text-orange-400 text-xs font-mono shadow-lg">
          <Activity className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span className="font-semibold">{activeSubsystem}</span>
        </div>
      </div>

      {/* Interactive Legend / Subsystem Status Bottom Strip */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 z-20">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            <span className="font-medium text-white">Fiber Data Stream</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="font-medium text-white">Firewall Gateway</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span className="font-medium text-white">CCTV Scan Cones</span>
          </div>
          <div className="flex items-center gap-1.5 hidden md:flex">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span className="font-medium text-white">Server Rack Status: 100% OK</span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-widest hidden sm:block">
          NextGen System Engine v2.4
        </div>
      </div>

    </div>
  );
}
