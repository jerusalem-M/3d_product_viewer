import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
export function addLighting(scene) {
  // Ambient Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Directional Light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(3, 5, 2); // Experiment with these values
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  
  const spotLight = new THREE.SpotLight(0xffffff, 0.6);
  spotLight.position.set(-3, 5, 3);
  spotLight.castShadow = true;
  scene.add(spotLight);
}
