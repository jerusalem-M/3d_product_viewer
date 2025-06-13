import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

// Create a small label div
const label = document.createElement('div');
label.style.position = 'absolute';
label.style.padding = '4px 8px';
label.style.background = 'rgba(0, 0, 0, 0.7)';
label.style.color = '#fff';
label.style.fontSize = '12px';
label.style.borderRadius = '4px';
label.style.display = 'none';
document.body.appendChild(label);

export function enableInteraction(scene, camera, renderer) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredObject = null;

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersected = intersects[0].object;

      if (hoveredObject !== intersected) {
        resetHoverEffect();
        hoveredObject = intersected;
        hoveredObject.originalScale = hoveredObject.scale.clone();
        hoveredObject.scale.setScalar(1.05);

        label.innerText = hoveredObject.name || 'Part';
        label.style.left = event.clientX + 10 + 'px';
        label.style.top = event.clientY + 10 + 'px';
        label.style.display = 'block';
      }
    } else {
      resetHoverEffect();
      hoveredObject = null;
      label.style.display = 'none';
    }
  }

  function resetHoverEffect() {
    if (hoveredObject) {
      hoveredObject.scale.copy(hoveredObject.originalScale || new THREE.Vector3(1, 1, 1));
    }
  }

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      // Flash color effect: light orange
      const originalColor = clickedObject.material.color.getHex();
      clickedObject.material.color.set('#CDC1FF');  // light orange

      setTimeout(() => {
        clickedObject.material.color.set(originalColor);
      }, 300);
    }
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
}
