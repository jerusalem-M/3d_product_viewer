import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createLamp(scene) {
  const lampGroup = new THREE.Group();

  // Base
  const baseGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
  const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0.15;
  base.name = "Lamp Base";
  lampGroup.add(base);

  // Pole
  const poleHeight = 2;
  const poleGeometry = new THREE.CylinderGeometry(0.1, 0.2, poleHeight, 16);
  const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  const pole = new THREE.Mesh(poleGeometry, poleMaterial);
  pole.position.y = base.position.y + 0.2 + poleHeight / 2;
  pole.name = "Lamp Pole";
  lampGroup.add(pole);

  // Lamp Head (cone)
  const headGeometry = new THREE.ConeGeometry(0.6, 1, 32);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  const head = new THREE.Mesh(headGeometry, headMaterial);

  head.position.y = pole.position.y + poleHeight / 2 + 0.5; // Center of cone at top
  head.name = "Lamp Head";
  lampGroup.add(head);

  // Final lamp position
  lampGroup.position.set(0, 0, 0);
  scene.add(lampGroup);
}
