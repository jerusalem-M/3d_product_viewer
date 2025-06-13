import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

export function createLamp(scene) {
  const lampGroup = new THREE.Group();

  // Base
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  );
  base.position.y = 0.15;
  base.name = "Lamp Base";
  lampGroup.add(base);

  // Pole
  const poleHeight = 2;
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.2, poleHeight, 16),
    new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  pole.position.y = base.position.y + 0.2 + poleHeight / 2;
  pole.name = "Lamp Pole";
  lampGroup.add(pole);

  // Cone Head
  const head = new THREE.Mesh(
    new THREE.ConeGeometry(0.6, 1, 32),
    new THREE.MeshStandardMaterial({ color: 0xffcc00 })
  );
  head.position.y = pole.position.y + poleHeight / 2 + 0.5;
  head.name = "Lamp Head";
  lampGroup.add(head);

  // Horizontal black lines (as thin cylinders)
  const stripeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

  const stripe1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 0.01, 32),
    stripeMaterial
  );
  stripe1.rotation.x = Math.PI / 2;
  stripe1.position.y = head.position.y + 0.15;
  lampGroup.add(stripe1);

  const stripe2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.35, 0.01, 32),
    stripeMaterial
  );
  stripe2.rotation.x = Math.PI / 2;
  stripe2.position.y = head.position.y - 0.15;
  lampGroup.add(stripe2);

  // Final position
  lampGroup.position.set(0, 0, 0);
  scene.add(lampGroup);
}
