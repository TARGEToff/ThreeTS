import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
const boxGeometry = new THREE.BoxGeometry();
const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 20, 100, 20);
const octahedronGeometry = new THREE.OctahedronGeometry(0.5);
const material = new THREE.MeshNormalMaterial;
const cube = new THREE.Mesh(boxGeometry, material);
const torus = new THREE.Mesh(torusGeometry, material);
const octahedron = new THREE.Mesh(octahedronGeometry, material);
scene.add(cube);
scene.add(torus);
scene.add(octahedron);
octahedron.position.x = -1.5;
torus.position.x = 1.5;
camera.position.z = 2;
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    render();
};
function render() {
    renderer.render(scene, camera);
}
animate();
