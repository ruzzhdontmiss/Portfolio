"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, .1, 100);
    cam.position.z = 14;
    const ren = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    ren.setSize(innerWidth, innerHeight);
    ren.setPixelRatio(Math.min(devicePixelRatio, 2));
    mountRef.current.appendChild(ren.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, .9));
    const l1 = new THREE.DirectionalLight(0x7aa8e0, 1.1); l1.position.set(5, 6, 8); scene.add(l1);
    const l2 = new THREE.DirectionalLight(0x8b6fd8, .6); l2.position.set(-6, -4, 5); scene.add(l2);

    const glassMat = () => new THREE.MeshPhysicalMaterial({
      color: 0xbcd4ef, transparent: true, opacity: .32,
      roughness: .15, metalness: .05, clearcoat: 1,
    });

    const shapes = [];
    [[6,3,-4,1.6],[-7,-2,-6,2.1],[8,-4,-8,1.3],[-5,5,-9,1.4]].forEach(([x,y,z,s], i) => {
      const geo = i % 2
        ? new THREE.IcosahedronGeometry(s, 0)
        : new THREE.TorusKnotGeometry(s * .7, s * .24, 90, 14);
      const m = new THREE.Mesh(geo, glassMat());
      m.position.set(x, y, z);
      m.userData.spin = .0016 + Math.random() * .0018;
      scene.add(m); shapes.push(m);
    });

    const onMove = (e) => {
      const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
      cam.position.x += (nx * 2 - cam.position.x) * .03;
      cam.position.y += (-ny * 1.5 - cam.position.y) * .03;
      cam.lookAt(0, 0, 0);
    };
    const onResize = () => {
      cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
      ren.setSize(innerWidth, innerHeight);
    };
    addEventListener("mousemove", onMove);
    addEventListener("resize", onResize);

    let raf;
    (function anim() {
      shapes.forEach((s) => { s.rotation.x += s.userData.spin; s.rotation.y += s.userData.spin * 1.3; });
      ren.render(scene, cam);
      raf = requestAnimationFrame(anim);
    })();

    return () => {
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      ren.dispose();
    };
  }, []);
  return <div ref={mountRef} className="three-bg" />;
}
