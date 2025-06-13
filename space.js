import * as THREE from "three";
import { generateStars } from "./starsss.js";

let width = window.innerWidth;
let height = window.innerHeight;

let cameraZ = (isPortrait)? 2 : 3.5; 

const canvas = document.querySelector("#space");
canvas.width = width;
canvas.height = height;
let scene, camera, renderer, earthMain, stars;

function setupSpace() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
  camera.position.z = cameraZ;
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(width, height);

  let sun = new THREE.DirectionalLight(0xffffff, 5);
  sun.position.set(-3, 3, 3); // Top-left position
  scene.add(sun);

  let hemisphereLight = new THREE.HemisphereLight("#ffffff", "#8888ff", 0.5);
  scene.add(hemisphereLight);

  const textureLoader = new THREE.TextureLoader();
  const night = textureLoader.load("./assets/earth_night.jpg");
  let geometry = new THREE.IcosahedronGeometry(1, 10);
  let material = new THREE.MeshStandardMaterial({
    map: night,
  });
  
  let earth = new THREE.Mesh(geometry, material);
  earthMain = new THREE.Group();
  earthMain.add(earth);
  earthMain.rotation.z = -23.4 * (Math.PI / 180);
  scene.add(earthMain);

  stars = generateStars(1500);
  scene.add(stars);
}
setupSpace();

function animate() {
  requestAnimationFrame(animate);
  earthMain.rotation.y += 0.0025;
  stars.tick();
  renderer.render(scene, camera);
}
animate();

addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
});
