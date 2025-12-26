import { initScene } from './initScene.js';
import { createLamp } from './createLamp.js';
import { addLighting } from './addLighting.js';
import { enableInteraction } from './interaction.js';
import { animateCamera } from './cameraAnimation.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/controls/OrbitControls.js';
const { scene, camera, renderer } = initScene();

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = false; // Manual rotation disabled
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;

const rotateCamera = animateCamera(camera);

createLamp(scene);
addLighting(scene);
enableInteraction(scene, camera, renderer);

function animate() {
  requestAnimationFrame(animate);
  rotateCamera();
  controls.update(); 
  renderer.render(scene, camera);
}

animate();
