import "./style.css";

import * as THREE from "three";

console.log(THREE);

import Stats from "three/examples/jsm/libs/stats.module.js";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x444444);
scene.fog = new THREE.Fog(0x222, 0, 50);

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0,1,0);
camera.lookAt(0,0,1);
const directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(-5, 25, -1);
scene.add(directionalLight);

const container = document.getElementById("container");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
container.appendChild(renderer.domElement);
container.oncontextmenu=e=>{e.preventDefault()}
const stats = new Stats();
stats.domElement.style.position = "absolute";
stats.domElement.style.top = "0px";
container.appendChild(stats.domElement);

const STEPS_PER_FRAME = 5;

const keyStates = {};

document.addEventListener("keydown", (event) => {
  keyStates[event.code] = true;
});

document.addEventListener("keyup", (event) => {
  keyStates[event.code] = false;
});

container.addEventListener("mousedown", () => {
});

document.addEventListener("mouseup", () => {
});

document.body.addEventListener("mousemove", (event) => {
  if(event.ctrlKey){
    left.position.set((window.innerWidth/2-event.x)/200,0,(window.innerHeight/2-event.y)/100)
  }
  else
  right.position.set((window.innerWidth/2-event.x)/200,0,(window.innerHeight/2-event.y)/100)
});
let right,left;
window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function controls(deltaTime) {
  let scale=0.5;
  camera.position.set(0,1,0);
  if (keyStates["KeyW"]) {
    camera.position.addScaledVector(new THREE.Vector3(0,0,1),scale)
  }

  if (keyStates["KeyS"]) {
    camera.position.addScaledVector(new THREE.Vector3(0,0,-1),scale)
  }

  if (keyStates["KeyA"]) {
    camera.position.addScaledVector(new THREE.Vector3(1,0,0),scale)
  }

  if (keyStates["KeyD"]) {
    camera.position.addScaledVector(new THREE.Vector3(-1,0,0),scale)
  }

  if (keyStates["ArrowUp"]) {
    
  }

  if (keyStates["ArrowDown"]) {
   
  }

  if (keyStates["ArrowLeft"]) {
   
  }

  if (keyStates["ArrowRight"]) {
  
  }
}

const loader = new GLTFLoader().setPath("./models/");
loader.load("arena.glb", (gltf) => {
  scene.add(gltf.scene);
});
loader.load("fist.glb", (gltf) => {
  right = gltf.scene.children[0],
  left = right.clone();
  let scale = 2;
  right.scale.set(scale, scale,scale);
  right.position.set(-.5,0,0);
  left.scale.set(scale, scale, -scale);
  left.position.set(.5,0,1);
  gltf.scene.add(left);
  scene.add(gltf.scene);
});
function animate() {
  const deltaTime = Math.min(0.05, clock.getDelta()) / STEPS_PER_FRAME;

  // we look for collisions in substeps to mitigate the risk of
  // an object traversing another too quickly for detection.

  for (let i = 0; i < STEPS_PER_FRAME; i++) {
    controls(deltaTime);
  }

  renderer.render(scene, camera);

  stats.update();

  requestAnimationFrame(animate);
}
animate();