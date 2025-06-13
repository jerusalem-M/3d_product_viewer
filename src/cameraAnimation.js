export function animateCamera(camera) {
  let angle = 0;

  function rotate() {
    angle += 0.005;
    camera.position.x = Math.sin(angle) * 5;
    camera.position.z = Math.cos(angle) * 5;
    camera.lookAt(0, 1, 0);
  }

  return rotate;
}
